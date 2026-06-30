"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ButtonCabecalho(props: any) {
    const pathname = usePathname();
    const isActualPage = pathname === props.link;
    const showBorder = isActualPage && !props.hideBorder;

    return (
        <Link className="text-xs flex items-center" href={props.link} style={{ borderBottom: showBorder ? '2px solid white' : 'none' }}>
            {props.children}
        </Link>
    )
}