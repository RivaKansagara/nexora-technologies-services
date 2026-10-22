import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Heart, ChevronRight, Users, Sparkles, Check } from "lucide-react";
import { Btn, CtaBand, IconTile, Eyebrow, SectionHead, seo } from "@/components/site/ui";
import { Stats, WhyNexora, Testimonials } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
    head: () => seo("About Us", "Learn about Nexora Technologies — our mission, values and approach to digital engineering."),
    component: () => (_jsxs(_Fragment, { children: [
        // Enhanced About Hero with relevant IT collaboration workspace image beside heading & description
        _jsxs("section", {
            className: "relative overflow-hidden border-b border-[#DFDAD3] bg-gradient-to-b from-[#FAF9F7] via-[#F2F0ED] to-[#FAF9F7]",
            children: [
                _jsx("div", {
                    className: "absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,#000_65%,transparent_100%)]",
                    "aria-hidden": "true"
                }),
                _jsx("div", {
                    className: "absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-[#B85C38]/10 blur-3xl pointer-events-none",
                    "aria-hidden": "true"
                }),
                _jsxs("div", {
                    className: "container-x relative py-16 md:py-20 lg:py-24",
                    children: [
                        _jsxs("nav", {
                            "aria-label": "Breadcrumb",
                            className: "mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#5C5650]",
                            children: [
                                _jsx(Link, { to: "/", className: "transition-colors hover:text-[#B85C38]", children: "Home" }),
                                _jsx(ChevronRight, { className: "h-3.5 w-3.5 text-[#5C5650]/50" }),
                                _jsx("span", { className: "font-bold text-[#252525]", children: "About Us" })
                            ]
                        }),
                        _jsxs("div", {
                            className: "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14",
                            children: [
                                // Left Column: Heading & Description
                                _jsxs("div", {
                                    className: "space-y-5",
                                    children: [
                                        _jsx("div", { className: "animate-hero-up", children: _jsx(Eyebrow, { children: "About Us" }) }),
                                        _jsx("h1", {
                                            className: "animate-hero-up stagger-1 text-4xl font-extrabold tracking-tight text-[#252525] sm:text-5xl md:leading-[1.12]",
                                            children: "We help businesses build what's next"
                                        }),
                                        _jsx("p", {
                                            className: "animate-hero-up stagger-2 text-base leading-relaxed text-[#5C5650] md:text-lg",
                                            children: "Nexora Technologies is a digital engineering consultancy helping ambitious organizations design, build and scale modern software, cloud platforms, and practical AI."
                                        }),
                                        _jsx("div", {
                                            className: "animate-hero-up stagger-3 pt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#252525]",
                                            children: [
                                                "Senior Engineering Squads",
                                                "Clean Architecture",
                                                "100% Dedicated Delivery"
                                            ].map((text) => (
                                                _jsxs("span", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "flex h-5 w-5 items-center justify-center rounded-full bg-[#377553]/15 text-[#377553]",
                                                            children: _jsx(Check, { className: "h-3.5 w-3.5 stroke-[2.5]" })
                                                        }),
                                                        text
                                                    ]
                                                }, text)
                                            ))
                                        })
                                    ]
                                }),

                                // Right Column: Relevant IT Team Collaboration Workspace Image
                                _jsxs("div", {
                                    className: "animate-hero-up stagger-2 relative",
                                    children: [
                                        _jsx("div", {
                                            className: "absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#B85C38]/15 to-transparent blur-2xl -z-10",
                                            "aria-hidden": "true"
                                        }),
                                        _jsxs("div", {
                                            className: "group relative overflow-hidden rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-lift",
                                            children: [
                                                _jsx("img", {
                                                    src: "/images/about/about-team.jpg",
                                                    alt: "Nexora software engineers and digital architects collaborating in a modern technology workspace",
                                                    className: "h-[340px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[400px]",
                                                    loading: "eager"
                                                }),
                                                _jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-[#252525]/75 via-[#252525]/15 to-transparent"
                                                }),
                                                // Floating Badge Card
                                                _jsxs("div", {
                                                    className: "absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#FAF9F7]/95 p-4 backdrop-blur-md shadow-md",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                _jsx("span", {
                                                                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B85C38] text-white shadow-sm",
                                                                    children: _jsx(Users, { className: "h-5 w-5" })
                                                                }),
                                                                _jsxs("div", {
                                                                    children: [
                                                                        _jsx("h4", { className: "text-sm font-extrabold text-[#252525]", children: "Engineering Excellence" }),
                                                                        _jsx("p", { className: "text-xs font-semibold text-[#5C5650]", children: "Cross-functional teams designing resilient enterprise products" })
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
                    ]
                })
            ]
        }),

        // Mission / Vision / Values
        _jsx("section", {
            className: "container-x py-20 lg:py-24",
            children: _jsx("div", {
                className: "grid gap-8 md:grid-cols-3",
                children: [
                    { i: Target, t: "Our mission", d: "Empower every client to turn modern technology into sustainable business advantage.", tone: "blue" },
                    { i: Eye, t: "Our vision", d: "Be the world's most trusted digital engineering partner for scalable enterprise platforms.", tone: "teal" },
                    { i: Heart, t: "Our values", d: "Craft, transparency, intellectual curiosity, and deep care for the people we build for.", tone: "coral" },
                ].map((x) => (
                    _jsxs("div", {
                        className: "group rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/45 hover:shadow-lift",
                        children: [
                            _jsx(IconTile, { icon: x.i, tone: x.tone, size: "lg" }),
                            _jsx("h2", { className: "mt-6 text-2xl font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]", children: x.t }),
                            _jsx("p", { className: "mt-3 text-[15px] leading-relaxed text-[#5C5650]", children: x.d })
                        ]
                    }, x.t)
                ))
            })
        }),

        // Milestones
        _jsx("section", {
            className: "border-y border-[#DFDAD3] bg-[#F2F0ED] py-20 lg:py-24",
            children: _jsxs("div", {
                className: "container-x",
                children: [
                    _jsx(SectionHead, {
                        eyebrow: "Our journey",
                        title: "A decade of engineering milestones",
                        sub: "Continuous growth guided by engineering excellence and client trust."
                    }),
                    _jsx("ol", {
                        className: "mt-12 grid gap-6 md:grid-cols-4",
                        children: [
                            ["2016", "Founded as a high-velocity product studio"],
                            ["2019", "Launched dedicated Cloud & DevOps engineering practice"],
                            ["2022", "Established AI & Data Center of Excellence"],
                            ["2026", "120+ senior engineers and consultants across 18 countries"]
                        ].map(([y, t]) => (
                            _jsxs("li", {
                                className: "rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B85C38]/40 hover:shadow-lift",
                                children: [
                                    _jsx("p", { className: "text-3xl font-extrabold text-[#B85C38]", children: y }),
                                    _jsx("p", { className: "mt-3 text-sm font-bold text-[#252525] leading-relaxed", children: t })
                                ]
                            }, y)
                        ))
                    })
                ]
            })
        }),

        _jsx(Stats, {}),
        _jsx(WhyNexora, {}),
        _jsx(Testimonials, {}),

        _jsx("section", {
            className: "container-x pb-8 text-center",
            children: _jsx(Btn, { to: "/team", children: "Meet Our Leadership Team" })
        }),

        _jsx(CtaBand, {})
    ] })),
});
