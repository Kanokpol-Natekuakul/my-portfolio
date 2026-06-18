export const portfolioData = {
  personal: {
    name: "Kanokpol Natekuakul",
    titleKey: "Hero.title",
    taglineKey: "Hero.tagline",
    email: "kanokpol.n.natekuakul@gmail.com",
    line: "kanokpolpol",
    github: "https://github.com/Kanokpol-Natekuakul",
    facebook: "https://web.facebook.com/kanokpolpol",
  },
  skills: [
    {
      categoryKey: "Skills.categories.testing",
      items: ["Playwright", "Selenium", "Robot Framework", "Manual Testing", "UAT", "API Testing"]
    },
    {
      categoryKey: "Skills.categories.frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      categoryKey: "Skills.categories.backend",
      items: ["Node.js", "Express", "Python", "PostgreSQL"]
    },
    {
      categoryKey: "Skills.categories.tools",
      items: ["Git", "GitHub", "Figma", "Vercel", "Docker", "VS Code"]
    },
    {
      categoryKey: "Skills.categories.others",
      items: ["Agile", "Scrum", "Jira", "Documentation"]
    }
  ],
  projects: [
    {
      id: "selenium",
      titleKey: "Projects.items.selenium.title",
      descKey: "Projects.items.selenium.description",
      tech: ["Robot Framework", "Selenium"],
      github: "https://github.com/Kanokpol-Natekuakul/automate-robot-selenium"
    },
    {
      id: "playwright",
      titleKey: "Projects.items.playwright.title",
      descKey: "Projects.items.playwright.description",
      tech: ["Playwright", "TypeScript"],
      github: "https://github.com/Kanokpol-Natekuakul/ecom_test_playwright"
    },
    {
      id: "tester-exam",
      titleKey: "Projects.items.testerExam.title",
      descKey: "Projects.items.testerExam.description",
      tech: ["TypeScript", "Testing"],
      github: "https://github.com/Kanokpol-Natekuakul/Automate_Tester_Exam"
    },
    {
      id: "small-school",
      titleKey: "Projects.items.smallSchool.title",
      descKey: "Projects.items.smallSchool.description",
      tech: ["TypeScript", "Next.js", "Vercel"],
      github: "https://github.com/Kanokpol-Natekuakul/small_school",
      live: "https://small-school.vercel.app"
    },
    {
      id: "url-shortener",
      titleKey: "Projects.items.urlShortener.title",
      descKey: "Projects.items.urlShortener.description",
      tech: ["TypeScript", "Next.js"],
      github: "https://github.com/Kanokpol-Natekuakul/short_link"
    },
    {
      id: "resume-rewriter",
      titleKey: "Projects.items.resumeRewriter.title",
      descKey: "Projects.items.resumeRewriter.description",
      tech: ["Next.js", "AI"],
      github: "https://github.com/Kanokpol-Natekuakul/rewite_resume"
    },
    {
      id: "portfolio",
      titleKey: "Projects.items.portfolio.title",
      descKey: "Projects.items.portfolio.description",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Kanokpol-Natekuakul/Kanokpol-Natekuakul"
    }
  ],
  services: [
    { icon: "ShieldCheck", titleKey: "Services.items.testing.title", descKey: "Services.items.testing.description" },
    { icon: "PenTool", titleKey: "Services.items.design.title", descKey: "Services.items.design.description" },
    { icon: "Wrench", titleKey: "Services.items.support.title", descKey: "Services.items.support.description" },
    { icon: "Code", titleKey: "Services.items.web.title", descKey: "Services.items.web.description" },
    { icon: "FileText", titleKey: "Services.items.docs.title", descKey: "Services.items.docs.description" },
    { icon: "Users", titleKey: "Services.items.analysis.title", descKey: "Services.items.analysis.description" },
    { icon: "Bot", titleKey: "Services.items.automated.title", descKey: "Services.items.automated.description" }
  ],
  experience: [
    {
      id: "arise",
      periodKey: "Experience.items.arise.period",
      roleKey: "Experience.items.arise.role",
      company: "Arise Corporation Co.,Ltd",
      pointsKey: [
        "Experience.items.arise.points.0",
        "Experience.items.arise.points.1",
        "Experience.items.arise.points.2"
      ]
    },
    {
      id: "emerchant",
      periodKey: "Experience.items.emerchant.period",
      roleKey: "Experience.items.emerchant.role",
      company: "E-Merchant Co.,Ltd",
      pointsKey: [
        "Experience.items.emerchant.points.0",
        "Experience.items.emerchant.points.1",
        "Experience.items.emerchant.points.2"
      ]
    }
  ]
};
