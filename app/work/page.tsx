import type { Metadata } from "next"; import { WorkGrid } from "@/components/WorkGrid";
export const metadata: Metadata = { title: "Work" };
export default function Work() { return <div className="wrap py-20"><h1 className="display mb-6 text-6xl md:text-9xl">Work</h1><p className="mb-14 max-w-xl text-xl">Our portfolio is growing. Projects marked as demonstrations are concepts, not client work.</p><WorkGrid /></div>; }
