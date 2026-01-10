import { Providers } from "@/components/providers";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// 1. Configuração das fontes
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap', 
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

// 2. Metadados
export const metadata = {
  title: "Beatryz Kleuvyn | Software Engineer",
  description: "Engenharia de Software & Inteligência de Dados",
};

// 3. Componente RootLayout (Export padrão obrigatório)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="pt-BR" 
      suppressHydrationWarning 
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body 
        className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}
      >
        <Providers 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </Providers>
      </body>
    </html>
  );
}