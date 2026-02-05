"use client";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/action/SendEmail";
import { useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const reff = useRef<HTMLFormElement>(null);

  const sendEmailFunction = async (formData: FormData) => {
    const { error, data } = await sendEmail(formData);
    reff.current?.reset();
    if (error) {
      toast.error(error);
      return;
    }
    toast.success("Email sent Successfully!");
  };
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-slate-600 -mt-6 dark:text-slate-300">
        Please contact me directly at{" "}
        <a
          href="mailto:thuvaaragant@gmail.com"
          className="underline text-emerald-600 font-medium dark:text-emerald-400"
        >
          thuvaaragant@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        ref={reff}
        action={sendEmailFunction}
        className="flex flex-col gap-2 mt-10 dark:text-slate-200"
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-slate-700 dark:border-slate-600"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-slate-700 dark:border-slate-600"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
