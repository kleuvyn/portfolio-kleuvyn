"use client"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { useLanguage } from "@/components/providers" // Importando seu hook de tradução

export function ProjectsGrid() {
  const { t, language } = useLanguage()

  const projects = [
    {
      id: 8,
      title: "Meu Inglês Possível",
      description: language === 'PT' 
        ? "Mentor de conversação impulsionado por IA (NLP) com análise preditiva de gramática e vocabulário em tempo real. Desenvolvido para democratizar o aprendizado de idiomas com feedback instantâneo."
        : "AI-driven conversation mentor (NLP) with real-time grammar and vocabulary predictive analysis. Developed to democratize language learning.",
      image: "/ingles.png",
      tags: ["Next.js", "AI SDK", "OpenAI", "Tailwind"],
      role: "Em breve", 
      link: "https://lingo-master-ai.vercel.app",
      github: "https://github.com/kleuvyn/lingo-master-ai",
    },
    {
      id: 4,
      title: "Calendário Literário",
      description: language === 'PT'
        ? "Web App (PWA) de alta performance para gestão de leitura. Implementação de Canvas API para geração dinâmica de assets visuais e arquitetura offline-first para sincronização de metas."
        : "High-performance Web App (PWA) for reading management. Canvas API implementation for dynamic visual assets and offline-first architecture.",
      image: "/calendario.png",
      tags: ["Next.js", "PWA", "Canvas API", "Tailwind"],
      role: "Full Stack Developer",
      link: "https://calendario-literario.vercel.app",
      github: "https://github.com/kleuvyn/Calendario_Literario",
    },
    {
      id: 1,
      title: "Chatbot IA - Ritmos do Coração",
      description: language === 'PT'
        ? "Engenharia de conversação para impacto social. Estruturação de fluxos orientados a dados e análise estatística textual para otimizar o suporte humanizado a doadores."
        : "Conversational engineering for social impact. Data-driven flow structuring for humanized donor support.",
      image: "/ritmos.png",
      tags: ["Python", "Dialogflow", "Data Science", "NLP"],
      role: "Data & AI Specialist",
      link: "https://ritmos-do-coracao.vercel.app/",
      github: "https://github.com/kleuvyn/Ritmos-do-Coracao-Chat",
    },
    {
      id: 9,
      title: "Plataforma PDV - IESB",
      description: language === 'PT'
        ? "Liderança técnica na arquitetura de um sistema de Ponto de Venda (POS) escalável. Desenvolvimento full-cycle focado em performance transacional e impacto comunitário."
        : "Technical leadership in a scalable POS system architecture. Full-cycle development focused on transactional performance.",
      image: "/pdv.png",
      tags: ["React", "Node.js", "Prisma", "Docker"],
      role: "Tech Lead/Full Stack Developer",
      link: "https://github.com/fabrica-bayarea/pdv-back",
      github: "https://github.com/fabrica-bayarea/pdv-back",
    },
    {
      id: 2,
      title: "Mapa Cultural de Brasília",
      description: language === 'PT'
        ? "Solução geoespacial interativa para mapeamento de ecossistemas culturais. Organização de Big Data regional em uma interface intuitiva e responsiva."
        : "Interactive geospatial solution for mapping cultural ecosystems and regional Big Data organization.",
      image: "/guia-cultural.png",
      tags: ["Next.js", "TypeScript", "Google Maps API"],
      role: "Full Stack Engineer",
      link: "https://mapa-cultural-de-brasilia.vercel.app/",
      github: "https://github.com/kleuvyn/Mapa-Cultural-de-Brasilia",
    },
    {
      id: 7,
      title: "Vida Ativa",
      description: language === 'PT'
        ? "Plataforma resiliente focada em segurança e empoderamento feminino. Arquitetura orientada à privacidade com fluxos de suporte especializados e UX de acolhimento."
        : "Resilient platform focused on safety and female empowerment with privacy-oriented architecture.",
      image: "/vida-ativa.png",
      tags: ["Next.js", "Security", "Social Impact"],
      role: "Em Breve",
      link: "#",
      github: "https://github.com/kleuvyn/Vida-Ativa",
    },
    {
      id: 3,
      title: "Encaixe Certo",
      description: language === 'PT'
        ? "Engine de análise ocupacional que utiliza processamento de dados para identificar gaps de habilidades e tendências de mercado no setor tecnológico."
        : "Occupational analysis engine using data processing to identify skill gaps and market trends.",
      image: "/encaixe-certo.png",
      tags: ["React", "Node.js", "Data Analytics"],
      role: "Data Engineer / Dev",
      link: "https://encaixe-certo.vercel.app/",
      github: "https://github.com/kleuvyn/Encaixe-Certo",
    },
    {
      id: 5,
      title: "Conquista Diária",
      description: language === 'PT'
        ? "Sistemas de gestão de aprendizado gamificado (LMS). Implementação de algoritmos de cronogramas personalizados e gestão de progresso dinâmico."
        : "Gamified learning management system (LMS). Custom schedule algorithms and dynamic progress management.",
      image: "/conquista-diaria.png",
      tags: ["Next.js", "PostgreSQL", "Auth.js"],
      role: "Em Breve",
      link: "#",
      github: "https://github.com/kleuvyn/Conquista_Diaria",
    },
    {
      id: 6,
      title: "Raízes de Cuidado",
      description: language === 'PT'
        ? "Desenvolvimento institucional otimizado para SEO e conversão de serviços psicológicos, priorizando acessibilidade (WCAG) e experiência do usuário (UX)."
        : "Institutional development optimized for SEO and conversion of psychological services.",
      image: "/psi-amanda.png",
      tags: ["React", "SEO", "Accessibility"],
      role: "Em Breve",
      link: "#",
      github: "https://github.com/kleuvyn/Raizes-de-Cuidado-Psi-Amanda-",
    },
  ]

  return (
    <section id="projetos" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.03),transparent_70%)] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <div className="h-px w-8 bg-primary/50" />
            <Badge variant="outline" className="border-primary/20 text-primary px-3 py-1 uppercase tracking-[0.2em] text-[10px] font-bold">
              Engineering Showcase
            </Badge>
            <div className="h-px w-8 bg-primary/50" />
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground italic font-serif">
            {t.projects.title_part1} <span className="not-italic text-primary">{t.projects.title_part2}</span>
          </h2>
          
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl font-light leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            {language === 'PT' 
              ? "Mais projetos sendo desenvolvidos em tempo real no GitHub" 
              : "More projects being developed in real-time on GitHub"}
          </p>
        </motion.div>
      </div>
    </section>
  )
}