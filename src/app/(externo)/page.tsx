import LinkButton from "@/components/serverSide/LinkButton";
import { Wave } from "@/components/serverSide/svg/Wave";
import Link from "next/link";

export default function Home() {
  return (
    <div className="md:min-h-screen max-md:h-dvh relative text-white bg-[#07090D] content-center">
      <div className="text-center relative z-10 flex flex-col items-center max-md:mx-4">
        <p className="font-sans font-bold text-2x1">Olá me chamo</p>
        <h1 className="line animate-typing font-sans text-4xl">Andrey Cadmo</h1>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm max-w-3xl my-2 p-1 border-solid border-2 border-neutral-500 rounded-xl">Sou desenvolvedor Full-stack e estudante de Ciência da Computação. Tenho experiência com Node.js, Angular, React, Next.js, Python e JavaScript, adquirida por meio de diversos cursos de programação. Estou sempre buscando novas tecnologias e aprimorando minhas habilidades para desenvolver soluções eficientes e inovadoras.
          </p>
          <p className="text-xs mb-3 ">Que tal me conhecer melhor?</p>
        </div>

        <LinkButton href={"/home"}>
          ACESSAR
        </LinkButton>

      </div>
      <Wave className="bottom-[7vw]" fill="#0D0F17" />
      <Wave className="bottom-[4vw] scale-x-[-1]" fill="#1B1E2E" />
      <Wave className="bottom-0" fill="#25283d" />
    </div>
  );
}