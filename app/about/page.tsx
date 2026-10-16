import type { Metadata } from "next"; import Link from "next/link";
export const metadata: Metadata = { title: "About" };
export default function About() {
  return <div className="wrap py-20"><h1 className="display text-6xl md:text-9xl">About</h1>
    <div className="mt-16 grid gap-10 md:grid-cols-12"><p className="display text-3xl md:col-span-6 md:text-5xl md:leading-tight">We believe good ideas and good engineering belong in the same room.</p>
      <div className="space-y-6 md:col-span-5 md:col-start-8"><p>Hemonto is a creative digital agency working across software, web, AI automation, video and graphic design. We combine design, technology and storytelling so each project feels considered from concept to code.</p>
        <p>We work with clients internationally and communicate plainly. Our portfolio is still growing, and we would rather show honest work than inflate it.</p>
        <Link href="/contact" className="btn btn-solid">Start a Project</Link></div></div></div>;
}
