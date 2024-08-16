"use client"

import { useState } from "react"
import { useNotify } from "@/context/notifyContext"

export type EmailDataType = {
    nome: string,
    assunto: string,
    email: string,
    mensagem: string
}

const initialData: EmailDataType = {
    nome: "",
    assunto: "",
    email: "",
    mensagem: ""
}

export default function Form() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { setMessage } = useNotify();

    const [data, setData] = useState<EmailDataType>(initialData);

    async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true),
            await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => {
                setData(initialData)
                setMessage("Mensagem enviada com sucesso!")
            }).catch(err => {
                setMessage("Erro ao enviar mensagem")
            }).finally(() => setIsLoading(false))

    }

    return (
        <form className="md:col-span-8" onSubmit={handleOnSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide  text-xs font-bold mb-2"
                        htmlFor="grid-first-name">
                        Nome
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 dark:bg-slate-700  border dark:border-slate-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text" placeholder="Andrey" disabled={isLoading} required
                        value={data.nome}
                        onChange={(e) => setData({ ...data, nome: e.target.value })} />

                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                        htmlFor="grid-last-name">
                        Assunto
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 dark:bg-slate-700 border border-gray-200 dark:border-slate-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text" placeholder="Conhecer-me" disabled={isLoading} required
                        value={data.assunto}
                        onChange={(e) => setData({ ...data, assunto: e.target.value })} />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Endereço de email
                    </label>
                    <input name="Email"
                        className="appearance-none block w-full bg-gray-200 dark:bg-slate-700  border border-gray-200 dark:border-slate-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="email" placeholder="********@*****.**" disabled={isLoading} required
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Sua mensagem
                    </label>
                    <textarea rows={10} name="Mensagem"
                        className="appearance-none block w-full bg-gray-200 dark:bg-slate-700  border border-gray-200 dark:border-slate-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" disabled={isLoading}
                        value={data.mensagem}
                        onChange={(e) => setData({ ...data, mensagem: e.target.value })}
                    />
                </div>
                <div className="flex w-full px-3 items-center justify-end">
                    <button type="submit" className="text-2 px-20 py-1 border-solid border-2 border-sky-500 rounded-lg hover:bg-sky-500 duration-500 disabled:hover:bg-slate-700 disabled:border-gray-700" disabled={isLoading}>
                        {isLoading ? "Carregando..." : 'Enviar'}
                    </button>
                </div>
            </div>
        </form>
    )
}
