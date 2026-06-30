import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:pt-20">
      <article className="prose prose-p:text-zinc-800 dark:prose-invert dark:prose-p:text-zinc-300 max-w-none">

        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16 dark:bg-gray-900/50 bg-gray-200 p-10 rounded-[2.5rem] border border-zinc-300 dark:border-zinc-800 shadow-xl transition-colors duration-300">
          <div className="flex-1 min-w-0">
            <h1 className="mb-2 dark:text-blue-500 text-blue-900 text-4xl font-black tracking-tight">
              Andrey Cadmo
            </h1>
            <h2 className="text-lg font-semibold dark:text-zinc-400 text-zinc-600 mb-6 border-b border-zinc-300 dark:border-zinc-800 pb-2">
              Desenvolvedor Full Stack & Graduando em Ciência da Computação
            </h2>

            <div className="space-y-4 text-zinc-800 dark:text-zinc-300 leading-relaxed text-base sm:text-lg">
              <p>
                Com 20 anos e residente na cidade litorânea de Itanhaém, São Paulo, sou um desenvolvedor Full Stack movido pela curiosidade e pelo desafio de transformar problemas complexos em softwares eficientes, limpos e escaláveis. Atualmente, aplico tecnologia na prática para otimizar processos e construir soluções dinâmicas de alto impacto.
              </p>
              <p>
                Acredito que desenvolvimento de software vai muito além de apenas escrever linhas de código: trata-se de arquitetar soluções que geram valor técnico e facilitam a vida de quem as utiliza.
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-teal-600 dark:text-teal-400 font-bold m-0">
                ⚡ O que trago na minha bagagem:
              </h3>
              <ul className="space-y-3 text-sm text-zinc-700 dark:text-zinc-400 list-none pl-0 m-0">
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-500 dark:text-teal-400 select-none">▪</span>
                  <span><strong className="text-zinc-900 dark:text-zinc-200">Java & Spring Boot</strong>: Construção de APIs RESTful robustas, focadas em Clean Architecture, segurança e performance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-500 dark:text-teal-400 select-none">▪</span>
                  <span><strong className="text-zinc-900 dark:text-zinc-200">TypeScript, React & Next.js</strong>: Criação de aplicações web dinâmicas e fluidas, priorizando a experiência do usuário.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-500 dark:text-teal-400 select-none">▪</span>
                  <span><strong className="text-zinc-900 dark:text-zinc-200">Resolução de Problemas Práticos</strong>: Experiência automatizando processos e gerenciamento de suporte de TI, o que me deu base sólida para atuar sob pressão.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-500 dark:text-teal-400 select-none">▪</span>
                  <span><strong className="text-zinc-900 dark:text-zinc-200">Inteligência Artificial</strong>: Capacidade analítica apurada, tendo desenvolvido projetos acadêmicos aplicando algoritmos de busca (como IDA*) em Python.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group shrink-0">
            <div className="absolute inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              className="relative rounded-[2.5rem] shadow-2xl animate-aboutImage border-2 border-zinc-300 dark:border-zinc-800 transition-transform duration-500 group-hover:scale-[1.02]"
              src={"/imagens/logos/AndreyAbout.png"}
              width={350}
              height={350}
              alt="Eu mesmo"
              priority
            />
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl mb-10 flex items-center gap-3">
            <span className="hidden md:flex w-12 h-[3px] dark:bg-blue-500 bg-blue-950 rounded-full"></span>
            Trajetória e Evolução
          </h2>

          <div className="grid gap-8">
            <div className="dark:bg-gray-900/50 bg-gray-200 border border-zinc-300 dark:border-zinc-800 p-8 rounded-3xl dark:hover:bg-gray-900/100 hover:bg-gray-300/50 transition-all duration-300">
              <h3 className="m-0 dark:text-blue-500 text-blue-950 mb-4 uppercase text-xs tracking-widest font-bold">O Primeiro Contato</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                Tudo começou com a pergunta: &quot;Como isso funciona?&quot;. Cresci explorando jogos e sites, fascinado pela engenharia por trás das telas. O ponto de virada foi o desenvolvimento de um <strong>bot para Discord</strong>, onde vi, pela primeira vez, a lógica se transformar em action imediata. Com o incentivo fundamental do meu irmão, já formado na área, dei meus primeiros passos no mundo do HTML, CSS e JavaScript, culminando na criação de um portfólio escolar que marcou o início oficial da minha carreira.
              </p>
            </div>

            <div className="dark:bg-gray-900/50 bg-gray-200 border border-zinc-300 dark:border-zinc-800 p-8 rounded-3xl dark:hover:bg-gray-900/100 hover:bg-gray-300/50 transition-all duration-300">
              <h3 className="m-0 dark:text-blue-500 text-blue-950 mb-4 uppercase text-xs tracking-widest font-bold">Base Científica</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                Para elevar meu nível técnico, ingressei no curso de <strong>Ciência da Computação na UNIP</strong>. Na universidade, expandi minha visão para além da superfície, mergulhando em estruturas de dados e algoritmos avançados. Um dos marcos dessa fase foi o desenvolvimento do projeto NavRomênia, onde implementei o algoritmo de busca informada IDA* para resolver problemas de rotas complexas, unindo teoria acadêmica e interface gráfica.
              </p>
            </div>

            <div className="dark:bg-gray-900/50 bg-gray-200 border border-zinc-300 dark:border-zinc-800 p-8 rounded-3xl dark:hover:bg-gray-900/100 hover:bg-gray-300/50 transition-all duration-300">
              <h3 className="m-0 dark:text-blue-500 text-blue-950 mb-4 uppercase text-xs tracking-widest font-bold">Experiência Real</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                Atualmente, atuo como <strong>Estagiário de TI na Prefeitura Municipal de Itanhaém</strong>. Neste ambiente de missão crítica, aprendi a importância da agilidade e da precisão. Desenvolvi scripts de automação que otimizam o workflow do setor de helpdesk, garantindo que a tecnologia sirva como facilitadora para o serviço público. É aqui que aplico diariamente meu conhecimento em Python e lógica de software para resolver demandas reais da minha comunidade.
              </p>
            </div>
          </div>
        </section>

        <h2 className="text-3xl mb-10 flex items-center gap-3">
          <span className="hidden md:flex w-12 h-[3px] dark:bg-blue-500 bg-blue-950 rounded-full"></span>
          Essência e Hobbies
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-20">
          <div className="dark:bg-gray-900/50 bg-gray-200 border border-zinc-300 dark:border-zinc-800 p-8 rounded-[2.5rem] transition-colors duration-300">
            <h3 className="mt-0 dark:text-blue-500 text-blue-950 mb-6 font-bold">Mente e Corpo</h3>
            <div className="space-y-4 text-zinc-700 dark:text-zinc-400">
              <p>
                Acredito extremamente que um bom desenvolvedor precisa de equilíbrio. Minha rotina é rigorosa com <strong>treinos diários na academia</strong>, uma prática que me ensinou disciplina, paciência e a importância de superar limites físicos, qualidades que levo diretamente para a resolução de bugs complexos.
              </p>
              <p>
                A <strong>música</strong> também é um pilar na minha vida. Ela é minha companheira constante durante as horas de foco intenso no terminal e também nos momentos de relaxamento, servindo como uma fonte inesgotável de inspiração e criatividade.
              </p>
            </div>
          </div>

          <div className="dark:bg-gray-900/50 bg-gray-200 border border-zinc-300 dark:border-zinc-800 p-8 rounded-[2.5rem] transition-colors duration-300">
            <h3 className="mt-0 dark:text-blue-500 text-blue-950 mb-6 font-bold">O Universo dos Games</h3>
            <p className="text-zinc-700 dark:text-zinc-400 mb-6">
              Os jogos foram minha porta de entrada para a tecnologia e continuam sendo minha maior paixão. Mais do que entretenimento, vejo nos games obras-primas de software e narrativa.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="dark:bg-gray-900/60 bg-gray-300/70 p-4 rounded-2xl border border-zinc-300 dark:border-zinc-700/50">
                <span className="dark:text-blue-500 text-blue-950 font-bold block mb-1 text-sm">Favoritos</span>
                <span className="text-xs dark:text-zinc-300 text-zinc-800 italic font-medium">Project Zomboid, Minecraft, Divinity</span>
              </div>
              <div className="dark:bg-gray-900/60 bg-gray-300/70 p-4 rounded-2xl border border-zinc-300 dark:border-zinc-700/50">
                <span className="dark:text-blue-500 text-blue-950 font-bold block mb-1 text-sm">RPG de Mesa</span>
                <span className="text-xs dark:text-zinc-300 text-zinc-800 italic font-medium">Ordem Paranormal, D&D</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
              Adoro o desafio de jogos &quot;soulslike&quot; e a liberdade criativa de mundos abertos, elementos que moldaram minha persistência como programador.
            </p>
          </div>
        </div>

        <div className="text-center py-10 border-t border-zinc-300 dark:border-zinc-800 transition-colors duration-300">
          <p className="text-zinc-500 italic m-0">
            &quot;Sempre em constante evolução, buscando o próximo desafio técnico.&quot;
          </p>
        </div>

      </article>
    </div>
  );
}