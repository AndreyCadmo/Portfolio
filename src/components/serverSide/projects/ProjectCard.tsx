"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconBellExclamation, IconFilter, IconArrowsSort } from "@tabler/icons-react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { supabase } from "@/app/api/lib/supabase";

interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
    live?: string;
    category: string;
    project_date: string;
}

export function ProjectCard({ project, index }: { project: Project, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className="overflow-hidden rounded-2xl shadow-lg border md:flex dark:border-gray-800 dark:bg-gray-900/50 bg-gray-400 dark:text-white mb-10 backdrop-blur-sm">
            <div className={`flex w-full max-md:flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}>
                <img
                    src={project.image}
                    alt={project.name}
                    className={`w-full h-48 object-cover md:h-full md:w-3/6 rounded-lg hover:scale-105 ${isEven ? "hover:rotate-1" : "hover:-rotate-1"} transition-transform duration-300 ease-in-out`}
                />
                <div className="p-8 flex flex-col justify-between flex-grow max-sm:gap-4 md:gap-0">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-500">{project.category}</span>
                            <span className="text-[10px] text-gray-500 font-mono">{new Date(project.project_date).getFullYear()}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
                        <p className="dark:text-gray-400 leading-relaxed text-sm">{project.description}</p>
                    </div>

                    <div>
                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="dark:bg-gray-800 bg-gray-300 text-[10px] font-bold px-3 py-1 rounded-md uppercase border dark:border-gray-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-6 mt-6 pt-4 border-t dark:border-gray-800">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 dark:text-blue-400 dark:hover:text-blue-300 font-bold text-xs uppercase tracking-wider">
                                <FaGithub size={16} /> GitHub
                            </a>
                            {project.live && (
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 dark:text-green-400 dark:hover:text-green-300 font-bold text-xs uppercase tracking-wider">
                                    <FaExternalLinkAlt size={14} /> Acessar
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProjectsList() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
    const [ordemCrescente, setOrdemCrescente] = useState(false);

    useEffect(() => {
        async function getProjects() {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order("project_date", { ascending: false });

            if (error) console.error("Erro:", error);
            else setProjects(data || []);
            setLoading(false);
        }
        getProjects();
    }, []);

    const projetosFiltrados = projects
        .filter(p => categoriaAtiva === "Todos" || p.category === categoriaAtiva)
        .sort((a, b) => {
            const dateA = new Date(a.project_date).getTime();
            const dateB = new Date(b.project_date).getTime();
            return ordemCrescente ? dateA - dateB : dateB - dateA;
        });

    if (loading) return <div className="flex w-full h-full items-center justify-center text-center py-20 text-2xl">Carregando os projetos... 🐘</div>;

    return (
        <div className="flex flex-col md:flex-row gap-8 w-full">

            <aside className="md:w-64 flex-shrink-0">
                <div className="sticky top-28 space-y-8">

                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-gray-500">
                            <IconFilter size={18} />
                            <h3 className="text-xs font-black uppercase tracking-widest">Filtrar por</h3>
                        </div>
                        <div className="flex flex-col gap-2">
                            {["Todos", "Front-end", "Back-end", "Full-stack"].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategoriaAtiva(cat)}
                                    className={`text-left px-4 py-2 rounded-xl text-xs font-bold transition-all border ${categoriaAtiva === cat
                                        ? "bg-blue-600 border-blue-500 text-white shadow-lg dark:shadow-blue-900/40 scale-105"
                                        : "dark:text-gray-400 dark:border-gray-800 dark:hover:bg-gray-800 border-transparent"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 pt-6 border-t dark:border-gray-800">
                        <div className="flex items-center gap-2 text-gray-500">
                            <IconArrowsSort size={18} />
                            <h3 className="text-xs font-black uppercase tracking-widest">Ordenar</h3>
                        </div>
                        <select
                            onChange={(e) => setOrdemCrescente(e.target.value === "asc")}
                            className="w-full dark:bg-gray-900 border dark:border-gray-800 rounded-xl p-3 text-xs font-bold outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                        >
                            <option value="desc">Mais Recentes</option>
                            <option value="asc">Mais Antigos</option>
                        </select>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-600/10 border border-blue-600/20">
                        <p className="text-[10px] text-blue-400 font-bold uppercase text-center">
                            {projetosFiltrados.length} projetos encontrados
                        </p>
                    </div>

                    <div className="mt-12 p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-center space-y-3 shadow-inner">
                        <p className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">Feedback</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Gostou de algum projeto ou tem uma ideia?
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors"
                        >
                            Me avise! →
                        </Link>
                    </div>

                    <div>
                        <p className="text-[10px] text-gray-500 font-mono italic text-center">
                            Dica: Clique no Github para ver o código-fonte ou no link externo para acessar a aplicação ao vivo!
                        </p>
                    </div>

                    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-black mt-20">
                        <div className="max-w-screen-2xl mx-auto px-5 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500">

                            <p className="text-xs font-medium">
                                © {new Date().getFullYear()} Andrey Cadmo. Todos os direitos reservados.
                            </p>

                            <Link
                                href="/admin"
                                className="text-[10px] font-mono text-gray-300 dark:text-gray-700 hover:text-blue-500 transition-colors"
                                title="Acesso Administrativo"
                            >
                                [adm]
                            </Link>
                        </div>
                    </footer>
                </div>
            </aside>

            <main className="flex-grow">
                {projetosFiltrados.length > 0 ? (
                    projetosFiltrados.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))
                ) : (
                    <div className="py-20 text-center border-2 border-dashed dark:border-gray-800 rounded-3xl">
                        <p className="text-gray-500 font-bold italic">Nenhum projeto encontrado nesta categoria...</p>
                    </div>
                )}
            </main>

        </div>
    );
}