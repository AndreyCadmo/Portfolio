
import { IconHomeFilled } from "@tabler/icons-react";
import ButtonCabecalho from "../clientSide/ButtonCabecalho";

export default function Cabecalho() {
    return (
        <div className="flex bg-[#0D0F17] p-2 justify-between items-center">
            <ButtonCabecalho link="/"><img className="w-8" src="images/logos/Ac.png" alt="Andrey Cadmo" /></ButtonCabecalho>
            <div className="flex gap-8">
                <ButtonCabecalho link="/home"><IconHomeFilled size={18}/></ButtonCabecalho>
                <ButtonCabecalho link="/about">Sobre</ButtonCabecalho>
                <ButtonCabecalho link="/projects">Projetos</ButtonCabecalho>
                <ButtonCabecalho link="/contact">Contato</ButtonCabecalho>
            </div>
        </div>
    );
}