"use client"

import { useState, useEffect } from "react"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/providers" 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#projetos", label: t.nav.projects },
    { href: "#sobre", label: t.nav.about },
    { href: "#contato", label: t.nav.contact },
  ]

  const languages = [
    { code: "PT" as const, label: "Português", flag: "🇧🇷" },
    { code: "EN" as const, label: "English", flag: "🇺🇸" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-3 bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-2xl shadow-black/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex flex-col group">
            <span className="text-xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
            <span className="italic font-serif">KLEUVYN</span>
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-muted-foreground font-bold">
              Software Engineer
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="h-4 w-px bg-border/60" />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-xs font-bold hover:bg-primary/5 focus:ring-0">
                  <Globe className="h-3.5 w-3.5 text-primary" />
                  {language}
                  <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-md border-border/50 min-w-35">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`gap-3 cursor-pointer text-xs font-medium focus:bg-primary/10 ${language === lang.code ? 'bg-primary/5 text-primary' : ''}`}
                  >
                    <span className="text-base">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm" className="px-6 rounded-full font-bold text-[11px] uppercase tracking-wider shadow-lg shadow-primary/20 transition-transform hover:scale-105 active:scale-95" asChild>
              <a href="#contato">{t.nav.cta}</a>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              className="p-2 text-foreground focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-2xl border-b border-border p-6 animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold tracking-tight text-foreground border-b border-border/50 pb-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              <div className="flex items-center justify-between py-2">
                <span className="text-muted-foreground uppercase tracking-widest text-[10px] font-bold">Idioma</span>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all ${
                        language === lang.code 
                          ? 'bg-primary border-primary text-primary-foreground' 
                          : 'border-border text-muted-foreground'
                      }`}
                    >
                      {lang.flag} {lang.code}
                    </button>
                  ))}
                </div>
              </div>

              <Button size="lg" className="w-full font-bold uppercase tracking-widest text-xs h-14 rounded-xl" asChild>
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                  {t.nav.cta}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}