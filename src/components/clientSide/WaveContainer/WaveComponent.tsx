'use client';

import { Wave2 } from "@/components/serverSide/svg/Wave";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { ReactNode, useMemo } from "react";
import Loading from "../Loading";

type WaveComponentProps = {
    lightColor: string;
    darkColor: string;
    children?: ReactNode;
    isInvert?: boolean;
}

export function WaveComponent({
    lightColor,
    darkColor,
    children,
    isInvert = false
}: WaveComponentProps) {
    const { theme, systemTheme } = useTheme();

    const fillColor = useMemo(() => {
        if(!theme && typeof window !== "undefined") {
            return localStorage?.getItem("theme") === "dark" ? darkColor : lightColor
        } else if (theme === 'system') {
            return systemTheme === "dark" ? darkColor : lightColor
        }

        return theme === 'dark' ? darkColor : lightColor
    }, [theme, systemTheme]);

    if (isInvert)
        return (
            <div className="h-dvh relative">
                <Wave2 className="left-0 top-0 scale-y-[-1] scale-x-[-1]" fill={fillColor} />
                {children}
                <Wave2 className="right-0 bottom-0" fill={fillColor} />
            </div>)

    return (
        <section className="min-h-lvh flex max-sm:flex-col justify-between relative">
            <Wave2 className="right-0 top-0 scale-y-[-1] " fill={fillColor} />
            {children}
            <Wave2 className="left-0 bottom-0 scale-x-[-1]" fill={fillColor} />
        </section>
    )
}

export const WaveComponentFullClient =  dynamic(() => Promise.resolve(WaveComponent), {
    loading: () => <Loading />,
    ssr: false
});
