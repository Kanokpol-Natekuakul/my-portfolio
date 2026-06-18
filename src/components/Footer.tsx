"use client";

import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/content";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-foreground/10 bg-background pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold tracking-tighter mb-2">
              <span className="text-gradient">KN</span>
            </div>
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Kanokpol Natekuakul. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-foreground/5 text-foreground/70 hover:text-[#1877F2] transition-colors">
              GitHub
            </a>
            <a href={portfolioData.personal.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-foreground/5 text-foreground/70 hover:text-[#1877F2] transition-colors">
              Facebook
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="p-2 rounded-full hover:bg-foreground/5 text-foreground/70 hover:text-primary-500 transition-colors">
              Email
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-white transition-colors"
            title="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
