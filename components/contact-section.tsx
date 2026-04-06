"use client"

import { motion } from "framer-motion"
import { Send, FileText, Smartphone, Sigma, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/components/providers"

export function ContactSection() {
  const { t } = useLanguage()
  
  const whatsappLink = "https://wa.me/5561984660734?text=" + encodeURIComponent(
    t.language === 'PT' 
      ? "Olá Beatryz! Gostaria de falar sobre projetos e tecnologia." 
      : "Hello Beatryz! I would like to chat about projects and technology."
  )

  return (
    <section id="contato" className="relative py-32 overflow-hidden bg-[#3B2E4D] text-[#FCFAFF]">
      
      {/* Background Editorial Noise */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
      
      {/* Gigantic Math Background Symbol */}
      <div className="absolute top-0 right-0 text-[30vw] font-serif text-background/5 select-none leading-none -translate-y-1/4 translate-x-1/4 pointer-events-none">
        &pi;
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-16 border-b border-border/20 pb-20">
          
          {/* Header / Big Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] w-12 bg-primary/60" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/80">
                {t.language === 'PT' ? 'Epílogo' : 'Epilogue'}
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              <span className="font-serif italic text-primary/90 font-light mr-4">{t.contact.title_part1}</span>
              <br className="md:hidden" />
              <span className="text-background">{t.contact.title_part2}.</span>
            </h2>

            <p className="text-xl md:text-2xl text-background/60 font-serif font-light max-w-xl">
              {t.contact.description}
            </p>
          </motion.div>

          {/* Socials / Direct CTA Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-[400px] flex-shrink-0"
          >
            {/* Editorial Contact Card */}
            <div className="bg-background/5 p-10 border border-background/10 backdrop-blur-md">
              <div className="flex items-center justify-between mb-10 pb-10 border-b border-background/10">
                 <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-background/60 mb-2">Available For</h3>
                    <p className="font-serif text-xl italic text-primary">Freelance & Tech Lead</p>
                 </div>
                 <Sigma className="w-8 h-8 text-primary/40" />
              </div>

              <div className="space-y-6">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-background/80 hover:text-primary transition-colors">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-4">
                    <Smartphone className="w-4 h-4" /> WhatsApp
                  </span>
                  <span className="font-serif italic">(61) 98466-0734</span>
                </a>
                
                <a href="mailto:b.kleuvyn@gmail.com" className="group flex items-center justify-between text-background/80 hover:text-primary transition-colors">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-4">
                    <Send className="w-4 h-4" /> E-mail
                  </span>
                  <span className="font-serif italic">b.kleuvyn@gmail.com</span>
                </a>

                <a href="/curriculo.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-background/80 hover:text-primary transition-colors">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-4">
                    <FileText className="w-4 h-4" /> Resumo
                  </span>
                  <span className="font-serif italic">Curriculo.pdf</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer / Copyright */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 text-xs uppercase tracking-[0.2em] font-bold">
           <p>&copy; {new Date().getFullYear()} Beatryz Kleuvyn. {t.language === 'PT' ? 'Lógica aplicada' : 'Applied Logic'}.</p>
           <div className="flex gap-6">
              <a href="https://github.com/kleuvyn" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                 <Github className="w-3 h-3" /> Github
              </a>
              <a href="https://www.linkedin.com/in/beatryz-kleuvyn-467a23198/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                 <Linkedin className="w-3 h-3" /> LinkedIn
              </a>
           </div>
        </div>
      </div>
    </section>
  )
}
