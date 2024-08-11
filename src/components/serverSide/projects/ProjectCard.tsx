import Link from "next/link";
import ProjectContent from "./ProjectsList.json";
import { IconBellExclamation } from "@tabler/icons-react";
import { Suspense } from "react";
import Loading from "@/components/clientSide/Loading";

export function ProjectCard({ project }: { project: { name: string; description: string; image: string; id: number; } }) {
    return (
        <div className="bg-cardLight dark:bg-cardDark rounded-t-xl flex flex-col leading-normal min-h-80">
            <Suspense fallback={<Loading/>}>
                <img src={project.image} className="w-full h-25 mb-3 rounded-t-xl" alt={project.name} />
            </Suspense>
            <div className="px-4 py-2 flex flex-col justify-between h-full">
                <div>
                    <p className="font-bold">{project.name}</p>
                    <p className="text-black dark:text-gray-300 text-sm">{project.description}</p>
                </div>
                <div className="flex justify-center w-full">
                    <Link href={`/projects/${project.id}`} className=" font-bold text-neutral-950 dark:text-cyan-100">Ver Projeto</Link>
                </div>
            </div>
        </div>
    );
}

export function ProjectsList() {
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            {ProjectContent.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
            <div className="bg-cardLight dark:bg-cardDark rounded-t-xl flex flex-col text-center min-h-80">
                <div className="px-4 py-2 flex flex-col justify-between h-full">
                    <p className="font-bold">Fim dos projetos</p>
                    <div className="flex flex-col items-center text-black dark:text-gray-300 text-sm">
                        <IconBellExclamation size={40} />
                        <p>Mas não fim do desenvolvimento</p>
                        <p>em breve novos projetos.</p>
                    </div>

                    <div className="flex justify-center w-full">
                        <Link href="https://github.com/AndreyCadmo" className=" font-bold text-neutral-950 dark:text-cyan-100">Ver Github</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
