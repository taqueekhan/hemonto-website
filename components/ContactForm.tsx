"use client";
import { useRef, useState } from "react"; import { services } from "@/data/services";
type S = "idle" | "sending" | "sent" | "error";
const TO = "taqueekhaniu@gmail.com";
export function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [s, setS] = useState<S>("idle"); const [err, setErr] = useState(""); const [fe, setFe] = useState<Record<string, string>>({});
  const data = () => Object.fromEntries(new FormData(ref.current!)) as Record<string, string>;
  async function submit(e: React.FormEvent) {
    e.preventDefault(); const d = data(); const v: Record<string, string> = {};
    if (!d.name?.trim()) v.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(d.email || "")) v.email = "Enter a valid email address.";
    if (!d.service) v.service = "Choose a service.";
    if ((d.message || "").trim().length < 20) v.message = "Describe your project in at least 20 characters.";
    setFe(v); if (Object.keys(v).length) return;
    setS("sending"); setErr("");
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) { setS("sent"); ref.current?.reset(); } else { setErr(j.error || "Your message could not be sent."); setS("error"); }
    } catch { setErr("Network error. Your message was not sent."); setS("error"); }
  }
  const mailto = () => { const d = ref.current ? data() : ({} as Record<string, string>);
    return `mailto:${TO}?subject=${encodeURIComponent("Project inquiry: " + (d.service || ""))}&body=${encodeURIComponent(`${d.message || ""}\n\n${d.name || ""}\n${d.email || ""}`)}`; };
  if (s === "sent") return <div role="status" className="border border-burgundy p-8"><h2 className="display text-4xl">Message sent</h2><p className="mt-3">Thank you. We received your inquiry and will reply by email.</p></div>;
  const L = (id: string, label: string, el: React.ReactNode) => <div><label htmlFor={id} className="text-sm">{label}</label>{el}{fe[id] && <p id={`${id}-e`} role="alert" className="mt-1 text-sm font-medium">{fe[id]}</p>}</div>;
  const a = (id: string) => ({ id, name: id, "aria-invalid": !!fe[id], "aria-describedby": fe[id] ? `${id}-e` : undefined });
  return (
    <form ref={ref} onSubmit={submit} noValidate className="space-y-8">
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px]" />
      {L("name", "Full name", <input {...a("name")} autoComplete="name" className="field" />)}
      {L("email", "Email", <input {...a("email")} type="email" autoComplete="email" className="field" />)}
      {L("service", "Service required", <select {...a("service")} defaultValue="" className="field"><option value="" disabled>Select a service</option>{services.map(x => <option key={x.slug}>{x.title}</option>)}</select>)}
      <div className="grid gap-8 md:grid-cols-2">{L("budget", "Budget (optional)", <input {...a("budget")} placeholder="e.g. $3,000 to $5,000" className="field" />)}{L("timeline", "Timeline (optional)", <input {...a("timeline")} placeholder="e.g. 6 weeks" className="field" />)}</div>
      {L("message", "Project description", <textarea {...a("message")} rows={5} className="field resize-y" />)}
      <button disabled={s === "sending"} className="btn btn-solid disabled:opacity-60">{s === "sending" ? "Sending…" : "Send inquiry"}</button>
      {s === "error" && <div role="alert" className="border border-burgundy p-5"><p className="font-medium">{err}</p><p className="mt-2">You can email us directly at <a className="ulink font-medium" href={mailto()}>{TO}</a>.</p></div>}
    </form>
  );
}
