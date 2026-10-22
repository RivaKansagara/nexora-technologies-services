import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaBand, PageHero, seo } from "@/components/site/ui";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
    head: () => seo("FAQ", "Answers to common questions about working with Nexora Technologies."),
    component: () => (_jsxs(_Fragment, {
        children: [
            _jsx(PageHero, {
                crumbs: [{ label: "FAQ" }],
                eyebrow: "FAQ",
                title: "Frequently asked questions",
                sub: "Everything you need to know about working with us."
            }),
            _jsx("section", {
                className: "container-x max-w-3xl py-20",
                children: _jsx(Accordion, {
                    type: "single",
                    collapsible: true,
                    className: "rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] px-7 py-2 shadow-soft",
                    children: faqs.map((f, i) => (
                        _jsxs(AccordionItem, {
                            value: `q${i}`,
                            className: "border-b border-[#DFDAD3] last:border-b-0 py-1",
                            children: [
                                _jsx(AccordionTrigger, {
                                    className: "text-left text-base font-extrabold text-[#252525] hover:text-[#B85C38] transition-colors py-4",
                                    children: f.q
                                }),
                                _jsx(AccordionContent, {
                                    className: "text-[15px] leading-relaxed text-[#5C5650] pb-5",
                                    children: f.a
                                })
                            ]
                        }, f.q)
                    ))
                })
            }),
            _jsx(CtaBand, {})
        ]
    })),
});
