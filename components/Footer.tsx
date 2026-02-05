import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500 dark:text-slate-400">
      <small className="mb-2 text-xs block">
        &copy; {new Date().getFullYear()} Thuvaaragan Thevarajah. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website</span> built with
        React & Next.js (App router & Server action), Typescript, Tailwind CSS,
        Framer Motion, React Email, Resend and Vercel hosting.
      </p>
    </footer>
  );
}
