import React from "react";
type SectionHeadingProps = {
  children: React.ReactNode;
};
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-[26px] font-semibold capitalize mb-8 text-center text-slate-800 dark:text-slate-100">
      {children}
    </h2>
  );
}
