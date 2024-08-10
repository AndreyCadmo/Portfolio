import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type LinkButtonProps = LinkProps & {
    children: ReactNode;
}

export default function LinkButton({
    href,
    children,
    ...props
}: LinkButtonProps) {
    return (
        <Link href={href} {...props} className="text-2 p-1 mt-3 border-solid border-2 border-sky-500 rounded-lg hover:bg-sky-500 duration-500">
            {children}
        </Link>
    )
}