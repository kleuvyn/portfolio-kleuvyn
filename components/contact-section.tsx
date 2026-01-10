"use client"

import { motion } from "framer-motion"
import { Mail, Send, Linkedin, Smartphone, ArrowRight, Globe2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/providers"

export function ContactSection() {
  const { t } = useLanguage()
  
  const email = "b.kleuvyn@gmail.com"
  const whatsappLink = "https://wa.me/5561984660734?text=" + encodeURIComponent(
    t.language === 'PT' 
      ? "Olá! Vi seu portfólio e gostaria de um orçamento para um projeto." 
      : "Hello! I saw your portfolio and would like to request a quote for a project."
  )
  const linkedinUrl = "https://www.linkedin.com/in/beatryz-kleuvyn-467a23198/"

  return (
    <section id="contato" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05),transparent_70%)] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-6"
          >
            <Badge variant="outline" className="border-primary/30 text-primary px-4 py-1 uppercase tracking-[0.2em] text-[10px] font-bold">
              {t.contact.badge}
            </Badge>
            
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground">
              {t.contact.title_part1} <br />
              <span className="text-primary italic font-serif">{t.contact.title_part2}</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/40 backdrop-blur-xl border-2 border-green-500/20 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/5 group relative overflow-hidden">
                <CardHeader className="space-y-4 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <Smartphone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{t.contact.whatsapp_title}</CardTitle>
                    <CardDescription>{t.contact.whatsapp_desc}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-bold transition-all group/link">
                    {t.contact.whatsapp_cta}
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/40 backdrop-blur-xl border-2 border-muted hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
                <CardHeader className="space-y-4 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{t.contact.email_title}</CardTitle>
                    <CardDescription>{t.contact.email_desc}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={`mailto:${email}`} className="text-primary hover:text-primary/80 font-semibold break-all text-sm transition-colors underline-offset-4 hover:underline">
                    {email}
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/40 backdrop-blur-xl border-2 border-muted hover:border-blue-500/40 transition-all duration-500 group relative overflow-hidden">
                <CardHeader className="space-y-4 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                    <Linkedin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold">{t.contact.linkedin_title}</CardTitle>
                    <CardDescription>{t.contact.linkedin_desc}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 font-bold inline-flex items-center gap-2 transition-all">
                    {t.contact.linkedin_cta}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8"
          >
            <Button
              size="lg"
              className="h-16 px-10 text-lg shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.5)] transition-all duration-500 rounded-full bg-primary text-primary-foreground font-bold group relative overflow-hidden"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-3">
                  <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  {t.contact.main_cta}
                </span>
              </a>
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-medium uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {t.contact.status_available}
              </span>
              <span className="flex items-center gap-2">
                <Globe2 className="h-4 w-4" />
                {t.contact.status_global}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}