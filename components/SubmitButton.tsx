"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex gap-2 h-[2.5rem] w-[7rem] bg-slate-800 text-white items-center justify-center rounded-full outline-none transition-all text-sm hover:scale-105 hover:bg-emerald-600 focus:scale-105 active:scale-100 disabled:scale-100 disabled:bg-opacity-65 dark:bg-slate-200 dark:text-slate-950 dark:hover:bg-emerald-500"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-slate-950"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
