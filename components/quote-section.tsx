"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/providers"
import { Sigma } from "lucide-react"

export function QuoteSection() {
  const { t } = useLanguage()

  const quotePT = "A boa arquitetura de dados não é sobre acumular informações, mas descobrir onde a matemática esconde as respostas."
  const quoteEN = "Good data architecture isn't about hoarding information, but discovering where mathematics hides the answers."

  return (
    <section className="py-32 lg:py-48 relative bg-[#3B2E4D] text-[#FCFAFF] overflow-hidden flex items-center justify-center">
      {/* Decoração Matemática FUndo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif text-[#FCFAFF]/5 select-none leading-none pointer-events-none -z-10">
        &#8747;
      </div>

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          {/* Adorno superior */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] w-8 md:w-16 bg-[#FCFAFF]/30" />
            <Sigma className="w-5 h-5 text-[#BCA8D1]" />
            <div className="h-[1px] w-8 md:w-16 bg-[#FCFAFF]/30" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif italic text-[#FCFAFF] leading-[1.1] md:leading-[1.1] tracking-tight">
            "{t.language === 'PT' ? quotePT : quoteEN}"
          </h2>

          <div className="mt-12 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#BCA8D1] mb-1">
              Beatryz Kleuvyn
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#FCFAFF]/60 font-medium">
              {t.language === 'PT' ? 'Pensamento Lógico' : 'Logical Thinking'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
