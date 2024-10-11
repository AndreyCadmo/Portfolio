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
      name: "Andrey Cadmo",
      url: "https://github.com/Andreycadmo",
    },
  ],
  keywords: [
    "Desenvolvedor Full-Stack",
    "Full-Stack",
    "Desenvolvedor",
    "Programador",
    "Andrey Cadmo",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "Next.js",
    "Python",
    "Express.js",
    "MongoDB",
    "API",
    "REST",
    "GraphQL",
    "SQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "DevOps",
    "Frontend",
    "Backend",
    "JavaScript ES6",
    "Design Responsivo",
    "Inovação",
    "Tecnologia",
    "Programação",
    "Projetos",
    "Contato",
    "Portfólio",
    "Desenvolvimento Web",
    "UX/UI",
    "Engenharia de Software",
    "Scrum",
    "Metodologias Ágeis",
    "Desenvolvimento Ágil",
    "Web Apps",
    "Cloud Computing",
    "Firebase",
    "Heroku",
    "Vercel",
    "Desenvolvimento de Software",
    "Soluções Web",
    "React Hooks",
    "Web Development",
    "Software Engineer",
    "Técnicas de Programação",
    "Clean Code",
    "Boas Práticas de Programação",
    "Deploy",
    "APIs",
    "Continuous Integration",
    "Continuous Deployment",
    "Automação"
  ],
  twitter: {
    card: "summary_large_image",
    site: "@andreycadmo",
    creator: "@cadmo_o",
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