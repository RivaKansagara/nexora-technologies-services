import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote, ShieldCheck, Users, Gauge, Layers, Handshake, Lightbulb, TrendingUp } from "lucide-react";
import { SectionHead, IconTile } from "./ui";
import { testimonials, toneClass } from "@/lib/site-data";

export function WhyNexora() {
    const items = [
        { t: "Engineering excellence", d: "Senior teams, rigorous code reviews and automated quality gates on every release.", i: Layers, tone: "blue" },
        { t: "Security by design", d: "Secure architecture, strict access controls and continuous compliance considered from day one.", i: ShieldCheck, tone: "teal" },
        { t: "Outcome-focused", d: "We measure success by tangible business metrics, user adoption and long-term value.", i: Gauge, tone: "orange" },
        { t: "Transparent partnership", d: "Clear communication, shared sprint roadmaps and transparent delivery metrics.", i: Handshake, tone: "green" },
        { t: "Cross-functional teams", d: "Designers, software engineers, data specialists and cloud architects working as one unit.", i: Users, tone: "coral" },
        { t: "Pragmatic innovation", d: "Proven technologies combined with modern AI tools where they add measurable ROI.", i: Lightbulb, tone: "violet" },
    ];
    return (_jsxs("section", {
        className: "container-x py-24",
        children: [
            _jsx(SectionHead, {
                eyebrow: "Why Nexora",
                title: "A technology partner built for the long term",
                sub: "Six guiding principles shape how we build platforms and collaborate with every client.",
                center: true
            }),
            _jsx("div", {
                className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                children: items.map((x) => (
                    _jsxs("div", {
                        className: "group flex gap-4.5 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/45 hover:shadow-lift",
                        children: [
                            _jsx(IconTile, { icon: x.i, tone: x.tone }),
                            _jsxs("div", {
                                children: [
                                    _jsx("h3", { className: "text-lg font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]", children: x.t }),
                                    _jsx("p", { className: "mt-2 text-sm leading-relaxed text-[#5C5650]", children: x.d })
                                ]
                            })
                        ]
                    }, x.t)
                ))
            })
        ]
    }));
}

export function Process() {
    const steps = [
        ["Discover", "Understand goals, users, constraints and technical risks."],
        ["Design", "Shape the intuitive experience and cloud-native architecture."],
        ["Build", "Ship in rapid, tested, production-ready increments."],
        ["Launch", "Release safely with zero-downtime and observability in place."],
        ["Scale", "Measure adoption, optimize performance and keep innovating."],
    ];
    const tones = ["blue", "teal", "green", "orange", "coral"];
    return (_jsx("section", {
        className: "border-y border-[#DFDAD3] bg-[#EAE6E0]/60 py-24",
        children: _jsxs("div", {
            className: "container-x",
            children: [
                _jsx(SectionHead, {
                    eyebrow: "How we work",
                    title: "A clear, proven delivery process",
                    sub: "Predictable engineering delivery from first conversation to enterprise scale."
                }),
                _jsx("ol", {
                    className: "mt-14 grid gap-6 md:grid-cols-5",
                    children: steps.map(([t, d], i) => (
                        _jsxs("li", {
                            className: "group relative rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/50 hover:shadow-lift",
                            children: [
                                _jsx("span", { className: `absolute inset-x-0 top-0 h-1.5 rounded-t-2xl ${toneClass[tones[i]]?.bar || "bg-[#B85C38]"}` }),
                                _jsxs("span", { className: `text-sm font-extrabold ${toneClass[tones[i]]?.text || "text-[#B85C38]"}`, children: ["0", i + 1] }),
                                _jsx("h3", { className: "mt-3 text-lg font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]", children: t }),
                                _jsx("p", { className: "mt-2 text-xs leading-relaxed text-[#5C5650]", children: d })
                            ]
                        }, t)
                    ))
                })
            ]
        })
    }));
}

export function Stats() {
    const s = [
        ["250+", "Projects delivered"],
        ["120+", "Engineers & designers"],
        ["18", "Countries served"],
        ["96%", "Client retention"]
    ];
    return (_jsxs("section", {
        className: "container-x py-20",
        children: [
            _jsx("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                children: s.map(([v, l], i) => (
                    _jsxs("div", {
                        className: "rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B85C38]/40 hover:shadow-lift",
                        children: [
                            _jsx("p", {
                                className: `text-4xl font-extrabold md:text-5xl ${[toneClass.blue, toneClass.teal, toneClass.orange, toneClass.green][i]?.text || "text-[#B85C38]"}`,
                                children: v
                            }),
                            _jsx("p", { className: "mt-2.5 text-xs font-bold uppercase tracking-wider text-[#5C5650]", children: l })
                        ]
                    }, l)
                ))
            }),
            _jsx("p", { className: "mt-4 text-center text-xs text-[#5C5650]", children: "Illustrative figures for a fictional training company." })
        ]
    }));
}

