import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:pt-20">
      <article className="prose prose-p:text-black dark:prose-invert dark:prose-p:text-white max-w-none">

        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16 dark:bg-gray-900/50 bg-gray-400 p-10 rounded-[2.5rem] border border-zinc-800 shadow-xl">
          <div className="flex-1">
            <h1 className="mb-4 dark:text-blue-500 text-blue-950 text-4xl font-bold">Andrey Cadmo</h1>
            <h2 className="text-xl font-medium dark:text-zinc-400 mb-6 border-b border-zinc-800 pb-2">
              Desenvolvedor Full-Stack & Acadêmico de Ciência da Computação
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed text-lg">
              <p>
                Residente na cidade litorânea de Itanhaém, São Paulo, sou um entusiasta da tecnologia que encontrou na programação o meio perfeito para transformar ideias em soluções reais. Minha jornada é movida por uma curiosidade incansável e pela busca constante por excelência técnica.
              </p>
              <p>
                Acredito que o desenvolvimento de software vai muito além de apenas escrever código. Trata-se de entender problemas, arquitetar soluções eficientes e criar experiências que facilitem a vida das pessoas. Com uma base sólida em lógica e uma mente aberta para novas stacks, dedico meus dias a construir o futuro da tecnologia, linha por linha.
              </p>
              <p>
                Quem me conhece sabe que não recuo diante de desafios complexos. Seja otimizando um fluxo de trabalho no setor público ou implementando algoritmos de inteligência artificial na universidade, meu foco está sempre na entrega de valor e no aprendizado contínuo.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              className="relative rounded-[2.5rem] shadow-2xl animate-aboutImage border-2 border-zinc-800 transition-transform duration-500 group-hover:scale-[1.02]"
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
            <div className="dark:bg-gray-900/50 bg-gray-400 border border-zinc-800 p-8 rounded-3xl dark:hover:bg-gray-900/100 hover:bg-gray-500/70 transition-all">
              <h3 className="m-0 dark:text-blue-500 text-blue-950 mb-4 uppercase text-xs tracking-widest font-bold">O Primeiro Contato</h3>
              <p className="text-zinc-300">
                Tudo começou com a pergunta: "Como isso funciona?". Cresci explorando jogos e sites, fascinado pela engenharia por trás das telas. O ponto de virada foi o desenvolvimento de um <strong>bot para Discord</strong>, onde vi, pela primeira vez, a lógica se transformar em ação imediata. Com o incentivo fundamental do meu irmão, já formado na área, dei meus primeiros passos no mundo do HTML, CSS e JavaScript, culminando na criação de um portfólio escolar que marcou o início oficial da minha carreira.
              </p>
            </div>

            <div className="dark:bg-gray-900/50 bg-gray-400 border border-zinc-800 p-8 rounded-3xl dark:hover:bg-gray-900/100 hover:bg-gray-500/70  transition-all">
              <h3 className="m-0 dark:text-blue-500 text-blue-950 mb-4 uppercase text-xs tracking-widest font-bold">Base Científica</h3>
              <p className="text-zinc-300">
                Para elevar meu nível técnico, ingressei no curso de <strong>Ciência da Computação na UNIP</strong>. Na universidade, expandi minha visão para além da superfície, mergulhando em estruturas de dados e algoritmos avançados. Um dos marcos dessa fase foi o desenvolvimento do projeto NavRomênia, onde implementei o algoritmo de busca informada IDA* para resolver problemas de rotas complexas, unindo teoria acadêmica e interface gráfica.
              </p>
            </div>

            <div className="dark:bg-gray-900/50 bg-gray-400 border border-zinc-800 p-8 rounded-3xl dark:hover:bg-gray-900/100 hover:bg-gray-500/70 transition-all">
              <h3 className="m-0 dark:text-blue-500 text-blue-950 mb-4 uppercase text-xs tracking-widest font-bold">Experiência Real</h3>
              <p className="text-zinc-300">
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
          <div className="dark:bg-gray-900/50 bg-gray-400 border border-zinc-800 p-8 rounded-[2.5rem]">
            <h3 className="mt-0 dark:text-blue-500 text-blue-950 mb-6">Mente e Corpo</h3>
            <div className="space-y-4 text-zinc-400">
              <p>
                Acredito extremamente que um bom desenvolvedor precisa de equilíbrio. Minha rotina é rigorosa com <strong>treinos diários na academia</strong>, uma prática que me ensinou disciplina, paciência e a importância de superar limites físicos, qualidades que levo diretamente para a resolução de bugs complexos.
              </p>
              <p>
                A <strong>música</strong> também é um pilar na minha vida. Ela é minha companheira constante durante as horas de foco intenso no terminal e também nos momentos de relaxamento, servindo como uma fonte inesgotável de inspiração e criatividade.
              </p>
            </div>
          </div>

          <div className="dark:bg-gray-900/50 bg-gray-400 border border-zinc-800 p-8 rounded-[2.5rem]">
            <h3 className="mt-0 dark:text-blue-500 text-blue-950 mb-6">O Universo dos Games</h3>
            <p className="text-zinc-400 mb-6">
              Os jogos foram minha porta de entrada para a tecnologia e continuam sendo minha maior paixão. Mais do que entretenimento, vejo nos games obras-primas de software e narrativa.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="dark:bg-gray-900/50 bg-gray-400 p-4 rounded-2xl border border-zinc-700/50">
                <span className="dark:text-blue-500 text-blue-950 font-bold block mb-1">Favoritos</span>
                <span className="text-sm dark:text-zinc-300 italic">Project Zomboid, Minecraft, Divinity</span>
              </div>
              <div className="dark:bg-gray-900/50 bg-gray-400 p-4 rounded-2xl border border-zinc-700/50">
                <span className="dark:text-blue-500 text-blue-950 font-bold block mb-1">RPG de Mesa</span>
                <span className="text-sm dark:text-zinc-300 italic">Ordem Paranormal, D&D</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Adoro o desafio de jogos "soulslike" e a liberdade criativa de mundos abertos, elementos que moldaram minha persistência como programador.
            </p>
          </div>
        </div>

        <div className="text-center py-10 border-t border-zinc-800">
          <p className="text-zinc-500 italic">
            "Sempre em constante evolução, buscando o próximo desafio técnico."
          </p>
        </div>

      </article>
    </div>
  );
}