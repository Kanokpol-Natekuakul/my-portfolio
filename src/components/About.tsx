"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "./SectionWrapper";
import { ShieldCheck, Cpu, CheckCircle, Users } from "lucide-react";

export function About() {
  const t = useTranslations("About");

  const cards = [
    {
      id: "qa",
      icon: <ShieldCheck className="w-8 h-8 text-primary-500" />,
      titleKey: "cards.qa.title",
      descKey: "cards.qa.desc"
    },
    {
      id: "auto",
      icon: <Cpu className="w-8 h-8 text-primary-500" />,
      titleKey: "cards.auto.title",
      descKey: "cards.auto.desc"
    },
    {
      id: "detail",
      icon: <CheckCircle className="w-8 h-8 text-primary-500" />,
      titleKey: "cards.detail.title",
      descKey: "cards.detail.desc"
    },
    {
      id: "team",
      icon: <Users className="w-8 h-8 text-primary-500" />,
      titleKey: "cards.team.title",
      descKey: "cards.team.desc"
    }
  ];

  return (
    <SectionWrapper id="about" className="relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("heading")}</h2>
        <p className="text-lg text-foreground/70 leading-relaxed">
          {t("intro")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id}
            className="glass-card p-6 flex flex-col items-start gap-4 hover:-translate-y-2 transition-transform duration-300 group"
          >
            <div className="p-3 rounded-xl bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
              {card.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t(card.titleKey as Parameters<typeof t>[0])}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {t(card.descKey as Parameters<typeof t>[0])}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
