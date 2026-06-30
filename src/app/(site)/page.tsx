"use client";

import { Suspense } from "react";
import FeaturedProjects from "@/components/ui/FeaturedProjects";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-backLight text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 flex flex-col justify-center items-center px-6 pt-20 md:px-20 lg:px-40 selection:bg-teal-500 selection:text-zinc-950 transition-colors duration-300">

      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12 md:py-24">
        <div className="flex flex-col space-y-6 text-center md:text-left order-2 md:order-1">
          <div className="space-y-2">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-sm tracking-wider uppercase font-semibold">
              Disponível para novos desafios
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
              Andrey Cadmo
            </h1>
            <p className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400">
              Desenvolvedor Full Stack & Graduando em Ciência da Computação
            </p>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Construo aplicações web modernas, robustas e escaláveis. Especializado no ecossistema
            <strong className="text-zinc-900 dark:text-zinc-200"> Java (Spring Boot)</strong> para o ecossistema de back-end e
            <strong className="text-zinc-900 dark:text-zinc-200"> TypeScript (React, Next.js)</strong> na criação de interfaces dinâmicas e de alta performance.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <Link
              href="/projects"
              className="px-6 py-3 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 font-semibold text-sm rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-zinc-950/10 dark:shadow-white/5 active:scale-95"
            >
              Ver Projetos
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 font-semibold text-sm rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 dark:hover:text-white transition-all duration-200 active:scale-95"
            >
              Entre em Contato
            </Link>
          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-3xl opacity-10 dark:opacity-20 blur-xl group-hover:opacity-30 dark:group-hover:opacity-40 transition-opacity duration-500" />

            <div className="w-full h-full relative rounded-3xl overflow-hidden border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 shadow-xl dark:shadow-2xl flex items-center justify-center transition-colors duration-300">
              <img
                src="images/AndreyHome.png"
                alt="Andrey Cadmo"
                className="w-full h-full object-cover object-top group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl border-t border-zinc-200 dark:border-zinc-900 pt-10 pb-20 flex flex-col items-center space-y-8 overflow-hidden transition-colors duration-300">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-700 dark:text-zinc-500">
          Tecnologias principais de atuação
        </p>
        <div className="w-full relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-max animate-marquee whitespace-nowrap gap-16 pr-16 items-center will-change-transform transform-gpu">
            <div className="flex items-center gap-16 shrink-0">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/java/java-original.svg" alt="Java" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/spring/spring-original.svg" alt="Spring" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg" alt="React" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-10 w-auto filter dark:invert grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/docker/docker-original.svg" alt="Docker" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </div>
            <div className="flex items-center gap-16 shrink-0">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/java/java-original.svg" alt="Java" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/spring/spring-original.svg" alt="Spring" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg" alt="React" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-10 w-auto filter dark:invert grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/docker/docker-original.svg" alt="Docker" className="h-10 w-auto filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl py-16 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
        <div className="flex flex-col space-y-2 mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight">Projetos Recentes</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Uma seleção dos meus ultimos projetos</p>
        </div>

        <Suspense fallback={<p className="text-sm text-zinc-400">Carregando projetos do banco de dados...</p>}>
          <FeaturedProjects />
        </Suspense>
      </section>

      <section className="w-full max-w-6xl py-16 border-t border-zinc-200 dark:border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-12 transition-colors duration-300">
        <div className="md:col-span-2 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Minha Trajetória</span>
          <h2 className="text-3xl font-bold tracking-tight">Do Suporte à Engenharia de Software</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
            Minha vivência diária gerenciando infraestrutura de TI no setor público me deu uma base sólida em resolução de problemas complexos sob pressão. Uno essa bagagem analítica ao estudo contínuo da Ciência da Computação para projetar e codificar sistemas web modernos, organizados e limpos.
          </p>
          <div className="pt-2">
            <Link href="/about" className="text-sm font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1">
              Ler minha história completa original <span>→</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <div className="bg-zinc-900/5 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl flex items-center space-x-4">
            <span className="text-2xl md:text-3xl font-black text-teal-500 font-mono">5º</span>
            <div className="text-xs">
              <p className="font-bold text-zinc-800 dark:text-zinc-200">Semestre Acadêmico</p>
              <p className="text-zinc-700 dark:text-zinc-400">Ciência da Computação na UNIP</p>
            </div>
          </div>
          <div className="bg-zinc-900/5 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl flex items-center space-x-4">
            <span className="text-2xl md:text-3xl font-black text-teal-500 font-mono">100%</span>
            <div className="text-xs">
              <p className="font-bold text-zinc-800 dark:text-zinc-200">Foco em Soluções</p>
              <p className="text-zinc-700 dark:text-zinc-400">Da infraestrutura ao deploy final</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl py-12 mb-16 border-t border-zinc-200 dark:border-zinc-900 text-center transition-colors duration-300">
        <div className="bg-zinc-900/5 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-3xl p-8 md:p-12 flex flex-col items-center space-y-6 max-w-4xl mx-auto backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Vamos tirar ideias do papel?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Seja para bater um papo sobre uma oportunidade de desenvolvimento júnior, estágio focado em código ou cooperação em projetos, minha caixa de entrada está sempre aberta.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-teal-600/10 active:scale-95"
            >
              Iniciar Conversa
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}