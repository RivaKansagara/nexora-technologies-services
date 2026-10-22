import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionHead, seo } from "@/components/site/ui";
import { TechMarquee } from "@/components/site/TechMarquee";
import { techRows, toneClass } from "@/lib/site-data";

const groups = ["Cloud Platforms", "Frameworks & Languages", "Databases", "DevOps & Collaboration"];

export const Route = createFileRoute("/technology")({
    head: () => seo("Technology", "The cloud platforms, frameworks, databases and DevOps tools Nexora engineers work with."),
    component: () => (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "Technology" }],
                eyebrow: "Technology",
                title: "Technology & Integrations",
                sub: "Connect your business with the technologies, platforms and tools you already use."
            }),
            _jsx("section", { className: "py-16 bg-[#F2F0ED] border-b border-[#DFDAD3]", children: _jsx(TechMarquee, {}) }),
            _jsxs("section", {
                className: "container-x py-20 lg:py-24",
                children: [
                    _jsx(SectionHead, { eyebrow: "Our stack", title: "Proven tools, chosen for each problem", sub: "Enterprise architectures require dependable foundations tailored to specific scale requirements." }),
                    _jsx("div", {
                        className: "mt-12 grid gap-6 md:grid-cols-2",
                        children: techRows.map((row, i) => (
                            _jsxs("div", {
                                className: "rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] p-8 shadow-soft transition-all duration-300 hover:shadow-lift",
                                children: [
                                    _jsx("h2", { className: "text-xl font-extrabold text-[#252525]", children: groups[i] }),
                                    _jsx("ul", {
                                        className: "mt-6 grid grid-cols-2 gap-3.5",
                                        children: row.map((t) => (
                                            _jsxs("li", {
                                                className: "flex items-center gap-3 rounded-xl border border-[#DFDAD3]/60 bg-[#F2F0ED] p-3.5 transition-all duration-200 hover:border-[#B85C38]/40 hover:bg-[#FAF9F7]",
                                                children: [
                                                    _jsx("span", {
                                                        className: `flex h-9 w-9 items-center justify-center rounded-lg text-xs font-extrabold ${toneClass[t.tone]?.tile || "bg-[#B85C38]/12 text-[#B85C38]"}`,
                                                        children: t.name.replace(/[^A-Za-z]/g, "").slice(0, 2)
                                                    }),
                                                    _jsxs("span", {
                                                        className: "min-w-0",
                                                        children: [
                                                            _jsx("span", { className: "block truncate text-sm font-bold text-[#252525]", children: t.name }),
                                                            _jsx("span", { className: "block truncate text-[11px] font-medium text-[#5C5650]", children: t.cat })
                                                        ]
                                                    })
                                                ]
                                            }, t.name)
                                        ))
                                    })
                                ]
                            }, groups[i])
                        ))
                    })
                ]
            }),
            _jsx(CtaBand, {})
        ]
    })),
});
