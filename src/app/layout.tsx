import { ThemeProvider } from "@/components/clientSide/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NotifyContextProvider from "@/context/notifyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrey Cadmo – Desenvolvedor Full-Stack",
  description: "Desenvolvedor Full-Stack especializado em Angular, TypeScript, HTML e CSS, com experiência em React, Node.js e Python. Apaixonado por tecnologia e sempre em busca de soluções inovadoras. Confira meus projetos e entre em contato!",
  authors: [
    {
      name: "Andry Cadmo",
      url: "https://github.com/Andreycadmo",
    },
  ],
  keywords: [
    "Desenvolvedor Full-Stack",
    "Full-Stack",
    "Desenvolvedor",
    "Andrey Cadmo",
    "Angular",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Python",
    "Tecnologia",
    "Inovação",
    "Projetos",
    "Contato",
    "Portfolio",
    "Programador",
    "Developer"
  ],

  twitter: {
    card: "summary_large_image",
    site: "Portfolio | Andrey Cadmo",
    creator: "@andreycadmo",
    title: "Portfolio | Andrey Cadmo",
    description:
      "Desenvolvedor Full-Stack especializado em Angular, TypeScript, HTML e CSS, com experiência em React, Node.js e Python. Apaixonado por tecnologia e sempre em busca de soluções inovadoras. Confira meus projetos e entre em contato!",
    images: ["/imagens/logos/Ac.png"],
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://andreycadmo.me",
    siteName: "Andrey Cadmo",
    title: "Andrey Cadmo – Desenvolvedor Full-Stack",
    description: "Desenvolvedor Full-Stack especializado em Angular, TypeScript, HTML e CSS, com experiência em React, Node.js e Python. Apaixonado por tecnologia e sempre em busca de soluções inovadoras. Confira meus projetos e entre em contato!",
  },

  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="bg-backLight dark:bg-backDark relative">
            <NotifyContextProvider>
              {children}
            </NotifyContextProvider>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}