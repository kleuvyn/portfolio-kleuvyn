import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsGrid />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
