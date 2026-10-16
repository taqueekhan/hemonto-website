import { notFound } from "next/navigation"; import Link from "next/link"; import { projects } from "@/data/projects"; import { ProjectTile } from "@/components/WorkGrid";
export const generateStaticParams = () => projects.map(p => ({ slug: p.slug }));
export function generateMetadata({ params }: { params: { slug: string } }) { const p = projects.find(x => x.slug === params.slug); return { title: p?.title, description: p?.summary }; }
export default function Case({ params }: { params: { slug: string } }) {
  const i = projects.findIndex(x => x.slug === params.slug); if (i < 0) notFound(); const p = projects[i];
  return <article className="wrap py-20"><Link href="/work" className="ulink text-sm">All work</Link>
    <h1 className="display mt-8 text-6xl md:text-9xl">{p.title}</h1>
    {p.demo && <p className="mt-6 inline-block border border-burgundy px-3 py-1 text-sm">Demonstration project, not client work</p>}
    <div className="mt-16 grid gap-12 md:grid-cols-12"><div className="md:col-span-5"><ProjectTile p={p} i={i} /></div>
      <div className="space-y-10 md:col-span-6 md:col-start-7"><p className="text-2xl">{p.summary}</p><section><h2 className="display text-3xl">Brief</h2><p className="mt-2">{p.caseStudy.brief}</p></section>
        <section><h2 className="display text-3xl">Approach</h2><p className="mt-2">{p.caseStudy.approach}</p></section>
        <section><h2 className="display text-3xl">Deliverables</h2><ul className="mt-2 list-disc pl-5">{p.deliverables.map(d => <li key={d}>{d}</li>)}</ul></section>
        <Link href="/contact" className="btn btn-solid">Start a Project</Link></div></div></article>;
}
