"use client"

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'
import { createContext, useContext, useState, useEffect } from 'react'

export const translations = {
  PT: {
    language: 'PT',
    nav: { projects: "Portfólio", about: "Trajetória", contact: "Contato", cta: "Currículo" },
    hero: {
      badge: "Lógica, Dados & Engenharia de Software",
      title_part1: "Beatryz",
      title_part2: "Kleuvyn.",
      tagline: "Engenheira de Software e Analista de Dados Jr.",
      description: "Construindo soluções robustas de ponta-a-ponta fundamentadas no rigor da matemática e da física. Especialista em ciência de dados, IA e arquitetura web escalável.",
      cta_primary: "Visitar Obras",
      cta_secondary: "Resumo Profissional"
    },
    about: {
      badge: "Capítulo 01 — Lógica, Dados & Engenharia de Software",
      title_part1: "Rigor Analítico e",
      title_part2: "Engenharia de Software",
      description: "Pós-graduada em MBA de Tecnologia para Negócios, Ciência de Dados e Inteligência Artificial, unindo forte expertise acadêmica em formação matemática com desenvolvimento de alto impacto. Da sala de aula ensinando física e filosofia à liderança técnica de sistemas comerciais.",
      trajectory_title: "Currículo",
      trajectory_subtitle: "Minha jornada profissional e acadêmica.",
      resume_title: "Resumo Profissional",
      resume_description: "Quem sou tecnicamente, qual é meu diferencial e como minha base analítica se torna software de impacto.",
      skills: [
        { title: "Matemática & Física", description: "Licencianda. Capacidade avançada de modelagem lógica, abstração de sistemas complexos e otimização de algoritmos." },
        { title: "Software Engineering", description: "Engenheira Full Stack (React, Node.js, Prisma, Docker, SQL) formando arquiteturas e interfaces escaláveis." },
        { title: "Data Science & IA", description: "Especialista e MBA. Refinamento de bases de dados (Pandas, Regex), Chatbots e integrações focadas na experiência do usuário." }
      ],
      experience: [
        { 
          year: "2025 — Atual", 
          role: "Analista de Dados Jr. | Projeto Voluntário", 
          company: "Stoá", 
          desc: "Criação de chatbot com IA para doadores. Utilização de Python (Pandas, Regex), análise textual e modelamento de respostas lógicas em IA para aprimoramento de interação digital e automação." 
        },
        { 
          year: "Ago 2024 — Abr 2025", 
          role: "Professora do Ensino Médio", 
          company: "Colégio Ápice Educacional", 
          desc: "Atuação como educadora de Matemática, Física e Filosofia. Responsável por alinhar lógica racional pura ao desenvolvimento do pensamento crítico analítico com centenas de alunos." 
        },
        { 
          year: "2023 — 2024", 
          role: "Desenvolvedora e Líder Técnica", 
          company: "IESB (Projeto Voluntário)", 
          desc: "Liderança arquitetural (Frontend e Backend) no desenvolvimento de um PDV focado em impacto comunitário, utilizando JS, React, Node, Prisma, MySQL e Docker." 
        }
      ],
      education: [
        {
          year: "Concluído",
          course: "MBA em Tecnologia para Negócios: AI, Data Science e Big Data",
          institution: "Líbano"
        },
        {
          year: "Concluído",
          course: "Pós-graduação em Ciência de Dados e Inteligência Artificial",
          institution: "Líbano"
        },
        {
          year: "Concluído",
          course: "Análise e Desenvolvimento de Sistemas",
          institution: "IESB"
        },
        {
          year: "Em andamento",
          course: "Licenciatura em Física",
          institution: "UniCesumar"
        },
        {
          year: "Julho / 2026",
          course: "Licenciatura em Matemática",
          institution: "UniCesumar"
        }
      ]
    },
    projects: {
      title_part1: "Registro de",
      title_part2: "Sistemas",
      description: "Exposições da minha engenharia, englobando integrações PWA, arquiteturas orientadas a eventos e modelagem.",
      live_demo: "Visitar Site",
      github: "Repositório",
      hover_view: "Esmiuçar"
    },
    contact: {
      badge: "Vamos Conversar?",
      title_part1: "Conexões",
      title_part2: "Profissionais",
      description: "Disponível para novos desafios, arquitetura de soluções, análise de dados e palestras.",
      whatsapp_title: "WhatsApp",
      whatsapp_desc: "(61) 98466-0734",
      whatsapp_cta: "Chamar no Whats",
      email_title: "E-mail",
      email_desc: "b.kleuvyn@gmail.com",
      linkedin_title: "LinkedIn",
      linkedin_desc: "Beatryz Kleuvyn",
      linkedin_cta: "Conectar",
      main_cta: "Agendar Reunião",
      status_available: "Aceitando Contratos Free-Lancer",
      status_global: "Website Institucional: kleuvyn.tec.br"
    }
  },
  EN: {
    language: 'EN',
    nav: { projects: "Portfolio", about: "Trajectory", contact: "Contact", cta: "Resume" },
    hero: {
      badge: "Logic, Data & Software Engineering",
      title_part1: "Beatryz",
      title_part2: "Kleuvyn.",
      tagline: "Software Engineer & Data Analyst Jr.",
      description: "Building robust end-to-end solutions grounded in the rigor of mathematics and physics. Specialist in data science, AI, and scalable web architecture.",
      cta_primary: "View Work",
      cta_secondary: "Professional Resume"
    },
    about: {
      badge: "Chapter 01 — Logic, Data & Software Engineering",
      title_part1: "Analytical Rigor &",
      title_part2: "Software Engineering",
      description: "Hold an MBA in Business Tech (AI/Data Science) and a post-grad in AI, marrying deep academic math background with high-impact software development. From teaching high school physics to tech leading commercial systems.",
      trajectory_title: "Resume",
      trajectory_subtitle: "My academic and professional journey.",
      resume_title: "Professional Summary",
      resume_description: "Who I am technically, what makes me different, and how my analytical foundation becomes impactful software.",
      skills: [
        { title: "Mathematics & Physics", description: "Undergraduate. Advanced capabilities in logical modeling, abstraction of complex systems, and algorithm optimization." },
        { title: "Software Engineering", description: "Full Stack Engineer (React, Node.js, Prisma, Docker, SQL) crafting scalable architectures and interfaces." },
        { title: "Data Science & AI", description: "Specialist & MBA. Database refinement (Pandas, Regex), Chatbots, and user-experience focused integrations." }
      ],
      experience: [
         { 
          year: "2025 — Present", 
          role: "Jr. Data Analyst | Volunteer", 
          company: "Stoá", 
          desc: "Chatbot AI creation for donors. Applied Python (Pandas, Regex), textual analysis, and AI logical modeling to enhance digital interaction and automation." 
        },
        { 
          year: "Aug 2024 — Apr 2025", 
          role: "High School Teacher", 
          company: "Ápice College", 
          desc: "Educator in Math, Physics, and Philosophy. Responsible for aligning pure rational logic with the development of critical thinking for hundreds of students." 
        },
        { 
          year: "2023 — 2024", 
          role: "Full Stack Dev & Tech Lead", 
          company: "IESB (Volunteer)", 
          desc: "Architectural leadership (Frontend & Backend) for a community-impact POS application. Tech stack: JS, React, Node, Prisma, MySQL, and Docker." 
        }
      ],
      education: [
        {
          year: "Completed",
          course: "MBA in Business Technology: AI, Data Science & Big Data",
          institution: "Lebanon"
        },
        {
          year: "Completed",
          course: "Post-Graduate in Data Science & Artificial Intelligence",
          institution: "Lebanon"
        },
        {
          year: "Completed",
          course: "Systems Analysis and Development",
          institution: "IESB"
        },
        {
          year: "Ongoing",
          course: "BSc in Physics",
          institution: "UniCesumar"
        },
        {
          year: "July / 2026",
          course: "BSc in Mathematics",
          institution: "UniCesumar"
        }
      ]
    },
    projects: {
      title_part1: "System",
      title_part2: "Logs",
      description: "Exhibitions of my engineering, covering PWA integrations, event-driven architectures, and modeling.",
      live_demo: "Live Demo",
      github: "Repo",
      hover_view: "Inspect"
    },
    contact: {
      badge: "Let's Chat?",
      title_part1: "Professional",
      title_part2: "Connections",
      description: "Available for new challenges, architecture solutions, data analysis, and talks.",
      whatsapp_title: "WhatsApp",
      whatsapp_desc: "+55 (61) 98466-0734",
      whatsapp_cta: "Send a Message",
      email_title: "Email",
      email_desc: "b.kleuvyn@gmail.com",
      linkedin_title: "LinkedIn",
      linkedin_desc: "Beatryz Kleuvyn",
      linkedin_cta: "Connect",
      main_cta: "Schedule Meeting",
      status_available: "Accepting Freelance Contracts",
      status_global: "Official Website: kleuvyn.tec.br"
    }
  }
}

type Language = 'PT' | 'EN'
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.PT
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function Providers({ children, ...props }: ThemeProviderProps) {
  const [language, setLanguage] = useState<Language>('PT')

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang && (savedLang === 'PT' || savedLang === 'EN')) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = translations[language]

  return (
    <NextThemesProvider {...props}>
      <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
        {children}
      </LanguageContext.Provider>
    </NextThemesProvider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage deve ser usado dentro de Providers')
  return context
}
