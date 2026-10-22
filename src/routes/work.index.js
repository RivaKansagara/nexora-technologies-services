import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBand, PageHero, seo } from "@/components/site/ui";
import { WorkCard } from "@/components/site/sections";
import { caseStudies } from "@/lib/site-data";

export const Route = createFileRoute("/work/")({
    head: () => seo("Our Work", "Illustrative case studies across banking, healthcare, manufacturing and retail."),
    component: Work,
});

function Work() {
    const cats = ["All", ...new Set(caseStudies.map((c) => c.industry))];
    const [f, setF] = useState("All");
    const list = caseStudies.filter((c) => f === "All" || c.industry === f);

    return (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "Our Work" }],
                eyebrow: "Our Work",
                title: "Projects that made a measurable difference",
                sub: "Illustrative case studies for a fictional company, showing the kind of outcomes we aim for."
            }),
            _jsxs("section", {
                className: "container-x py-16 lg:py-20",
                children: [
                    _jsx("div", {
                        className: "flex flex-wrap gap-2.5",
                        role: "tablist",
                        children: cats.map((c) => (
                            _jsx("button", {
                                onClick: () => setF(c),
                                className: `rounded-full border px-4 py-2 text-sm font-bold transition-all duration-200 ${
                                    f === c
                                        ? "border-[#B85C38] bg-[#B85C38] text-[#FAF9F7] shadow-rust"
                                        : "border-[#DFDAD3] bg-[#FAF9F7] text-[#252525] hover:border-[#B85C38]/40 hover:text-[#B85C38]"
                                }`,
                                children: c
                            }, c)
                        ))
                    }),
                    _jsx("div", {
                        className: "mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
                        children: list.map((c) => _jsx(WorkCard, { c: c }, c.slug))
                    })
                ]
            }),
            _jsx(CtaBand, {})
        ]
    }));
}
