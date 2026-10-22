import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Activity, CheckCircle2, Cloud, Cpu, GitBranch, ShieldCheck, Sparkles } from "lucide-react";

const bars = [
    { height: 42 },
    { height: 56 },
    { height: 48 },
    { height: 68 },
    { height: 62 },
    { height: 76 },
    { height: 72 },
    { height: 86 },
    { height: 80 },
    { height: 90 },
    { height: 86 },
    { height: 98 },
];

export function HeroDashboard() {
    return (_jsxs("div", {
        className: "relative mx-auto w-full max-w-[580px] animate-hero-up stagger-2",
        children: [
            // Top floating pill: 3 clouds connected
            _jsxs("div", {
                className: "absolute -top-4 right-6 z-20 hidden items-center gap-2 rounded-full border border-[#DFDAD3] bg-[#FAF9F7] px-3.5 py-1.5 shadow-[0_4px_16px_rgba(37,37,37,0.08)] sm:flex animate-float-gentle",
                children: [
                    _jsx(Cloud, { className: "h-3.5 w-3.5 text-[#B85C38]" }),
                    _jsx("span", { className: "text-[11.5px] font-bold text-[#252525]", children: "3 clouds connected" })
                ]
            }),

            // Floating card on left: Security
            _jsxs("div", {
                className: "absolute -left-7 top-16 z-20 hidden items-center gap-3 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] px-4 py-3 shadow-[0_12px_28px_rgba(37,37,37,0.09)] sm:flex animate-float-slow",
                children: [
                    _jsx("span", {
                        className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#377553]/15 text-[#377553]",
                        children: _jsx(ShieldCheck, { className: "h-4.5 w-4.5", strokeWidth: 2 })
                    }),
                    _jsxs("span", {
                        children: [
                            _jsx("span", { className: "block text-xs font-bold text-[#252525]", children: "Security" }),
                            _jsx("span", { className: "block text-[11px] font-medium text-[#5C5650]", children: "0 critical issues" })
                        ]
                    })
                ]
            }),

            // Floating card on right: AI insight
            _jsxs("div", {
                className: "absolute -right-7 bottom-10 z-20 hidden items-center gap-3 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] px-4 py-3 shadow-[0_12px_28px_rgba(37,37,37,0.09)] sm:flex animate-float-gentle",
                children: [
                    _jsx("span", {
                        className: "flex h-9 w-9 items-center justify-center rounded-xl bg-[#B85C38]/15 text-[#B85C38]",
                        children: _jsx(Sparkles, { className: "h-4.5 w-4.5", strokeWidth: 2 })
                    }),
                    _jsxs("span", {
                        children: [
                            _jsx("span", { className: "block text-xs font-bold text-[#252525]", children: "AI insight" }),
                            _jsx("span", { className: "block text-[11px] font-medium text-[#5C5650]", children: "Scale API pool by 2" })
                        ]
                    })
                ]
            }),

            // Main Dashboard Container
            _jsxs("div", {
                className: "relative overflow-hidden rounded-3xl border border-[#DFDAD3] bg-[#FAF9F7] shadow-lift",
                children: [
                    // Window Top Header
                    _jsxs("div", {
                        className: "flex h-11 items-center justify-between border-b border-[#DFDAD3] bg-[#F2F0ED] px-5",
                        children: [
                            _jsxs("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    _jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#B83838]" }),
                                    _jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#D97736]" }),
                                    _jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-[#377553]" })
                                ]
                            }),
                            _jsx("span", { className: "text-[12.5px] font-bold text-[#252525]", children: "Nexora Control Center" }),
                            _jsxs("span", {
                                className: "flex items-center gap-1.5 text-[11.5px] font-bold text-[#377553]",
                                children: [
                                    _jsx("span", { className: "h-2 w-2 rounded-full bg-[#377553] animate-pulse" }),
                                    "Live"
                                ]
                            })
                        ]
                    }),

                    // Dashboard Content
                    _jsxs("div", {
                        className: "space-y-4 p-5 md:p-6",
                        children: [
                            // Top Row: 3 Metric Cards
                            _jsxs("div", {
                                className: "grid grid-cols-3 gap-3.5",
                                children: [
                                    // Card 1: Uptime
                                    _jsxs("div", {
                                        className: "rounded-2xl border border-[#DFDAD3] bg-[#F2F0ED] p-3.5 transition-all duration-300 hover:border-[#377553]/40 hover:-translate-y-0.5",
                                        children: [
                                            _jsx("span", {
                                                className: "inline-flex rounded-lg bg-[#377553]/15 p-1.5 text-[#377553]",
                                                children: _jsx(Activity, { className: "h-4 w-4", strokeWidth: 2 })
                                            }),
                                            _jsx("p", { className: "mt-2.5 text-xl font-extrabold text-[#252525] md:text-2xl", children: "99.98%" }),
                                            _jsx("p", { className: "text-xs font-semibold text-[#5C5650]", children: "Uptime" })
                                        ]
                                    }),

                                    // Card 2: Deploys / wk
                                    _jsxs("div", {
                                        className: "rounded-2xl border border-[#DFDAD3] bg-[#F2F0ED] p-3.5 transition-all duration-300 hover:border-[#B85C38]/40 hover:-translate-y-0.5",
                                        children: [
                                            _jsx("span", {
                                                className: "inline-flex rounded-lg bg-[#B85C38]/15 p-1.5 text-[#B85C38]",
                                                children: _jsx(GitBranch, { className: "h-4 w-4", strokeWidth: 2 })
                                            }),
                                            _jsx("p", { className: "mt-2.5 text-xl font-extrabold text-[#252525] md:text-2xl", children: "142" }),
                                            _jsx("p", { className: "text-xs font-semibold text-[#5C5650]", children: "Deploys / wk" })
                                        ]
                                    }),

                                    // Card 3: Avg latency
                                    _jsxs("div", {
                                        className: "rounded-2xl border border-[#DFDAD3] bg-[#F2F0ED] p-3.5 transition-all duration-300 hover:border-[#91452D]/40 hover:-translate-y-0.5",
                                        children: [
                                            _jsx("span", {
                                                className: "inline-flex rounded-lg bg-[#91452D]/15 p-1.5 text-[#91452D]",
                                                children: _jsx(Cpu, { className: "h-4 w-4", strokeWidth: 2 })
                                            }),
                                            _jsx("p", { className: "mt-2.5 text-xl font-extrabold text-[#252525] md:text-2xl", children: "84ms" }),
                                            _jsx("p", { className: "text-xs font-semibold text-[#5C5650]", children: "Avg latency" })
                                        ]
                                    })
                                ]
                            }),

                            // Middle Section: Platform throughput Bar Chart
                            _jsxs("div", {
                                className: "rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-4.5 shadow-xs",
                                children: [
                                    _jsxs("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            _jsx("p", { className: "text-sm font-bold text-[#252525]", children: "Platform throughput" }),
                                            _jsx("span", {
                                                className: "rounded-full bg-[#377553]/15 px-2.5 py-0.5 text-[11px] font-bold text-[#377553]",
                                                children: "+18.4%"
                                            })
                                        ]
                                    }),
                                    _jsx("div", {
                                        className: "mt-4 flex h-28 items-end gap-2 md:gap-2.5",
                                        children: bars.map((b, i) => (
                                            _jsx("div", {
                                                className: `flex-1 rounded-t-md transition-all duration-500 hover:opacity-90 ${
                                                    i === bars.length - 1
                                                        ? "bg-[#B85C38] shadow-[0_0_12px_rgba(184,92,56,0.35)]"
                                                        : i >= bars.length - 4
                                                        ? "bg-[#D48B6E]"
                                                        : "bg-[#E7E3DE] hover:bg-[#B85C38]/50"
                                                }`,
                                                style: { height: `${b.height}%` }
                                            }, i)
                                        ))
                                    })
                                ]
                            }),

                            // Bottom Section: Cloud regions & Recent pipeline
                            _jsxs("div", {
                                className: "grid grid-cols-1 gap-3.5 sm:grid-cols-2",
                                children: [
                                    // Cloud regions
                                    _jsxs("div", {
                                        className: "rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-4.5 shadow-xs",
                                        children: [
                                            _jsx("p", { className: "mb-3 text-xs font-bold text-[#252525]", children: "Cloud regions" }),
                                            [
                                                ["us-east", 92, "bg-[#B85C38]"],
                                                ["eu-west", 76, "bg-[#91452D]"],
                                                ["ap-south", 61, "bg-[#5C5650]"]
                                            ].map(([region, pct, barColor]) => (
                                                _jsxs("div", {
                                                    className: "mt-2.5 first:mt-0",
                                                    children: [
                                                        _jsxs("div", {
                                                            className: "flex justify-between text-[11px] text-[#5C5650]",
                                                            children: [
                                                                _jsx("span", { className: "font-medium", children: region }),
                                                                _jsxs("span", { className: "font-semibold text-[#252525]", children: [pct, "%"] })
                                                            ]
                                                        }),
                                                        _jsx("div", {
                                                            className: "mt-1 h-1.5 w-full rounded-full bg-[#E7E3DE]",
                                                            children: _jsx("div", {
                                                                className: `h-full rounded-full ${barColor} transition-all duration-700`,
                                                                style: { width: `${pct}%` }
                                                            })
                                                        })
                                                    ]
                                                }, region)
                                            ))
                                        ]
                                    }),

                                    // Recent pipeline
                                    _jsxs("div", {
                                        className: "rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] p-4.5 shadow-xs",
                                        children: [
                                            _jsx("p", { className: "mb-3 text-xs font-bold text-[#252525]", children: "Recent pipeline" }),
                                            _jsx("div", {
                                                className: "space-y-2.5",
                                                children: [
                                                    "Build",
                                                    "Tests",
                                                    "Security scan",
                                                    "Deploy"
                                                ].map((step) => (
                                                    _jsxs("div", {
                                                        className: "flex items-center gap-2 text-xs font-medium text-[#252525]",
                                                        children: [
                                                            _jsx(CheckCircle2, { className: "h-3.5 w-3.5 text-[#377553]", strokeWidth: 2 }),
                                                            _jsx("span", { children: step })
                                                        ]
                                                    }, step)
                                                ))
                                            })
                                        ]
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
