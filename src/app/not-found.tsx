import { IconHomeFilled, IconPhone } from "@tabler/icons-react";
import Link from "next/link";

export default function NotPage() {
    return (
        <div className="w-full bg-backLight dark:bg-backDark min-h-screen flex flex-col md:flex-row justify-center items-center px-6 py-12 md:px-20 lg:px-40 gap-10 md:gap-20 transition-colors duration-300">

            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 order-2 md:order-1">
                <div className="space-y-2">
                    <span className="text-teal-600 dark:text-teal-400 font-mono text-xs tracking-widest uppercase font-bold">
                        Erro de Navegação
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                        Página não encontrada. <br className="hidden sm:inline" />Precisando de ajuda?
                    </h1>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-md">
                        O link que você tentou acessar não existe mais ou foi movido para outro endereço. Use os caminhos rápidos abaixo para se guiar.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                    <Link
                        href={"/"}
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950 font-semibold text-sm rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 shadow-md active:scale-95"
                    >
                        <IconHomeFilled size={18} /> Voltar para o início
                    </Link>
                    <Link
                        href={"/contact"}
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 font-semibold text-sm rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 dark:hover:text-white transition-all duration-200 active:scale-95"
                    >
                        <IconPhone size={18} /> Contate-me
                    </Link>
                </div>
            </div>

            <div className="flex justify-center items-center order-1 md:order-2 select-none pointer-events-none relative group">
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                <h1 className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 dark:from-blue-500 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent drop-shadow-sm select-none">
                    404
                </h1>
            </div>

        </div>
    );
}