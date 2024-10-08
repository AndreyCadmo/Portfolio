import { Suspense } from "react";
import Cabecalho from "./Cabecalho"
import Loading from "../clientSide/Loading";

export default function Pagina(props: any) {
    return (
        <div className="min-h-screen ">
            <Suspense fallback={<Loading />}>
                <div>
                    <Cabecalho />
                    {props.children}
                </div>
            </Suspense>
        </div>
    );
}