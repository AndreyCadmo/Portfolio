import { WaveComponentFullClient } from "@/components/clientSide/WaveContainer/WaveComponent";
import Image from "next/image";

export default function Page() {
  const anoNascimento = 2006
  const anoAtual = new Date().getFullYear()
  const idade = anoAtual - anoNascimento
  

  return (
    <div>
      <WaveComponentFullClient lightColor="#BBBBBE" darkColor="#212435">
        <div className="prose-p:text-black dark:prose-p:text-white prose dark:prose-invert leading-relaxed tracking-wide font-medium flex flex-col text-center justify-center items-center max-w-4xl p-12 flex-3 z-10">
          <div>
            <h1>Bem Vindo!</h1>
            <p>
              Olá! Sou Andrey Cadmo, tenho {idade} anos e sou apaixonado por tecnologia.
            </p>
            <p>
              Sou um desenvolvedor Full-Stack especializado em Angular, Typescript, HTML e CSS, com uma forte base em Node.js, React, Next.js, Python e Javascript.
            </p>
            <p>
              Meu objetivo é desenvolver soluções digitais criativas e eficientes.
            </p>
            <p>
              Possuo também um amplo conhecimento no pacote Office, incluindo Word, Excel, Access e PowerPoint, o que me permite ser versátil em diversas tarefas e projetos.
              Minha participação no grêmio estudantil me ajudou a desenvolver habilidades valiosas em comunicação, trabalho em equipe e organização, que aplico em todos os meus projetos.
            </p>
            <p>
              Explore meu portfólio para ver meus trabalhos e projetos.
              Fique à vontade para entrar em contato e discutir como podemos transformar suas ideias em realidade juntos.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            <Image
              className="animate-bounce "
              alt="spring Logo"
              src={"/svg/html.svg"}
              width={60}
              height={60}
            />
            <Image
              className="animate-bounce"
              alt="spring Logo"
              src={"/svg/css.svg"}
              width={60}
              height={60}
            />
            <Image
              className="animate-bounce"
              alt="spring Logo"
              src={"/svg/javascript.svg"}
              width={60}
              height={60}
            />
            <Image
              className="animate-bounce"
              alt="spring Logo"
              src={"/svg/typescript.svg"}
              width={60}
              height={60}
            />
            <Image
              className="animate-bounce"
              alt="spring Logo"
              src={"/svg/nodejs.svg"}
              width={60}
              height={60}
            />
            <Image
              className="animate-bounce"
              alt="spring Logo"
              src={"/svg/angular.svg"}
              width={60}
              height={60}
            />
            <Image
              className="animate-bounce"
              alt="spring Logo"
              src={"/svg/react.svg"}
              width={60}
              height={60}
            />
            <Image
              className="animate-bounce"
              alt="spring Logo"
              src={"/svg/next.svg"}
              width={60}
              height={60}
            />
          </div>
        </div>
        <figure className="max-sm:order-first max-sm:w-40 max-sm:self-center flex-1 z-50">
          <Image width={420} height={0} src="/svg/euLight.svg" alt="Andrey_Imagem" className="dark:hidden animate-skewEffect" />
          <Image width={420} height={0} src="/svg/euDark.svg" alt="Andrey_Imagem" className="hidden dark:flex animate-skewEffect" />
        </figure>
      </WaveComponentFullClient>
      {/* <WaveComponentFullClient lightColor="#888E99" darkColor="#212435" isInvert>

      </WaveComponentFullClient> */}
    </div>
  );
}