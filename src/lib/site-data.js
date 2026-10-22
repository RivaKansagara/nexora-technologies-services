import { Code2, BrainCircuit, Cloud, BarChart3, PenTool, RefreshCcw, Rocket, Building2, Sparkles, CloudCog, ShoppingCart, Database, Landmark, HeartPulse, Store, Factory, GraduationCap, Truck, } from "lucide-react";
export const toneClass = {
    blue: { tile: "bg-[#B85C38]/12 text-[#B85C38]", text: "text-[#B85C38]", bar: "bg-[#B85C38]" },
    teal: { tile: "bg-[#3A7368]/12 text-[#3A7368]", text: "text-[#3A7368]", bar: "bg-[#3A7368]" },
    green: { tile: "bg-[#377553]/12 text-[#377553]", text: "text-[#377553]", bar: "bg-[#377553]" },
    orange: { tile: "bg-[#B85C38]/15 text-[#B85C38]", text: "text-[#B85C38]", bar: "bg-[#B85C38]" },
    coral: { tile: "bg-[#A64B2A]/12 text-[#A64B2A]", text: "text-[#A64B2A]", bar: "bg-[#A64B2A]" },
    violet: { tile: "bg-[#695675]/12 text-[#695675]", text: "text-[#695675]", bar: "bg-[#695675]" },
    sky: { tile: "bg-[#3D6A82]/12 text-[#3D6A82]", text: "text-[#3D6A82]", bar: "bg-[#3D6A82]" },
};
export const services = [
    { slug: "software-engineering", title: "Software Engineering", short: "Custom web, mobile and enterprise platforms built to scale.", icon: Code2, tone: "blue",
        intro: "We design and engineer reliable, secure software products — from first release to platforms serving millions of requests a day.",
        capabilities: ["Custom web applications", "Mobile apps (iOS & Android)", "Enterprise platforms & portals", "API design & integration", "Quality engineering & test automation", "Product engineering teams"],
        outcomes: ["Faster time to market", "Maintainable, well-tested codebases", "Architecture ready for growth"], tech: ["React", "Node.js", ".NET", "Java", "Python", "PostgreSQL"] },
    { slug: "ai-automation", title: "AI & Intelligent Automation", short: "Applied AI, assistants and workflow automation that save real hours.", icon: BrainCircuit, tone: "violet",
        intro: "We help teams move from AI experiments to production systems that are measurable, governed and useful every day.",
        capabilities: ["AI assistants & copilots", "Document intelligence", "Process automation", "Predictive models", "Retrieval & knowledge search", "AI governance & evaluation"],
        outcomes: ["Reduced manual effort", "Better, faster decisions", "Responsible, auditable AI"], tech: ["Python", "Azure", "AWS", "PostgreSQL", "Docker"] },
    { slug: "cloud-devops", title: "Cloud & DevOps", short: "Cloud migration, infrastructure as code and resilient delivery pipelines.", icon: Cloud, tone: "sky",
        intro: "We build cloud foundations and delivery pipelines that make releases routine and infrastructure predictable.",
        capabilities: ["Cloud migration", "Infrastructure as code", "CI/CD pipelines", "Kubernetes & containers", "Observability & SRE", "Cost optimization"],
        outcomes: ["More frequent, safer releases", "Lower infrastructure cost", "Higher availability"], tech: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "GitHub"] },
    { slug: "data-analytics", title: "Data & Analytics", short: "Modern data platforms, dashboards and insight for every team.", icon: BarChart3, tone: "teal",
        intro: "We turn scattered data into trusted platforms, clear dashboards and insights people actually use.",
        capabilities: ["Data platform engineering", "ETL / ELT pipelines", "BI dashboards", "Data governance", "Real-time analytics", "Data quality monitoring"],
        outcomes: ["One trusted source of truth", "Self-service reporting", "Real-time visibility"], tech: ["PostgreSQL", "SQL Server", "Python", "Redis", "Azure"] },
    { slug: "ui-ux-design", title: "UI/UX & Digital Experience", short: "Research-led product design and accessible design systems.", icon: PenTool, tone: "coral",
        intro: "We design digital experiences that are clear, accessible and consistent across every product and channel.",
        capabilities: ["User research", "Product & interaction design", "Design systems", "Prototyping & testing", "Accessibility audits", "Content design"],
        outcomes: ["Higher adoption & satisfaction", "Consistent brand experience", "Accessible by default"], tech: ["React", "Angular", "Jira"] },
    { slug: "legacy-modernization", title: "Legacy Modernization", short: "Re-platform and re-architect critical systems with minimal risk.", icon: RefreshCcw, tone: "orange",
        intro: "We modernize business-critical systems step by step, keeping operations running while unlocking speed and flexibility.",
        capabilities: ["Application assessment", "Re-architecture to services", "Database migration", "Cloud re-platforming", "API enablement", "Incremental rollout"],
        outcomes: ["Reduced technical debt", "Lower run costs", "Faster feature delivery"], tech: [".NET", "Java", "SQL Server", "Azure", "Kubernetes"] },
];
export const solutions = [
    { slug: "digital-transformation", title: "Digital Transformation", short: "Roadmaps and delivery that modernize how your business runs.", icon: Rocket, tone: "blue", intro: "", capabilities: ["Digital strategy", "Operating model design", "Roadmap & delivery"], outcomes: [], tech: [] },
    { slug: "enterprise-applications", title: "Enterprise Applications", short: "ERP, CRM and internal platforms tailored to your operations.", icon: Building2, tone: "teal", intro: "", capabilities: ["Portals & workflows", "Systems integration", "Role-based access"], outcomes: [], tech: [] },
    { slug: "ai-solutions", title: "AI Solutions", short: "Production-grade AI embedded into products and processes.", icon: Sparkles, tone: "violet", intro: "", capabilities: ["Copilots", "Forecasting", "Intelligent search"], outcomes: [], tech: [] },
    { slug: "cloud-transformation", title: "Cloud Transformation", short: "Secure, cost-efficient cloud platforms at enterprise scale.", icon: CloudCog, tone: "sky", intro: "", capabilities: ["Landing zones", "Migration factory", "FinOps"], outcomes: [], tech: [] },
    { slug: "digital-commerce", title: "Digital Commerce", short: "Fast, composable storefronts and order platforms.", icon: ShoppingCart, tone: "orange", intro: "", capabilities: ["Headless storefronts", "Checkout & payments", "Order management"], outcomes: [], tech: [] },
    { slug: "data-platforms", title: "Data & Analytics", short: "Unified data platforms with governance built in.", icon: Database, tone: "green", intro: "", capabilities: ["Lakehouse design", "Dashboards", "Data governance"], outcomes: [], tech: [] },
];
export const industries = [
    { slug: "financial-services", title: "Financial Services", short: "Secure digital banking, payments and risk platforms.", icon: Landmark, tone: "blue",
        intro: "We help banks, insurers and fintechs launch secure digital products and modernize core platforms.", capabilities: ["Digital banking apps", "Payments & onboarding", "Risk & compliance analytics", "Core modernization"], outcomes: ["Faster onboarding", "Stronger compliance", "Lower operating cost"], tech: ["Java", ".NET", "Azure", "PostgreSQL"] },
    { slug: "healthcare", title: "Healthcare", short: "Patient-centric apps and connected care systems.", icon: HeartPulse, tone: "coral",
        intro: "We build connected care experiences and clinical data systems with privacy and interoperability at the core.", capabilities: ["Patient portals", "Telehealth platforms", "Clinical data integration", "Care analytics"], outcomes: ["Better patient engagement", "Connected care teams", "Secure data handling"], tech: ["React", "Node.js", "AWS", "MongoDB"] },
    { slug: "retail-ecommerce", title: "Retail & E-commerce", short: "Omnichannel commerce and personalized experiences.", icon: Store, tone: "orange",
        intro: "We help retailers sell everywhere with fast storefronts, unified inventory and personalized journeys.", capabilities: ["Headless commerce", "Inventory & order systems", "Personalization", "Loyalty platforms"], outcomes: ["Higher conversion", "Unified stock view", "Repeat customers"], tech: ["React", "Node.js", "Redis", "Google Cloud"] },
    { slug: "manufacturing", title: "Manufacturing", short: "Smart factory, IoT and supply chain visibility.", icon: Factory, tone: "teal",
        intro: "We connect plants, machines and supply chains so manufacturers can see, predict and improve operations.", capabilities: ["IoT data platforms", "Predictive maintenance", "MES integration", "Supply chain dashboards"], outcomes: ["Less downtime", "Real-time plant visibility", "Leaner inventory"], tech: ["Python", "Azure", "SQL Server", "Kubernetes"] },
    { slug: "education", title: "Education", short: "Digital learning platforms for institutions and edtech.", icon: GraduationCap, tone: "green",
        intro: "We build learning platforms and student services that are accessible, engaging and easy to manage.", capabilities: ["Learning platforms", "Student information systems", "Assessment tools", "Learning analytics"], outcomes: ["Higher engagement", "Simpler administration", "Accessible learning"], tech: ["Angular", "Node.js", "PostgreSQL", "AWS"] },
    { slug: "logistics", title: "Logistics & Transportation", short: "Fleet, tracking and route optimization platforms.", icon: Truck, tone: "sky",
        intro: "We help logistics operators track, plan and optimize every shipment with real-time platforms.", capabilities: ["Fleet management", "Shipment tracking", "Route optimization", "Warehouse systems"], outcomes: ["On-time deliveries", "Lower fuel cost", "Live shipment visibility"], tech: ["Java", "Kubernetes", "Redis", "Google Cloud"] },
];
export const techRows = [
    [
        { name: "AWS", cat: "Cloud Platform", tone: "orange" }, { name: "Microsoft Azure", cat: "Cloud Platform", tone: "sky" },
        { name: "Google Cloud", cat: "Cloud Platform", tone: "blue" }, { name: "Vercel", cat: "Edge Hosting", tone: "violet" },
        { name: "DigitalOcean", cat: "Cloud Hosting", tone: "sky" },
    ],
    [
        { name: "React", cat: "Frontend", tone: "sky" }, { name: "Angular", cat: "Frontend", tone: "coral" },
        { name: "Node.js", cat: "Backend Runtime", tone: "green" }, { name: ".NET", cat: "Backend Framework", tone: "violet" },
        { name: "Java", cat: "Backend Language", tone: "orange" }, { name: "Python", cat: "Backend & AI", tone: "blue" },
    ],
    [
        { name: "MongoDB", cat: "NoSQL Database", tone: "green" }, { name: "PostgreSQL", cat: "Relational DB", tone: "blue" },
        { name: "MySQL", cat: "Relational DB", tone: "teal" }, { name: "SQL Server", cat: "Relational DB", tone: "coral" },
        { name: "Redis", cat: "In-memory Store", tone: "coral" },
    ],
    [
        { name: "GitHub", cat: "Source Control", tone: "violet" }, { name: "GitLab", cat: "DevOps Platform", tone: "orange" },
        { name: "Docker", cat: "Containers", tone: "sky" }, { name: "Kubernetes", cat: "Orchestration", tone: "blue" },
        { name: "Jira", cat: "Project Tracking", tone: "blue" }, { name: "Slack", cat: "Collaboration", tone: "coral" },
        { name: "Postman", cat: "API Testing", tone: "orange" },
    ],
];
export const caseStudies = [
    { slug: "digital-banking-platform", title: "Rebuilding a digital banking experience", client: "Demo client — regional bank", industry: "Financial Services", tone: "blue",
        summary: "A modern mobile and web banking platform replacing a decade-old portal.",
        challenge: "Customers struggled with a slow, outdated portal and onboarding took several days.",
        solution: "We delivered a new React and Java platform with digital onboarding, real-time notifications and a shared design system.",
        results: [{ v: "3×", l: "faster onboarding" }, { v: "45%", l: "more mobile users" }, { v: "99.95%", l: "availability" }], tech: ["React", "Java", "Azure", "PostgreSQL"] },
    { slug: "connected-care-portal", title: "A connected care portal for patients", client: "Demo client — healthcare network", industry: "Healthcare", tone: "coral",
        summary: "Appointments, records and telehealth brought into one secure patient app.",
        challenge: "Patients used four separate systems to book, consult and view results.",
        solution: "We built a unified portal with integrated scheduling, secure messaging and video consultations.",
        results: [{ v: "60%", l: "fewer support calls" }, { v: "4.7★", l: "app rating" }, { v: "2 wks", l: "to first pilot" }], tech: ["React", "Node.js", "AWS", "MongoDB"] },
    { slug: "smart-factory-analytics", title: "Real-time analytics for smart factories", client: "Demo client — industrial manufacturer", industry: "Manufacturing", tone: "teal",
        summary: "Machine data from 12 plants streamed into a single operations dashboard.",
        challenge: "Plant managers had no live view of equipment health and relied on weekly reports.",
        solution: "We built an IoT data pipeline with predictive maintenance models and live dashboards.",
        results: [{ v: "28%", l: "less downtime" }, { v: "12", l: "plants connected" }, { v: "Live", l: "equipment health" }], tech: ["Python", "Azure", "Kubernetes", "SQL Server"] },
    { slug: "composable-commerce", title: "Composable commerce for a growing retailer", client: "Demo client — lifestyle retailer", industry: "Retail & E-commerce", tone: "orange",
        summary: "A headless storefront and unified inventory across online and stores.",
        challenge: "Peak-season traffic slowed the old storefront and stock data was out of sync.",
        solution: "We moved to a headless architecture with edge caching and a unified inventory service.",
        results: [{ v: "2.1s", l: "faster page loads" }, { v: "32%", l: "higher conversion" }, { v: "1", l: "inventory view" }], tech: ["React", "Node.js", "Redis", "Google Cloud"] },
];
export const insights = [
    { slug: "ai-from-pilot-to-production", title: "Taking AI from pilot to production", cat: "AI", tone: "violet", date: "Sep 18, 2026", read: "6 min", excerpt: "A practical checklist for evaluation, governance and rollout of AI features." },
    { slug: "cloud-cost-playbook", title: "A cloud cost playbook for growing teams", cat: "Cloud", tone: "sky", date: "Sep 04, 2026", read: "5 min", excerpt: "Simple FinOps habits that keep cloud bills predictable as you scale." },
    { slug: "design-systems-that-last", title: "Design systems that last", cat: "Design", tone: "coral", date: "Aug 21, 2026", read: "7 min", excerpt: "How to build a design system teams actually adopt — and keep using." },
    { slug: "modernize-without-downtime", title: "Modernizing legacy systems without downtime", cat: "Engineering", tone: "orange", date: "Aug 07, 2026", read: "8 min", excerpt: "The strangler pattern, feature flags and other ways to modernize safely." },
    { slug: "trusted-data-platforms", title: "Building data platforms people trust", cat: "Data", tone: "teal", date: "Jul 24, 2026", read: "6 min", excerpt: "Quality checks, ownership and lineage — the foundations of trusted data." },
    { slug: "devops-metrics", title: "The four delivery metrics that matter", cat: "DevOps", tone: "green", date: "Jul 10, 2026", read: "4 min", excerpt: "Measuring delivery performance without creating busywork." },
];
export const jobs = [
    { title: "Senior React Engineer", team: "Engineering", loc: "Remote / Hybrid", type: "Full-time" },
    { title: "Cloud Platform Engineer", team: "Cloud & DevOps", loc: "Hybrid", type: "Full-time" },
    { title: "Machine Learning Engineer", team: "AI", loc: "Remote", type: "Full-time" },
    { title: "Product Designer", team: "Design", loc: "Hybrid", type: "Full-time" },
    { title: "Data Engineer", team: "Data", loc: "Remote / Hybrid", type: "Full-time" },
    { title: "Graduate Software Engineer", team: "Engineering", loc: "On-site", type: "Graduate" },
];
export const team = [
    { name: "Aarav Mehta", role: "Chief Executive Officer", tone: "blue", image: "/images/team/aarav-mehta.jpg" },
    { name: "Sofia Laurent", role: "Chief Technology Officer", tone: "teal", image: "/images/team/sofia-laurent.jpg" },
    { name: "Daniel Okafor", role: "VP, Engineering", tone: "orange", image: "/images/team/daniel-okafor.jpg" },
    { name: "Mei Tanaka", role: "Head of AI", tone: "violet", image: "/images/team/mei-tanaka.jpg" },
    { name: "Lucas Romero", role: "Head of Cloud", tone: "sky", image: "/images/team/lucas-romero.jpg" },
    { name: "Priya Nair", role: "Head of Design", tone: "coral", image: "/images/team/priya-nair.jpg" },
    { name: "Elena Novak", role: "Head of Data", tone: "green", image: "/images/team/elena-novak.jpg" },
    { name: "James Carter", role: "Client Partner", tone: "blue", image: "/images/team/james-carter.jpg" },
];
export const testimonials = [
    { quote: "Nexora's team felt like an extension of ours. They shipped a complex platform on schedule and left us with a codebase we're proud of.", name: "Head of Digital", org: "Demo client, Financial Services" },
    { quote: "They brought clarity to a messy legacy estate and modernized it without a single day of downtime.", name: "IT Director", org: "Demo client, Manufacturing" },
    { quote: "Thoughtful design, strong engineering and honest communication — exactly what we needed.", name: "Product Lead", org: "Demo client, Healthcare" },
];
export const faqs = [
    { q: "What kinds of projects does Nexora take on?", a: "We work on custom software, AI, cloud, data and design projects — from discovery sprints to long-term product engineering partnerships." },
    { q: "How do engagements usually start?", a: "Most begin with a short discovery phase where we understand goals, constraints and risks, then agree on a delivery plan and team." },
    { q: "Which engagement models do you offer?", a: "Fixed-scope projects, dedicated product teams and team augmentation. We recommend the model that best fits your goals." },
    { q: "Can you work with our existing team and tools?", a: "Yes. We regularly integrate with in-house teams and adapt to your tooling, rituals and governance." },
    { q: "How do you handle security and data privacy?", a: "Security is built into our delivery process with secure coding practices, access controls, reviews and environment hardening." },
    { q: "Do you provide support after launch?", a: "Yes. We offer support, maintenance and continuous improvement plans after go-live." },
    { q: "Is Nexora a real company?", a: "Nexora Technologies is a fictional company created for a training project. All clients, figures and people on this site are illustrative." },
];
export const allSearchable = [
    ...services.map((s) => ({ label: s.title, hint: "Service", to: "/services/$slug", params: { slug: s.slug } })),
    ...industries.map((s) => ({ label: s.title, hint: "Industry", to: "/industries/$slug", params: { slug: s.slug } })),
    ...caseStudies.map((s) => ({ label: s.title, hint: "Case study", to: "/work/$slug", params: { slug: s.slug } })),
];
