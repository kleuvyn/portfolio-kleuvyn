"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, Sigma } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  role?: string
  challenge?: string
  architecture?: string
  impact?: string
}

export function ProjectCard({ title, description, image, tags, githubUrl, liveUrl, role, challenge, architecture, impact }: ProjectCardProps) {
  const challengeText = challenge || "Aguardando documentação técnica e estruturação lógico-matemática."
  const architectureText = architecture || "Estrutura escalável sob modelo rigoroso de componentização."
  const impactText = impact || "Resultados tangíveis aprovados por stakeholders de negócio e usuários."

  return (
    <Sheet>
      <motion.div
        whileHover={{ y: -12, rotateX: 5, rotateY: -6, scale: 1.04 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 240, damping: 18 }}
        style={{ perspective: 1200 }}
        className="group relative bg-[#FCFAFF] dark:bg-card p-4 pb-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_24px_50px_rgba(var(--primary-rgb),0.18)] border border-muted/50 transition-all duration-500 w-full max-w-sm mx-auto flex flex-col h-full transform-gpu will-change-transform"
      >
        {/* Tape effect on top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-primary/20 backdrop-blur-sm -rotate-2 z-20 mix-blend-multiply" />

        {/* Image Frame (Polaroid style) */}
        <div className="relative aspect-[4/3] mb-6 overflow-hidden border border-border bg-muted/30">
          
          {/* Selo EM BREVE se o projeto tiver a tag Em Desenvolvimento */}
          {tags.includes("Em Desenvolvimento") && (
            <div className="absolute top-4 left-4 z-30">
              <span className="bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 shadow-lg backdrop-blur-md">
                Em Breve
              </span>
            </div>
          )}
          
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Floating Links inside image */}
          <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            {githubUrl !== "#" && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/90 backdrop-blur-sm text-foreground hover:text-primary transition-colors border border-border"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {liveUrl !== "#" && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/90 backdrop-blur-sm text-foreground hover:text-primary transition-colors border border-border"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Role / Tag minimalista */}
        {role && (
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            {role}
          </p>
        )}

        {/* Title */}
        <h3 className="text-2xl font-serif italic text-foreground mb-3 group-hover:text-primary transition-colors flex justify-between items-center">
          {title}
          <SheetTrigger asChild>
            <button className="flex items-center text-[10px] tracking-widest font-sans uppercase font-bold text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 cursor-pointer hover:underline">
              Detalhes <ArrowUpRight className="h-4 w-4 ml-1" />
            </button>
          </SheetTrigger>
        </h3>
        
        <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Tags Line */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-[10px] font-medium uppercase tracking-wider text-foreground/70 bg-muted px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* GAVETA DE DETALHES DO PROJETO (RADIX SHEET) */}
      <SheetContent className="w-full sm:max-w-xl bg-background border-l border-border overflow-y-auto p-0">
        <div className="h-64 sm:h-80 w-full relative border-b border-border">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <Badge className="mb-4 bg-primary text-primary-foreground">{role || 'Projeto'}</Badge>
            <SheetTitle className="text-5xl font-serif italic text-foreground leading-none">{title}</SheetTitle>
          </div>
        </div>

        <div className="p-8 sm:p-12 space-y-12">
          {/* O Desafio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sigma className="w-4 h-4 text-primary" />
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">1. O Desafio</h4>
            </div>
            <p className="text-foreground/80 font-serif leading-relaxed text-lg">
              {challengeText}
            </p>
          </div>

          {/* Arquitetura */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-6 bg-primary/40" />
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">2. Arquitetura Matemática/Técnica</h4>
            </div>
            <p className="text-foreground/80 font-sans leading-relaxed">
              {architectureText}
            </p>
          </div>

          {/* O Impacto */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-6 bg-primary/40" />
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground">3. O Impacto</h4>
            </div>
            <p className="text-foreground/80 font-serif italic leading-relaxed text-lg">
              "{impactText}"
            </p>
          </div>

          {/* Action Links */}
          <div className="pt-8 border-t border-border flex items-center justify-between gap-4">
             <div className="flex gap-2">
               {tags.slice(0,3).map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{t}</span>
               ))}
             </div>
             <div className="flex gap-4">
               {githubUrl !== "#" && (
                 <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                   GitHub <ArrowUpRight className="h-3 w-3" />
                 </a>
               )}
               {liveUrl !== "#" && (
                 <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
                   Live <ArrowUpRight className="h-3 w-3" />
                 </a>
               )}
             </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
