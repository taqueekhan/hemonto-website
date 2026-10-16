"use client";
import Link from "next/link"; import Image from "next/image"; import { useEffect, useState } from "react"; import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
const links = [["Services", "/#services"], ["Work", "/work"], ["About", "/about"], ["Contact", "/contact"]];
export function Nav() {
  const [open, setOpen] = useState(false); const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, [open]);
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur">
      <div className="wrap flex h-20 items-center justify-between">
        <Link href="/" aria-label="Hemonto home"><Image src="/logo.png" alt="Hemonto" width={1774} height={887} priority className="h-16 w-auto mix-blend-multiply md:h-20" /></Link>
        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {links.map(([l, h]) => <Link key={h} href={h} className="ulink text-[15px]">{l}</Link>)}
          <Link href="/contact" className="btn btn-solid">Start a Project</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </div>
      <div id="mobile-nav" hidden={!open} className="on-dark fixed inset-x-0 bottom-0 top-20 bg-burgundy text-cream md:hidden">
        <nav aria-label="Mobile" className="wrap flex h-full flex-col justify-between py-10">
          <ul className="display text-6xl">{links.map(([l, h]) => <li key={h} className="py-2"><Link href={h} onClick={() => setOpen(false)}>{l}</Link></li>)}</ul>
          <Link href="/contact" className="btn border-cream bg-cream text-burgundy">Start a Project</Link>
        </nav>
      </div>
    </header>
  );
}
