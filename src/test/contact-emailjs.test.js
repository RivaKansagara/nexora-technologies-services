import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import emailjs from "@emailjs/browser";
import { Contact } from "@/routes/contact";

vi.mock("@emailjs/browser", () => ({
    default: {
        send: vi.fn(),
    },
    send: vi.fn(),
}));

vi.mock("@tanstack/react-router", async () => {
    const actual = await vi.importActual("@tanstack/react-router");
    return {
        ...actual,
        Link: ({ to, children, ...props }) => _jsx("a", { href: typeof to === "string" ? to : "#", ...props, children }),
    };
});

vi.mock("sonner", () => ({
    toast: {
        success: vi.fn(),
        error: vi.fn(),
    },
}));

describe("Contact form EmailJS integration", () => {
    const originalEnv = { ...import.meta.env };

    beforeEach(() => {
        vi.clearAllMocks();
        import.meta.env.VITE_EMAILJS_SERVICE_ID = "test_service_id";
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID = "test_template_id";
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY = "test_public_key";
    });

    afterEach(() => {
        Object.assign(import.meta.env, originalEnv);
    });

    it("renders the contact form fields including Subject and submit button", () => {
        render(_jsx(Contact, {}));

        expect(screen.getByLabelText(/Full name\*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Work email\*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Company/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Interested in/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Subject\*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/How can we help\?\*/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Send Message/i })).toBeInTheDocument();
    });

    it("validates required fields including Subject before attempting EmailJS submission", async () => {
        render(_jsx(Contact, {}));

        const submitBtn = screen.getByRole("button", { name: /Send Message/i });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(screen.getByText("Please enter your name.")).toBeInTheDocument();
            expect(screen.getByText("Please enter a valid email.")).toBeInTheDocument();
            expect(screen.getByText("Please enter a subject.")).toBeInTheDocument();
            expect(screen.getByText("Please tell us a little more (10+ characters).")).toBeInTheDocument();
        });

        expect(emailjs.send).not.toHaveBeenCalled();
    });

    it("shows error and prevents sending when EmailJS credentials are missing", async () => {
        delete import.meta.env.VITE_EMAILJS_SERVICE_ID;
        delete import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        delete import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        render(_jsx(Contact, {}));

        fireEvent.change(screen.getByLabelText(/Full name\*/i), { target: { value: "Alex Taylor" } });
        fireEvent.change(screen.getByLabelText(/Work email\*/i), { target: { value: "alex@example.com" } });
        fireEvent.change(screen.getByLabelText(/Subject\*/i), { target: { value: "Enterprise Architecture Consultation" } });
        fireEvent.change(screen.getByLabelText(/How can we help\?\*/i), { target: { value: "We need a scalable React platform." } });

        const submitBtn = screen.getByRole("button", { name: /Send Message/i });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(screen.getByText(/EmailJS is not fully configured/i)).toBeInTheDocument();
        });

        expect(emailjs.send).not.toHaveBeenCalled();
    });

    it("sends email via EmailJS with visitor and company details and handles success", async () => {
        emailjs.send.mockResolvedValueOnce({ status: 200, text: "OK" });

        render(_jsx(Contact, {}));

        fireEvent.change(screen.getByLabelText(/Full name\*/i), { target: { value: "Sarah Connor" } });
        fireEvent.change(screen.getByLabelText(/Work email\*/i), { target: { value: "sarah@techcorp.com" } });
        fireEvent.change(screen.getByLabelText(/Company/i), { target: { value: "TechCorp" } });
        fireEvent.change(screen.getByLabelText(/Subject\*/i), { target: { value: "Cloud Migration Strategy" } });
        fireEvent.change(screen.getByLabelText(/How can we help\?\*/i), { target: { value: "Interested in cloud architecture modernization." } });

        const submitBtn = screen.getByRole("button", { name: /Send Message/i });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(emailjs.send).toHaveBeenCalledTimes(1);
        });

        expect(emailjs.send).toHaveBeenCalledWith(
            "test_service_id",
            "test_template_id",
            expect.objectContaining({
                // Visitor details
                name: "Sarah Connor",
                from_name: "Sarah Connor",
                email: "sarah@techcorp.com",
                from_email: "sarah@techcorp.com",
                reply_to: "sarah@techcorp.com",
                subject: "Cloud Migration Strategy",
                company: "TechCorp",
                message: "Interested in cloud architecture modernization.",
                // Company details
                company_name: "Nexora Technologies",
                company_email: "hello@nexora.example",
                company_website: expect.any(String),
                submission_date: expect.any(String),
            }),
            { publicKey: "test_public_key" }
        );

        await waitFor(() => {
            expect(screen.getByText("Message received")).toBeInTheDocument();
            expect(screen.getByText("Send another message")).toBeInTheDocument();
        });
    });

    it("displays loading state and prevents duplicate submission while sending", async () => {
        let resolvePromise;
        const pendingPromise = new Promise((resolve) => {
            resolvePromise = resolve;
        });
        emailjs.send.mockReturnValueOnce(pendingPromise);

        render(_jsx(Contact, {}));

        fireEvent.change(screen.getByLabelText(/Full name\*/i), { target: { value: "David Miller" } });
        fireEvent.change(screen.getByLabelText(/Work email\*/i), { target: { value: "david@example.com" } });
        fireEvent.change(screen.getByLabelText(/Subject\*/i), { target: { value: "AI Automation Inquiry" } });
        fireEvent.change(screen.getByLabelText(/How can we help\?\*/i), { target: { value: "Looking for an intelligent automation solution." } });

        const submitBtn = screen.getByRole("button", { name: /Send Message/i });
        fireEvent.click(submitBtn);

        // While pending, submit button should show loading state and be disabled
        await waitFor(() => {
            expect(screen.getByRole("button")).toBeDisabled();
            expect(screen.getByText(/Sending\.\.\./i)).toBeInTheDocument();
        });

        // Attempting to click again while loading should not trigger an extra send
        fireEvent.click(screen.getByRole("button"));
        expect(emailjs.send).toHaveBeenCalledTimes(1);

        // Resolve the submission
        resolvePromise({ status: 200, text: "OK" });

        await waitFor(() => {
            expect(screen.getByText("Message received")).toBeInTheDocument();
        });
    });

    it("displays an error message when EmailJS fails", async () => {
        emailjs.send.mockRejectedValueOnce({ text: "SMTP authentication failed" });

        render(_jsx(Contact, {}));

        fireEvent.change(screen.getByLabelText(/Full name\*/i), { target: { value: "John Doe" } });
        fireEvent.change(screen.getByLabelText(/Work email\*/i), { target: { value: "john@example.com" } });
        fireEvent.change(screen.getByLabelText(/Subject\*/i), { target: { value: "Data Pipeline Query" } });
        fireEvent.change(screen.getByLabelText(/How can we help\?\*/i), { target: { value: "Need help with our data pipeline." } });

        const submitBtn = screen.getByRole("button", { name: /Send Message/i });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(screen.getByText("SMTP authentication failed")).toBeInTheDocument();
        });

        expect(screen.getByRole("button", { name: /Send Message/i })).not.toBeDisabled();
    });
});
