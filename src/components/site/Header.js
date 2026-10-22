import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { Logo, IconTile } from "./ui";
import { services, solutions, industries } from "@/lib/site-data";

const megas = {
    services: {
        label: "Services",
        to: "/services",
        items: services.slice(0, 6).map((s) => ({ ...s, to: "/services/$slug", params: { slug: s.slug } }))
    },
    solutions: {
        label: "Solutions",
        to: "/solutions",
        items: solutions.slice(0, 6).map((s) => ({ ...s, to: "/solutions" }))
    },
    industries: {
        label: "Industries",
        to: "/industries",
        items: industries.slice(0, 6).map((s) => ({ ...s, to: "/industries/$slug", params: { slug: s.slug } }))
    },
};

const nav = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services", mega: "services" },
    { label: "Projects", to: "/work" },
    { label: "Insights", to: "/insights" },
    { label: "Contact", to: "/contact" },
];

export function Header() {
    const path = useRouterState({ select: (s) => s.location.pathname });
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(null);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const on = () => setScrolled(window.scrollY > 8);
        on();
        window.addEventListener("scroll", on, { passive: true });
        return () => window.removeEventListener("scroll", on);
    }, []);

    useEffect(() => {
        setOpen(null);
        setMobile(false);
    }, [path]);

    const isActive = (to) => (to === "/" ? path === "/" : path.startsWith(to));
    const mega = open ? megas[open] : null;

    return (_jsxs("header", {
        className: `sticky top-0 z-50 border-b border-[#DFDAD3] bg-[#FAF9F7]/95 backdrop-blur-md transition-all duration-300 ${
            scrolled ? "shadow-[0_4px_24px_rgba(37,37,37,0.06)]" : ""
        }`,
        onMouseLeave: () => setOpen(null),
        children: [
            _jsxs("div", {
                className: "container-x flex h-[74px] items-center justify-between gap-6",
                children: [
                    _jsx(Logo, {}),
                    _jsx("nav", {
                        className: "hidden items-center gap-1 lg:flex",
                        "aria-label": "Main",
                        children: nav.map((item) => (
                            _jsx("div", {
                                onMouseEnter: () => setOpen(item.mega ?? null),
                                children: _jsxs(Link, {
                                    to: item.to,
                                    "aria-expanded": item.mega ? open === item.mega : undefined,
                                    className: `relative flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[14.5px] font-bold transition-all duration-200 hover:bg-[#E7E3DE]/60 hover:text-[#B85C38] ${
                                        isActive(item.to) ? "text-[#B85C38]" : "text-[#252525]"
                                    }`,
                                    onFocus: () => setOpen(item.mega ?? null),
                                    children: [
                                        item.label,
                                        item.mega && _jsx(ChevronDown, {
                                            className: `h-3.5 w-3.5 transition-transform duration-200 ${
                                                open === item.mega ? "rotate-180 text-[#B85C38]" : "text-[#5C5650]"
                                            }`
                                        }),
                                        isActive(item.to) && _jsx("span", {
                                            className: "absolute inset-x-3 -bottom-[15px] h-[3px] rounded-t-full bg-[#B85C38]"
                                        })
                                    ]
                                })
                            }, item.label)
                        ))
                    }),
                    _jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                            _jsx(Link, {
                                to: "/contact",
                                className: "hidden rounded-xl bg-[#B85C38] px-5 py-2.5 text-sm font-bold text-[#FAF9F7] shadow-rust transition-all duration-300 hover:bg-[#91452D] hover:shadow-[0_8px_24px_rgba(184,92,56,0.35)] hover:-translate-y-0.5 sm:inline-flex",
                                children: "Let's Talk"
                            }),
                            _jsx("button", {
                                className: "rounded-xl border border-[#DFDAD3] p-2 text-[#252525] hover:bg-[#E7E3DE] transition-colors lg:hidden",
                                onClick: () => setMobile((v) => !v),
                                "aria-label": "Toggle menu",
                                children: mobile ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" })
                            })
                        ]
                    })
                ]
            }),

            // Desktop Mega Menu
            mega && (_jsx("div", {
                className: "absolute inset-x-0 top-full hidden border-b border-[#DFDAD3] bg-[#FAF9F7]/98 backdrop-blur-xl shadow-lift lg:block animate-in fade-in slide-in-from-top-1 duration-200",
                children: _jsxs("div", {
                    className: "container-x grid grid-cols-[1fr_260px] gap-8 py-8",
                    children: [
                        _jsx("div", {
                            className: "grid grid-cols-2 gap-3 md:grid-cols-3",
                            children: mega.items.map((item) => (
                                _jsxs(Link, {
                                    to: item.to,
                                    params: item.params,
                                    className: "group flex gap-3.5 rounded-2xl border border-transparent p-3.5 transition-all duration-200 hover:border-[#DFDAD3] hover:bg-[#E7E3DE]/45 hover:shadow-xs",
                                    children: [
                                        _jsx(IconTile, { icon: item.icon, tone: item.tone }),
                                        _jsxs("span", {
                                            children: [
                                                _jsx("span", {
                                                    className: "block text-sm font-bold text-[#252525] group-hover:text-[#B85C38] transition-colors",
                                                    children: item.title
                                                }),
                                                _jsx("span", {
                                                    className: "mt-1 block text-xs leading-relaxed text-[#5C5650]",
                                                    children: item.short
                                                })
                                            ]
                                        })
                                    ]
                                }, item.title)
                            ))
                        }),
                        _jsxs("div", {
                            className: "flex flex-col justify-between rounded-2xl border border-[#DFDAD3] bg-gradient-to-br from-[#E7E3DE]/80 via-[#F2F0ED] to-[#FAF9F7] p-6 shadow-xs",
                            children: [
                                _jsxs("div", {
                                    children: [
                                        _jsx("p", { className: "text-xs font-bold uppercase tracking-[0.18em] text-[#B85C38]", children: mega.label }),
                                        _jsx("h4", { className: "mt-2 text-base font-extrabold text-[#252525]", children: `Explore Nexora ${mega.label}` }),
                                        _jsx("p", { className: "mt-1.5 text-xs leading-relaxed text-[#5C5650]", children: "Expert engineering practices tailored to modern digital product scale." })
                                    ]
                                }),
                                _jsxs(Link, {
                                    to: mega.to,
                                    className: "group mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#B85C38] transition-colors hover:text-[#91452D]",
                                    children: [
                                        `View all ${mega.label}`,
                                        _jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })),

            // Mobile Navigation Menu
            mobile && (_jsx("div", {
                className: "max-h-[calc(100vh-74px)] overflow-y-auto border-t border-[#DFDAD3] bg-[#FAF9F7] p-4 lg:hidden animate-in slide-in-from-top-2 duration-200",
                children: _jsxs("nav", {
                    className: "space-y-1",
                    "aria-label": "Mobile",
                    children: [
                        nav.map((item) => item.mega ? (
                            _jsxs("details", {
                                className: "group rounded-xl border border-transparent px-3 py-2 open:border-[#DFDAD3] open:bg-[#E7E3DE]/40",
                                children: [
                                    _jsxs("summary", {
                                        className: `flex cursor-pointer list-none items-center justify-between font-bold ${
                                            isActive(item.to) ? "text-[#B85C38]" : "text-[#252525]"
                                        }`,
                                        children: [
                                            item.label,
                                            _jsx(ChevronDown, { className: "h-4 w-4 transition-transform group-open:rotate-180" })
                                        ]
                                    }),
                                    _jsxs("div", {
                                        className: "grid gap-1 pt-3 pb-1",
                                        children: [
                                            _jsxs(Link, {
                                                to: item.to,
                                                className: "py-1.5 pl-2 text-sm font-bold text-[#B85C38]",
                                                children: ["All ", item.label]
                                            }),
                                            megas[item.mega].items.map((sub) => (
                                                _jsx(Link, {
                                                    to: sub.to,
                                                    params: sub.params,
                                                    className: "py-1.5 pl-2 text-sm text-[#5C5650] hover:text-[#B85C38]",
                                                    children: sub.title
                                                }, sub.title)
                                            ))
                                        ]
                                    })
                                ]
                            }, item.label)
                        ) : (
                            _jsx(Link, {
                                to: item.to,
                                className: `block rounded-xl px-3 py-2.5 font-bold transition-colors ${
                                    isActive(item.to) ? "bg-[#B85C38]/12 text-[#B85C38]" : "text-[#252525] hover:bg-[#E7E3DE]/50"
                                }`,
                                children: item.label
                            }, item.label)
                        )),
                        _jsx(Link, {
                            to: "/contact",
                            className: "mt-4 flex w-full items-center justify-center rounded-xl bg-[#B85C38] py-3.5 font-bold text-[#FAF9F7] shadow-rust hover:bg-[#91452D] transition-colors",
                            children: "Let's Talk"
                        })
                    ]
                })
            }))
        ]
    }));
}
