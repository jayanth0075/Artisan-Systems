"use client";

import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/artisan13226@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="bg-[#050505] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-xl border border-[#27272a] bg-[#0a0a0a] p-8 sm:p-11 lg:mb-5 lg:p-8 xl:p-11">
              <h2 className="mb-3 text-2xl font-semibold text-[#ededed] sm:text-3xl lg:text-2xl xl:text-3xl">
                Get in Touch
              </h2>
              <p className="mb-12 text-base text-[#a1a1aa]">
                Have a project idea or need help with automation, AI, or web development? Reach out and our team will get back to you shortly.
              </p>

              {submitted ? (
                <div className="rounded-lg border border-[#27272a] bg-[#111111] p-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#18181b] text-[#ededed]">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#ededed]">Message Sent!</h3>
                  <p className="text-[#a1a1aa]">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-md bg-[#ededed] px-6 py-2.5 text-sm font-medium text-[#050505] transition-colors duration-200 hover:bg-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="New message from Artisan Systems website" />
                  <input type="hidden" name="_template" value="table" />
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-[#ededed]"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Enter your name"
                          className="w-full rounded-md border border-[#27272a] bg-[#050505] px-6 py-3 text-base text-[#ededed] outline-none transition-colors duration-200 focus:border-[#52525b] focus:bg-[#0a0a0a]"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-[#ededed]"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter your email"
                          className="w-full rounded-md border border-[#27272a] bg-[#050505] px-6 py-3 text-base text-[#ededed] outline-none transition-colors duration-200 focus:border-[#52525b] focus:bg-[#0a0a0a]"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-[#ededed]"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          placeholder="Enter your Message"
                          className="w-full resize-none rounded-md border border-[#27272a] bg-[#050505] px-6 py-3 text-base text-[#ededed] outline-none transition-colors duration-200 focus:border-[#52525b] focus:bg-[#0a0a0a]"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button
                        type="submit"
                        disabled={sending}
                        className="rounded-md bg-[#ededed] px-8 py-3.5 text-base font-medium text-[#050505] transition-colors duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {sending ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
