import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// Project images (SVGs in public folder)
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },
  {
    name: "Achievements",
    hash: "#achievements",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Work With Me",
    hash: "#work-with-me",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc. Eng. (Hons.) Electronic & Telecommunication Engineering",
    location: "University of Moratuwa, Sri Lanka",
    description:
      "Graduated with CGPA 3.69. Final year project: Award-winning spatial image captioning blind assistant (IEEE Innovative Challenge 2023 finalist, A+ grade).",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2018 – May 2023",
  },
  {
    title: "AI Engineer",
    location: "Exentai",
    description:
      "End-to-end agentic AI voice system (TTS, STT, LLM, RAG). Hyper-automated financial data pipeline with Power BI. Tech: Python, FastAPI, LangChain, LlamaIndex, AWS, Twilio, OpenAI/Anthropic.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2025 – Present",
  },
  {
    title: "AI/ML Engineer",
    location: "4 Axis Solutions (Pvt) Ltd",
    description:
      "Sketch-to-image pipeline (SketchPro.com) with ControlNet, Stable Diffusion. RAG chatbot with LangChain, LlamaIndex, Pinecone. Brush recommendation using CLIP & BERT.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 – April 2025",
  },
  {
    title: "AI/ML Engineer",
    location: "Vital Masks (PVT) Ltd",
    description:
      "Inventory optimization & sales forecasting; scalable ML APIs on GCP Vertex AI, AWS SageMaker, Azure. Time series forecasting with PCA and ensemble methods.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 – July 2023",
  },
  {
    title: "ML Associate Engineer",
    location: "SenzMate IoT Intelligence Solutions",
    description:
      "Deep learning crop prediction from IoT/geospatial data. Healthcare digital physiotherapy (JOGO) with MediaPipe, pose analysis, Flask API, Docker, AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2022 – Dec 2022",
  },
  {
    title: "AI/ML Engineer",
    location: "Vital Masks (Pvt) Ltd",
    description:
      "Real-time vision-based smart parking (TADHack 2022 – 2nd Runner-Up). OpenCV, federated learning, GANs for synthetic data, edge deployment.",
    icon: React.createElement(FaReact),
    date: "May 2019 – Dec 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Agentic AI Voice Agent",
    description:
      "AI-powered agentic voice system for real-time phone interaction. Modular agents: TTS, STT, LLM, RAG, Billing. Twilio, ElevenLabs, Deepgram, OpenAI/DeepSeek/Anthropic. Python, FastAPI, PostgreSQL, Docker, AWS EC2, MLflow.",
    tags: ["Python", "FastAPI", "LangChain", "LLM", "AWS", "Docker"],
    imageUrl: "/project-voice-agent.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Sketch to Image Pipeline (SketchPro.com)",
    description:
      "End-to-end pipeline for generating images from sketches using ControlNet, Stable Diffusion/SDXL, RealSRGAN. Flask API on Google Cloud, iOS integration. 10% faster generation, memory-optimized.",
    tags: ["PyTorch", "Stable Diffusion", "ControlNet", "Flask", "GCP"],
    imageUrl: "/project-sketch-to-image.png",
    linkUrl: "https://sketchpro.com",
  },
  {
    title: "RAG Chatbot & PDF QA with Graph RAG",
    description:
      "RAG chatbot with LangChain, LlamaIndex, Pinecone. PDF QA system with Neo4j graph DB, LlamaIndex, LangGraph, OpenAI API. Deployed on Azure with secure storage.",
    tags: ["LangChain", "LlamaIndex", "Neo4j", "OpenAI", "Azure"],
    imageUrl: "/project-pdf-graphrag.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Vision-Based Smart Parking (TADHack 2022 – 2nd Runner-Up)",
    description:
      "Real-time car slot detection with OpenCV, federated learning, GANs for augmentation. Edge-optimized CV/ML; privacy-preserving on-device inference.",
    tags: ["OpenCV", "Python", "C++", "GANs", "Edge ML"],
    imageUrl: "/project-smart-parking.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Blind Assistant – Spatial Image Captioning",
    description:
      "Vision-Language model (ViT + GPT-2) for spatial captions + TTS. Real-time pipeline on Raspberry Pi with TinyML, camera and ultrasonic sensors. IEEE Sri Lanka Innovative Challenge 2023 finalist.",
    tags: ["PyTorch", "ViT", "GPT-2", "Raspberry Pi", "TinyML"],
    imageUrl: "/project-blind-assistant.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Sentiment Analysis & Movie Genre Classification",
    description:
      "Sentiment analysis with LSTM, DistilBERT, LLaMA 3. Movie genre classification using GPT-3.5 Turbo and LLaMA-2-7B. Containerized, deployed on Azure.",
    tags: ["PyTorch", "LLaMA", "BERT", "Azure", "Docker"],
    imageUrl: "/project-sentiment-nlp.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Crop Recommendation & Prediction",
    description:
      "Deep learning crop prediction from IoT and geospatial data. ML models for agricultural yield and recommendation.",
    tags: ["Python", "Deep Learning", "IoT", "Geospatial"],
    imageUrl: "/project-crop-recommendation-prediction.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Drawing Brush Recommendation",
    description:
      "CLIP and BERT-based brush recommendation for digital drawing. Semantic matching between strokes and brush presets.",
    tags: ["PyTorch", "CLIP", "BERT", "Computer Vision"],
    imageUrl: "/project-drawing-brush-recommendation.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Financial Data Pipeline & Power BI",
    description:
      "Hyper-automated financial data pipeline with Power BI dashboards. ETL, reporting, and analytics.",
    tags: ["Power BI", "ETL", "Python", "Data Pipeline"],
    imageUrl: "/project-financial-pipeline-power-bi.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Inventory Optimization & Sales Forecasting",
    description:
      "Time series forecasting for inventory and sales. ML APIs on GCP Vertex AI, AWS SageMaker; PCA and ensemble methods.",
    tags: ["Python", "Time Series", "GCP", "AWS", "ML"],
    imageUrl: "/project-inventory-sales-forecasting.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Movie Genre Classification",
    description:
      "Movie genre classification using transformer models and LLMs. GPT-3.5 Turbo and LLaMA-2-7B integration.",
    tags: ["PyTorch", "LLaMA", "NLP", "Azure"],
    imageUrl: "/project-movie-genre-classification.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Vision-Based Physical Therapy (JOGO)",
    description:
      "Healthcare digital physiotherapy with MediaPipe, pose analysis, and exercise feedback. Flask API, Docker, AWS.",
    tags: ["MediaPipe", "Computer Vision", "Flask", "Docker", "AWS"],
    imageUrl: "/project-vision-physical-therapy.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
  {
    title: "Shop Bill OCR",
    description:
      "OCR pipeline for shop bills and receipts. Document parsing and structured data extraction.",
    tags: ["OCR", "Python", "Computer Vision"],
    imageUrl: "/project-shop-bill-ocr.png",
    linkUrl: "https://github.com/Thuvaaragan",
  },
] as const;

// Skills grouped by category for portfolio
export const skillsByCategory = [
  {
    category: "Gen AI & LLM Frameworks",
    skills: ["LangChain", "LlamaIndex", "OpenAI / GPT", "Hugging Face", "LLaMA", "BERT", "Prompt Engineering"],
  },
  {
    category: "Computer Vision & ML",
    skills: ["OpenCV", "PyTorch", "TensorFlow", "Stable Diffusion", "ControlNet", "GANs", "MediaPipe", "Object Detection"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Azure", "Google Cloud", "Docker", "CI/CD", "Git", "MLflow"],
  },
  {
    category: "Languages",
    skills: ["Python", "C++", "Swift", "SQL"],
  },
  {
    category: "Data & Backend",
    skills: ["PostgreSQL", "MongoDB", "Neo4j", "Pinecone", "FastAPI", "Flask"],
  },
  {
    category: "Tools & Visualization",
    skills: ["Power BI", "Matplotlib", "Jira", "Confluence"],
  },
  {
    category: "Hardware & Edge",
    skills: ["Raspberry Pi", "TinyML", "Edge ML"],
  },
] as const;

// Flat list kept for backward compatibility if needed
export const skillsData = skillsByCategory.flatMap((c) => c.skills);
