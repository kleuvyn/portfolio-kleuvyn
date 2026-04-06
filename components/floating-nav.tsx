"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function FloatingNav() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(false)
  const [lastY, setLastY] = useState(0)

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Esconder a pílula se estivermos no topo (0 a 200px)
    if (latest < 200) {
      setIsVisible(false)
    } else {
      // Se rolamos para cima e já passamos do topo
      if (latest < lastY) {
        setIsVisible(true)
      } else {
        // Rolando para baixo = esconder
        setIsVisible(false)
      }
    }
    setLastY(latest)
  })

  // Links do Navigation (podem ser os mesmos usados no Hero/Navbar)
  const navLinks = [
    { href: "#projetos", label: "Projetos" },
    { href: "#sobre", label: "Índice" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9990]"
        >
          <div className="flex items-center gap-8 px-8 py-4 bg-background/80 backdrop-blur-xl border border-border shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-full">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-muted-foreground hover:text-primary hover:scale-105 transition-all duration-300 relative group"
              >
                {link.label}
              </a>
            ))}
            
            {/* Divisor vertical */}
            <div className="w-[1px] h-4 bg-border" />
            
            {/* CTA Resumo Rapido */}
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-primary hover:text-foreground transition-all flex items-center gap-1"
            >
              Resume <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
