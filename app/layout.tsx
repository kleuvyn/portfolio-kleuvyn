import { Providers } from "@/components/providers";
import "@fontsource/lora/400.css";
import "@fontsource/lora/400-italic.css";
import "@fontsource/lora/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/700-italic.css";
import "./globals.css";
import type { Metadata } from 'next';
import { SiteEffects } from "@/components/site-effects";
import { FloatingNav } from "@/components/floating-nav";

export const metadata: Metadata = {
  title: "Beatryz Kleuvyn | Tech Lead & Arquiteta de Dados",
  description: "Portfólio de engenharia de software de Beatryz Kleuvyn. Especialista em TypeScript, Python e Arquitetura de Dados. Background em Matemática e Física.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: "Beatryz Kleuvyn | Tech Lead & Arquiteta",
    description: "Lógica & Arquitetura. Soluções escaláveis e design editorial vintage.",
    url: "https://beatryzkleuvyn.com",
    siteName: "Beatryz Kleuvyn Portfolio",
    images: [
      {
        url: "/eu.jpeg",
        width: 800,
        height: 800,
        alt: "Beatryz Kleuvyn", 
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="pt-BR" 
      suppressHydrationWarning 
    >
      <body 
        className="font-sans antialiased min-h-screen bg-background text-foreground"
      >
        <Providers 
          attribute="class" 
          defaultTheme="light" 
          enableSystem
          disableTransitionOnChange
        >
          <SiteEffects />
          <FloatingNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
