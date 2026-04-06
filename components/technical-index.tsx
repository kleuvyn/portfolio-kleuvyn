"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/providers"

export function TechnicalIndex() {
  const { t } = useLanguage()

  const skillsPT = [
    { title: "TypeScript & Javascript", pg: "01" },
    { title: "Estratégia & Python", pg: "02" },
    { title: "Gestão Data Analytics", pg: "03" },
    { title: "Lógica Next.js & React", pg: "04" },
    { title: "Modelagem PostgreSQL", pg: "05" },
    { title: "Arquitetura Back-end", pg: "06" },
    { title: "UI/UX Editorial", pg: "07" },
    { title: "Métodos Matemáticos", pg: "08" },
  ]
  const skillsEN = [
    { title: "TypeScript & Javascript", pg: "01" },
    { title: "Strategy & Python", pg: "02" },
    { title: "Data Analytics Mgmt", pg: "03" },
    { title: "Logic with Next.js", pg: "04" },
    { title: "PostgreSQL Modeling", pg: "05" },
    { title: "Back-end Architecture", pg: "06" },
    { title: "Editorial UI/UX", pg: "07" },
    { title: "Mathematical Methods", pg: "08" },
  ]

  const skills = t.language === 'PT' ? skillsPT : skillsEN

  return (
    <section className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row items-baseline gap-12 border-b border-border/50 pb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter w-full md:w-auto shrink-0">
             {t.language === 'PT' ? 'Índice' : 'Index'} <br /> <span className="font-serif italic text-primary font-normal normal-case tracking-normal">Técnico</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-serif italic max-w-md">
            {t.language === 'PT' ? 'Um compilado das ferramentas, linguagens e metodologias que compõem minha matriz de trabalho diária.' : 'A compilation of tools, languages, and methodologies shaping my daily work matrix.'}
          </p>
        </motion.div>

        {/* Index Layout com duas colunas */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 md:gap-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-baseline w-full text-lg md:text-xl font-serif text-foreground/80 hover:text-primary transition-colors group"
            >
              <span className="shrink-0">{skill.title}</span>
              <div className="flex-1 mx-4 border-b-2 border-dotted border-muted-foreground/30 opacity-50 group-hover:opacity-100 group-hover:border-primary/50 transition-all relative -top-1" />
              <span className="shrink-0 font-sans text-xs font-bold tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{skill.pg}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
