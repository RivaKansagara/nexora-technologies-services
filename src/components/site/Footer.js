import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, CheckCircle2 } from "lucide-react";
import { Logo } from "./ui";

export function Footer() {
    const cols = [
        {
            h: "Company",
            links: [["About", "/about"], ["Work", "/work"], ["Insights", "/insights"], ["Contact", "/contact"]]
        },
        {
            h: "Services",
            links: [["Software Engineering", "/services/software-engineering"], ["AI & Automation", "/services/ai-automation"], ["Cloud & DevOps", "/services/cloud-devops"], ["Data & Analytics", "/services/data-analytics"]]
        },
        {
            h: "Resources",
            links: [["Technology Stack", "/technology"], ["Industries", "/industries"], ["Careers", "/careers"], ["FAQ", "/faq"]]
        },
    ];

    return (_jsxs("footer", {
        className: "border-t border-[#DFDAD3] bg-gradient-to-b from-[#FAF9F7] via-[#F2F0ED] to-[#E7E3DE]",
        children: [
            _jsxs("div", {
                className: "container-x grid gap-12 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)] lg:py-20",
                children: [
                    _jsxs("div", {
                        className: "space-y-5",
                        children: [
                            _jsx(Logo, {}),
                            _jsx("p", {
                                className: "max-w-sm text-sm leading-relaxed text-[#5C5650]",
                                children: "Digital engineering, AI, cloud and software — building secure, scalable technology solutions that move businesses forward."
                            }),
                            _jsxs("div", {
                                className: "space-y-3 pt-2 text-sm text-[#252525]",
                                children: [
                                    _jsxs("a", {
                                        href: "mailto:hello@nexora.example",
                                        className: "flex items-center gap-2.5 transition-colors hover:text-[#B85C38]",
                                        children: [
                                            _jsx("span", {
                                                className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[#B85C38]/15 text-[#B85C38]",
                                                children: _jsx(Mail, { className: "h-3.5 w-3.5" })
                                            }),
                                            "hello@nexora.example"
                                        ]
                                    }),
                                    _jsxs("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            _jsx("span", {
                                                className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[#3A7368]/15 text-[#3A7368]",
                                                children: _jsx(Phone, { className: "h-3.5 w-3.5" })
                                            }),
                                            "+1 (555) 010-2040"
                                        ]
                                    }),
                                    _jsxs("div", {
                                        className: "flex items-center gap-2.5 text-[#5C5650]",
                                        children: [
                                            _jsx("span", {
                                                className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[#91452D]/15 text-[#91452D]",
                                                children: _jsx(MapPin, { className: "h-3.5 w-3.5" })
                                            }),
                                            "Global delivery, remote-first teams"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),

                    cols.map((col) => (
                        _jsxs("div", {
                            children: [
                                _jsx("h3", { className: "text-sm font-extrabold uppercase tracking-wider text-[#252525]", children: col.h }),
                                _jsx("ul", {
                                    className: "mt-5 space-y-3",
                                    children: col.links.map(([label, to]) => (
                                        _jsx("li", {
                                            children: _jsx(Link, {
                                                to: to,
                                                className: "inline-block text-sm text-[#5C5650] transition-all duration-200 hover:translate-x-1 hover:text-[#B85C38]",
                                                children: label
                                            })
                                        }, label)
                                    ))
                                })
                            ]
                        }, col.h)
                    ))
                ]
            }),

            _jsx("div", {
                className: "border-t border-[#DFDAD3] bg-[#FAF9F7]/70 backdrop-blur-sm",
                children: _jsxs("div", {
                    className: "container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-[#5C5650] md:flex-row",
                    children: [
                        _jsx("p", { children: "© 2026 Nexora Technologies. Fictional training project. All rights reserved." }),
                        _jsxs("div", {
                            className: "flex items-center gap-2 text-xs font-semibold text-[#377553] bg-[#377553]/10 border border-[#377553]/20 px-3 py-1 rounded-full",
                            children: [
                                _jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-[#377553]" }),
                                "All systems operational"
                            ]
                        }),
                        _jsx("div", {
                            className: "flex gap-2",
                            children: [
                                { icon: Linkedin, label: "LinkedIn" },
                                { icon: Github, label: "GitHub" },
                                { icon: Twitter, label: "Twitter" }
                            ].map((item, index) => (
                                _jsx("a", {
                                    href: "#",
                                    "aria-label": item.label,
                                    className: "flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFDAD3] bg-[#FAF9F7] text-[#252525] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B85C38] hover:bg-[#B85C38] hover:text-[#FAF9F7] shadow-xs",
                                    children: _jsx(item.icon, { className: "h-4 w-4" })
                                }, index)
                            ))
                        })
                    ]
                })
            })
        ]
    }));
}
