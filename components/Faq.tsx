"use client";
import { useState } from "react"; import { Plus } from "lucide-react";
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [o, setO] = useState<number | null>(0);
  return <div>{items.map((x, i) => (
    <div key={x.q} className="border-t border-burgundy/30 last:border-b">
      <h3><button id={`fq${i}`} aria-expanded={o === i} aria-controls={`fa${i}`} onClick={() => setO(o === i ? null : i)} className="display flex w-full items-center justify-between gap-6 py-6 text-left text-2xl md:text-3xl">
        {x.q}<Plus className={`shrink-0 transition-transform duration-500 ${o === i ? "rotate-45" : ""}`} /></button></h3>
      <div id={`fa${i}`} role="region" aria-labelledby={`fq${i}`} className={`grid transition-[grid-template-rows] duration-500 ${o === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden"><p className="max-w-2xl pb-6 text-burgundy/80">{x.a}</p></div></div>
    </div>))}</div>;
}
