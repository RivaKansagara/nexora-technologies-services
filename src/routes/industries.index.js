import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ServiceCard, seo } from "@/components/site/ui";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries/")({
    head: () => seo("Industries", "Technology solutions for financial services, healthcare, retail, manufacturing, education and logistics."),
    component: () => (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "Industries" }],
                eyebrow: "Industries",
                title: "Industry knowledge, engineered into every solution",
                sub: "We combine domain understanding with modern technology to solve the problems that matter in your sector."
            }),
            _jsx("section", {
                className: "container-x grid gap-8 py-20 sm:grid-cols-2 lg:grid-cols-3",
                children: industries.map((s) => _jsx(ServiceCard, { item: s, base: "/industries/$slug" }, s.slug))
            }),
            _jsx(CtaBand, {})
        ]
    })),
});
