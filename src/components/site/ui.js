import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { toneClass } from "@/lib/site-data";

export function Logo() {
    return (_jsxs(Link, {
        to: "/",
        className: "group flex items-center gap-2.5 transition-transform duration-300 hover:scale-[1.02]",
        "aria-label": "Nexora Technologies home",
        children: [
            _jsxs("svg", {
                viewBox: "0 0 32 32",
                className: "h-9 w-9 drop-shadow-sm transition-transform duration-300 group-hover:rotate-3",
                "aria-hidden": true,
                children: [
                    _jsx("rect", { width: "32", height: "32", rx: "8", className: "fill-[#B85C38]" }),
                    _jsx("path", {
                        d: "M9 23V9l14 14V9",
                        fill: "none",
                        strokeWidth: "3.2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "stroke-[#FAF9F7]"
                    }),
                    _jsx("circle", { cx: "23", cy: "9", r: "2.6", className: "fill-[#91452D]" })
                ]
            }),
            _jsxs("span", {
                className: "leading-none",
                children: [
                    _jsx("span", { className: "block text-[17px] font-extrabold tracking-[0.08em] text-[#252525]", children: "NEXORA" }),
                    _jsx("span", { className: "block text-[9.5px] font-semibold tracking-[0.32em] text-[#5C5650]", children: "TECHNOLOGIES" })
                ]
            })
        ]
    }));
}

export function Eyebrow({ children, className = "" }) {
    return _jsx("p", {
        className: `text-xs font-bold uppercase tracking-[0.22em] text-[#B85C38] ${className}`,
        children: children
    });
}

export function SectionHead({ eyebrow, title, sub, center }) {
    return (_jsxs("div", {
        className: `max-w-2xl ${center ? "mx-auto text-center" : ""}`,
        children: [
            _jsx(Eyebrow, { children: eyebrow }),
            _jsx("h2", { className: "mt-3 text-3xl font-extrabold tracking-tight text-[#252525] sm:text-4xl md:text-[2.6rem] md:leading-[1.18]", children: title }),
            sub && _jsx("p", { className: "mt-4 text-base leading-relaxed text-[#5C5650] md:text-lg", children: sub })
        ]
    }));
}

export function IconTile({ icon: Icon, tone, size = "md" }) {
    return (_jsx("span", {
        className: `inline-flex shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${toneClass[tone]?.tile || "bg-[#B85C38]/12 text-[#B85C38]"} ${size === "lg" ? "h-14 w-14" : "h-11 w-11"}`,
        children: _jsx(Icon, { className: size === "lg" ? "h-7 w-7" : "h-5 w-5", strokeWidth: 1.9 })
    }));
}

export const serviceCardImages = {
    "software-engineering": "/images/services/software-engineering.jpg",
    "ai-automation": "/images/services/ai-automation.jpg",
    "cloud-devops": "/images/services/cloud-devops.jpg",
    "data-analytics": "/images/services/data-analytics.jpg",
    "ui-ux-design": "/images/services/ui-ux-design.jpg",
    "legacy-modernization": "/images/services/legacy-modernization.jpg",
    // Industry fallbacks
    "financial-services": "/images/services/cloud-devops.jpg",
    "healthcare": "/images/services/ai-automation.jpg",
    "retail-ecommerce": "/images/services/ui-ux-design.jpg",
    "manufacturing": "/images/services/legacy-modernization.jpg",
    "education": "/images/services/software-engineering.jpg",
    "logistics": "/images/services/data-analytics.jpg",
};

export function ServiceCard({ item, base }) {
    const imgSrc = serviceCardImages[item.slug] || "/images/services/default-service.jpg";
    return (_jsxs(Link, {
        to: base,
        params: { slug: item.slug },
        className: "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/50 hover:shadow-lift",
        children: [
            _jsxs("div", {
                className: "relative h-48 overflow-hidden bg-[#E7E3DE]",
                children: [
                    _jsx("img", {
                        src: imgSrc,
                        alt: `${item.title} service`,
                        loading: "lazy",
                        className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    }),
                    _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#252525]/75 via-[#252525]/15 to-transparent" }),
                    _jsx("span", {
                        className: "absolute left-4 top-4 rounded-full border border-white/40 bg-[#FAF9F7]/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#252525] backdrop-blur shadow-xs",
                        children: "Practice"
                    }),
                    _jsx("span", {
                        className: "absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/50 bg-[#FAF9F7] text-[#B85C38] shadow-md transition-transform duration-300 group-hover:scale-110",
                        children: _jsx(item.icon, { className: "h-5 w-5", strokeWidth: 1.9 })
                    })
                ]
            }),
            _jsxs("div", {
                className: "flex flex-1 flex-col p-6 md:p-7",
                children: [
                    _jsx("h3", { className: "text-xl font-extrabold tracking-tight text-[#252525] transition-colors duration-200 group-hover:text-[#B85C38]", children: item.title }),
                    _jsx("p", { className: "mt-2.5 flex-1 text-sm leading-6 text-[#5C5650]", children: item.short }),
                    _jsxs("span", {
                        className: "mt-6 inline-flex items-center justify-between border-t border-[#DFDAD3] pt-4 text-sm font-extrabold text-[#B85C38]",
                        children: [
                            "More Details",
                            _jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" })
                        ]
                    })
                ]
            })
        ]
    }));
}

export function PageHero({ crumbs, eyebrow, title, sub, children }) {
    return (_jsxs("section", {
        className: "relative overflow-hidden border-b border-[#DFDAD3] bg-gradient-to-b from-[#FAF9F7] via-[#F2F0ED] to-[#FAF9F7]",
        children: [
            _jsx("div", {
                className: "absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,#000_65%,transparent_100%)]",
                "aria-hidden": "true"
            }),
            _jsx("div", {
                className: "absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-[#B85C38]/8 blur-3xl pointer-events-none",
                "aria-hidden": "true"
            }),
            _jsxs("div", {
                className: "container-x relative py-16 md:py-20",
                children: [
                    _jsxs("nav", {
                        "aria-label": "Breadcrumb",
                        className: "mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#5C5650]",
                        children: [
                            _jsx(Link, { to: "/", className: "transition-colors hover:text-[#B85C38]", children: "Home" }),
                            crumbs.map((c) => (
                                _jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        _jsx(ChevronRight, { className: "h-3.5 w-3.5 text-[#5C5650]/50" }),
                                        c.to
                                            ? _jsx(Link, { to: c.to, className: "transition-colors hover:text-[#B85C38]", children: c.label })
                                            : _jsx("span", { className: "font-bold text-[#252525]", children: c.label })
                                    ]
                                }, c.label)
                            ))
                        ]
                    }),
                    _jsx("div", { className: "animate-hero-up", children: _jsx(Eyebrow, { children: eyebrow }) }),
                    _jsx("h1", { className: "animate-hero-up stagger-1 mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-[#252525] sm:text-5xl md:leading-[1.12]", children: title }),
                    sub && _jsx("p", { className: "animate-hero-up stagger-2 mt-4 max-w-2xl text-base leading-relaxed text-[#5C5650] md:text-lg", children: sub }),
                    children && _jsx("div", { className: "animate-hero-up stagger-3", children: children })
                ]
            })
        ]
    }));
}

