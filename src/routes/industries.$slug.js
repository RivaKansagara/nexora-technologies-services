import { jsx as _jsx } from "react/jsx-runtime";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/site/DetailPage";
import { seo } from "@/components/site/ui";
import { industries } from "@/lib/site-data";
export const Route = createFileRoute("/industries/$slug")({
    loader: ({ params }) => {
        const item = industries.find((s) => s.slug === params.slug);
        if (!item)
            throw notFound();
        return { slug: item.slug };
    },
    head: ({ loaderData }) => {
        const s = industries.find((x) => x.slug === loaderData?.slug);
        return seo(s?.title ?? "Industry", s?.short ?? "Nexora industry");
    },
    component: () => {
        const { slug } = Route.useLoaderData();
        const item = industries.find((s) => s.slug === slug);
        return _jsx(DetailPage, { item: item, section: "Industries", sectionTo: "/industries", others: industries, base: "/industries/$slug" });
    },
});
