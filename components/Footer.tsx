import Link from "next/link"; import { services } from "@/data/services";
export function Footer() {
  return (
    <footer className="on-dark bg-burgundy text-cream">
      <div className="wrap py-20">
        <p className="display text-[18vw] md:text-[13vw]">Hemonto</p>
        <div className="mt-16 grid gap-10 md:grid-cols-4">
          <p className="max-w-xs text-cream/80 md:col-span-2">An international creative digital agency combining design, technology and storytelling.</p>
          <ul className="space-y-2">{services.map(s => <li key={s.slug}><Link className="ulink text-cream/80" href={`/services/${s.slug}`}>{s.title}</Link></li>)}</ul>
          <ul className="space-y-2"><li><Link className="ulink" href="/work">Work</Link></li><li><Link className="ulink" href="/about">About</Link></li><li><Link className="ulink" href="/contact">Contact</Link></li>
            <li><a className="ulink" href="mailto:taqueekhaniu@gmail.com">taqueekhaniu@gmail.com</a></li></ul>
        </div>
        <p className="mt-16 text-sm text-cream/60">© {new Date().getFullYear()} Hemonto. All rights reserved.</p>
      </div>
    </footer>
  );
}
