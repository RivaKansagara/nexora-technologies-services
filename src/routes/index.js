import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
    ArrowRight,
    BarChart3,
    BrainCircuit,
    Cloud,
    Code2,
    HeartPulse,
    Landmark,
    ShoppingBag,
    Truck,
    Check,
    Users,
    Sparkles,
    ShieldCheck,
    Layers
} from "lucide-react";
import { Eyebrow, SectionHead, CtaBand } from "@/components/site/ui";
import { HeroSlider } from "@/components/site/HeroSlider";
import { HeroDashboard } from "@/components/site/HeroDashboard";
import { TechMarquee } from "@/components/site/TechMarquee";
import { caseStudies } from "@/lib/site-data";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Nexora Technologies | Digital Engineering & IT Solutions" },
            { name: "description", content: "Nexora Technologies builds modern software, cloud and AI solutions for growing businesses." },
        ],
    }),
    component: Home,
});

const serviceVisuals = [
    {
        icon: Code2,
        tone: "bg-[#B85C38]/12 text-[#B85C38]",
        title: "Software Engineering",
        text: "Custom web, mobile and enterprise platforms built to scale reliably.",
        tag: "Core Engineering"
    },
    {
        icon: BrainCircuit,
        tone: "bg-[#695675]/12 text-[#695675]",
        title: "AI & Automation",
        text: "Applied AI, assistants and intelligent workflows that save real hours.",
        tag: "Intelligent Systems"
    },
    {
        icon: Cloud,
        tone: "bg-[#3D6A82]/12 text-[#3D6A82]",
        title: "Cloud & DevOps",
        text: "Cloud migration, infrastructure as code and resilient delivery pipelines.",
        tag: "Cloud Native"
    },
    {
        icon: BarChart3,
        tone: "bg-[#A64B2A]/12 text-[#A64B2A]",
        title: "Data & Analytics",
        text: "Modern data platforms, dashboards and trusted insight for every team.",
        tag: "Data Strategy"
    },
];

const industries = [
    { icon: Landmark, title: "Financial Services", tone: "bg-[#B85C38]/12 text-[#B85C38]", slug: "financial-services" },
    { icon: HeartPulse, title: "Healthcare & MedTech", tone: "bg-[#377553]/12 text-[#377553]", slug: "healthcare" },
    { icon: ShoppingBag, title: "Retail & E-commerce", tone: "bg-[#A64B2A]/12 text-[#A64B2A]", slug: "retail-ecommerce" },
    { icon: Truck, title: "Logistics & Transport", tone: "bg-[#3D6A82]/12 text-[#3D6A82]", slug: "logistics" },
];

