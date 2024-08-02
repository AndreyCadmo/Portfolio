"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ButtonCabecalho(props: any) {
    const pathname = usePathname();
    const isProjetosPage = pathname === props.link;

    return (
        <Link className="text-xs flex items-center" href={props.link} style={{borderBottom: isProjetosPage ? '2px solid white' : 'none'}}>
            {props.children}
        </Link>
    )
}