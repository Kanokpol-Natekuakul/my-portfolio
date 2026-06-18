"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "./SectionWrapper";
import { portfolioData } from "@/data/content";

export function Experience() {
  const t = useTranslations();

  return (
    <SectionWrapper id="experience" className="bg-foreground/[0.02]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("Experience.heading")}</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-primary-500/30 transform -translate-x-1/2"></div>
              
              {/* Timeline Line (Mobile) */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-primary-500/30"></div>

              <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] z-10 mt-6 md:mt-0"></div>

                <div className="md:w-5/12"></div>
                
                <div className="md:w-5/12 glass-card p-6 mt-4 md:mt-0 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-primary-500 text-sm font-semibold mb-2">{t(exp.periodKey as Parameters<typeof t>[0])}</div>
                  <h3 className="text-xl font-bold mb-1">{t(exp.roleKey as Parameters<typeof t>[0])}</h3>
                  <div className="text-foreground/70 font-medium mb-4">{exp.company}</div>
                  
                  <ul className="space-y-2">
                    {exp.pointsKey.map((pointKey, pIdx) => (
                      <li key={pIdx} className="text-sm text-foreground/60 flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span>{t(pointKey as Parameters<typeof t>[0])}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
