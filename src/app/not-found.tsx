import { IconHomeFilled, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function NotPage() {
    return (
        <div className="bg-back h-screen flex justify-center items-center">
            <Image width={600} height={0} className=" absolute bottom-0 left-0 scale-x-[-1] max-md:bottom-[-4em]" src="svg/wave.svg" alt="" />
            <Image width={700} height={0} className=" absolute top-0 right-0 scale-x-[-1] rotate-180" src="svg/wave.svg" alt="" />
            <div className="flex h-full w-full">
                <div className="flex-1 flex flex-col justify-center items-start p-5 gap-5">
                    <h1 className="text-2xl">Página não encontrada, precisando de ajuda?</h1>
                    <Link href={"/"} className="flex gap-1 text-red-200">
                    <IconHomeFilled /> Voltar para a página inicial
                    </Link>
                    <Link href={"/contact"} className="flex gap-1 text-red-200">
                    <IconPhone /> Contate-nós
                    </Link>
                </div>
                <div className="flex-[0.5] justify-center items-center flex ">
                    <h1 className="text-red-800 font-bold text-9xl">404</h1>
                </div>
            </div>
        </div>
    )
}