export function Btn({ to, children, variant = "primary" }) {
    const cls = variant === "primary"
        ? "bg-[#B85C38] text-[#FAF9F7] shadow-[0_4px_16px_rgba(184,92,56,0.28)] hover:bg-[#91452D] hover:shadow-[0_8px_24px_rgba(184,92,56,0.38)] hover:-translate-y-0.5 active:translate-y-0"
        : "border border-[#DFDAD3] bg-[#FAF9F7] text-[#252525] hover:border-[#B85C38]/50 hover:bg-white hover:text-[#B85C38] hover:-translate-y-0.5 shadow-sm active:translate-y-0";
    return (_jsxs(Link, {
        to: to,
        className: `group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-bold transition-all duration-300 ${cls}`,
        children: [
            children,
            _jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
        ]
    }));
}

export function CtaBand() {
    return (_jsx("section", {
        className: "container-x py-20 lg:py-24",
        children: _jsxs("div", {
            className: "relative overflow-hidden rounded-3xl border border-[#DFDAD3] bg-gradient-to-br from-[#FAF9F7] via-[#F2F0ED] to-[#E7E3DE] px-8 py-14 shadow-lift md:px-14 md:py-16",
            children: [
                _jsx("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#B85C38]/12 blur-3xl", "aria-hidden": "true" }),
                _jsx("div", { className: "absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#91452D]/10 blur-3xl", "aria-hidden": "true" }),
                _jsxs("div", {
                    className: "relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center",
                    children: [
                        _jsxs("div", {
                            className: "max-w-xl",
                            children: [
                                _jsx("span", {
                                    className: "inline-block rounded-full border border-[#B85C38]/20 bg-[#B85C38]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#B85C38]",
                                    children: "READY TO SCALE?"
                                }),
                                _jsx("h2", {
                                    className: "mt-3 text-3xl font-extrabold tracking-tight text-[#252525] md:text-4xl",
                                    children: "Have a project in mind?"
                                }),
                                _jsx("p", {
                                    className: "mt-3 text-base text-[#5C5650] md:text-lg",
                                    children: "Tell us what you're building. We'll respond within one business day with a delivery roadmap and team structure."
                                })
                            ]
                        }),
                        _jsxs("div", {
                            className: "flex flex-wrap gap-3.5",
                            children: [
                                _jsxs(Link, {
                                    to: "/contact",
                                    className: "group inline-flex items-center gap-2 rounded-xl bg-[#B85C38] px-6 py-3.5 text-sm font-bold text-[#FAF9F7] shadow-rust transition-all duration-300 hover:bg-[#91452D] hover:-translate-y-0.5",
                                    children: [
                                        "Let's Talk",
                                        _jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                                    ]
                                }),
                                _jsxs(Link, {
                                    to: "/work",
                                    className: "group inline-flex items-center gap-2 rounded-xl border border-[#DFDAD3] bg-[#FAF9F7] px-6 py-3.5 text-sm font-bold text-[#252525] shadow-xs transition-all duration-300 hover:border-[#B85C38]/40 hover:text-[#B85C38] hover:-translate-y-0.5",
                                    children: [
                                        "See Our Work",
                                        _jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}

export function seo(title, description) {
    return {
        meta: [
            { title: `${title} | Nexora Technologies` },
            { name: "description", content: description },
            { property: "og:title", content: `${title} | Nexora Technologies` },
            { property: "og:description", content: description },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
        ],
    };
}
