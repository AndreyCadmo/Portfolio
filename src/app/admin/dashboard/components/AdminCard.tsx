"use client";

import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string; 
  technologies: string[];
  live?: string; 
  category?: string; 
}

interface AdminCardProps {
  project: Project;
  onDelete: (id: number) => void;
  onEdit: (project: Project) => void; 
}

export function AdminCard({ project, onDelete, onEdit }: AdminCardProps) {
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = async () => {
    if (confirm(`Deseja realmente deletar o projeto "${project.name}"?`)) {
      setLoading(true);
      await onDelete(project.id);
      setLoading(false);
    }
  };

  

  return (
    <div className="overflow-hidden rounded-2xl shadow-xl border bg-neutral-900 border-neutral-800 text-white flex flex-col md:flex-row mb-6 relative group transition-all hover:border-neutral-700 min-h-[300px]">
      
      <div className="w-full md:w-1/2  relative overflow-hidden bg-black flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover  group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-500 font-mono italic">
            Sem Imagem
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col justify-between flex-grow gap-6 md:w-1/2">
        <div>
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-3xl font-bold tracking-tight">{project.name}</h2>
            
            {project.category && (
              <span className="bg-blue-600/20 text-blue-400 text-xs px-3 py-1 rounded-full border border-blue-500/30 font-semibold uppercase tracking-wider">
                {project.category}
              </span>
            )}
          </div>
          
          <p className="text-neutral-400 mt-4 leading-relaxed text-base">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="bg-neutral-800 text-neutral-300 text-[10px] uppercase font-bold px-3 py-1 rounded-md border border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-4 pt-6 border-t border-neutral-800/50">
          
          <div className="flex gap-6">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-all transform hover:-translate-y-0.5"
            >
              <FaGithub size={20} /> <span className="text-sm font-medium">GitHub</span>
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <FaExternalLinkAlt size={18} /> <span className="text-sm font-medium">Acessar</span>
              </a>
            )}
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={() => onEdit(project)}
              className="flex-1 sm:flex-none bg-blue-600 hover:bg-blue-500 text-white text-xs font-black px-6 py-2.5 rounded-lg transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              EDITAR
            </button>
            <button
              onClick={handleDeleteClick}
              disabled={loading}
              className="flex-1 sm:flex-none bg-red-600 hover:bg-red-500 text-white text-xs font-black px-6 py-2.5 rounded-lg transition-all active:scale-95 shadow-lg shadow-red-900/20 disabled:opacity-50"
            >
              {loading ? "..." : "DELETAR"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}