import Loading from "@/components/clientSide/Loading";
import Pagina from "@/components/serverSide/Pagina";
import { Suspense } from "react";

export default function Layout(props: any) {
    return (
        <Pagina>
            <Suspense fallback={<Loading />}>
                {props.children}
            </Suspense>
        </Pagina>
    );
}