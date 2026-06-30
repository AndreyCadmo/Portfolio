import { supabase } from "@/app/api/lib/supabase";

export default async function FeaturedProjects() {
    const { data: projects, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: false })
        .limit(2);

    if (error || !projects) {
        console.error("Erro ao carregar projetos destacados:", error);
        return <p className="text-zinc-500 text-sm">Não foi possível carregar os projetos no momento.</p>;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {projects.map((project: any) => {
                const title = project.title || project.name || "Projeto Sem Título";
                const type = project.category || "Web App";
                const description = project.description || "Sem descrição disponível.";
                const tags = project.technologies || [];
                const github = project.link || "";
                const deploy = project.live || "";
                const image = project.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=60";

                return (
                    <div
                        key={project.id}
                        className="group bg-zinc-900/5 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col sm:flex-row h-auto sm:h-64 hover:border-teal-500 dark:hover:border-teal-500 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <div className="w-full sm:w-2/5 relative h-48 sm:h-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3">
                                <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-1 bg-zinc-900/80 text-zinc-100 rounded backdrop-blur-sm border border-zinc-700/50">
                                    {type}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col justify-between flex-1 min-w-0">
                            <div>
                                <h3 className="text-lg font-bold truncate group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2 text-zinc-900 dark:text-zinc-50">
                                    {title}
                                </h3>

                                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                                    {description}
                                </p>
                            </div>

                            <div className="space-y-3">
                                {tags.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5">
                                        {tags.slice(0, 3).map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-semibold px-2 py-0.5 bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {tags.length > 3 && (
                                            <span className="text-[10px] text-zinc-400 font-mono self-center">
                                                +{tags.length - 3}
                                            </span>
                                        )}
                                    </div>
                                )}

                                <div className="flex items-center gap-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 text-xs font-semibold">
                                    {github && (
                                        <a
                                            href={github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-700 dark:text-zinc-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors flex items-center gap-1"
                                        >
                                            GitHub →
                                        </a>
                                    )}
                                    {deploy && (
                                        <a
                                            href={deploy}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 transition-colors flex items-center gap-1"
                                        >
                                            Acessar →
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}