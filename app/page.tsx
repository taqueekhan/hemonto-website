import Link from "next/link"; import { Hero } from "@/components/Hero"; import { ServiceIndex } from "@/components/ServiceIndex"; import { WorkGrid } from "@/components/WorkGrid";
import { Faq } from "@/components/Faq"; import { Reveal } from "@/components/Reveal"; import { faqs, process } from "@/data/services"; import { testimonials } from "@/data/projects";
const why = [["Creative thinking", "Every project starts with an idea worth building, not a template."], ["Technical expertise", "Design and engineering sit in one team, so what is imagined can be built."], ["Attention to detail", "Spacing, motion, copy and code are checked until they are right."]];
export default function Home() {
  return (<>
    <Hero />
    <section id="services" className="wrap scroll-mt-24 py-24"><Reveal><h2 className="display mb-14 text-5xl md:text-7xl">What we make</h2><ServiceIndex /></Reveal></section>
    <section className="wrap py-24"><Reveal><div className="mb-14 flex items-end justify-between gap-6"><h2 className="display text-5xl md:text-7xl">Selected work</h2><Link href="/work" className="ulink">All projects</Link></div><WorkGrid limit={4} /></Reveal></section>
    <section className="on-dark bg-burgundy text-cream"><div className="wrap py-28"><h2 className="display text-5xl md:text-7xl">Why Hemonto</h2>
      <div className="mt-14 grid gap-12 md:grid-cols-3">{why.map(([t, d]) => <div key={t} className="border-t border-cream/40 pt-6"><h3 className="display text-3xl">{t}</h3><p className="mt-3 max-w-sm text-cream/80">{d}</p></div>)}</div></div></section>
    <section className="wrap py-28"><h2 className="display mb-14 text-5xl md:text-7xl">How we work</h2>
      <ol className="grid gap-10 md:grid-cols-5">{process.map((p, i) => <li key={p.t} className="border-t border-burgundy pt-5 md:[margin-top:calc(var(--i)*28px)]" style={{ ["--i" as string]: i }}><h3 className="display text-3xl">{p.t}</h3><p className="mt-3 text-burgundy/80">{p.d}</p></li>)}</ol></section>
    {testimonials.length > 0 && <section className="wrap py-24">{testimonials.map(t => <figure key={t.name}><blockquote className="display text-4xl">{t.quote}</blockquote><figcaption className="mt-4">{t.name}, {t.role}</figcaption></figure>)}</section>}
    <section className="wrap grid gap-14 py-24 md:grid-cols-12"><h2 className="display text-5xl md:col-span-4 md:text-6xl">Questions</h2><div className="md:col-span-8"><Faq items={faqs} /></div></section>
    <section className="wrap py-28"><h2 className="display text-[11vw] md:text-[8vw]">Have a project in mind?</h2><Link href="/contact" className="btn btn-solid mt-10">Start a Project</Link></section>
  </>);
}
