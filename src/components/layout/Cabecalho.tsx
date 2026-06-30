import { IconHomeFilled } from "@tabler/icons-react";
import ButtonCabecalho from "../common/ButtonCabecalho";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Menu } from "./menu";

export default function Cabecalho() {
    return (
        <div className="flex bg-header2 dark:bg-header p-2 justify-between items-center w-full md:fixed relative top-0 left-0 z-50">
            <ButtonCabecalho link="/" hideBorder={true}>
                <img className="w-8" src="images/Ac.png" alt="Andrey Cadmo" />
            </ButtonCabecalho>
            <Menu />
            <div className="flex gap-8 max-md:hidden">
                <ThemeToggle />
                <ButtonCabecalho link="/about">Sobre</ButtonCabecalho>
                <ButtonCabecalho link="/projects">Projetos</ButtonCabecalho>
                <ButtonCabecalho link="/contact">Contato</ButtonCabecalho>
            </div>
        </div >
    );
}
