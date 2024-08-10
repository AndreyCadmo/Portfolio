import { WaveComponentFullClient } from "@/components/clientSide/WaveContainer/WaveComponent";
import { ProjectsList } from "@/components/serverSide/projects/ProjectCard";


export default function Page() {
  return (
    <div>
      <div className="min-h-72 border-2 bg-gradient-to-b from-slate-400 dark:from-slate-900 dark:border-white border-black rounded-b-lg  justify-center flex flex-col items-center gap-5">
        <h1 className="text-6xl">Meus Projetos</h1>
        <p>Vamos ver oque eu já fiz até agora?</p>
      </div>
      <ProjectsList />
    </div>
  );
}