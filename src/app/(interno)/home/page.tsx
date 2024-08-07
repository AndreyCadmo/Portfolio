import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-back">
      <Image width={600} height={0} className=" absolute bottom-0 left-0 scale-x-[-1] max-md:bottom-[-4em]" src="svg/wave.svg" alt="" />
      <Image width={700} height={0} className=" absolute top-0 right-0 scale-x-[-1] rotate-180" src="svg/wave.svg" alt="" />
      <section className="h-[93vh]  flex justify-between relative z-10">
        <div className="flex-1 items-center flex flex-col max-md:mt- mt-20 max-md:px-4 gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Bem Vindo!</h1>
            <p className="text-1x1 pt-5 max-md:pr-0 pr-10">
              Olá! Sou Andrey Cadmo, tenho 18 anos e sou apaixonado por tecnologia. Sou um desenvolvedor Full-Stack especializado em Angular, Typescript, HTML e CSS, com uma forte base em Node.js, React, Next.js, Python e Javascript. Meu objetivo é desenvolver soluções digitais criativas e eficientes.
              Possuo também um amplo conhecimento no pacote Office, incluindo Word, Excel, Access e PowerPoint, o que me permite ser versátil em diversas tarefas e projetos.
              Minha participação no grêmio estudantil me ajudou a desenvolver habilidades valiosas em comunicação, trabalho em equipe e organização, que aplico em todos os meus projetos.
              Explore meu portfólio para ver meus trabalhos e projetos. Fique à vontade para entrar em contato e discutir como podemos transformar suas ideias em realidade juntos.
            </p>
          </div>
          <div className="tec flex gap-5">
            <Image width={35} height={0} src="/imagens/icons/html.png" alt="Html" />
            <Image width={35} height={0} src="/imagens/icons/css.png" alt="Css" />
            <Image width={35} height={0} src="/imagens/icons/typescript.png" alt="Typescript" />
            <Image width={35} height={0} src="/imagens/icons/angular.png" alt="Angular" />
            <Image width={35} height={0} src="/imagens/icons/nodejs.png" alt="Node" />
            <Image width={35} height={0} src="/imagens/icons/react.png" alt="React" />
            <Image width={35} height={0} src="/imagens/icons/nextjs.png" alt="Next" />
          </div>
        </div>
        <figure className="max-md:hidden flex-[0.5]">
          <Image width={420} height={0} src="/imagens/AndreyOne.png" alt="Andrey_Imagem" />
        </figure>
      </section>
      <section className="bg-back2 h-screen">

      </section>
    </div>
  );
}