"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

// ── GH Pages: Formspree direct submission ──
// When NEXT_PUBLIC_FORMSPREE_ID is set, form submits directly to Formspree.
// Sign up at https://formspree.io, create a form, paste your form ID here.
// Free tier: 50 submissions/month, email notifications, spam protection.

async function submitViaFormspree(
  name: string,
  email: string,
  message: string
): Promise<{ success: boolean; error?: string }> {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  if (!formId) return { success: false, error: "Form not configured." };

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  if (res.ok) return { success: true };
  const json = await res.json().catch(() => ({}));
  return { success: false, error: json?.errors?.[0]?.message ?? "Failed to send." };
}

// ── Server-side: local / self-hosted ──
// POST to /api/contact (Next.js API route → OCI Object Storage)

async function submitViaAPI(
  name: string,
  email: string,
  message: string,
  honeypot: string
): Promise<{ success: boolean; error?: string }> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message, honeypot }),
  });
  const json = await res.json();
  if (!res.ok) return { success: false, error: json.error };
  return { success: true };
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim().toLowerCase();
    const message = String(data.get("message") ?? "").trim();
    const honeypot = String(data.get("website") ?? "").trim();

    // Honeypot — bots fill it, humans don't
    if (honeypot) {
      setStatus("success");
      form.reset();
      return;
    }

    const useFormspree = !!process.env.NEXT_PUBLIC_FORMSPREE_ID;
    const result = useFormspree
      ? await submitViaFormspree(name, email, message)
      : await submitViaAPI(name, email, message, honeypot);

    if (!result.success) {
      setErrorMsg(result.error ?? "Something went wrong. Try again.");
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div
          className="bg-tertiary text-black font-['Anton'] text-[24px] p-6 border-4 border-black"
          style={{ boxShadow: "6px 6px 0px 0px rgba(4,13,27,1)" }}
        >
          ✓ SIGNAL RECEIVED — I&apos;LL GET BACK TO YOU
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 font-handwriting text-secondary text-xl hover:text-primary transition-colors"
        >
          Send another message →
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col gap-12 max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Honeypot — hidden from humans */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />

      {/* Name */}
      <div className="relative group">
        <label className="block font-['Anton'] text-[32px] text-primary mb-2 uppercase tracking-tight">
          YOUR ALIAS / NAME
        </label>
        <input
          name="name"
          className="form-input-custom"
          placeholder="WHO ARE YOU?"
          type="text"
          required
          minLength={2}
        />
        <span className="absolute right-0 bottom-4 font-handwriting text-secondary text-2xl opacity-0 group-focus-within:opacity-100 transition-opacity">
          !
        </span>
      </div>

      {/* Email */}
      <div className="relative group">
        <label className="block font-['Anton'] text-[32px] text-primary mb-2 uppercase tracking-tight">
          ELECTRONIC MAIL
        </label>
        <input
          name="email"
          className="form-input-custom"
          placeholder="WHERE DO WE REPLY?"
          type="email"
          required
        />
        <span className="absolute left-32 bottom-6 font-handwriting text-secondary text-2xl opacity-50 rotate-12">
          +
        </span>
      </div>

      {/* Message */}
      <div className="relative group">
        <label className="block font-['Anton'] text-[32px] text-primary mb-2 uppercase tracking-tight">
          THE INTEL / MESSAGE
        </label>
        <textarea
          name="message"
          className="form-input-custom resize-none"
          placeholder="SPILL THE DEETS..."
          rows={3}
          required
          minLength={10}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-900/30 border-2 border-red-500 font-annotation text-annotation text-red-400 p-3"
        >
          {errorMsg}
        </motion.div>
      )}

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        className="self-start mt-4 bg-secondary text-white px-8 py-4 font-['Anton'] text-[20px] tracking-widest border-2 border-primary shadow-[6px_6px_0px_0px_rgba(4,13,27,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(4,13,27,1)] active:shadow-none active:translate-y-2 active:translate-x-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={status !== "loading" ? { scale: 1.02 } : undefined}
        whileTap={{ scale: 0.98 }}
      >
        {status === "loading" ? "TRANSMITTING..." : "SEND SIGNAL >>>"}
      </motion.button>
    </motion.form>
  );
}