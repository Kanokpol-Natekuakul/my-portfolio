"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "./SectionWrapper";
import { portfolioData } from "@/data/content";
import * as LucideIcons from "lucide-react";

export function Services() {
  const t = useTranslations();

  return (
    <SectionWrapper id="services">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("Services.heading")}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {portfolioData.services.map((service, idx) => {
          const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon];
          return (
            <div 
              key={idx}
              className="glass-card p-6 flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="p-4 rounded-full bg-primary-500/10 text-primary-500 mb-2">
                {Icon && <Icon className="w-8 h-8" />}
              </div>
              <h3 className="text-lg font-semibold">{t(service.titleKey as Parameters<typeof t>[0])}</h3>
              <p className="text-sm text-foreground/60">
                {t(service.descKey as Parameters<typeof t>[0])}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
