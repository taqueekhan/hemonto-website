import { notFound } from "next/navigation"; import Link from "next/link"; import { services, faqs, process } from "@/data/services"; import { projects } from "@/data/projects"; import { ProjectTile } from "@/components/WorkGrid"; import { Faq } from "@/components/Faq";
export const generateStaticParams = () => services.map(s => ({ slug: s.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) { const s = services.find(x => x.slug === params.slug); return { title: s?.title, description: s?.short }; }
export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services.find(x => x.slug === params.slug); if (!s) notFound();
  const rel = projects.filter(p => !s.category || p.category === s.category);
  return <div className="wrap py-20"><h1 className="display text-6xl md:text-9xl">{s.title}</h1><p className="mt-8 max-w-2xl text-2xl">{s.overview}</p>
    <section className="mt-24 grid gap-10 md:grid-cols-12"><h2 className="display text-4xl md:col-span-4">Capabilities</h2><ul className="md:col-span-8">{s.capabilities.map(c => <li key={c} className="border-t border-burgundy/30 py-4 text-xl">{c}</li>)}</ul></section>
    <section className="mt-24"><h2 className="display mb-8 text-4xl">Process</h2><ol className="grid gap-8 md:grid-cols-5">{process.map(p => <li key={p.t} className="border-t border-burgundy pt-4"><h3 className="display text-2xl">{p.t}</h3><p className="mt-2 text-sm">{p.d}</p></li>)}</ol></section>
    {rel.length > 0 && <section className="mt-24"><h2 className="display mb-8 text-4xl">Relevant projects</h2><div className="grid gap-8 md:grid-cols-2">{rel.map((p, i) => <ProjectTile key={p.slug} p={p} i={i} />)}</div></section>}
    <section className="mt-24 grid gap-10 md:grid-cols-12"><h2 className="display text-4xl md:col-span-4">Questions</h2><div className="md:col-span-8"><Faq items={faqs} /></div></section>
    <section className="mt-24"><h2 className="display text-5xl md:text-7xl">Start your {s.title.toLowerCase()} project</h2><Link href="/contact" className="btn btn-solid mt-8">Start a Project</Link></section></div>;
}
