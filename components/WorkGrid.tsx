"use client";
import Link from "next/link"; import { useState } from "react"; import { AnimatePresence, motion } from "framer-motion";
import { Project, projects as all, categories } from "@/data/projects";
export function ProjectTile({ p, i }: { p: Project; i: number }) {
  const tone = ["bg-burgundy text-cream", "bg-cream-dark text-burgundy", "bg-burgundy-soft text-cream", "bg-burgundy-deep text-cream"][i % 4];
  return (
    <Link href={`/work/${p.slug}`} className="group block">
      <div className={`relative aspect-[4/5] overflow-hidden ${tone}`}>
        {p.image ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
          : <div className="flex h-full flex-col justify-between p-6 transition-transform duration-[1200ms] group-hover:scale-[1.04]"><span className="text-sm opacity-70">{p.category}</span><span className="display text-5xl md:text-6xl">{p.title}</span></div>}
        {p.demo && <span className="absolute right-4 top-4 border border-current px-2 py-0.5 text-xs">Demonstration project</span>}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4"><h3 className="display text-2xl">{p.title}</h3><span className="ulink shrink-0 text-sm">View case study</span></div>
      <p className="mt-1 max-w-md text-burgundy/75">{p.summary}</p>
    </Link>
  );
}
export function WorkGrid({ limit }: { limit?: number }) {
  const [f, setF] = useState<string>("All");
  const list = all.filter(p => f === "All" || p.category === f).slice(0, limit);
  return (
    <div>
      {!limit && <div role="group" aria-label="Filter projects" className="mb-12 flex flex-wrap gap-3">
        {["All", ...categories].map(c => <button key={c} onClick={() => setF(c)} aria-pressed={f === c} className={`border border-burgundy px-5 py-2 text-sm transition-colors ${f === c ? "bg-burgundy text-cream" : "hover:bg-burgundy/10"}`}>{c}</button>)}</div>}
      <motion.div layout className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        <AnimatePresence mode="popLayout">{list.map((p, i) => <motion.div key={p.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className={i % 2 ? "md:mt-24" : ""}><ProjectTile p={p} i={i} /></motion.div>)}</AnimatePresence>
      </motion.div>
      {list.length === 0 && <p className="py-16 text-xl">No projects in this category yet. New work is added as projects complete.</p>}
    </div>
  );
}
