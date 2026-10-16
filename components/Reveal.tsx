"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const r = useReducedMotion();
  return <motion.div className={className} initial={r ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>;
}
