import Link from "next/link";
import ProjectContent from "./ProjectsList.json";
import { IconBellExclamation } from "@tabler/icons-react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


export function ProjectCard({ project }: { project: { name: string; description: string; image: string; id: number; link: string; technologies: string[]; live?: string } }) {
    return (
        <div className="overflow-hidden rounded-2xl shadow-lg border md:flex dark:border-gray-700 dark:bg-gray-900 bg-gray-400 dark:text-white mb-10">
            <div className={`flex max-md:flex-col ${project.id % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                <img
                    src={project.image}
                    alt={project.name}
                    className={`w-full h-48 object-cover md:h-full md:w-3/6 rounded-lg hover:scale-105 ${project.id % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"} transition-transform duration-300 ease-in-out`}
                />
                <div className="p-6 flex flex-col justify-between max-sm:gap-4 md:gap-0">
                    <h2 className="text-xl font-bold">{project.name}</h2>
                    <p className="dark:text-gray-400">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="dark:bg-gray-700 bg-gray-300 text-sm px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-4 mt-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 dark:text-blue-400 dark:hover:text-blue-300 text-blue-950 hover:text-blue-850"
                            aria-label={`GitHub repository for ${project.name}`}
                        >
                            <FaGithub /> GitHub
                        </a>
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 dark:text-green-400 dark:hover:text-green-300 text-green-950 hover:text-green-850"
                                aria-label={`Live site for ${project.name}`}
                            >
                                <FaExternalLinkAlt /> Acessar
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProjectsList() {
    return (
        <div className="max-w-screen-2xl mx-auto p-5 gap-10 flex flex-col">
            {ProjectContent.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}

            <div className="overflow-hidden rounded-2xl shadow-lg border dark:border-gray-700 dark:bg-gray-900 bg-gray-400 dark:text-white">
                <div className="p-6 flex flex-col items-center text-center">
                    <h2 className="text-xl font-bold mb-4">Fim dos projetos</h2>
                    <p className="dark:text-gray-400 mb-4">Embora esses projetos tenham terminado, o desenvolvimento continua. Em breve, novas ideias e desafios irão surgir!</p>
                    <div className="flex flex-col items-center text-black dark:text-gray-300 text-sm">
                        <IconBellExclamation size={40} />
                        <p className="mt-4 font-bold text-xl">O melhor ainda está por vir!</p>
                    </div>
                    <div className="mt-6 flex justify-center w-full">
                        <Link
                            href="https://github.com/AndreyCadmo"
                            className="flex items-center gap-2 font-bold text-neutral-950 dark:text-cyan-100"
                        >
                            <FaGithub size={20} /> Visite meu Github
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
