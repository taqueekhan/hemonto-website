import { NextResponse } from "next/server";
export const runtime = "nodejs";
const hits = new Map<string, number[]>(); // basic in-memory limiter; use Redis/Upstash for multi-instance production
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "local"; const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(t => now - t < 600_000);
  if (recent.length >= 5) return NextResponse.json({ ok: false, error: "Too many requests. Try again in a few minutes." }, { status: 429 });
  hits.set(ip, [...recent, now]);
  let b: Record<string, string>; try { b = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 }); }
  if (b.company) return NextResponse.json({ ok: true }); // honeypot
  const name = (b.name ?? "").trim().slice(0, 120), email = (b.email ?? "").trim().slice(0, 200), service = (b.service ?? "").slice(0, 100), message = (b.message ?? "").trim().slice(0, 5000);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !service || message.length < 20) return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ ok: false, error: "Email delivery is not configured yet. Your message was not sent." }, { status: 503 });
  const budget = esc((b.budget ?? "").slice(0, 100)) || "Not given", timeline = esc((b.timeline ?? "").slice(0, 100)) || "Not given";
  const res = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.RESEND_FROM || "Hemonto <onboarding@resend.dev>", to: [process.env.CONTACT_TO || "taqueekhaniu@gmail.com"], reply_to: email, subject: `New inquiry: ${service} from ${name}`.replace(/[\r\n]/g, " "),
      html: `<h2>New project inquiry</h2><p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Service:</b> ${esc(service)}<br><b>Budget:</b> ${budget}<br><b>Timeline:</b> ${timeline}</p><p>${esc(message).replace(/\n/g, "<br>")}</p>` }) });
  if (!res.ok) { console.error("Resend error", res.status, await res.text()); return NextResponse.json({ ok: false, error: "Delivery failed. Your message was not sent." }, { status: 502 }); }
  return NextResponse.json({ ok: true });
}
