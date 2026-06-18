"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const t = useTranslations("Contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Hide toast after 3s
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SectionWrapper id="contact" className="relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("heading")}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass-card p-8 flex flex-col gap-6">
            <h3 className="text-2xl font-semibold mb-2">Let&apos;s Talk</h3>
            
            <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-foreground/60">{t("info.email")}</div>
                <div className="font-medium group-hover:text-primary-500 transition-colors">{portfolioData.personal.email}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-[#00B900]/10 text-[#00B900] group-hover:bg-[#00B900] group-hover:text-white transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-foreground/60">{t("info.line")}</div>
                <div className="font-medium">{portfolioData.personal.line}</div>
              </div>
            </div>

            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-foreground/5 text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </div>
              <div>
                <div className="text-sm text-foreground/60">{t("info.github")}</div>
                <div className="font-medium group-hover:text-foreground transition-colors">Kanokpol-Natekuakul</div>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">{t("form.name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">{t("form.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">{t("form.message")}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-background/50 border border-foreground/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 rounded-lg flex justify-center items-center gap-2 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t("form.sending")}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  {t("form.submit")}
                </span>
              )}
            </button>
          </form>
        </div>

      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-8 left-1/2 flex items-center gap-3 bg-white dark:bg-[#1a1a1a] text-foreground px-6 py-4 rounded-xl shadow-2xl border border-foreground/10 z-50"
          >
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <span className="font-medium">{t("form.success")}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </SectionWrapper>
  );
}
