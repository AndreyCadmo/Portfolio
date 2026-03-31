import { ProjectsList } from "@/components/serverSide/projects/ProjectCard";

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="min-h-72 border-b-2 bg-gradient-to-b from-slate-400 dark:from-slate-900 dark:border-white border-black rounded-b-lg justify-center flex flex-col items-center gap-5">
        <h1 className="md:text-6xl text-5xl font-bold">Meus Projetos</h1>
        <p className="text-gray-600 dark:text-gray-400">Vamos ver o que eu já fiz até agora?</p>
      </div>

      <div className="max-w-screen-2xl mx-auto py-10 px-5 flex flex-col md:flex-row gap-10">
        <ProjectsList />
      </div>
    </div>
  );
}