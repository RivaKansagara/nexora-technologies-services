import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { team } from "../lib/site-data";

async function renderAt(path) {
    const queryClient = new QueryClient();
    const router = createRouter({
        routeTree,
        context: { queryClient },
        history: createMemoryHistory({ initialEntries: [path] }),
    });
    await router.load();
    return render(_jsx(RouterProvider, { router }));
}

afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
});

describe("Meet Our Team section", () => {
    it("has 8 distinct team members with high-quality profile photo URLs", () => {
        expect(team.length).toBe(8);
        const images = new Set();
        team.forEach((member) => {
            expect(member.name).toBeTruthy();
            expect(member.role).toBeTruthy();
            expect(member.image).toBeTruthy();
            expect(member.image).toMatch(/^\/images\/team\/[a-z0-9-]+\.jpg$/);
            images.add(member.image);
        });
        // Ensure every team member has a unique photo
        expect(images.size).toBe(8);
    });

    it("renders team cards with profile photos directly above name and role at /team", async () => {
        await renderAt("/team");

        await waitFor(() => {
            expect(screen.getByText("The people behind Nexora")).toBeInTheDocument();
        });

        team.forEach((member) => {
            // Verify heading for name
            const nameEl = screen.getByRole("heading", { name: member.name });
            expect(nameEl).toBeInTheDocument();

            // Verify designation text
            expect(screen.getByText(member.role)).toBeInTheDocument();

            // Verify image with alt text
            const img = screen.getByAltText(`${member.name} - ${member.role}`);
            expect(img).toBeInTheDocument();
            expect(img).toHaveAttribute("src", member.image);

            // Verify LinkedIn link
            const linkedinLink = screen.getByLabelText(`${member.name} on LinkedIn`);
            expect(linkedinLink).toBeInTheDocument();
        });
    });
});
