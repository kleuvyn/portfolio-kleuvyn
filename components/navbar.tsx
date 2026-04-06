"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe, Moon, Sun, ArrowUpRight, Sigma } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/providers" 
import { useTheme } from "next-themes" 
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#projetos", label: t.nav.projects },
    { href: "#sobre", label: t.nav.about },
    { href: "#contato", label: t.nav.contact },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 flex justify-center ${
        isScrolled ? "pt-6 pb-2" : "py-10"
      }`}
    >
      <div 
        className={`flex items-center justify-between px-6 transition-all duration-700 ${
          isScrolled 
            ? "w-[90%] max-w-4xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-2xl py-3 rounded-full" 
            : "w-full container bg-transparent py-2"
        }`}
      >
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
            <Sigma className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>
          <div className="flex flex-col">
             <span className="text-sm font-serif italic text-foreground tracking-wide group-hover:text-primary transition-colors">
               Kleuvyn
             </span>
             {isScrolled && (
               <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground font-sans">
                 Dev
               </span>
             )}
          </div>
        </a>

        {/* Desktop Links (Centralized) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          
          {/* Theme Toggle */}
          <button
            className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <>
                <Sun className="h-3.5 w-3.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-3.5 w-3.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </>
            )}
          </button>

          {/* Language Toggle */}
          <button
            className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-[10px] font-bold font-sans text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            onClick={() => setLanguage(language === "PT" ? "EN" : "PT")}
          >
            {language}
          </button>

          <Button 
             size="sm" 
             className="h-8 rounded-full px-5 text-[10px] uppercase tracking-widest font-bold bg-foreground text-background hover:bg-primary transition-all duration-300 gap-2" 
             asChild
          >
            <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
              {t.nav.cta} <ArrowUpRight className="w-3 h-3" />
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-[110%] left-6 right-6 bg-card border border-border/50 p-6 rounded-3xl shadow-2xl flex flex-col gap-6 backdrop-blur-2xl"
          >
             <div className="flex flex-col items-center gap-6">
                <div className="flex gap-4 mb-2">
                  <button
                    className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-300"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  >
                    {mounted ? (theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />) : null}
                  </button>
                  <button
                    className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-[11px] font-bold font-sans text-muted-foreground transition-all duration-300"
                    onClick={() => setLanguage(language === "PT" ? "EN" : "PT")}
                  >
                    {language}
                  </button>
                </div>

                <div className="h-px w-full bg-border/50" />

                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-2xl font-serif italic text-foreground w-full text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}

                <Button className="w-full rounded-full h-12 mt-4 text-xs tracking-[0.2em] font-bold" asChild>
                   <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer">
                     {t.nav.cta}
                   </a>
                </Button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
