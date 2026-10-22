import { jsx as _jsx } from "react/jsx-runtime";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { DetailPage } from "@/components/site/DetailPage";
import { seo } from "@/components/site/ui";
import { services } from "@/lib/site-data";
export const Route = createFileRoute("/services/$slug")({
    loader: ({ params }) => {
        const item = services.find((s) => s.slug === params.slug);
        if (!item)
            throw notFound();
        return { slug: item.slug };
    },
    head: ({ loaderData }) => {
        const s = services.find((x) => x.slug === loaderData?.slug);
        return seo(s?.title ?? "Service", s?.short ?? "Nexora service");
    },
    component: () => {
        const { slug } = Route.useLoaderData();
        const item = services.find((s) => s.slug === slug);
        return _jsx(DetailPage, { item: item, section: "Services", sectionTo: "/services", others: services, base: "/services/$slug" });
    },
});
