import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Code2, BrainCircuit, Cloud, Layers, ShieldCheck, Activity } from "lucide-react";

const slides = [
    {
        image: "/images/hero/hero-software.jpg",
        alt: "Modern software engineering and scalable application architecture",
        tag: "Software Engineering",
        icon: Code2,
        title: "Mission-Critical Software Platforms",
        desc: "Custom web, mobile and enterprise systems engineered for extreme reliability and scale.",
        badge: "99.98% Uptime",
        metricIcon: Activity
    },
    {
        image: "/images/hero/hero-ai.jpg",
        alt: "Applied artificial intelligence and machine learning automation",
        tag: "Applied AI & Automation",
        icon: BrainCircuit,
        title: "Intelligent Systems in Production",
        desc: "Production-grade generative AI, neural assistants and automated workflows that eliminate manual toil.",
        badge: "3× Output Velocity",
        metricIcon: Sparkles
    },
    {
        image: "/images/hero/hero-cloud.jpg",
        alt: "Cloud infrastructure, Kubernetes, and automated DevOps delivery pipelines",
        tag: "Cloud & DevOps",
        icon: Cloud,
        title: "Resilient Multi-Cloud Foundations",
        desc: "Automated Kubernetes orchestration, multi-cloud migration and CI/CD pipelines designed for zero-downtime.",
        badge: "140+ Deploys / wk",
        metricIcon: Layers
    },
    {
        image: "/images/hero/hero-innovation.jpg",
        alt: "Digital engineering team collaborating on innovative enterprise solutions",
        tag: "Digital Innovation",
        icon: Sparkles,
        title: "Collaborative Product Delivery",
        desc: "Senior engineering squads partnering directly with technical leaders to modernize core systems.",
        badge: "Zero Vulnerabilities",
        metricIcon: ShieldCheck
    }
];

