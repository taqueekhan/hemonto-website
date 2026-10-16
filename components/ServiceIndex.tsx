"use client";
import Link from "next/link"; import { useState } from "react"; import { AnimatePresence, motion } from "framer-motion";
import { Code2, Globe, Workflow, Clapperboard, PenTool, Layers } from "lucide-react";
import { services, ServiceIcon } from "@/data/services";
const icons: Record<ServiceIcon, typeof Code2> = { code: Code2, globe: Globe, workflow: Workflow, film: Clapperboard, pen: PenTool, layers: Layers };
export function ServiceIndex() {
  const [i, setI] = useState(0); const s = services[i]; const Icon = icons[s.icon];
  return (
    <div className="grid gap-10 md:grid-cols-12">
      <ul className="md:col-span-7">
        {services.map((x, n) => (
          <li key={x.slug} className="border-t border-burgundy/30 last:border-b">
            <Link href={`/services/${x.slug}`} onMouseEnter={() => setI(n)} onFocus={() => setI(n)}
              className={`display block py-5 text-4xl transition-all duration-500 md:text-6xl ${n === i ? "pl-4 opacity-100" : "opacity-40"} hover:opacity-100`}>{x.title}</Link>
          </li>))}
      </ul>
      <div className="md:col-span-5">
        <div className="on-dark sticky top-28 flex min-h-[380px] flex-col bg-burgundy p-8 text-cream">
          <AnimatePresence mode="wait">
            <motion.div key={s.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex flex-1 flex-col justify-between gap-10" aria-live="polite">
              <Icon size={72} strokeWidth={1} aria-hidden />
              <div><p className="mb-6 text-lg text-cream/85">{s.short}</p>
                <ul className="mb-8 space-y-1 text-cream/70">{s.capabilities.map(c => <li key={c}>{c}</li>)}</ul>
                <Link href={`/services/${s.slug}`} className="ulink font-medium">Explore {s.title}</Link></div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
