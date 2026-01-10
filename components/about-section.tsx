"use client"

import { motion } from "framer-motion"
import { Code2, Brain, CheckCircle2, Cpu, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/providers"

export function AboutSection() {
  const { t } = useLanguage()
  const skillIcons = [Cpu, Brain, Code2]

  const skills = t.about.skills ? t.about.skills.map((skill, index) => ({
    ...skill,
    icon: skillIcons[index] || Code2
  })) : []

  const experiences = t.about.experience || []

  return (
    <section id="sobre" className="container mx-auto px-6 py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-24 space-y-6"
        >
          <Badge className="bg-primary/10 text-primary border-none hover:bg-primary/20 transition-colors px-4 py-1.5 text-[10px] tracking-[0.2em] uppercase font-bold">
            {t.about.badge}
          </Badge>
          
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
            {t.about.title_part1} <br />
            <span className="text-primary italic font-serif">{t.about.title_part2}</span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl font-light">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {skills.map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative border-2 border-muted bg-card/40 backdrop-blur-xl hover:border-primary/40 transition-all duration-500 overflow-hidden h-full">
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                    {skill.description}
                  </p>
                </CardContent>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-all" />
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-muted pb-8"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                {t.about.trajectory_title}
              </h3>
              <p className="text-muted-foreground mt-2 font-light italic">
                {t.about.trajectory_subtitle}
              </p>
            </div>
            <Globe className="h-8 w-8 text-muted/30 hidden md:block animate-pulse" />
          </motion.div>
          
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={`exp-${index}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 p-8 rounded-2xl border-2 border-transparent hover:border-muted hover:bg-muted/10 transition-all duration-300"
              >
                <div className="space-y-1">
                  <span className="text-sm font-mono text-primary/60 font-medium tracking-tighter uppercase">
                    {exp.year}
                  </span>
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h4>
                  <p className="text-primary font-semibold flex items-center gap-2">
                    {exp.company}
                  </p>
                </div>
                
                <div className="flex flex-col justify-center">
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {exp.desc}
                  </p>
                </div>
                
                <CheckCircle2 className="absolute top-8 right-8 h-5 w-5 text-muted opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}