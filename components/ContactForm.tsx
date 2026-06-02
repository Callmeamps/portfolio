"use client";

import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <motion.form
      className="flex flex-col gap-12 max-w-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Name */}
      <div className="relative group">
        <label className="block font-['Anton'] text-[32px] text-primary mb-2 uppercase tracking-tight">
          YOUR ALIAS / NAME
        </label>
        <input
          className="form-input-custom"
          placeholder="WHO ARE YOU?"
          type="text"
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
          className="form-input-custom"
          placeholder="WHERE DO WE REPLY?"
          type="email"
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
          className="form-input-custom resize-none"
          placeholder="SPILL THE DEETS..."
          rows={3}
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        className="self-start mt-4 bg-secondary text-white px-8 py-4 font-['Anton'] text-[20px] tracking-widest border-2 border-primary shadow-[6px_6px_0px_0px_rgba(4,13,27,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(4,13,27,1)] active:shadow-none active:translate-y-2 active:translate-x-2 transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        SEND SIGNAL &gt;&gt;&gt;
      </motion.button>
    </motion.form>
  );
}
