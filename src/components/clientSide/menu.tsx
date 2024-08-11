'use client';

import { IconHomeFilled } from "@tabler/icons-react";
import ButtonCabecalho from "./ButtonCabecalho";
import { ThemeToggle } from "./ThemeToggle";
import { usePathname } from "next/navigation";

export function Menu() {
    const pathName = usePathname();
    const isActualPage = pathName === "/home" ? "Home" : pathName === "/about" ? "Sobre" : pathName === "/projects" ? "Projetos" : pathName === "/contact" ? "Contato" : "Home";

    return (
        <div className="flex justify-center">
            <button type="button" onClick={MenuEvent} className="md:hidden  inline-flex justify-center items-center w-full min-w-20 px-4 py-2 text-sm font-medium dark:bg-menuDark bg-menuLight rounded-md">
                {isActualPage}
                <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                </svg>
            </button>

            <div onClick={MenuEvent} className="menu hidden md:hidden absolute mt-10 max-w-24 p-5 gap-5 flex-col items-center bg-menuLight dark:bg-menuDark rounded-b-2xl transition duration-300">
                <ThemeToggle />
                <ButtonCabecalho link="/home"><IconHomeFilled size={18} /></ButtonCabecalho>
                <ButtonCabecalho link="/about">Sobre</ButtonCabecalho>
                <ButtonCabecalho link="/projects">Projetos</ButtonCabecalho>
                <ButtonCabecalho link="/contact">Contato</ButtonCabecalho>
            </div>
        </div>
    )
}

export function MenuEvent() {
    console.log('MenuEvent');
    const menu = document.querySelector('.menu');

    menu?.classList.toggle('hidden')
    menu?.classList.toggle('flex')
}