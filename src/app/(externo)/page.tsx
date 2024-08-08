import {Wave} from "@/components/serverSide/svg/Wave";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen relative text-white bg-[#07090D] content-center">
      <div className="text-center relative z-10">
        <p className="font-sans font-bold text-2x1">Olá me chamo</p>
        <h1 className="line typing-animation font-sans text-4xl">Andrey Cadmo</h1>
        <div>
          <p className="text-sm mx-[20vw] my-2 p-1 border-solid border-2 border-neutral-500 rounded-xl">Sou desenvolvedor Full-stack e estudante de Ciência da Computação. Tenho experiência com Node.js, Angular, React, Next.js, Python e JavaScript, adquirida por meio de diversos cursos de programação. Estou sempre buscando novas tecnologias e aprimorando minhas habilidades para desenvolver soluções eficientes e inovadoras.
          </p>
          <p className="text-xs mt-4">Que tal me conhecer melhor?</p>
        </div>
        <button className="mt-2 p-1 border-solid border-2 border-sky-500 rounded-lg hover:bg-sky-500 duration-500">
          <Link href={"/home"}>
            <p className="text-2">ACESSAR</p>
          </Link>
        </button>
      </div>
      <Wave className="bottom-[7vw]" fill="#0D0F17"/>
      <Wave className="bottom-[4vw] scale-x-[-1]" fill="#1B1E2E"/>
      <Wave className="bottom-0" fill="#25283d"/>
    </div>
  );
}