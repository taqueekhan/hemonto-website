// Replace or extend with real work: set demo:false and add `image` (path in /public).
export type Category = "Development" | "AI Automation" | "Video" | "Design";
export type Project = { slug: string; title: string; category: Category; summary: string; deliverables: string[]; demo: boolean; image?: string; caseStudy: { brief: string; approach: string } };
export const categories: Category[] = ["Development", "AI Automation", "Video", "Design"];
export const projects: Project[] = [
  { slug: "demo-booking-platform", title: "Booking Platform", category: "Development", demo: true, summary: "A concept for a scheduling web app with clean admin tools.",
    deliverables: ["Product design", "Web application", "Admin dashboard"],
    caseStudy: { brief: "A demonstration brief: a small studio needs online booking without a heavy third-party tool.", approach: "This concept shows how we would map the booking flow, design the interface and build a lean, accessible app." } },
  { slug: "demo-support-automation", title: "Support Triage Workflow", category: "AI Automation", demo: true, summary: "A concept for sorting and drafting replies to support email.",
    deliverables: ["Workflow mapping", "AI classification", "Human review step"],
    caseStudy: { brief: "A demonstration brief: a team spends hours sorting repetitive inbound email.", approach: "This concept shows an automated triage flow that drafts replies and keeps a person in charge of sending." } },
  { slug: "demo-brand-film", title: "Brand Film Edit", category: "Video", demo: true, summary: "A concept edit showing pacing, type and motion for a short brand film.",
    deliverables: ["Edit", "Motion graphics", "Sound and colour"],
    caseStudy: { brief: "A demonstration brief: a short film introducing a new brand.", approach: "This concept shows our approach to story structure, rhythm and finishing." } },
  { slug: "demo-identity-system", title: "Identity System", category: "Design", demo: true, summary: "A concept visual identity with logo, type and colour rules.",
    deliverables: ["Logo", "Type and colour system", "Brand guidelines"],
    caseStudy: { brief: "A demonstration brief: a new studio needs an identity that scales across print and screen.", approach: "This concept shows how we build identities as flexible systems." } },
];
export const testimonials: { quote: string; name: string; role: string }[] = []; // genuine testimonials only; section stays hidden while empty
