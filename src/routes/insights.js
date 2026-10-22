import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Search } from "lucide-react";
import { CtaBand, PageHero, seo } from "@/components/site/ui";
import { insights, toneClass } from "@/lib/site-data";

export const Route = createFileRoute("/insights")({
    head: () => seo("Insights", "Articles on AI, cloud, engineering, design and data from the Nexora team."),
    component: Insights,
});

export const insightThumbnails = {
    "ai-from-pilot-to-production": "/images/insights/ai-from-pilot-to-production.jpg",
    "cloud-cost-playbook": "/images/insights/cloud-cost-playbook.jpg",
    "design-systems-that-last": "/images/insights/design-systems-that-last.jpg",
    "modernize-without-downtime": "/images/insights/modernize-without-downtime.jpg",
    "trusted-data-platforms": "/images/insights/trusted-data-platforms.jpg",
    "devops-metrics": "/images/insights/devops-metrics.jpg",
};

function Insights() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState("All");
    const cats = ["All", ...new Set(insights.map((i) => i.cat))];
    const list = insights.filter((i) => (cat === "All" || i.cat === cat) && (i.title + i.excerpt).toLowerCase().includes(q.toLowerCase()));

    return (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "Insights" }],
                eyebrow: "Insights",
                title: "Ideas and lessons from the field",
                sub: "Practical articles on building, running and improving modern software."
            }),
            _jsxs("section", {
                className: "container-x py-16 lg:py-20",
                children: [
                    _jsxs("div", {
                        className: "flex flex-wrap items-center justify-between gap-4",
                        children: [
                            _jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: cats.map((c) => (
                                    _jsx("button", {
                                        onClick: () => setCat(c),
                                        className: `rounded-full border px-4 py-2 text-sm font-bold transition-all duration-200 ${
                                            cat === c
                                                ? "border-[#B85C38] bg-[#B85C38] text-[#FAF9F7] shadow-rust"
                                                : "border-[#DFDAD3] bg-[#FAF9F7] text-[#252525] hover:border-[#B85C38]/40 hover:text-[#B85C38]"
                                        }`,
                                        children: c
                                    }, c)
                                ))
                            }),
                            _jsxs("label", {
                                className: "relative w-full sm:w-80",
                                children: [
                                    _jsx(Search, { className: "absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5C5650]" }),
                                    _jsx("input", {
                                        value: q,
                                        onChange: (e) => setQ(e.target.value),
                                        placeholder: "Search articles...",
                                        "aria-label": "Search articles",
                                        className: "w-full rounded-xl border border-[#DFDAD3] bg-[#FAF9F7] py-2.5 pl-10 pr-4 text-sm text-[#252525] outline-none transition-all focus:border-[#B85C38] focus:ring-4 focus:ring-[#B85C38]/15"
                                    })
                                ]
                            })
                        ]
                    }),
                    _jsxs("div", {
                        className: "mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
                        children: [
                            list.map((p) => (
                                _jsxs("article", {
                                    className: "group flex flex-col overflow-hidden rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/45 hover:shadow-lift",
                                    children: [
                                        // Topic-matched Thumbnail
                                        _jsxs("div", {
                                            className: "relative h-48 w-full overflow-hidden bg-[#E7E3DE]",
                                            children: [
                                                _jsx("img", {
                                                    src: insightThumbnails[p.slug] || "/images/collaboration.jpg",
                                                    alt: `${p.title} article topic preview`,
                                                    className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108",
                                                    loading: "lazy"
                                                }),
                                                _jsx("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-[#252525]/60 via-transparent to-transparent"
                                                }),
                                                _jsx("span", {
                                                    className: `absolute left-4 top-4 rounded-full border border-white/20 px-3 py-1 text-xs font-bold shadow-xs backdrop-blur-sm ${toneClass[p.tone]?.tile || "bg-[#FAF9F7]/95 text-[#252525]"}`,
                                                    children: p.cat
                                                })
                                            ]
                                        }),
                                        // Body
                                        _jsxs("div", {
                                            className: "flex flex-1 flex-col justify-between p-6 sm:p-7",
                                            children: [
                                                _jsxs("div", {
                                                    children: [
                                                        _jsx("h2", {
                                                            className: "text-xl font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]",
                                                            children: p.title
                                                        }),
                                                        _jsx("p", {
                                                            className: "mt-2.5 text-sm leading-relaxed text-[#5C5650] line-clamp-3",
                                                            children: p.excerpt
                                                        })
                                                    ]
                                                }),
                                                _jsxs("p", {
                                                    className: "mt-6 flex items-center gap-2 border-t border-[#DFDAD3] pt-4 text-xs font-semibold text-[#5C5650]",
                                                    children: [
                                                        _jsx(Calendar, { className: "h-3.5 w-3.5 text-[#B85C38]" }),
                                                        p.date,
                                                        " · ",
                                                        p.read,
                                                        " read"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, p.slug)
                            )),
                            !list.length && _jsx("p", { className: "text-[#5C5650] col-span-3 py-8 text-center", children: "No articles match your search." })
                        ]
                    })
                ]
            }),
            _jsx(CtaBand, {})
        ]
    }));
}
