"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, BookOpen, Coffee, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/providers"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Vintage Texture */}
      <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-60" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-background via-background/90 to-background" />

      {/* Decorative Blob */}
      <div className="absolute top-1/4 right-0 md:right-1/4 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Huge Editorial Typography */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-primary">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-7xl md:text-9xl font-bold leading-[0.85] tracking-tighter text-foreground mb-8"
            >
              <span className="block">{t.hero.title_part1}</span>
              <span className="block font-serif italic text-primary ml-8 md:ml-16">
                {t.hero.title_part2}.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pl-8 md:pl-16 border-l border-primary/30 py-2"
            >
              <p className="text-xl md:text-2xl font-serif text-foreground/80 mb-4 max-w-lg">
                "{t.hero.tagline}"
              </p>
              <p className="text-sm md:text-base text-muted-foreground font-sans leading-loose max-w-lg">
                {t.hero.description}
              </p>
            </motion.div>

            {/* Custom Editorial Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-8 mt-12 pl-8 md:pl-16"
            >
              <a href="#projetos" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                <span className="border-b-2 border-primary pb-1">{t.hero.cta_primary}</span>
                <BookOpen className="h-4 w-4 group-hover:-rotate-12 transition-transform" />
              </a>
              
              <a href="#sobre" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative">
                <span className="border-b border-transparent group-hover:border-foreground pb-1 transition-all">{t.hero.cta_secondary}</span>
                <Coffee className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Scrapbook Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="lg:col-span-5 relative hidden md:block"
          >
            {/* Polaroid / Paper Card */}
            <div className="relative bg-[#FAFAF5] p-6 shadow-2xl border border-muted/50 w-full max-w-[400px] mx-auto z-10 rotate-3 hover:rotate-0 transition-all duration-500">
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 shadow-sm backdrop-blur-md rotate-[-2deg]" style={{ mixBlendMode: 'multiply' }} />
              
              <div className="aspect-[4/5] bg-muted w-full relative overflow-hidden mb-4 border border-border">
                {/* Sua Foto Oficial */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-[url('/eu.jpeg')] bg-cover bg-center grayscale-[15%] contrast-110" />
              </div>
              <div className="text-center font-serif text-lg italic text-foreground/80 flex items-center justify-center gap-2">
                — {t.language === 'PT' ? 'Lógica & Arquitetura.' : 'Logic & Architecture.'} <Sparkles className="inline h-4 w-4 text-primary" />
              </div>
            </div>

            {/* Floating elements behind */}
            <div className="absolute -bottom-10 -left-10 w-48 h-64 bg-secondary/80 border border-secondary p-4 -rotate-6 -z-10 shadow-xl flex items-end">
              <span className="font-sans text-xs tracking-widest text-[#FAFAF5] uppercase opacity-70">
                Data & Logic
              </span>
            </div>
            <div className="absolute top-10 -right-5 w-32 h-32 rounded-full border border-primary/40 -z-10 flex items-center justify-center -rotate-12">
              <span className="font-serif italic text-primary/40 text-sm w-20 text-center">Software Engineering</span>
            </div>
          </motion.div>

        </div>

        {/* Social Links - Vertical floating or bottom align */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-6 md:left-12 flex flex-col gap-6 z-20"
        >
          <div className="h-20 w-px bg-foreground/20 mx-auto" />
          <a href="https://github.com/kleuvyn" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/beatryz-kleuvyn-467a23198/" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="mailto:b.kleuvyn@gmail.com" className="text-foreground/50 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
