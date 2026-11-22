import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, MapPin } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import SiteImage from '@/components/ui/SiteImage';
import projectsData from '@/content/projects.json';

// Only the project slugs returned by generateStaticParams are published.
export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projectsData.projects.find((item) => item.slug === params.slug);
  return { title: project ? `${project.title} | Global Presentation` : 'Project Details | Global Presentation', description: project?.description };
}

export default function ProjectSlugPage({ params }: { params: { slug: string } }) {
  const project = projectsData.projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-slate-50 pb-24">
      <section className="bg-black text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="inline-flex items-center text-slate-300 hover:text-white mb-8 text-sm"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects</Link>
          <Badge className="bg-white/10 text-white border border-white/15 mb-4">{project.category}</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight max-w-4xl">{project.title}</h1>
          <div className="mt-6 flex items-center text-slate-300"><MapPin className="w-4 h-4 mr-2" /> {project.location}</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <SiteImage src={project.images[0]} alt={project.title} className="w-full aspect-video object-cover" />
            {project.images.length > 1 && <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3">{project.images.slice(1).map((image, index) => <SiteImage key={image} src={image} alt={`${project.title} view ${index + 2}`} className="w-full aspect-[4/3] object-cover rounded-xl" />)}</div>}
          </div>
          <aside className="bg-white rounded-3xl shadow-xl p-6 lg:p-8 h-fit">
            <h2 className="text-xl font-bold text-slate-900">Project Snapshot</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">{project.description}</p>
            <div className="mt-6 space-y-4 text-sm">
              <div><span className="font-semibold text-slate-900">Category:</span> <span className="text-slate-600">{project.category}</span></div>
              <div><span className="font-semibold text-slate-900">Sector:</span> <span className="text-slate-600">{project.sector}</span></div>
              <div><span className="font-semibold text-slate-900">Reference:</span> <span className="text-slate-600">{project.client}</span></div>
            </div>
          </aside>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <section className="bg-white rounded-3xl shadow-lg p-6 lg:p-8"><h2 className="text-2xl font-bold text-slate-900">Challenge</h2><p className="mt-3 text-slate-600 leading-relaxed">{project.challenge}</p></section>
          <section className="bg-white rounded-3xl shadow-lg p-6 lg:p-8"><h2 className="text-2xl font-bold text-slate-900">Solution</h2><p className="mt-3 text-slate-600 leading-relaxed">{project.solution}</p></section>
        </div>

        <section className="bg-white rounded-3xl shadow-lg p-6 lg:p-8 mt-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div><h2 className="text-xl font-bold text-slate-900">Scope</h2><div className="flex flex-wrap gap-2 mt-4">{project.scope.map((item) => <span key={item} className="px-3 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">{item}</span>)}</div></div>
            <div><h2 className="text-xl font-bold text-slate-900">Technology</h2><div className="flex flex-wrap gap-2 mt-4">{project.technology.map((item) => <span key={item} className="px-3 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">{item}</span>)}</div></div>
            <div><h2 className="text-xl font-bold text-slate-900">Key Highlights</h2><div className="flex flex-wrap gap-2 mt-4">{project.highlights.map((item) => <span key={item} className="px-3 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">{item}</span>)}</div></div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-slate-950 text-white p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#66c7ff]">Discuss your project</p><h2 className="text-3xl font-bold mt-2">Looking for a similar AV solution?</h2></div><Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-950 px-5 py-3 font-semibold hover:bg-slate-100">Contact Us</Link></section>
      </section>
    </main>
  );
}
