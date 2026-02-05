import Header from "@/components/Header";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Thuvaaragan Thevarajah | AI/ML Engineer Portfolio | Generative AI, Computer Vision, LLMs",
  description:
    "AI/ML Engineer specializing in Generative AI, Computer Vision, LLMs, RAG, and production ML. 6+ years building innovative AI solutions that drive real-world impact. Expert in LangChain, PyTorch, AWS, Azure, and agentic systems.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Generative AI",
    "Computer Vision",
    "LLM",
    "Large Language Models",
    "RAG",
    "Retrieval-Augmented Generation",
    "LangChain",
    "LlamaIndex",
    "PyTorch",
    "TensorFlow",
    "AWS",
    "Azure",
    "Production ML",
    "AI Agents",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Natural Language Processing",
  ].join(", "),
  openGraph: {
    title: "Thuvaaragan Thevarajah | AI/ML Engineer Portfolio",
    description: "AI/ML Engineer specializing in Generative AI, Computer Vision, LLMs, RAG, and production ML. Building innovative AI solutions that drive real-world impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-slate-50 text-slate-900 relative pt-28 sm:pt-36 dark:bg-slate-950 dark:text-slate-50`}
      >
        <div className="bg-emerald-200/60 absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-emerald-900/30"></div>
        <div className="bg-sky-200/50 absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-sky-900/25"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="bottom-center" />
          <Footer />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
