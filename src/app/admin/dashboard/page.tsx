"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/api/lib/supabase";
import { useRouter } from "next/navigation";
import { AdminCard } from "./components/AdminCard";

const slugify = (str: string) => {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

export default function AdminDashboard() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [novoProjeto, setNovoProjeto] = useState({
    name: '', description: '', image: '', link: '', live: '', technologies: '', category: 'Front-end', project_date: new Date().toISOString().split('T')[0]
  });

  const [uploadingImage, setUploadingImage] = useState(false);

  const fetchProjects = async () => {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("project_date", { ascending: false });

    setProjects(data || []);
    setLoading(false);
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/admin");
      } else {
        setUserEmail(user.email ?? null);
        fetchProjects();
      }
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files || event.target.files.length === 0) return;
      setUploadingImage(true);
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const cleanedProjectName = slugify(novoProjeto.name || 'projeto');
      const fileName = `${cleanedProjectName}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage.from('projects').upload(fileName, file);
      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabase.storage.from('projects').getPublicUrl(fileName);
      setNovoProjeto({ ...novoProjeto, image: publicUrlData.publicUrl });
    } catch (error: any) {
      alert("Erro no upload: " + error.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleEdit = (project: any) => {
    setEditingId(project.id);
    setIsEditing(true);
    setNovoProjeto({
      name: project.name,
      description: project.description,
      image: project.image,
      link: project.link || '',
      live: project.live || '',
      technologies: project.technologies ? project.technologies.join(', ') : '',
      category: project.category || 'Front-end',
      project_date: project.project_date || new Date().toISOString().split('T')[0]
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("Tem certeza que deseja deletar?")) {
      const { error } = await supabase.from("projects").delete().eq("id", id);
      if (!error) setProjects((prev) => prev.filter((p: any) => p.id !== id));
    }
  };

  if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center text-3xl font-bold">Autenticando...</div>;

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-12 pb-6 border-b border-neutral-900">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Gerenciador de Projetos</h1>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Sair
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setNovoProjeto({ name: '', description: '', image: '', link: '', live: '', technologies: '', category: 'Front-end', project_date: new Date().toISOString().split('T')[0] });
                setIsModalOpen(true);
              }}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-bold transition-all active:scale-95 shadow-lg shadow-green-900/20"
            >
              + NOVO PROJETO
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pb-20">
          {projects.map((project: any) => (
            <AdminCard key={project.id} project={project} onDelete={handleDelete} onEdit={handleEdit} />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl w-full max-w-lg shadow-2xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">
              {isEditing ? "Editar Projeto" : "Adicionar Novo Projeto"}
            </h2>

            <form onSubmit={async (e) => {
              e.preventDefault();
              const dadosParaSalvar = {
                ...novoProjeto,
                technologies: novoProjeto.technologies.split(',').map(t => t.trim())
              };

              const result = isEditing && editingId
                ? await supabase.from('projects').update(dadosParaSalvar).eq('id', editingId)
                : await supabase.from('projects').insert([dadosParaSalvar]);

              if (!result.error) {
                setIsModalOpen(false);
                fetchProjects();
              } else {
                alert("Erro: " + result.error.message);
              }
            }} className="space-y-4">

              <input className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Nome do Projeto" value={novoProjeto.name} onChange={e => setNovoProjeto({ ...novoProjeto, name: e.target.value })} required />

              <textarea className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-600 h-28"
                placeholder="Descrição" value={novoProjeto.description} onChange={e => setNovoProjeto({ ...novoProjeto, description: e.target.value })} required />

              <div className="p-4 bg-neutral-800/50 border border-neutral-800 rounded-xl space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">Mídia</label>
                {novoProjeto.image && (
                  <img src={novoProjeto.image} alt="Preview" className="w-full h-40 object-cover rounded-lg border border-neutral-700 shadow-inner" />
                )}
                <input type="file" accept="image/*" onChange={handleFileUpload} disabled={uploadingImage}
                  className="w-full text-xs text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-700" />
                {uploadingImage && <p className="text-xs text-blue-400 animate-pulse text-center">Enviando arquivo...</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  placeholder="Link GIT" value={novoProjeto.link} onChange={e => setNovoProjeto({ ...novoProjeto, link: e.target.value })} />
                <input className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                  placeholder="Link Web" value={novoProjeto.live} onChange={e => setNovoProjeto({ ...novoProjeto, live: e.target.value })} />
              </div>

              <input className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                placeholder="Tecnologias (React, Java...)" value={novoProjeto.technologies} onChange={e => setNovoProjeto({ ...novoProjeto, technologies: e.target.value })} />

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-neutral-500 ml-1">Categoria</label>
                <select value={novoProjeto.category} onChange={e => setNovoProjeto({ ...novoProjeto, category: e.target.value })}
                  className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer appearance-none">
                  <option value="Front-end">Front-end</option>
                  <option value="Back-end">Back-end</option>
                  <option value="Full-stack">Full-stack</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-neutral-500 ml-1">Data de Conclusão</label>
                <input
                  type="date"
                  value={novoProjeto.project_date}
                  onChange={e => setNovoProjeto({ ...novoProjeto, project_date: e.target.value })}
                  className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="flex gap-4 pt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 p-3 text-neutral-400 font-bold hover:text-white transition-colors text-sm uppercase">Cancelar</button>
                <button type="submit" disabled={uploadingImage}
                  className={`flex-[2] p-4 rounded-xl font-black transition-all shadow-lg ${isEditing ? 'bg-blue-600 shadow-blue-900/20' : 'bg-green-600 shadow-green-900/20'} uppercase text-xs tracking-widest`}>
                  {uploadingImage ? "Upload..." : (isEditing ? "Salvar Alterações" : "Criar Projeto")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}