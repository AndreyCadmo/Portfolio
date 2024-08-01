import Pagina from "@/components/Pagina";

export default function Layout(props: any) {
    return (
        <Pagina>
            {props.children}
        </Pagina>

    );
}