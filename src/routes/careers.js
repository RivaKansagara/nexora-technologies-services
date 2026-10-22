import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, ArrowRight, Laptop, GraduationCap, HeartPulse, Plane } from "lucide-react";
import { CtaBand, IconTile, PageHero, SectionHead, seo } from "@/components/site/ui";
import { jobs } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
    head: () => seo("Careers", "Explore open roles in engineering, cloud, AI, design and data at Nexora Technologies."),
    component: () => (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "Careers" }],
                eyebrow: "Careers",
                title: "Do the best work of your career",
                sub: "Join a team that values craft, learning and balance. Roles listed are illustrative."
            }),
            _jsx("section", {
                className: "container-x grid gap-6 py-20 sm:grid-cols-2 lg:grid-cols-4",
                children: [
                    [Laptop, "Flexible work", "Remote and hybrid options.", "blue"],
                    [GraduationCap, "Learning budget", "Courses, certs and conferences.", "teal"],
                    [HeartPulse, "Health & wellbeing", "Comprehensive cover.", "coral"],
                    [Plane, "Time off", "Generous leave policy.", "orange"]
                ].map(([I, t, d, tone]) => (
                    _jsxs("div", {
                        className: "group rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/45 hover:shadow-lift",
                        children: [
                            _jsx(IconTile, { icon: I, tone: tone }),
                            _jsx("h3", { className: "mt-5 text-lg font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]", children: t }),
                            _jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-[#5C5650]", children: d })
                        ]
                    }, t)
                ))
            }),
            _jsx("section", {
                className: "border-y border-[#DFDAD3] bg-[#F2F0ED] py-20 lg:py-24",
                children: _jsxs("div", {
                    className: "container-x",
                    children: [
                        _jsx(SectionHead, { eyebrow: "Open roles", title: `${jobs.length} open positions`, sub: "Find the role where you can make an immediate, tangible impact." }),
                        _jsx("ul", {
                            className: "mt-12 divide-y divide-[#DFDAD3] overflow-hidden rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-soft",
                            children: jobs.map((j) => (
                                _jsx("li", {
                                    children: _jsxs(Link, {
                                        to: "/contact",
                                        className: "group flex flex-wrap items-center gap-4 p-6 transition-colors duration-200 hover:bg-[#EAE6E0]/60",
                                        children: [
                                            _jsxs("div", {
                                                className: "min-w-[220px] flex-1",
                                                children: [
                                                    _jsx("h3", { className: "text-lg font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]", children: j.title }),
                                                    _jsx("p", { className: "mt-0.5 text-xs font-semibold text-[#5C5650]", children: j.team })
                                                ]
                                            }),
                                            _jsxs("span", {
                                                className: "flex items-center gap-1.5 rounded-full border border-[#DFDAD3] bg-[#F2F0ED] px-3 py-1 text-xs font-semibold text-[#5C5650]",
                                                children: [_jsx(MapPin, { className: "h-3.5 w-3.5 text-[#B85C38]" }), j.loc]
                                            }),
                                            _jsxs("span", {
                                                className: "flex items-center gap-1.5 rounded-full border border-[#DFDAD3] bg-[#F2F0ED] px-3 py-1 text-xs font-semibold text-[#5C5650]",
                                                children: [_jsx(Clock, { className: "h-3.5 w-3.5 text-[#3A7368]" }), j.type]
                                            }),
                                            _jsx(ArrowRight, { className: "h-4.5 w-4.5 text-[#B85C38] transition-transform duration-300 group-hover:translate-x-1.5" })
                                        ]
                                    })
                                }, j.title)
                            ))
                        })
                    ]
                })
            }),
            _jsx(CtaBand, {})
        ]
    })),
});
