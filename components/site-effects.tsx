"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { useLanguage } from "@/components/providers"
import { Sigma } from "lucide-react"

export function SiteEffects() {
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useLanguage()
  const { scrollYProgress } = useScroll()
  
  // Efeito elegante/suave do progresso de leitura
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Tranca o scroll da página enquanto o splash screen carrega
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1800) // Duração ideal pra ser chique mas não arrastado.

    return () => clearTimeout(timer)
  }, [isLoading])

  return (
    <>
      {/* 3. Progresso de Leitura no Topo */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[9998]"
        style={{ scaleX }}
      />

      {/* 2. Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              <Sigma className="w-12 h-12 text-primary" />
              <div className="text-center space-y-3">
                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold">
                  {t.language === 'PT' ? 'Lógica & Arquitetura' : 'Logic & Architecture'}
                </p>
                <h1 className="text-3xl md:text-5xl font-serif italic text-primary/90">
                  {t.language === 'PT' ? 'Capítulo 01' : 'Chapter 01'}
                </h1>
              </div>
            </motion.div>
            
            {/* Linha de loading super fina */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-primary/30 mt-10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
