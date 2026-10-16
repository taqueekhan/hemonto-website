"use client";
import Link from "next/link"; import { motion, useReducedMotion } from "framer-motion";
const lines = ["Creative thinking.", "Digital possibilities."];
export function Hero() {
  const r = useReducedMotion();
  return (
    <section className="wrap pb-24 pt-16 md:pt-28">
      <h1 className="display text-[14vw] md:text-[9vw]" aria-label="Creative thinking. Digital possibilities.">
        {lines.map((l, i) => <span key={l} className={`block overflow-hidden pb-[0.1em] ${i ? "md:pl-[12vw]" : ""}`} aria-hidden>
          <motion.span className="block" initial={r ? false : { y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.15 + i * 0.15, ease: [0.2, 0.7, 0.2, 1] }}>{l}</motion.span></span>)}
      </h1>
      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <p className="max-w-xl text-xl md:col-span-5 md:col-start-8">Hemonto is a creative digital agency. We bring design, technology and storytelling together so brands can look sharper, work smarter and be remembered.</p>
        <div className="flex flex-wrap gap-4 md:col-span-5 md:col-start-8">
          <Link href="/contact" className="btn btn-solid">Start a Project</Link>
          <Link href="/work" className="btn btn-line">Explore Our Work</Link></div>
      </div>
    </section>
  );
}
