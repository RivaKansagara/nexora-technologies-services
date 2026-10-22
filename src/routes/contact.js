import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Clock, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { IconTile, PageHero, seo } from "@/components/site/ui";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
    head: () => seo("Contact Us", "Talk to Nexora Technologies about your next software, AI, cloud or data project."),
    component: Contact,
});

const field = "mt-1.5 w-full rounded-xl border border-[#DFDAD3] bg-[#FAF9F7] px-4 py-3 text-[15px] text-[#252525] outline-none transition-all duration-200 focus:border-[#B85C38] focus:ring-4 focus:ring-[#B85C38]/15 disabled:cursor-not-allowed disabled:opacity-70 shadow-xs placeholder:text-[#5C5650]/60";

export function Contact() {
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    async function submit(e) {
        e.preventDefault();
        if (loading) return;

        setErrorMessage("");
        const formElement = e.currentTarget;
        const d = Object.fromEntries(new FormData(formElement));
        const err = {};

        if (!d.name?.trim())
            err.name = "Please enter your name.";
        if (!/^\S+@\S+\.\S+$/.test(d.email ?? ""))
            err.email = "Please enter a valid email.";
        if (!d.subject?.trim())
            err.subject = "Please enter a subject.";
        if ((d.message ?? "").trim().length < 10)
            err.message = "Please tell us a little more (10+ characters).";

        setErrors(err);
        if (Object.keys(err).length)
            return;

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

        if (!serviceId || !templateId || !publicKey) {
            const missing = [
                !serviceId && "VITE_EMAILJS_SERVICE_ID",
                !templateId && "VITE_EMAILJS_TEMPLATE_ID",
                !publicKey && "VITE_EMAILJS_PUBLIC_KEY",
            ].filter(Boolean).join(", ");
            const warnMsg = `EmailJS is not fully configured. Missing: ${missing}. Please set these in your .env file.`;
            console.warn(warnMsg);
            setErrorMessage(warnMsg);
            toast.error("Email service configuration is missing. Please check your .env settings.");
            return;
        }

        setLoading(true);
        try {
            const companyName = "Nexora Technologies";
            const companyEmail = "hello@nexora.example";
            const companyWebsite = typeof window !== "undefined" && window.location.origin
                ? window.location.origin
                : "https://nexora.example";
            const submissionDate = new Date().toLocaleString("en-US", {
                dateStyle: "full",
                timeStyle: "medium",
            });

            const templateParams = {
                // Visitor Information (with common template variable aliases)
                name: d.name.trim(),
                from_name: d.name.trim(),
                user_name: d.name.trim(),
                email: d.email.trim(),
                from_email: d.email.trim(),
                user_email: d.email.trim(),
                reply_to: d.email.trim(),
                subject: d.subject.trim(),
                title: d.subject.trim(),
                company: d.company?.trim() || "Not specified",
                service: d.service || "General Inquiry",
                message: d.message.trim(),

                // Company Information
                company_name: companyName,
                to_name: companyName,
                company_email: companyEmail,
                company_website: companyWebsite,
                submission_date: submissionDate,
                date: submissionDate,
            };

            await emailjs.send(serviceId, templateId, templateParams, {
                publicKey: publicKey,
            });

            setSent(true);
            setErrorMessage("");
            formElement.reset();
            toast.success("Thanks! We'll be in touch within one business day.");
        } catch (error) {
            console.error("EmailJS submission error:", error);
            const msg = error?.text || error?.message || "Failed to send message. Please try again later.";
            setErrorMessage(msg);
            toast.error(msg);
        } finally {
            setLoading(false);
        }
    }

    return (_jsxs(_Fragment, { children: [
        _jsx(PageHero, {
            crumbs: [{ label: "Contact Us" }],
            eyebrow: "Contact Us",
            title: "Let's build something great together",
            sub: "Tell us about your technical goals or enterprise project and we'll get back to you within one business day."
        }),
        _jsxs("section", {
            className: "container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16",
            children: [
                _jsxs("div", {
                    className: "space-y-6",
                    children: [
                        [[Mail, "Email", "hello@nexora.example", "blue"], [Phone, "Phone", "+1 (555) 010-2040", "teal"], [Clock, "Business Hours", "Mon–Fri, 9:00–18:00 EST", "orange"]].map(([I, t, v, tone]) => (
                            _jsxs("div", {
                                className: "flex items-center gap-4.5 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-6 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-1 hover:border-[#B85C38]/40",
                                children: [
                                    _jsx(IconTile, { icon: I, tone: tone, size: "lg" }),
                                    _jsxs("div", {
                                        children: [
                                            _jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-[#5C5650]", children: t }),
                                            _jsx("p", { className: "mt-1 font-extrabold text-[#252525] text-base", children: v })
                                        ]
                                    })
                                ]
                            }, t)
                        )),

                        // Subtle technology-related imagery complementing the contact details
                        _jsx("div", {
                            className: "overflow-hidden rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-soft group",
                            children: _jsxs("div", {
                                className: "relative h-44 w-full overflow-hidden",
                                children: [
                                    _jsx("img", {
                                        src: "/images/contact/contact-support.jpg",
                                        alt: "Nexora engineering advisory and technical consultation",
                                        className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
                                        loading: "lazy"
                                    }),
                                    _jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-[#252525]/85 via-[#252525]/20 to-transparent"
                                    }),
                                    _jsxs("div", {
                                        className: "absolute bottom-3 left-4 right-4 text-[#FAF9F7]",
                                        children: [
                                            _jsx("p", { className: "text-[11px] font-bold uppercase tracking-wider text-[#FAF9F7]/90", children: "Client Advisory Desk" }),
                                            _jsx("p", { className: "text-xs text-[#FAF9F7]/80", children: "Direct access to technical leads & senior cloud architects" })
                                        ]
                                    })
                                ]
                            })
                        }),

                        _jsx("p", { className: "text-xs text-[#5C5650] leading-relaxed pl-1", children: "Nexora Technologies is a fictional company for training and demonstration purposes." })
                    ]
                }),
                _jsx("div", {
                    className: "rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] p-8 shadow-lift md:p-10",
                    children: sent ? (
                        _jsxs("div", {
                            className: "py-16 text-center",
                            children: [
                                _jsx(CheckCircle2, { className: "mx-auto h-16 w-16 text-[#377553]" }),
                                _jsx("h2", { className: "mt-6 text-2xl font-extrabold text-[#252525] sm:text-3xl", children: "Message received" }),
                                _jsx("p", { className: "mt-3 text-base text-[#5C5650]", children: "Thanks for reaching out — our engineering team will reply within one business day." }),
                                _jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                        setSent(false);
                                        setErrorMessage("");
                                        setErrors({});
                                    },
                                    className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-[#B85C38] px-6 py-3.5 text-sm font-bold text-[#FAF9F7] shadow-rust transition hover:bg-[#91452D]",
                                    children: "Send another message"
                                })
                            ]
                        })
                    ) : (
                        _jsxs("form", {
                            onSubmit: submit,
                            noValidate: true,
                            className: "grid gap-5 sm:grid-cols-2",
                            children: [
                                errorMessage && _jsxs("div", {
                                    className: "rounded-xl border border-[#B83838]/25 bg-[#B83838]/10 p-4 text-sm text-[#B83838] flex items-start gap-2.5 sm:col-span-2",
                                    children: [
                                        _jsx(AlertCircle, { className: "h-5 w-5 shrink-0 mt-0.5" }),
                                        _jsx("span", { children: errorMessage })
                                    ]
                                }),
                                _jsxs("label", {
                                    className: "text-sm font-bold text-[#252525]",
                                    children: [
                                        "Full name*",
                                        _jsx("input", { name: "name", className: field, disabled: loading, placeholder: "Jane Doe" }),
                                        errors.name && _jsx("span", { className: "mt-1.5 block text-xs font-semibold text-[#B83838]", children: errors.name })
                                    ]
                                }),
                                _jsxs("label", {
                                    className: "text-sm font-bold text-[#252525]",
                                    children: [
                                        "Work email*",
                                        _jsx("input", { name: "email", type: "email", className: field, disabled: loading, placeholder: "jane@company.com" }),
                                        errors.email && _jsx("span", { className: "mt-1.5 block text-xs font-semibold text-[#B83838]", children: errors.email })
                                    ]
                                }),
                                _jsxs("label", {
                                    className: "text-sm font-bold text-[#252525]",
                                    children: [
                                        "Company",
                                        _jsx("input", { name: "company", className: field, disabled: loading, placeholder: "Acme Corp" })
                                    ]
                                }),
                                _jsxs("label", {
                                    className: "text-sm font-bold text-[#252525]",
                                    children: [
                                        "Interested in",
                                        _jsxs("select", {
                                            name: "service",
                                            className: field,
                                            disabled: loading,
                                            children: [
                                                services.map((s) => _jsx("option", { children: s.title }, s.slug)),
                                                _jsx("option", { children: "Other" })
                                            ]
                                        })
                                    ]
                                }),
                                _jsxs("label", {
                                    className: "text-sm font-bold text-[#252525] sm:col-span-2",
                                    children: [
                                        "Subject*",
                                        _jsx("input", { name: "subject", className: field, disabled: loading, placeholder: "e.g. Modernizing our web platform" }),
                                        errors.subject && _jsx("span", { className: "mt-1.5 block text-xs font-semibold text-[#B83838]", children: errors.subject })
                                    ]
                                }),
                                _jsxs("label", {
                                    className: "text-sm font-bold text-[#252525] sm:col-span-2",
                                    children: [
                                        "How can we help?*",
                                        _jsx("textarea", { name: "message", rows: 5, className: field, disabled: loading, placeholder: "Tell us about your project requirements and goals..." }),
                                        errors.message && _jsx("span", { className: "mt-1.5 block text-xs font-semibold text-[#B83838]", children: errors.message })
                                    ]
                                }),
                                _jsxs("button", {
                                    type: "submit",
                                    disabled: loading,
                                    className: "inline-flex items-center justify-center gap-2 rounded-xl bg-[#B85C38] py-4 text-base font-bold text-[#FAF9F7] shadow-rust transition-all duration-300 hover:bg-[#91452D] hover:shadow-[0_8px_24px_rgba(184,92,56,0.38)] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:col-span-2",
                                    children: [
                                        loading && _jsx(Loader2, { className: "h-4 w-4 animate-spin" }),
                                        loading ? "Sending..." : "Send Message"
                                    ]
                                })
                            ]
                        })
                    )
                })
            ]
        })
    ] }));
}
