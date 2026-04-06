"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/providers"
import { Flower2, Quote, Sigma } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="py-32 bg-card relative overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-80" />

      {/* Decorative large letters / math symbols */}
      <div className="absolute -left-10 md:left-10 top-20 text-[20rem] font-serif italic text-primary/[0.03] select-none -translate-y-1/2">
        &int;
      </div>
      <div className="absolute right-0 bottom-0 text-[15rem] font-serif text-secondary/[0.05] select-none rotate-12">
        <Sigma className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Left Column - Quote / Sticky Note */}
          <motion.div 
            initial={{ opacity: 0, rotate: -3 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3 order-2 md:order-1"
          >
            <div className="bg-background p-8 border border-border/50 shadow-md relative mt-10 md:mt-24">
              <Quote className="h-8 w-8 text-primary/40 absolute -top-4 -left-4 bg-background rounded-full p-1" />
              <p className="font-serif italic text-xl leading-relaxed text-foreground/80 mb-6">
                 {t.language === 'PT' 
                   ? "A matemática é o alfabeto com o qual Deus escreveu o universo. E o código é como nós o reescrevemos diariamente."
                   : "Mathematics is the alphabet with which God has written the universe. And code is how we rewrite it daily."}
              </p>
              <div className="flex items-center gap-2 pt-4 border-t border-border/50 text-xs font-sans uppercase tracking-[0.2em] text-primary">
                <Flower2 className="h-4 w-4" />
                <span>Kleuvyn B.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Biographic Text */}
          <div className="w-full md:w-2/3 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                  {t.about.badge}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-10">
                <span className="font-serif italic text-primary block mb-2">{t.about.title_part1}</span>
                {t.about.title_part2}
              </h2>

              {/* Big First Letter Drop Cap */}
              <div className="prose prose-lg dark:prose-invert text-muted-foreground font-sans">
                <p className="leading-loose relative z-10 first-letter:float-left first-letter:text-6xl first-letter:pr-4 first-letter:font-serif first-letter:text-primary first-letter:font-bold first-letter:italic">
                  <span className="font-bold text-foreground">{t.language === 'PT' ? 'Engenheira de Software e Analista de Dados.' : 'Software Engineer and Data Analyst.'}</span> {
                  t.language === 'PT' 
                    ? "Com uma formação sólida nas ciências exatas — transitando pela Matemática, Física e especializações em Inteligência Artificial — encontrei na engenharia de software o ecossistema ideal para aplicar a lógica estruturada na resolução de problemas complexos. Atuo desenvolvendo aplicações de ponta a ponta, desde a arquitetura de dados e IA até a entrega de interfaces escaláveis."
                    : "With a solid background in exact sciences — spanning Mathematics, Physics, and AI specializations — I found in software engineering the ideal ecosystem to apply structured logic to solve complex problems. I develop end-to-end applications, from data architecture and AI to delivering scalable interfaces."
                  }
                </p>
                <br />
                <p className="leading-loose">
                  {t.language === 'PT' 
                    ? "Minha abordagem técnica é fundamentada no rigor acadêmico e na excelência analítica. A mesma precisão exigida no estudo corporativo de dados e na modelagem física é o que aplico diariamente para construir códigos limpos, seguros e orientados a resultados reais para o mercado de tecnologia."
                    : "My technical approach is grounded in academic rigor and analytical excellence. The same precision required in corporate data studies and physical modeling is what I apply daily to build clean, secure code driven by real-world results in the tech industry."
                  }
                </p>
              </div>

              {/* Aesthetic skills list */}
              <div className="mt-16">
                <h3 className="text-sm uppercase tracking-[0.3em] text-primary font-bold mb-3">{t.about.resume_title}</h3>
                <p className="text-sm text-muted-foreground mb-8">{t.about.resume_description}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-border/40 pt-10">
                  {[
                    { label: "Frontend", tools: "React, Next.js, Tailwind" },
                    { label: "Backend", tools: "Node, Python, Postgres" },
                    { label: "Design", tools: "Figma, UI/UX" },
                    { label: "Dados", tools: "Análise, Python, SQL" },
                    { label: "Lógica", tools: "Matemática, Física" },
                    { label: "Vida", tools: "Jazz, Livros, Café" },
                  ].map((skill) => (
                    <div key={skill.label} className="group">
                      <h4 className="font-serif italic text-primary mb-1 border-l-2 border-transparent group-hover:border-primary pl-2 transition-all">{skill.label}</h4>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground pl-2">{skill.tools}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
