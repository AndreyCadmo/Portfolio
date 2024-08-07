import { IconHomeFilled } from "@tabler/icons-react";
import ButtonCabecalho from "../clientSide/ButtonCabecalho";

export default function Cabecalho() {
    
    return (
        <div className="flex bg-header p-2 justify-between items-center z-10 relative">
            <ButtonCabecalho link="/"><img className="w-8" src="imagens/logos/Ac.png" alt="Andrey Cadmo" /></ButtonCabecalho>
            <div className="flex gap-8">
                <ButtonCabecalho link="/home"><IconHomeFilled size={18}/></ButtonCabecalho>
                <ButtonCabecalho link="/about">Sobre</ButtonCabecalho>
                <ButtonCabecalho link="/projects">Projetos</ButtonCabecalho>
                <ButtonCabecalho link="/contact">Contato</ButtonCabecalho>
            </div>
        </div>
    );
}