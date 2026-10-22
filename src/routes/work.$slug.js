import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { CtaBand, PageHero, seo } from "@/components/site/ui";
import { WorkCard, projectImages } from "@/components/site/sections";
import { caseStudies, toneClass } from "@/lib/site-data";

export const Route = createFileRoute("/work/$slug")({
    loader: ({ params }) => {
        const c = caseStudies.find((s) => s.slug === params.slug);
        if (!c)
            throw notFound();
        return { slug: c.slug };
    },
    head: ({ loaderData }) => {
        const c = caseStudies.find((x) => x.slug === loaderData?.slug);
        return seo(c?.title ?? "Case study", c?.summary ?? "Nexora case study");
    },
    component: Detail,
});

function Detail() {
    const { slug } = Route.useLoaderData();
    const c = caseStudies.find((s) => s.slug === slug);
    const imgSrc = projectImages[c.slug] || `/images/projects/${c.slug}.jpg`;

    return (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "Our Work", to: "/work" }, { label: c.industry }],
                eyebrow: c.industry,
                title: c.title,
                sub: c.summary,
                children: _jsx("p", { className: "mt-4 text-sm font-semibold text-[#5C5650]", children: c.client })
            }),
            _jsxs("section", {
                className: "container-x py-16 lg:py-20",
                children: [
                    // Result KPIs
                    _jsx("div", {
                        className: "grid gap-px overflow-hidden rounded-3xl border border-[#DFDAD3] bg-[#DFDAD3] sm:grid-cols-3 shadow-soft",
                        children: c.results.map((r) => (
                            _jsxs("div", {
                                className: "bg-[#FAF9F7] p-8 text-center transition-colors hover:bg-[#F2F0ED]",
                                children: [
                                    _jsx("p", { className: `text-4xl font-extrabold ${toneClass[c.tone]?.text || "text-[#B85C38]"} md:text-5xl`, children: r.v }),
                                    _jsx("p", { className: "mt-2.5 font-bold uppercase tracking-wider text-xs text-[#5C5650]", children: r.l })
                                ]
                            }, r.l)
                        ))
                    }),

                    // Actual Project Screenshot / Visual Showcase
                    _jsx("div", {
                        className: "mt-12 overflow-hidden rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-lift group",
                        children: _jsxs("div", {
                            className: "relative h-[320px] w-full overflow-hidden sm:h-[420px] md:h-[480px]",
                            children: [
                                _jsx("img", {
                                    src: imgSrc,
                                    alt: `${c.title} project platform interface`,
                                    className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-104",
                                    loading: "eager"
                                }),
                                _jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-[#252525]/85 via-[#252525]/15 to-transparent"
                                }),
                                _jsxs("div", {
                                    className: "absolute inset-x-6 bottom-6 flex flex-wrap items-end justify-between gap-4 text-[#FAF9F7]",
                                    children: [
                                        _jsxs("div", {
                                            className: "max-w-xl",
                                            children: [
                                                _jsx("span", {
                                                    className: "rounded-full border border-white/25 bg-[#FAF9F7]/95 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#252525] backdrop-blur",
                                                    children: `${c.industry} • Production System`
                                                }),
                                                _jsx("h3", {
                                                    className: "mt-3 text-2xl font-extrabold leading-tight text-[#FAF9F7] sm:text-3xl",
                                                    children: c.title
                                                }),
                                                _jsx("p", {
                                                    className: "mt-1.5 text-xs text-[#FAF9F7]/80 sm:text-sm",
                                                    children: c.client
                                                })
                                            ]
                                        }),
                                        _jsx("span", {
                                            className: "rounded-xl border border-white/20 bg-[#FAF9F7]/90 px-4 py-2.5 text-xs font-bold text-[#252525] backdrop-blur-md shadow-md",
                                            children: "Deployed Architecture"
                                        })
                                    ]
                                })
                            ]
                        })
                    }),

                    // Challenge and Solution
                    _jsxs("div", {
                        className: "mt-14 grid gap-8 md:grid-cols-2",
                        children: [
                            _jsxs("div", {
                                className: "rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] p-8 md:p-10 shadow-soft",
                                children: [
                                    _jsx("h2", { className: "text-2xl font-extrabold text-[#252525]", children: "The challenge" }),
                                    _jsx("p", { className: "mt-4 text-base leading-relaxed text-[#5C5650]", children: c.challenge })
                                ]
                            }),
                            _jsxs("div", {
                                className: "rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] p-8 md:p-10 shadow-soft",
                                children: [
                                    _jsx("h2", { className: "text-2xl font-extrabold text-[#252525]", children: "Our solution" }),
                                    _jsx("p", { className: "mt-4 text-base leading-relaxed text-[#5C5650]", children: c.solution })
                                ]
                            })
                        ]
                    }),

                    // Technologies
                    _jsxs("div", {
                        className: "mt-12",
                        children: [
                            _jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-[#5C5650] mb-4", children: "Technologies Used" }),
                            _jsx("div", {
                                className: "flex flex-wrap gap-2.5",
                                children: c.tech.map((t) => (
                                    _jsx("span", {
                                        className: "rounded-xl border border-[#DFDAD3] bg-[#FAF9F7] px-4 py-2 text-sm font-bold text-[#252525] shadow-xs",
                                        children: t
                                    }, t)
                                ))
                            })
                        ]
                    }),

                    // Related projects
                    _jsx("h2", { className: "mt-20 text-3xl font-extrabold text-[#252525]", children: "More case studies" }),
                    _jsx("div", {
                        className: "mt-8 grid gap-6 md:grid-cols-3",
                        children: caseStudies.filter((x) => x.slug !== c.slug).map((x) => _jsx(WorkCard, { c: x }, x.slug))
                    })
                ]
            }),
            _jsx(CtaBand, {})
        ]
    }));
}
