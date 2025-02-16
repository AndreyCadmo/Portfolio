'use client'

import { createContext, useContext, useMemo, useState } from "react";

type MessageType = {
    value: string,
    type: "error" | "success"
}

type NotifyContextType = {
    message: MessageType | null,
    setMessage: (message: MessageType) => void
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
    const [message, setMessage] = useState<MessageType | null>(null)

    useMemo(() => {
        if (message) {
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }
    }, [message])


    return (
        <NotifyContext.Provider value={{ message, setMessage }}>
            {message && (
                    <div className={`max-md:w-full ${message.type === "error" ? "notify-error" : "notify"}`}>
                        <div className="flex flex-col items-center text-black px-4 py-3 rounded" role="alert">
                            <strong className="font-bold">{message.type.toUpperCase()}</strong>
                            <span className="block sm:inline">{message.value}</span>
                        </div>
                    </div>
                )}
            {children}
        </NotifyContext.Provider>
    )
}