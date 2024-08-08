import { WaveComponentFullClient } from "@/components/clientSide/WaveContainer/WaveComponent";
import { IconHomeFilled, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export default function NotPage() {
    return (
        <WaveComponentFullClient lightColor="#888E99" darkColor="#212435">
            <div className="w-full bg-backLight dark:bg-backDark h-screen flex justify-center items-center">
                <div className="flex-1 flex flex-col justify-center items-start p-5 gap-5">
                    <h1 className="text-2xl font-bold">Página não encontrada, precisando de ajuda?</h1>
                    <Link href={"/"} className="flex gap-1 text-slate-900 dark:text-red-200">
                        <IconHomeFilled /> Voltar para a página inicial
                    </Link>
                    <Link href={"/contact"} className="flex gap-1 text-slate-900 dark:text-red-200">
                        <IconPhone /> Contate-me
                    </Link>
                </div>
                <div className="flex-[0.5] justify-center items-center flex ">
                    <h1 className="text-red-800 font-bold text-9xl">404</h1>
                </div>
            </div>
        </WaveComponentFullClient>
    )
}