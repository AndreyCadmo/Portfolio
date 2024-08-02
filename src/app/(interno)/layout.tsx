import Pagina from "@/components/serverSide/Pagina";

export default function Layout(props: any) {
    return (
        <Pagina>
            {props.children}
        </Pagina>

    );
}