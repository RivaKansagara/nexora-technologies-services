import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { techRows, toneClass } from "@/lib/site-data";

export function TechMarquee() {
    return (_jsx("div", {
        className: "space-y-4 overflow-hidden mask-x",
        children: techRows.map((row, i) => {
            const items = [...row, ...row, ...row, ...row];
            return (_jsx("div", {
                className: "group flex w-max",
                children: _jsx("div", {
                    className: `flex w-max gap-4 pr-4 group-hover:[animation-play-state:paused] ${i % 2 ? "animate-marquee-r" : "animate-marquee-l"}`,
                    children: items.map((t, j) => (_jsxs("div", {
                        className: "flex w-[180px] shrink-0 items-center gap-3 rounded-2xl border border-[#DFDAD3] bg-[#FAF9F7] px-4 py-3.5 shadow-soft transition-all duration-300 hover:scale-[1.04] hover:border-[#B85C38]/50 hover:shadow-lift md:w-[220px]",
                        children: [
                            _jsx("span", {
                                className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ${toneClass[t.tone]?.tile || "bg-[#B85C38]/12 text-[#B85C38]"}`,
                                children: t.name.replace(/[^A-Za-z]/g, "").slice(0, 2)
                            }),
                            _jsxs("span", {
                                className: "min-w-0",
                                children: [
                                    _jsx("span", { className: "block truncate text-[15px] font-bold text-[#252525]", children: t.name }),
                                    _jsx("span", { className: "block truncate text-[10.5px] font-semibold uppercase tracking-wider text-[#5C5650]", children: t.cat })
                                ]
                            })
                        ]
                    }, `${t.name}-${j}`)))
                })
            }, i));
        })
    }));
}
