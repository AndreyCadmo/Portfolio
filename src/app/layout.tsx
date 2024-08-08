import { ThemeProvider } from "@/components/clientSide/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrey Cadmo",
  description: "Portfólio de Andrey Cadmo",
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
        <main className="bg-backLight dark:bg-backDark ">

        {children}
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}