export function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timerRef = useRef(null);

    // Auto-advance slides every 6 seconds (between 5-7 seconds)
    useEffect(() => {
        if (isHovered) return;

        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isHovered]);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (_jsxs("div", {
        className: "relative mx-auto w-full max-w-[580px] animate-hero-up stagger-2",
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        children: [
            // Top floating badge: Active Slide Tag
            _jsxs("div", {
                className: "absolute -top-4 right-6 z-30 hidden items-center gap-2 rounded-full border border-[#DFDAD3] bg-[#FAF9F7]/95 px-4 py-1.5 shadow-[0_4px_16px_rgba(37,37,37,0.08)] backdrop-blur sm:flex animate-float-gentle",
                children: [
                    _jsx("span", { className: "h-2 w-2 rounded-full bg-[#B85C38] animate-pulse" }),
                    _jsx("span", { className: "text-[11.5px] font-bold text-[#252525]", children: slides[current].tag })
                ]
            }),

            // Floating card on left: Metric Badge
            _jsxs("div", {
                className: "absolute -left-6 top-16 z-30 hidden items-center gap-3 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7]/95 px-4 py-3 shadow-[0_12px_28px_rgba(37,37,37,0.1)] backdrop-blur sm:flex animate-float-slow",
                children: [
                    _jsx("span", {
                        className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#B85C38]/15 text-[#B85C38]",
                        children: _jsx(slides[current].metricIcon, { className: "h-4.5 w-4.5", strokeWidth: 2 })
                    }),
                    _jsxs("span", {
                        children: [
                            _jsx("span", { className: "block text-xs font-bold text-[#252525]", children: slides[current].badge }),
                            _jsx("span", { className: "block text-[11px] font-medium text-[#5C5650]", children: "Live KPI benchmark" })
                        ]
                    })
                ]
            }),

            // Main Slider Window Container
            _jsxs("div", {
                className: "relative overflow-hidden rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-lift group",
                children: [
                    // Slider Viewport (Height approx 460px)
                    _jsxs("div", {
                        className: "relative h-[420px] w-full overflow-hidden sm:h-[460px]",
                        children: [
                            slides.map((slide, idx) => (
                                _jsxs("div", {
                                    className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                        idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                                    }`,
                                    children: [
                                        // Slide Image
                                        _jsx("img", {
                                            src: slide.image,
                                            alt: slide.alt,
                                            className: `h-full w-full object-cover transition-transform duration-10000 ease-out ${
                                                idx === current ? "scale-105" : "scale-100"
                                            }`,
                                            loading: idx === 0 ? "eager" : "lazy"
                                        }),

                                        // Dark Scrim Gradient for text contrast
                                        _jsx("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-[#252525]/90 via-[#252525]/40 to-transparent"
                                        }),

                                        // Slide Content Overlay
                                        _jsxs("div", {
                                            className: "absolute inset-x-0 bottom-0 p-6 sm:p-8 text-[#FAF9F7]",
                                            children: [
                                                _jsxs("div", {
                                                    className: "flex items-center gap-2 mb-2.5",
                                                    children: [
                                                        _jsx("span", {
                                                            className: "flex h-7 w-7 items-center justify-center rounded-lg bg-[#B85C38] text-white shadow-sm",
                                                            children: _jsx(slide.icon, { className: "h-3.5 w-3.5" })
                                                        }),
                                                        _jsx("span", {
                                                            className: "text-xs font-bold uppercase tracking-wider text-[#FAF9F7]/90",
                                                            children: slide.tag
                                                        })
                                                    ]
                                                }),
                                                _jsx("h3", {
                                                    className: "text-2xl font-extrabold leading-tight text-[#FAF9F7] sm:text-[1.7rem]",
                                                    children: slide.title
                                                }),
                                                _jsx("p", {
                                                    className: "mt-2 max-w-md text-xs leading-relaxed text-[#FAF9F7]/80 sm:text-sm line-clamp-2",
                                                    children: slide.desc
                                                })
                                            ]
                                        })
                                    ]
                                }, slide.title)
                            )),

                            // Left / Right Navigation Arrows
                            _jsx("button", {
                                type: "button",
                                onClick: prevSlide,
                                "aria-label": "Previous slide",
                                className: "absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#252525]/40 text-white backdrop-blur transition-all duration-200 hover:bg-[#B85C38] hover:scale-110",
                                children: _jsx(ChevronLeft, { className: "h-5 w-5" })
                            }),
                            _jsx("button", {
                                type: "button",
                                onClick: nextSlide,
                                "aria-label": "Next slide",
                                className: "absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#252525]/40 text-white backdrop-blur transition-all duration-200 hover:bg-[#B85C38] hover:scale-110",
                                children: _jsx(ChevronRight, { className: "h-5 w-5" })
                            })
                        ]
                    }),

                    // Bottom Bar: Progress Indicator Dots & Slide Counter
                    _jsxs("div", {
                        className: "flex h-14 items-center justify-between border-t border-[#DFDAD3] bg-[#FAF9F7] px-6",
                        children: [
                            // Dots
                            _jsx("div", {
                                className: "flex items-center gap-2",
                                children: slides.map((_, i) => (
                                    _jsx("button", {
                                        type: "button",
                                        onClick: () => setCurrent(i),
                                        "aria-label": `Go to slide ${i + 1}`,
                                        className: `h-2 rounded-full transition-all duration-300 ${
                                            i === current
                                                ? "w-8 bg-[#B85C38]"
                                                : "w-2 bg-[#DFDAD3] hover:bg-[#5C5650]"
                                        }`
                                    }, i)
                                ))
                            }),

                            // Slide Counter & Pause hint
                            _jsxs("div", {
                                className: "flex items-center gap-3 text-xs font-bold text-[#5C5650]",
                                children: [
                                    _jsxs("span", { children: [current + 1, " / ", slides.length] }),
                                    _jsx("span", {
                                        className: "rounded-full bg-[#E7E3DE] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#252525]",
                                        children: isHovered ? "Paused" : "Auto 6s"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}
