"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("Hero");

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-600/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-700/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary-500 font-semibold tracking-wide uppercase"
              >
                {t("title")}
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter"
              >
                Kanokpol <br />
                <span className="text-gradient">Natekuakul</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed"
              >
                {t("tagline")}
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all shadow-lg shadow-primary-500/25 flex items-center gap-2 group"
              >
                {t("viewProjects")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="px-8 py-4 glass hover:bg-white/10 rounded-full font-medium transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                {t("downloadResume")}
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto w-72 h-72 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-primary-700 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-primary-500/50 to-primary-700/50 backdrop-blur-sm">
              <div className="w-full h-full rounded-full bg-background overflow-hidden relative">
                <Image
                  src="/pic.jpg"
                  alt="Kanokpol Natekuakul"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
