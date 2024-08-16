'use client'

import { createContext, useContext, useMemo, useState } from "react";

type NotifyContextType = {
    message: string,
    setMessage: (message: string) => void
}

const NotifyContext = createContext({} as NotifyContextType)

export const useNotify = () => {
    const context = useContext(NotifyContext)
    if (!context) {
        throw new Error("useNotify must be used within a NotifyContextProvider")
    }
    return context
}

type NotifyContextProviderProps = {
    children: React.ReactNode
}

export default function NotifyContextProvider({ children }: NotifyContextProviderProps) {
    const [message, setMessage] = useState<string>("")

    useMemo(() => {
        if (message) {
            setTimeout(() => {
                setMessage("")
            }, 5000)
        }
    }, [message])

    return (
        <NotifyContext.Provider value={{ message, setMessage }}>
            {message && (
                <div className="max-md:w-full notify">
                    <div className="flex flex-col items-center text-black px-4 py-3 rounded" role="alert">
                        <strong className="font-bold">Sucesso!</strong>
                        <span className="block sm:inline">{message}</span>
                    </div>
                </div>
            )}
            {children}
        </NotifyContext.Provider>
    )
}