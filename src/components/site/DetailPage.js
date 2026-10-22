import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import { CtaBand, IconTile, PageHero, SectionHead } from "./ui";
import { toneClass } from "@/lib/site-data";

const serviceVisuals = {
    "software-engineering": {
        image: "/images/services/software-engineering.jpg",
        alt: "Software developer working on a modern application",
        label: "SOFTWARE ENGINEERING",
        headline: "Digital products built for what comes next.",
        description: "Scalable applications, reliable platforms and thoughtful engineering for your business."
    },
    "ai-automation": {
        image: "/images/services/ai-automation.jpg",
        alt: "Abstract artificial intelligence technology visualization",
        label: "AI & INTELLIGENT AUTOMATION",
        headline: "Turn intelligent ideas into real outcomes.",
        description: "Practical AI and workflow automation that help teams work smarter and move faster."
    },
    "cloud-devops": {
        image: "/images/services/cloud-devops.jpg",
        alt: "Digital global network representing cloud infrastructure",
        label: "CLOUD & DEVOPS",
        headline: "A stronger foundation for every release.",
        description: "Secure cloud platforms and dependable delivery pipelines designed to scale."
    },
    "data-analytics": {
        image: "/images/services/data-analytics.jpg",
        alt: "Analytics dashboard with business data visualizations",
        label: "DATA & ANALYTICS",
        headline: "Make your data work harder.",
        description: "Turn complex data into clear insights, useful dashboards and confident decisions."
    },
    "ui-ux-design": {
        image: "/images/services/ui-ux-design.jpg",
        alt: "Design team collaborating on a digital user experience",
        label: "UI/UX & DIGITAL EXPERIENCE",
        headline: "Experiences people love to use.",
        description: "Research-led design and accessible interfaces that make every interaction count."
    },
    "legacy-modernization": {
        image: "/images/services/legacy-modernization.jpg",
        alt: "Modern computer hardware representing technology modernization",
        label: "LEGACY MODERNIZATION",
        headline: "Move forward without losing momentum.",
        description: "Modernize critical systems thoughtfully while protecting business continuity."
    }
};

const defaultVisual = {
    image: "/images/services/default-service.jpg",
    alt: "Technology team collaborating on a digital project",
    label: "NEXORA TECHNOLOGIES",
    headline: "Technology that moves business forward.",
    description: "A connected team to help you plan, build and improve your digital future."
};

export function DetailPage({ item, section, sectionTo, others, base }) {
    const visual = serviceVisuals[item.slug] || { ...defaultVisual, label: item.title.toUpperCase() };
    return _jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: section, to: sectionTo }, { label: item.title }],
                eyebrow: section,
                title: item.title,
                sub: item.intro,
                children: _jsx("div", { className: "mt-8", children: _jsx(IconTile, { icon: item.icon, tone: item.tone, size: "lg" }) })
            }),
            _jsxs("section", {
                className: "container-x grid items-start gap-10 py-14 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14",
                children: [
                    _jsxs("div", {
                        className: "space-y-8",
                        children: [
                            _jsx(SectionHead, { eyebrow: "Capabilities", title: "What we deliver" }),
                            _jsx("ul", {
                                className: "grid gap-4 sm:grid-cols-2",
                                children: item.capabilities.map((c) => _jsxs("li", {
                                    className: "flex items-start gap-3 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#B85C38]/40 hover:shadow-lift",
                                    children: [
                                        _jsx(CheckCircle2, { className: `mt-0.5 h-5 w-5 shrink-0 ${toneClass[item.tone]?.text || "text-[#B85C38]"}` }),
                                        _jsx("span", { className: "font-semibold text-[#252525]", children: c })
                                    ]
                                }, c))
                            }),
                            _jsx("h3", { className: "pt-4 text-2xl font-extrabold text-[#252525]", children: "Business outcomes" }),
                            _jsx("ul", {
                                className: "space-y-3.5",
                                children: item.outcomes.map((o) => _jsxs("li", {
                                    className: "flex items-center gap-3 rounded-xl border border-[#DFDAD3]/60 bg-[#FAF9F7]/70 px-4 py-3 text-[#5C5650] shadow-xs",
                                    children: [_jsx(TrendingUp, { className: "h-4.5 w-4.5 shrink-0 text-[#377553]" }), _jsx("span", { className: "font-medium", children: o })]
                                }, o))
                            })
                        ]
                    }),
                    _jsxs("aside", {
                        className: "lg:sticky lg:top-24 space-y-6",
                        children: [
                            _jsxs("div", {
                                className: "group overflow-hidden rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-soft transition-all duration-300 hover:shadow-lift",
                                children: [
                                    _jsxs("div", {
                                        className: "relative h-64 overflow-hidden sm:h-80 lg:h-[340px]",
                                        children: [
                                            _jsx("img", {
                                                src: visual.image,
                                                alt: visual.alt,
                                                className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                                                loading: "lazy"
                                            }),
                                            _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#252525]/85 via-[#252525]/25 to-transparent" }),
                                            _jsxs("div", {
                                                className: "absolute inset-x-0 bottom-0 p-6 sm:p-7",
                                                children: [
                                                    _jsx("p", { className: "text-xs font-bold tracking-[0.18em] text-[#FAF9F7]/90 uppercase", children: visual.label }),
                                                    _jsx("h3", { className: "mt-2 max-w-md text-2xl font-extrabold leading-tight text-[#FAF9F7] sm:text-3xl", children: visual.headline })
                                                ]
                                            })
                                        ]
                                    }),
                                    _jsxs("div", {
                                        className: "p-6 sm:p-7",
                                        children: [
                                            _jsx("p", { className: "text-sm leading-relaxed text-[#5C5650]", children: visual.description }),
                                            _jsxs(Link, {
                                                to: "/contact",
                                                className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-[#B85C38] px-6 py-3.5 text-sm font-bold text-[#FAF9F7] shadow-rust transition-all duration-300 hover:bg-[#91452D] hover:-translate-y-0.5",
                                                children: ["Discuss your project", _jsx(ArrowRight, { className: "h-4 w-4" })]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            _jsxs("div", {
                                className: "rounded-2xl border border-[#DFDAD3] bg-[#EAE6E0] p-6 shadow-xs",
                                children: [
                                    _jsx("h3", { className: "font-bold text-[#252525]", children: "Technologies we use" }),
                                    _jsx("div", {
                                        className: "mt-4 flex flex-wrap gap-2",
                                        children: item.tech.map((t) => _jsx("span", {
                                            className: "rounded-lg border border-[#DFDAD3] bg-[#FAF9F7] px-3 py-1.5 text-xs font-bold text-[#252525] shadow-xs",
                                            children: t
                                        }, t))
                                    }),
                                    _jsx("h3", { className: "mt-7 font-bold text-[#252525]", children: "Related practices" }),
                                    _jsx("ul", {
                                        className: "mt-3 space-y-2",
                                        children: others.filter((o) => o.slug !== item.slug).slice(0, 4).map((o) => _jsx("li", {
                                            children: _jsxs(Link, {
                                                to: base,
                                                params: { slug: o.slug },
                                                className: "group flex items-center justify-between rounded-lg p-2 text-sm font-semibold text-[#252525] transition-colors hover:bg-[#FAF9F7] hover:text-[#B85C38]",
                                                children: [
                                                    o.title,
                                                    _jsx(ArrowRight, { className: "h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-1 group-hover:opacity-100" })
                                                ]
                                            })
                                        }, o.slug))
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            _jsx(CtaBand, {})
        ]
    });
}
