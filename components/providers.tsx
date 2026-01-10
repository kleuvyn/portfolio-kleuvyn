"use client"

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from 'next-themes'
import { createContext, useContext, useState, useEffect } from 'react'

export const translations = {
  PT: {
    language: 'PT',
    nav: { projects: "Projetos", about: "Sobre", contact: "Contato", cta: "Fale Comigo" },
    hero: {
      badge: "Disponível para projetos freelance",
      title_part1: "Beatryz",
      title_part2: "Kleuvyn",
      tagline: "Full Stack Developer",
      description: "Desenvolvendo soluções web completas onde a lógica matemática encontra a tecnologia moderna. Transformo ideias em aplicações reais e funcionais.",
      cta_primary: "Ver Projetos",
      cta_secondary: "Vamos Conversar"
    },
    about: {
      badge: "Sobre Mim",
      title_part1: "Transformando ideias em",
      title_part2: "Aplicações Reais.",
      description: "Sou desenvolvedora Full Stack freelancer com sólida formação acadêmica (ADS, Pós em Ciência de Dados/IA e MBA). Trabalho com o stack moderno (React, Next.js, TypeScript e Node.js), criando aplicações completas do frontend ao backend.",
      trajectory_title: "Experiência & Educação",
      trajectory_subtitle: "Minha trajetória unindo tecnologia, educação e liderança técnica.",
      skills: [
        { title: "Desenvolvimento Full Stack", description: "React, Next.js, TypeScript e Node.js. Aplicações completas do frontend ao backend." },
        { title: "Engenharia de IA", description: "Implementação de chatbots inteligentes, fluxos conversacionais e análise de dados." },
        { title: "Lógica & Performance", description: "Base matemática aplicada para otimização de algoritmos e sistemas escaláveis." }
      ],
      experience: [
        { 
          year: "Jul 2025 — Atual", 
          role: "Analista de Dados - Voluntária", 
          company: "Stoá", 
          desc: "Atuação voluntária na Stoá, com foco na criação de um chatbot com Inteligência Artificial voltado ao atendimento de doadores. Responsável por: Análise de dados relacionados às interações no chat; Levantamento e categorização de perguntas frequentes; Estruturação de dados para análise de comportamento dos usuários; Apoio na criação de fluxos lógicos de resposta baseados em dados reais; Identificação de padrões e insights para otimizar o treinamento do chatbot." 
        },
        { 
          year: "Ago 2024 — Abr 2025", 
          role: "Professora Ensino Médio", 
          company: "Colégio Ápice Educacional", 
          desc: "Atuei como professora de Matemática, Física e Filosofia no Ensino Médio. Minha missão é inspirar e capacitar os alunos a desenvolverem habilidades críticas e analíticas, integrando conceitos teóricos com aplicações práticas." 
        },
        { 
          year: "Abr 2023 — Jul 2024", 
          role: "Desenvolvedora/Lider", 
          company: "IESB - BayArea", 
          desc: "No IESB, onde atuei como líder por três semestres, conduzi uma equipe dedicada ao desenvolvimento de uma plataforma de Ponto de Vendas voltada para beneficiar a comunidade. Essa iniciativa teve como objetivo principal atender às necessidades locais e promover o bem-estar coletivo. Contribuí ativamente tanto no frontend quanto no backend, implementando melhorias e desenvolvendo códigos que garantiram maior eficiência e qualidade ao sistema." 
        }
      ]
    },
    projects: {
      title_part1: "Projetos em",
      title_part2: "Destaque",
      description: "Soluções que unem desenvolvimento web moderno, inteligência artificial e impacto social.",
      live_demo: "Ver Projeto",
      github: "GitHub",
      hover_view: "Ver Detalhes"
    },
    contact: {
      badge: "Vamos Colaborar?",
      title_part1: "Pronta para o seu",
      title_part2: "próximo projeto.",
      description: "Procurando uma desenvolvedora que entenda de lógica e entrega técnica? Estou aberta a projetos freelance e parcerias.",
      whatsapp_title: "WhatsApp",
      whatsapp_desc: "Resposta rápida",
      whatsapp_cta: "Chamar no Whats",
      email_title: "E-mail",
      email_desc: "beatryzkleuvyn@email.com",
      linkedin_title: "LinkedIn",
      linkedin_desc: "Conecte-se comigo",
      linkedin_cta: "Ver Perfil",
      main_cta: "Solicitar Orçamento",
      status_available: "Disponível para novos projetos",
      status_global: "Remoto / Brasília"
    }
  },
  EN: {
    language: 'EN',
    nav: { projects: "Projects", about: "About", contact: "Contact", cta: "Talk to Me" },
    hero: {
      badge: "Available for freelance projects",
      title_part1: "Beatryz",
      title_part2: "Kleuvyn",
      tagline: "Full Stack Developer",
      description: "Developing complete web solutions where mathematical logic meets modern technology. Turning ideas into real and functional applications.",
      cta_primary: "View Projects",
      cta_secondary: "Let's Talk"
    },
    about: {
      badge: "About Me",
      title_part1: "Turning ideas into",
      title_part2: "Real Applications.",
      description: "I am a freelance Full Stack developer with a solid academic background (ADS, Post-grad in Data Science/AI, and MBA).",
      trajectory_title: "Experience & Education",
      trajectory_subtitle: "My journey merging technology, education, and technical leadership.",
      skills: [
        { title: "Full Stack Development", description: "React, Next.js, TypeScript and Node.js. Complete applications from frontend to backend." },
        { title: "AI Engineering", description: "Implementation of intelligent chatbots, conversational flows and data analysis." },
        { title: "Logic & Performance", description: "Mathematical foundation applied to algorithm optimization and scalable systems." }
      ],
      experience: [
        { 
          year: "Jul 2025 — Present", 
          role: "Data Analyst - Volunteer", 
          company: "Stoá", 
          desc: "Voluntary work at Stoá, focusing on creating an AI chatbot for donor service. Responsible for: Data analysis of chat interactions; FAQ identification and categorization; Data structuring for user behavior analysis; Supporting the creation of logical response flows based on real data; Pattern and insight identification to optimize chatbot training." 
        },
        { 
          year: "Aug 2024 — Apr 2025", 
          role: "High School Teacher", 
          company: "Ápice College", 
          desc: "Taught Mathematics, Physics, and Philosophy. My mission was to inspire and empower students to develop critical and analytical skills, integrating theory with practical applications." 
        },
        { 
          year: "Apr 2023 — Jul 2024", 
          role: "Developer/Lead", 
          company: "IESB - BayArea", 
          desc: "At IESB, as a lead for three semesters, I headed a team developing a POS platform for the community. Contributed actively to both frontend and backend, implementing improvements and code that ensured greater efficiency and quality." 
        }
      ]
    },
    projects: {
      title_part1: "Featured",
      title_part2: "Projects",
      description: "Technical exploration through software development, where mathematical rigor meets AI.",
      live_demo: "View Project",
      github: "GitHub",
      hover_view: "Details"
    },
    contact: {
      badge: "Let's Collaborate?",
      title_part1: "Ready for your",
      title_part2: "next project.",
      description: "Looking for a developer who understands logic and technical delivery? I am open to freelance work and partnerships.",
      whatsapp_title: "WhatsApp",
      whatsapp_desc: "Fast response",
      whatsapp_cta: "Call on Whats",
      email_title: "Email",
      email_desc: "beatryzkleuvyn@email.com",
      linkedin_title: "LinkedIn",
      linkedin_desc: "Connect with me",
      linkedin_cta: "View Profile",
      main_cta: "Request a Quote",
      status_available: "Available for new projects",
      status_global: "Remote / Brasília"
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