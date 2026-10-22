import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ServiceCard, seo } from "@/components/site/ui";
import { Process } from "@/components/site/sections";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/")({
    head: () => seo("Services", "Software engineering, AI, cloud, data, UI/UX and legacy modernization services from Nexora Technologies."),
    component: () => (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "Services" }],
                eyebrow: "Our Services",
                title: "Technology services for the full product lifecycle",
                sub: "Six practices, one integrated team — helping you plan, build, run and improve digital products."
            }),
            _jsx("section", {
                className: "container-x grid gap-8 py-20 sm:grid-cols-2 lg:grid-cols-3",
                children: services.map((s) => _jsx(ServiceCard, { item: s, base: "/services/$slug" }, s.slug))
            }),
            _jsx(Process, {}),
            _jsx(CtaBand, {})
        ]
    })),
});
