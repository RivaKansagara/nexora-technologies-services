import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CtaBand, IconTile, PageHero, seo } from "@/components/site/ui";
import { solutions } from "@/lib/site-data";

export const Route = createFileRoute("/solutions")({
    head: () => seo("Solutions", "Digital transformation, enterprise applications, AI, cloud, commerce and data solutions by Nexora Technologies."),
    component: () => (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "Solutions" }],
                eyebrow: "Solutions",
                title: "Solutions that solve real business problems",
                sub: "Packaged expertise and accelerators that shorten the path from idea to measurable impact."
            }),
            _jsx("section", {
                className: "container-x space-y-6 py-20",
                children: solutions.map((s, i) => (
                    _jsxs("article", {
                        id: s.slug,
                        className: `grid items-center gap-8 rounded-3xl border border-[#DFDAD3] p-8 md:grid-cols-[auto_1.2fr_1fr] md:p-10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#B85C38]/40 hover:shadow-lift ${
                            i % 2 ? "bg-[#F2F0ED]" : "bg-[#FAF9F7]"
                        }`,
                        children: [
                            _jsx(IconTile, { icon: s.icon, tone: s.tone, size: "lg" }),
                            _jsxs("div", {
                                children: [
                                    _jsx("h2", { className: "text-2xl font-extrabold text-[#252525]", children: s.title }),
                                    _jsx("p", { className: "mt-2 text-[#5C5650] leading-relaxed", children: s.short })
                                ]
                            }),
                            _jsx("ul", {
                                className: "space-y-2.5",
                                children: s.capabilities.map((c) => (
                                    _jsxs("li", {
                                        className: "flex items-center gap-2.5 font-semibold text-[#252525]",
                                        children: [_jsx(Check, { className: "h-4 w-4 text-[#377553]" }), c]
                                    }, c)
                                ))
                            })
                        ]
                    }, s.slug)
                ))
            }),
            _jsx(CtaBand, {})
        ]
    })),
});
