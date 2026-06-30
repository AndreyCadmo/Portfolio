import Form from "@/components/ui/form";

export default function Page() {
  return (
    <section className="w-full bg-zinc-50 dark:bg-zinc-950 min-h-screen flex justify-center items-center px-6 py-16 md:px-20 lg:px-40 transition-colors duration-300">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">

        <div className="md:col-span-5 flex flex-col space-y-6">
          <div className="space-y-2">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-xs tracking-widest uppercase font-bold">
              Contato
            </span>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
              Entre em <span className="text-blue-600 dark:text-blue-500">Contato</span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed text-justify">
              Tem alguma dúvida, sugestão ou quer falar sobre uma oportunidade de projeto? Fique à vontade para me enviar uma mensagem! Estou sempre aberto a novas ideias e cooperação técnica. Vou responder o mais rápido possível.
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-900">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 font-semibold">
              Conecte-se comigo
            </div>
            <ul className="flex items-center gap-2 m-0 p-0 list-none">

              <li>
                <a
                  href="https://www.linkedin.com/in/andreycadmo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-zinc-200/60 text-zinc-700 hover:bg-blue-600 hover:text-white dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 active:scale-95"
                  aria-label="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/AndreyCadmo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-zinc-200/60 text-zinc-700 hover:bg-zinc-800 hover:text-white dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-100 dark:hover:text-zinc-950 transition-all duration-200 active:scale-95"
                  aria-label="Github"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/cadmo_o/?hl=pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-zinc-200/60 text-zinc-700 hover:bg-pink-600 hover:text-white dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-pink-600 dark:hover:text-white transition-all duration-200 active:scale-95"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="md:col-span-7 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 p-6 sm:p-8 rounded-3xl shadow-sm w-full">
          <Form />
        </div>

      </div>
    </section>
  );
}