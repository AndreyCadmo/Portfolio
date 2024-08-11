import { WaveComponentFullClient } from "@/components/clientSide/WaveContainer/WaveComponent";
import { IconHomeFilled, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export default function NotPage() {
    return (
        <WaveComponentFullClient lightColor="#BBBBBE" darkColor="#212435">
            <div className="w-full bg-backLight dark:bg-backDark h-lvh flex justify-center items-center max-md:flex-col">
                <div className="flex-1 flex flex-col justify-center md:items-start max-md:text-center max-md:items-center p-5 gap-5">
                    <h1 className="text-2xl font-bold">Página não encontrada, precisando de ajuda?</h1>
                    <Link href={"/"} className="flex gap-1 text-slate-900 dark:text-red-200">
                        <IconHomeFilled /> Voltar para a página inicial
                    </Link>
                    <Link href={"/contact"} className="flex gap-1 text-slate-900 dark:text-red-200">
                        <IconPhone /> Contate-me
                    </Link>
                </div>
                <div className="md:flex-[0.5] max-md:flex-1 justify-center items-center flex ">
                    <h1 className="text-red-800 font-bold text-9xl">404</h1>
                </div>
            </div>
        </WaveComponentFullClient>
    )
}