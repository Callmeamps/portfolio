"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          honeypot: data.get("website"), // bots fill this
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error || "Something went wrong. Try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Network error. Try again.");
      setStatus("error");
    }
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