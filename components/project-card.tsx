"use client"

import { ExternalLink, Github, Code2, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/providers" 
import Image from "next/image"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    role?: string
    link: string
    github?: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage() 

  return (
    <Card className="group relative overflow-hidden flex flex-col h-full border border-muted bg-card/40 backdrop-blur-md hover:border-primary/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      
      {/* Container da Imagem - CORREÇÃO DE POSICIONAMENTO */}
      <div className="relative w-full aspect-16/10 overflow-hidden bg-muted">
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-60" />
          
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
            <div className="bg-white text-black px-5 py-2.5 rounded-full flex items-center gap-2 font-bold text-xs translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
              {t.projects.hover_view} <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </a>
      </div>

      <CardHeader className="space-y-4 pb-4 relative">
        <div className="flex justify-between items-start">
          {project.role && (
            <Badge variant="outline" className="text-[9px] uppercase tracking-[0.15em] font-black border-primary/30 text-primary bg-primary/5">
              {project.role}
            </Badge>
          )}
          <Code2 className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
        </div>
        
        <div className="space-y-2">
          <CardTitle className="text-xl lg:text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed text-[13px] line-clamp-3 font-light h-15">
            {project.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-6 pt-2">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] px-2.5 py-1 rounded-md bg-muted/50 text-muted-foreground font-mono border border-transparent group-hover:border-primary/10 transition-all"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-3 pt-4 pb-6 px-6">
        <Button 
          size="sm" 
          className="flex-1 gap-2 h-11 font-bold text-xs uppercase tracking-widest rounded-xl transition-all active:scale-95 shadow-lg shadow-primary/10" 
          asChild
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5" />
            {t.projects.live_demo}
          </a>
        </Button>
        
        {project.github && (
          <Button 
            size="sm" 
            variant="outline" 
            className="h-11 w-11 rounded-xl border border-muted hover:border-primary/50 hover:bg-primary/5 transition-all" 
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">{t.projects.github || "GitHub"}</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}