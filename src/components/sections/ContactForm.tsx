"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { sendContactEmail } from "@/app/actions/sendContactEmail";
import { FadeUp } from "@/components/shared/Animations";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <FadeUp className="bg-accent-green/10 border border-accent-green/20 rounded-3xl p-8 md:p-12 text-center shadow-sm">
        <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-text-dark mb-4">Message Sent!</h3>
        <p className="text-muted text-lg mb-8 max-w-md mx-auto">
          Thank you for reaching out. Our team will review your query and get back to you shortly.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Send Another Message
        </Button>
      </FadeUp>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium border border-red-100">
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-bold text-text-dark">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-dark"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-bold text-text-dark">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-dark"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="country" className="block text-sm font-bold text-text-dark">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            required
            className="w-full px-4 py-3 rounded-xl border border-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-dark"
            placeholder="E.g. United States, Canada, India"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-bold text-text-dark">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 rounded-xl border border-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-dark"
            placeholder="How can we help you?"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="query" className="block text-sm font-bold text-text-dark">
          Your Query <span className="text-red-500">*</span>
        </label>
        <textarea
          id="query"
          name="query"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-text-dark resize-none"
          placeholder="Please provide details about your inquiry..."
        ></textarea>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        className="w-sm text-md mt-4 mx-auto block"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending Message..." : "Send Message"}
      </Button>
    </form>
  );
}