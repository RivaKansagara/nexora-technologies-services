import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { CtaBand, PageHero, seo } from "@/components/site/ui";
import { team, toneClass } from "@/lib/site-data";

export const Route = createFileRoute("/team")({
    head: () => seo("Our Team", "Meet the leadership team behind Nexora Technologies."),
    component: () => (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "About Us", to: "/about" }, { label: "Our Team" }],
                eyebrow: "Our Team",
                title: "The people behind Nexora",
                sub: "A leadership team of engineers, designers and strategists. All people shown are fictional."
            }),
            _jsx("section", {
                className: "container-x grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-24",
                children: team.map((p) => (
                    _jsxs("div", {
                        className: "group relative flex flex-col items-center rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-[#B85C38]/45 hover:shadow-lift",
                        children: [
                            // Profile photo with circular frame, warm ring, and fallback
                            _jsxs("div", {
                                className: "relative mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-[#FAF9F7] bg-[#E7E3DE] shadow-md ring-4 ring-[#E7E3DE] transition-all duration-300 group-hover:ring-[#B85C38]/30 sm:h-32 sm:w-32",
                                children: [
                                    _jsx("div", {
                                        className: `flex h-full w-full items-center justify-center text-2xl font-extrabold ${toneClass[p.tone]?.tile || "bg-[#B85C38]/12 text-[#B85C38]"}`,
                                        children: p.name.split(" ").map((n) => n[0]).join("")
                                    }),
                                    p.image ? _jsx("img", {
                                        src: p.image,
                                        alt: `${p.name} - ${p.role}`,
                                        className: "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110",
                                        loading: "lazy",
                                        onError: (e) => { e.currentTarget.style.display = "none"; }
                                    }) : null
                                ]
                            }),
                            _jsx("h2", {
                                className: "mt-2 text-lg font-extrabold text-[#252525] transition-colors group-hover:text-[#B85C38]",
                                children: p.name
                            }),
                            _jsx("p", {
                                className: "mt-1 text-sm font-medium text-[#5C5650]",
                                children: p.role
                            }),
                            _jsx("a", {
                                href: "#",
                                "aria-label": `${p.name} on LinkedIn`,
                                className: "mt-5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#DFDAD3] bg-[#F2F0ED] text-[#5C5650] transition-all duration-200 hover:border-[#B85C38]/50 hover:bg-[#FAF9F7] hover:text-[#B85C38] hover:scale-110",
                                children: _jsx(Linkedin, { className: "h-4 w-4" })
                            })
                        ]
                    }, p.name)
                ))
            }),
            _jsx(CtaBand, {})
        ]
    })),
});
