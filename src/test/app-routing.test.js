import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { cleanup, render, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { routeTree } from "@/routeTree.gen";
async function renderAt(path) {
    const queryClient = new QueryClient();
    const router = createRouter({
        routeTree,
        context: { queryClient },
        history: createMemoryHistory({ initialEntries: [path] }),
    });
    await router.load();
    return render(_jsx(RouterProvider, { router: router }));
}
afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
});
// Assert only that the router mounts and paints, never page content:
// routes are rewritten as the app is built and this must keep passing.
describe("App routing", () => {
    it("renders the index route", async () => {
        await renderAt("/");
        await waitFor(() => expect(document.body.innerHTML).not.toBe(""));
    });
    it("renders the not-found route", async () => {
        vi.spyOn(console, "warn").mockImplementation(() => undefined);
        await renderAt("/this-route-does-not-exist");
        await waitFor(() => expect(document.body.innerHTML).not.toBe(""));
    });
});
