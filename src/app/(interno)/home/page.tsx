import { WaveComponent, WaveComponentFullClient } from "@/components/clientSide/WaveContainer/WaveComponent";
import Image from "next/image";

export default function Page() {

  return (
    <div>
      <WaveComponentFullClient lightColor="#888E99" darkColor="#212435">
        <div className="flex-1 items-center flex flex-col max-md:mt-0 my-20 max-md:px-4 gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Bem Vindo!</h1>
            <p className="text-1x1 py-5 max-md:pr-0 pr-10">
              Olá! Sou Andrey Cadmo, tenho 18 anos e sou apaixonado por tecnologia. Sou um desenvolvedor Full-Stack especializado em Angular, Typescript, HTML e CSS, com uma forte base em Node.js, React, Next.js, Python e Javascript. Meu objetivo é desenvolver soluções digitais criativas e eficientes.
              Possuo também um amplo conhecimento no pacote Office, incluindo Word, Excel, Access e PowerPoint, o que me permite ser versátil em diversas tarefas e projetos.
              Minha participação no grêmio estudantil me ajudou a desenvolver habilidades valiosas em comunicação, trabalho em equipe e organização, que aplico em todos os meus projetos.
              Explore meu portfólio para ver meus trabalhos e projetos. Fique à vontade para entrar em contato e discutir como podemos transformar suas ideias em realidade juntos.
            </p>
          </div>
          <div className="tec flex gap-5 max-md:hidden">
            <Image width={35} height={0} src="/imagens/icons/html.png" alt="Html" />
            <Image width={35} height={0} src="/imagens/icons/css.png" alt="Css" />
            <Image width={35} height={0} src="/imagens/icons/typescript.png" alt="Typescript" />
            <Image width={35} height={0} src="/imagens/icons/angular.png" alt="Angular" />
            <Image width={35} height={0} src="/imagens/icons/nodejs.png" alt="Node" />
            <Image width={35} height={0} src="/imagens/icons/react.png" alt="React" />
            <Image width={35} height={0} src="/imagens/icons/nextjs.png" alt="Next" />
          </div>
        </div>
        <figure className="max-sm:order-first max-sm:w-40 max-sm:self-center flex-[0.5] z-50">
          <Image width={420} height={0} src="/imagens/AndreyOne.png" alt="Andrey_Imagem" />
        </figure>
      </WaveComponentFullClient>
      <WaveComponentFullClient lightColor="#888E99" darkColor="#212435" isInvert>

      </WaveComponentFullClient>
    </div>
  );
}