export function Testimonials() {
    return (_jsxs("section", {
        className: "container-x py-24",
        children: [
            _jsx(SectionHead, {
                eyebrow: "Client voices",
                title: "What our partners say",
                sub: "Trusted by forward-thinking teams across banking, healthcare, and retail.",
                center: true
            }),
            _jsx("div", {
                className: "mt-14 grid gap-6 md:grid-cols-3",
                children: testimonials.map((t) => (
                    _jsxs("figure", {
                        className: "group flex flex-col rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/40 hover:shadow-lift",
                        children: [
                            _jsx("span", {
                                className: "flex h-10 w-10 items-center justify-center rounded-xl bg-[#B85C38]/12 text-[#B85C38] transition-transform duration-300 group-hover:scale-110",
                                children: _jsx(Quote, { className: "h-5 w-5" })
                            }),
                            _jsxs("blockquote", {
                                className: "mt-5 flex-1 text-[15.5px] leading-relaxed text-[#252525] font-medium",
                                children: ["\"", t.quote, "\""]
                            }),
                            _jsxs("figcaption", {
                                className: "mt-6 border-t border-[#DFDAD3] pt-5",
                                children: [
                                    _jsx("p", { className: "font-extrabold text-[#252525]", children: t.name }),
                                    _jsx("p", { className: "text-xs font-semibold text-[#5C5650]", children: t.org })
                                ]
                            })
                        ]
                    }, t.name)
                ))
            })
        ]
    }));
}

export const projectImages = {
    "digital-banking-platform": "/images/projects/digital-banking-platform.jpg",
    "connected-care-portal": "/images/projects/connected-care-portal.jpg",
    "smart-factory-analytics": "/images/projects/smart-factory-analytics.jpg",
    "composable-commerce": "/images/projects/composable-commerce.jpg",
};

export function WorkCard({ c }) {
    const imgSrc = projectImages[c.slug] || "/images/collaboration.jpg";

    return (_jsxs(Link, {
        to: "/work/$slug",
        params: { slug: c.slug },
        className: "group flex flex-col overflow-hidden rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/45 hover:shadow-lift",
        children: [
            // Real Project Visual / Screenshot
            _jsxs("div", {
                className: "relative h-56 w-full overflow-hidden bg-[#E7E3DE]",
                children: [
                    _jsx("img", {
                        src: imgSrc,
                        alt: `${c.title} — ${c.client}`,
                        className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108",
                        loading: "lazy"
                    }),
                    _jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-[#252525]/85 via-[#252525]/20 to-transparent"
                    }),
                    // Industry pill badge
                    _jsx("span", {
                        className: "absolute left-4 top-4 rounded-full border border-white/30 bg-[#FAF9F7]/95 px-3 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-[#252525] backdrop-blur shadow-xs",
                        children: c.industry
                    }),
                    // Results pill overlay
                    _jsxs("div", {
                        className: "absolute bottom-3 left-4 right-4 flex items-center justify-between rounded-xl border border-white/20 bg-[#FAF9F7]/90 px-3.5 py-2 backdrop-blur-md shadow-sm",
                        children: [
                            _jsx("span", {
                                className: "text-xs font-semibold text-[#5C5650] truncate mr-2",
                                children: c.results[0]?.l || "Key result"
                            }),
                            _jsxs("span", {
                                className: "flex items-center gap-1 text-sm font-extrabold text-[#B85C38] shrink-0",
                                children: [
                                    _jsx(TrendingUp, { className: "h-3.5 w-3.5 text-[#377553]" }),
                                    c.results[0]?.v
                                ]
                            })
                        ]
                    })
                ]
            }),

            // Body content
            _jsxs("div", {
                className: "flex flex-1 flex-col justify-between p-7",
                children: [
                    _jsxs("div", {
                        children: [
                            _jsx("p", { className: `text-xs font-bold uppercase tracking-wider ${toneClass[c.tone]?.text || "text-[#B85C38]"}`, children: c.client }),
                            _jsx("h3", { className: "mt-2 text-xl font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]", children: c.title }),
                            _jsx("p", { className: "mt-2.5 text-sm leading-relaxed text-[#5C5650] line-clamp-3", children: c.summary })
                        ]
                    }),
                    _jsxs("div", {
                        className: "mt-6 flex items-center justify-between border-t border-[#DFDAD3] pt-4 text-sm font-bold text-[#B85C38]",
                        children: [
                            "View Project Case Study",
                            _jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" })
                        ]
                    })
                ]
            })
        ]
    }));
}
