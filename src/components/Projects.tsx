"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const t = useTranslations();

  return (
    <SectionWrapper id="projects" className="bg-foreground/[0.02]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("Projects.heading")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project) => (
          <div 
            key={project.id}
            className="glass-card overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Image Placeholder area */}
            <div className="h-48 w-full bg-gradient-to-br from-primary-600/20 to-primary-700/5 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <span className="text-4xl opacity-50 group-hover:scale-110 transition-transform duration-500">💻</span>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                {t(project.titleKey as Parameters<typeof t>[0])}
              </h3>
              <p className="text-sm text-foreground/60 mb-6 flex-grow leading-relaxed">
                {t(project.descKey as Parameters<typeof t>[0])}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-primary-500/10 text-primary-500">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-foreground/10">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary-500 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    {t("Projects.github")}
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t("Projects.live")}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
