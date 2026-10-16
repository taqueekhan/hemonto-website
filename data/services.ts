export type ServiceIcon = "code" | "globe" | "workflow" | "film" | "pen" | "layers";
export type Service = { slug: string; title: string; short: string; overview: string; icon: ServiceIcon; capabilities: string[]; category?: string };
export const services: Service[] = [
  { slug: "software-development", title: "Software Development", short: "Custom digital products and software solutions.", icon: "code", category: "Development",
    overview: "We design and build software around how your business actually works: internal tools, customer platforms and products, built to be maintained.",
    capabilities: ["Custom web and mobile products", "Internal tools and dashboards", "APIs and integrations", "Maintenance and iteration"] },
  { slug: "web-development", title: "Web Development", short: "Beautiful, responsive websites and web applications.", icon: "globe", category: "Development",
    overview: "Fast, accessible websites and web applications where the design and the engineering are done together.",
    capabilities: ["Marketing and brand websites", "Web applications", "CMS and content workflows", "Performance and SEO foundations"] },
  { slug: "ai-automation", title: "AI Automation", short: "Intelligent workflows and AI-powered business solutions.", icon: "workflow", category: "AI Automation",
    overview: "We find the repetitive work in your operations and automate it with AI and integrations, with people kept in the loop where it matters.",
    capabilities: ["Workflow automation", "AI assistants and chat interfaces", "Document and data processing", "Tool and system integration"] },
  { slug: "video-editing", title: "Video Editing", short: "Editing, storytelling, motion graphics and post-production.", icon: "film", category: "Video",
    overview: "From raw footage to a finished story: pacing, sound, colour and motion that hold attention.",
    capabilities: ["Brand and promo films", "Social and short-form edits", "Motion graphics", "Colour, sound and finishing"] },
  { slug: "graphic-design", title: "Graphic Design", short: "Visual identity, branding and digital creative assets.", icon: "pen", category: "Design",
    overview: "Identities and creative assets with a clear point of view, built as systems so they stay consistent as you grow.",
    capabilities: ["Logo and visual identity", "Brand guidelines", "Print and digital collateral", "Social and campaign assets"] },
  { slug: "creative-digital-solutions", title: "Creative Digital Solutions", short: "Integrated creative and technical services.", icon: "layers",
    overview: "When a project needs design, code, motion and automation together, one team carries it from idea to launch.",
    capabilities: ["Campaign and launch builds", "Brand-to-web delivery", "Content systems", "Ongoing creative support"] },
];
export const faqs = [
  { q: "What kinds of projects do you take on?", a: "Software, websites, AI automation, video and graphic design, individually or combined. If your project crosses disciplines, that is where we are strongest." },
  { q: "Do you work with international clients?", a: "Yes. We work remotely and communicate by email and video call across time zones." },
  { q: "How do I start?", a: "Send a project inquiry with a short description. We will reply by email to talk through scope, timeline and next steps." },
  { q: "How is pricing decided?", a: "Pricing depends on scope. The inquiry form has an optional budget field, which helps us propose something realistic." },
];
export const process = [
  { t: "Discover", d: "We listen, ask questions and learn your audience, goals and constraints." },
  { t: "Define", d: "We agree scope, direction and what success looks like before making anything." },
  { t: "Create", d: "Design and build happen together, with work shared early and often." },
  { t: "Refine", d: "We test, review and polish until the details hold up." },
  { t: "Deliver", d: "We launch, hand over clearly and stay available for what comes next." },
];
