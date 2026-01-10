"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/providers"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[10%] left-[15%] w-160 h-160 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[15%] w-140 h-140 bg-primary/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 lg:pt-48">
        <div className="max-w-6xl mx-auto text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-bold mb-10 border border-primary/20 backdrop-blur-sm tracking-[0.2em] uppercase"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.hero.badge}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter text-foreground"
          >
            {t.hero.title_part1} <span className="text-primary italic font-serif">{t.hero.title_part2}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 mb-12"
          >
            <p className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground/90">
              {t.hero.tagline}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          >
            <Button size="lg" className="w-full sm:w-auto gap-3 h-16 px-10 text-lg rounded-full shadow-2xl shadow-primary/20 hover:scale-105 transition-all duration-300 group" asChild>
              <a href="#projetos">
                {t.hero.cta_primary}
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto gap-2 h-16 px-10 text-lg rounded-full border-2 hover:bg-primary/5 transition-all duration-300"
              asChild
            >
              <a href="#contato">{t.hero.cta_secondary}</a>
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center gap-12"
          >
            <div className="flex justify-center gap-8">
              {[
                { icon: Github, url: "https://github.com/kleuvyn", label: "GitHub" },
                { icon: Linkedin, url: "https://www.linkedin.com/in/beatryz-kleuvyn-467a23198/", label: "LinkedIn" },
                { icon: Mail, url: "mailto:b.kleuvyn@gmail.com", label: "Email" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 rounded-2xl border border-border/50 bg-card/30 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-all duration-500 backdrop-blur-sm">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            <motion.a
              href="#sobre"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-3 text-muted-foreground/50 hover:text-primary transition-colors group"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                {t.language === 'PT' ? 'Explorar Trajetória' : 'Explore Journey'}
              </span>
              <ArrowDown className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}