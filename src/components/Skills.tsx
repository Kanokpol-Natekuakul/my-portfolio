"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "./SectionWrapper";
import { portfolioData } from "@/data/content";

export function Skills() {
  const t = useTranslations();

  return (
    <SectionWrapper id="skills">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("Skills.heading")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.skills.map((skillGroup, idx) => (
          <div key={idx} className="glass-card p-6 flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-primary-500">
              {t(skillGroup.categoryKey as Parameters<typeof t>[0])}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 text-sm font-medium bg-foreground/5 hover:bg-primary-500/10 hover:text-primary-500 rounded-full transition-colors border border-foreground/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
