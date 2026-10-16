import type { Metadata } from "next"; import { ContactForm } from "@/components/ContactForm";
export const metadata: Metadata = { title: "Contact" };
export default function Contact() {
  return <div className="wrap py-20"><h1 className="display text-6xl md:text-9xl">Start a project</h1>
    <div className="mt-16 grid gap-14 md:grid-cols-12"><div className="md:col-span-4"><p className="text-xl">Tell us what you want to make. We reply by email.</p><p className="mt-6">Prefer email? <a className="ulink font-medium" href="mailto:taqueekhaniu@gmail.com">taqueekhaniu@gmail.com</a></p></div>
      <div className="relative md:col-span-7 md:col-start-6"><ContactForm /></div></div></div>;
}