function Home() {
    return (_jsxs(_Fragment, { children: [
        // 1. HERO SECTION (Light Gray + Warm Gray + Rust Orange Accent + Control Center)
        _jsxs("section", {
            className: "relative overflow-hidden bg-gradient-to-b from-[#FAF9F7] via-[#F2F0ED] to-[#FAF9F7] border-b border-[#DFDAD3]",
            children: [
                _jsx("div", {
                    className: "absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,#000_70%,transparent_100%)]",
                    "aria-hidden": "true"
                }),
                _jsx("div", {
                    className: "absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#B85C38]/10 blur-3xl pointer-events-none",
                    "aria-hidden": "true"
                }),
                _jsx("div", {
                    className: "absolute top-1/2 right-10 h-80 w-80 rounded-full bg-[#91452D]/8 blur-3xl pointer-events-none",
                    "aria-hidden": "true"
                }),
                _jsxs("div", {
                    className: "container-x relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24",
                    children: [
                        // Left Hero Content
                        _jsxs("div", {
                            className: "max-w-2xl",
                            children: [
                                _jsx("div", {
                                    className: "animate-hero-up inline-flex items-center gap-2 rounded-full border border-[#B85C38]/25 bg-[#B85C38]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#B85C38] backdrop-blur-sm",
                                    children: "DIGITAL ENGINEERING • AI • CLOUD • SOFTWARE"
                                }),
                                _jsxs("h1", {
                                    className: "animate-hero-up stagger-1 mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#252525] sm:text-5xl lg:text-[3.85rem]",
                                    children: [
                                        "Building ",
                                        _jsx("span", { className: "text-[#B85C38]", children: "Digital" }),
                                        _jsx("br", { className: "hidden sm:inline" }),
                                        _jsx("span", { className: "text-[#91452D]", children: "Solutions" }),
                                        " That Move",
                                        _jsx("br", { className: "hidden sm:inline" }),
                                        "Businesses Forward."
                                    ]
                                }),
                                _jsx("p", {
                                    className: "animate-hero-up stagger-2 mt-6 max-w-xl text-base leading-relaxed text-[#5C5650] md:text-lg",
                                    children: "We build modern digital products and technology solutions that help businesses grow."
                                }),
                                _jsxs("div", {
                                    className: "animate-hero-up stagger-3 mt-8 flex flex-wrap items-center gap-3.5",
                                    children: [
                                        _jsxs(Link, {
                                            to: "/services",
                                            className: "group inline-flex items-center gap-2 rounded-xl bg-[#B85C38] px-6 py-3.5 text-[15px] font-bold text-[#FAF9F7] shadow-rust transition-all duration-300 hover:bg-[#91452D] hover:shadow-[0_8px_24px_rgba(184,92,56,0.38)] hover:-translate-y-0.5",
                                            children: [
                                                "Explore Services",
                                                _jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
                                            ]
                                        }),
                                        _jsxs(Link, {
                                            to: "/contact",
                                            className: "group inline-flex items-center gap-2 rounded-xl border border-[#DFDAD3] bg-[#FAF9F7] px-6 py-3.5 text-[15px] font-bold text-[#252525] shadow-xs transition-all duration-300 hover:border-[#B85C38]/50 hover:text-[#B85C38] hover:-translate-y-0.5",
                                            children: [
                                                "Let's Talk",
                                                _jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
                                            ]
                                        })
                                    ]
                                }),
                                _jsx("div", {
                                    className: "animate-hero-up stagger-4 mt-9 flex flex-wrap items-center gap-x-7 gap-y-2.5 text-sm font-semibold text-[#252525]",
                                    children: [
                                        "Scalable technology",
                                        "Clean engineering",
                                        "Business-focused"
                                    ].map((item) => (
                                        _jsxs("span", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                _jsx("span", {
                                                    className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#377553]/15 text-[#377553]",
                                                    children: _jsx(Check, { className: "h-3.5 w-3.5 stroke-[2.5]" })
                                                }),
                                                item
                                            ]
                                        }, item)
                                    ))
                                })
                            ]
                        }),

                        // Right Hero Slider (Auto 6s fade transition across IT, AI, Cloud, Innovation)
                        _jsx(HeroSlider, {})
                    ]
                })
            ]
        }),

        // 2. STATS BANNER
        _jsx("section", {
            className: "border-b border-[#DFDAD3] bg-gradient-to-r from-[#FAF9F7] via-[#E7E3DE]/70 to-[#FAF9F7]",
            children: _jsx("div", {
                className: "container-x grid grid-cols-2 divide-x divide-[#DFDAD3] md:grid-cols-4",
                children: [
                    ['10+', 'Years experience'],
                    ['180+', 'Projects delivered'],
                    ['32', 'Countries served'],
                    ['96%', 'Client retention']
                ].map(([value, label]) => (
                    _jsxs("div", {
                        className: "px-4 py-7 text-center first:pl-0 last:pr-0 md:py-8",
                        children: [
                            _jsx("div", { className: "text-3xl font-extrabold text-[#B85C38] md:text-4xl", children: value }),
                            _jsx("div", { className: "mt-1.5 text-xs font-bold uppercase tracking-wider text-[#5C5650] md:text-sm", children: label })
                        ]
                    }, label)
                ))
            })
        }),

        // 3. WHO WE ARE SECTION (With professional office collaboration photo & feature highlights)
        _jsx("section", {
            className: "py-20 lg:py-28 bg-[#FAF9F7] border-b border-[#DFDAD3]",
            children: _jsxs("div", {
                className: "container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
                children: [
                    // Left Text Column
                    _jsxs("div", {
                        className: "space-y-6",
                        children: [
                            _jsx(Eyebrow, { children: "WHO WE ARE" }),
                            _jsx("h2", {
                                className: "text-3xl font-extrabold tracking-tight text-[#252525] sm:text-4xl md:text-[2.65rem] md:leading-[1.18]",
                                children: "Engineering digital excellence for forward-thinking enterprises."
                            }),
                            _jsx("p", {
                                className: "text-base leading-relaxed text-[#5C5650] md:text-lg",
                                children: "Nexora combines product thinking, software engineering, cloud architecture, and applied AI to transform complex business challenges into reliable digital experiences."
                            }),

                            // Feature Points
                            _jsxs("div", {
                                className: "space-y-4 pt-2",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-start gap-3.5 rounded-2xl border border-[#DFDAD3] bg-[#F2F0ED] p-4.5 transition-all duration-300 hover:border-[#B85C38]/40 hover:shadow-soft",
                                        children: [
                                            _jsx("span", {
                                                className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B85C38]/15 text-[#B85C38]",
                                                children: _jsx(Users, { className: "h-4.5 w-4.5" })
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("h4", { className: "text-sm font-bold text-[#252525]", children: "Dedicated Product Teams" }),
                                                    _jsx("p", { className: "mt-0.5 text-xs text-[#5C5650]", children: "Senior engineers and designers seamlessly integrated into your workflow." })
                                                ]
                                            })
                                        ]
                                    }),
                                    _jsxs("div", {
                                        className: "flex items-start gap-3.5 rounded-2xl border border-[#DFDAD3] bg-[#F2F0ED] p-4.5 transition-all duration-300 hover:border-[#B85C38]/40 hover:shadow-soft",
                                        children: [
                                            _jsx("span", {
                                                className: "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#3A7368]/15 text-[#3A7368]",
                                                children: _jsx(ShieldCheck, { className: "h-4.5 w-4.5" })
                                            }),
                                            _jsxs("div", {
                                                children: [
                                                    _jsx("h4", { className: "text-sm font-bold text-[#252525]", children: "Security & Governance by Design" }),
                                                    _jsx("p", { className: "mt-0.5 text-xs text-[#5C5650]", children: "Automated quality gates, CI/CD audits, and compliance from day one." })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),

                            _jsxs(Link, {
                                to: "/about",
                                className: "group inline-flex items-center gap-2 text-sm font-bold text-[#B85C38] transition-all hover:text-[#91452D] hover:gap-3",
                                children: [
                                    "Learn more about our team ",
                                    _jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                                ]
                            })
                        ]
                    }),

                    // Right Image Column (Office Collaboration - 100% Local Static Image)
                    _jsxs("div", {
                        className: "relative",
                        children: [
                            // Soft background glow
                            _jsx("div", {
                                className: "absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#B85C38]/15 via-[#91452D]/10 to-transparent blur-2xl -z-10",
                                "aria-hidden": "true"
                            }),

                            // Main Image Container
                            _jsxs("div", {
                                className: "group relative overflow-hidden rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-lift",
                                children: [
                                    _jsx("img", {
                                        src: "/images/collaboration.jpg",
                                        alt: "Nexora Technologies engineers collaborating in a modern IT office workspace",
                                        className: "h-[380px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[420px]",
                                        loading: "lazy"
                                    }),
                                    _jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-[#252525]/80 via-[#252525]/20 to-transparent"
                                    }),

                                    // Overlay Bottom Card
                                    _jsxs("div", {
                                        className: "absolute inset-x-6 bottom-6 rounded-2xl border border-white/20 bg-[#FAF9F7]/95 p-4.5 backdrop-blur-md shadow-lg",
                                        children: [
                                            _jsxs("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    _jsx("span", {
                                                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B85C38] text-[#FAF9F7] shadow-sm",
                                                        children: _jsx(Sparkles, { className: "h-5 w-5" })
                                                    }),
                                                    _jsxs("div", {
                                                        children: [
                                                            _jsx("h4", { className: "text-sm font-extrabold text-[#252525]", children: "120+ Senior Technologists" }),
                                                            _jsx("p", { className: "text-xs font-semibold text-[#5C5650]", children: "Distributed engineering hubs across 18 countries" })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }),

        // 4. SERVICES SECTION
        _jsx("section", {
            className: "border-b border-[#DFDAD3] bg-[#F2F0ED] py-20 lg:py-28",
            children: _jsxs("div", {
                className: "container-x",
                children: [
                    _jsxs("div", {
                        className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
                        children: [
                            _jsx(SectionHead, {
                                eyebrow: "PRACTICES",
                                title: "Technology services, simply delivered.",
                                sub: "Full-lifecycle engineering practices designed to help you plan, ship and scale."
                            }),
                            _jsxs(Link, {
                                to: "/services",
                                className: "group hidden items-center gap-2 text-sm font-bold text-[#B85C38] hover:text-[#91452D] sm:inline-flex",
                                children: [
                                    "View all services ",
                                    _jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                                ]
                            })
                        ]
                    }),
                    _jsx("div", {
                        className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
                        children: serviceVisuals.map((item) => (
                            _jsxs(Link, {
                                to: "/services",
                                className: "group relative flex flex-col justify-between rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-7 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/50 hover:shadow-lift",
                                children: [
                                    _jsxs("div", {
                                        children: [
                                            _jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    _jsx("span", {
                                                        className: `flex h-12 w-12 items-center justify-center rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-105 ${item.tone}`,
                                                        children: _jsx(item.icon, { className: "h-6 w-6", strokeWidth: 1.9 })
                                                    }),
                                                    _jsx("span", {
                                                        className: "rounded-full bg-[#E7E3DE] px-2.5 py-1 text-[11px] font-bold text-[#B85C38] transition-colors group-hover:bg-[#B85C38]/12",
                                                        children: item.tag
                                                    })
                                                ]
                                            }),
                                            _jsx("h3", {
                                                className: "mt-6 text-xl font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]",
                                                children: item.title
                                            }),
                                            _jsx("p", {
                                                className: "mt-2.5 text-sm leading-relaxed text-[#5C5650]",
                                                children: item.text
                                            })
                                        ]
                                    }),
                                    _jsxs("div", {
                                        className: "mt-7 flex items-center gap-1.5 pt-4 border-t border-[#DFDAD3] text-sm font-bold text-[#B85C38]",
                                        children: [
                                            "Explore practice",
                                            _jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
                                        ]
                                    })
                                ]
                            }, item.title)
                        ))
                    })
                ]
            })
        }),

        // 5. TECHNOLOGY MARQUEE
        _jsx("section", {
            className: "overflow-hidden bg-[#FAF9F7] py-20 lg:py-24 border-b border-[#DFDAD3]",
            children: _jsxs("div", {
                className: "container-x",
                children: [
                    _jsx(SectionHead, {
                        eyebrow: "TECHNOLOGY STACK",
                        title: "Technologies and integrations we trust.",
                        sub: "A modern, battle-tested toolchain chosen for high performance and security."
                    }),
                    _jsx("div", {
                        className: "mt-12",
                        children: _jsx(TechMarquee, {})
                    })
                ]
            })
        }),

        // 6. INDUSTRIES SECTION
        _jsx("section", {
            className: "border-b border-[#DFDAD3] bg-[#F2F0ED] py-20 lg:py-28",
            children: _jsxs("div", {
                className: "container-x",
                children: [
                    _jsx(SectionHead, {
                        eyebrow: "INDUSTRIES",
                        title: "Built for your industry.",
                        sub: "Domain expertise engineered into every architecture and user journey."
                    }),
                    _jsx("div", {
                        className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
                        children: industries.map((item) => (
                            _jsxs(Link, {
                                to: "/industries/$slug",
                                params: { slug: item.slug },
                                className: "group flex items-center gap-4 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B85C38]/45 hover:shadow-lift",
                                children: [
                                    _jsx("span", {
                                        className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${item.tone}`,
                                        children: _jsx(item.icon, { className: "h-6 w-6", strokeWidth: 1.8 })
                                    }),
                                    _jsxs("div", {
                                        children: [
                                            _jsx("span", { className: "block font-bold text-[#252525] transition-colors group-hover:text-[#B85C38]", children: item.title }),
                                            _jsx("span", { className: "block text-xs font-semibold text-[#B85C38]", children: "View solutions →" })
                                        ]
                                    })
                                ]
                            }, item.title)
                        ))
                    })
                ]
            })
        }),

        // 7. SELECTED WORK SECTION
        _jsxs("section", {
            className: "container-x py-20 lg:py-28",
            children: [
                _jsxs("div", {
                    className: "flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
                    children: [
                        _jsx(SectionHead, {
                            eyebrow: "CASE STUDIES",
                            title: "A few things we've built.",
                            sub: "Real outcomes delivered across banking, healthcare, manufacturing and commerce."
                        }),
                        _jsxs(Link, {
                            to: "/work",
                            className: "group hidden items-center gap-2 text-sm font-bold text-[#B85C38] hover:text-[#91452D] sm:inline-flex",
                            children: [
                                "View all projects ",
                                _jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                            ]
                        })
                    ]
                }),
                _jsx("div", {
                    className: "mt-12 grid gap-8 lg:grid-cols-3",
                    children: caseStudies.slice(0, 3).map((work, i) => (
                        _jsxs(Link, {
                            to: "/work/$slug",
                            params: { slug: work.slug },
                            className: "group flex flex-col overflow-hidden rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/45 hover:shadow-lift",
                            children: [
                                // Visual Top Preview
                                _jsx("div", {
                                    className: `relative h-52 overflow-hidden ${
                                        i === 0 ? 'bg-gradient-to-br from-[#E7E3DE] to-[#DFDAD3]'
                                        : i === 1 ? 'bg-gradient-to-br from-[#F2F0ED] to-[#E7E3DE]'
                                        : 'bg-gradient-to-br from-[#EAE6E0] to-[#DFDAD3]'
                                    }`,
                                    children: _jsxs("div", {
                                        className: "absolute inset-6 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-4.5 shadow-sm",
                                        children: [
                                            _jsxs("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    _jsx("span", { className: "h-2.5 w-24 rounded-full bg-[#B85C38]/30" }),
                                                    _jsx("span", { className: "h-6 w-6 rounded-md bg-[#B85C38]/15" })
                                                ]
                                            }),
                                            _jsxs("div", {
                                                className: "mt-4 grid grid-cols-3 gap-2",
                                                children: [
                                                    _jsx("span", { className: "h-16 rounded-xl bg-[#F2F0ED]" }),
                                                    _jsx("span", { className: "col-span-2 h-16 rounded-xl bg-[#F2F0ED]" })
                                                ]
                                            })
                                        ]
                                    })
                                }),

                                // Details Body
                                _jsxs("div", {
                                    className: "flex flex-1 flex-col justify-between p-7",
                                    children: [
                                        _jsxs("div", {
                                            children: [
                                                _jsx("span", {
                                                    className: "text-xs font-bold uppercase tracking-[0.18em] text-[#B85C38]",
                                                    children: work.industry
                                                }),
                                                _jsx("h3", {
                                                    className: "mt-2.5 text-xl font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]",
                                                    children: work.title
                                                }),
                                                _jsx("p", {
                                                    className: "mt-2.5 text-sm leading-relaxed text-[#5C5650]",
                                                    children: work.summary
                                                })
                                            ]
                                        }),
                                        _jsxs("div", {
                                            className: "mt-6 flex items-center justify-between border-t border-[#DFDAD3] pt-4 text-sm font-bold text-[#B85C38]",
                                            children: [
                                                "Read case study",
                                                _jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, work.slug)
                    ))
                })
            ]
        }),

        // 8. WHY NEXORA SECTION
        _jsx("section", {
            className: "border-t border-[#DFDAD3] bg-gradient-to-b from-[#F2F0ED] via-[#FAF9F7] to-[#F2F0ED] py-20 lg:py-28",
            children: _jsxs("div", {
                className: "container-x grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]",
                children: [
                    _jsxs("div", {
                        className: "space-y-5",
                        children: [
                            _jsx(Eyebrow, { children: "WHY NEXORA" }),
                            _jsx("h2", {
                                className: "text-3xl font-extrabold tracking-tight text-[#252525] sm:text-4xl md:text-[2.65rem] md:leading-[1.18]",
                                children: "A technology partner built around your business goals."
                            }),
                            _jsx("p", {
                                className: "max-w-xl text-base leading-relaxed text-[#5C5650] md:text-lg",
                                children: "We operate as an extension of your product and engineering leadership — focused on shipping high-impact software without technical debt."
                            })
                        ]
                    }),
                    _jsx("div", {
                        className: "space-y-4",
                        children: [
                            ['01', 'Business-First Thinking', 'We measure success by your commercial outcomes, user adoption, and long-term ROI.', Layers],
                            ['02', 'Modern Engineering', 'Clean architectures, strict code reviews, and automated quality gates on every release.', ShieldCheck],
                            ['03', 'Long-Term Partnership', 'Direct communication, shared technical roadmaps, and continuous support after launch.', Users]
                        ].map(([num, title, desc, Icon]) => (
                            _jsxs("div", {
                                className: "flex items-start gap-4 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-5 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 hover:border-[#B85C38]/40",
                                children: [
                                    _jsx("span", {
                                        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B85C38]/15 text-sm font-extrabold text-[#B85C38]",
                                        children: num
                                    }),
                                    _jsxs("div", {
                                        children: [
                                            _jsx("h4", { className: "text-base font-extrabold text-[#252525]", children: title }),
                                            _jsx("p", { className: "mt-1 text-sm leading-relaxed text-[#5C5650]", children: desc })
                                        ]
                                    })
                                ]
                            }, num)
                        ))
                    })
                ]
            })
        }),

        // 9. CTA BAND
        _jsx(CtaBand, {})
    ] }));
}
