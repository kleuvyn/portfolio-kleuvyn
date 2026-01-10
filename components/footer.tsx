"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react"
import { useLanguage } from "@/components/providers"

export function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()
  
  const githubUrl = "https://github.com/kleuvyn"
  const linkedinUrl = "https://www.linkedin.com/in/beatryz-kleuvyn-467a23198/"
  const email = "b.kleuvyn@gmail.com"

  const navItems = [
    { id: "sobre", label: t.nav.about },
    { id: "projetos", label: t.nav.projects },
    { id: "contato", label: t.nav.contact }
  ]

  return (
    <footer className="relative border-t border-border/40 bg-background py-12 lg:py-20 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 bg-linear-to-t from-primary/5 to-transparent -z-10" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <div className="text-2xl font-bold tracking-tighter">
              Beatryz <span className="text-primary italic font-serif">Kleuvyn</span>
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-medium max-w-62.5 leading-relaxed text-center md:text-left">
              {t.hero.tagline}
            </p>
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, url: githubUrl, label: "GitHub" },
              { icon: Linkedin, url: linkedinUrl, label: "LinkedIn" },
              { icon: Mail, url: `mailto:${email}`, label: "Email" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="p-3 rounded-xl bg-muted/30 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground/80 font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {language === 'PT' ? 'Brasília, Brasil — Disponível Globalmente' : 'Brasília, Brazil — Available Globally'}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="text-border">|</span>
            <span className="flex items-center gap-1">
              {language === 'PT' ? 'Construído com' : 'Built with'} <Heart className="h-3 w-3 text-primary fill-primary" /> by Kleuvyn
            </span>
          </div>

          <a 
            href="https://github.com/kleuvyn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] font-mono text-muted-foreground/40 hover:text-primary flex items-center gap-1 transition-colors uppercase"
          >
            Source Code <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}