import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen relative bg-gradient-to-bl from-zinc-500 to-slate-950 content-center">
      <div className="portrait:hidden">
        <img className="absolute left-2 bottom-0 w-9" src="images/dino.png" alt="" />
        <img className="absolute right-2 bottom-0 w-7" src="images/cacto.png" alt="" />
        <img className="absolute right-96 bottom-0 w-7" src="images/cacto.png" alt="" />
        <img className="absolute left-96 bottom-0 w-7" src="images/cacto.png" alt="" />
      </div>

      <div className="text-center">
        <p className="font-sans font-bold text-2x1">Olá me chamo</p>
        <h1 className="line typing-animation font-sans text-4xl">Andrey Cadmo</h1>
        <div className="">
          <p className="text-sm mx-[20vw] my-2 p-1 border-solid border-2 border-neutral-500 rounded-xl">Sou desenvolvedor Full-stack e estudante de Ciência da Computação. Tenho experiência com Node.js, Angular, React, Next.js, Python e JavaScript, adquirida por meio de diversos cursos de programação. Estou sempre buscando novas tecnologias e aprimorando minhas habilidades para desenvolver soluções eficientes e inovadoras.
          </p>
          <p className="text-xs mt-4">Que tal me conhecer melhor?</p>
        </div>
        <button className="mt-2 p-1 border-solid border-2 border-sky-500 rounded-lg">
          <Link href={"/home"}>
            <p className="text-2">ACESSAR</p>
          </Link>
        </button>
      </div>
    </div>

  );
}