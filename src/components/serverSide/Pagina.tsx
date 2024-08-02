import Cabecalho from "./Cabecalho"

export default function Pagina(props: any) {
    return (
        <div>
            <div className="bg-[#1B1E2E] h-screen">
                <Cabecalho />
                <div className="mx-2 my-1">
                    {props.children}
                </div>
            </div>
        </div>
    );
}