"use client";
import React, { useState } from "react";
import Image from "next/image";

const CALENDAR_IFRAME = process.env.NEXT_PUBLIC_CALENDAR_IFRAME || "https://calendly.com/YOUR_HANDLE/15min";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");
  const [crmSelected, setCrmSelected] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr("");
    setOk(false);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network response not ok");
      setOk(true);
      e.currentTarget.reset();
      setCrmSelected(false);
    } catch (error) {
      setErr("Something went wrong. Please try again or book a call below.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400" />
            <span className="font-semibold">RealtorAIGrowth</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#results" className="hover:text-white">Results</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#book" className="inline-flex items-center rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-white/90">Book Demo</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.35)_0%,rgba(0,0,0,0)_60%)]" />
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI Follow‑Up Concierge™ for Realtors
          </h1>
            <p className="mt-4 text-white/80 text-lg">
              Reply to new leads in <span className="font-semibold text-white">under 2 minutes</span>, qualify them, and
              <span className="font-semibold text-white"> auto‑book showings</span> while you’re with clients.
              One extra deal pays for the system 10×.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#book" className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-5 py-3 font-semibold hover:bg-indigo-400">See 2‑min demo</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold hover:bg-white/5">Get Pricing</a>
            </div>
            <p className="mt-4 text-xs text-white/60">Works with GoHighLevel, Follow Up Boss, kvCORE, Chime, Sierra & more.</p>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src="/realtor-ai-growth-demo-image.png"
                alt="Realtor AI Growth demo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="rounded-lg border border-white/10 p-3"><div className="text-2xl font-bold">2m</div><div className="text-white/70">Avg. reply time</div></div>
              <div className="rounded-lg border border-white/10 p-3"><div className="text-2xl font-bold">+25%</div><div className="text-white/70">Booked showings</div></div>
              <div className="rounded-lg border border-white/10 p-3"><div className="text-2xl font-bold">24/7</div><div className="text-white/70">Always on</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
          {["Zillow","kvCORE","GHL","Chime"].map((b) => (
            <div key={b} className="text-center text-white/60 text-sm border border-white/10 rounded-xl py-3">Integrates with {b}</div>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">How it works</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {title: "Instant Reply", desc: "Lead comes in from Zillow/Facebook/Website → AI sends a friendly text in under 2 minutes."},
            {title: "Qualify & Book", desc: "Assistant asks 1–2 smart questions, then shares your calendar to book a call or showing."},
            {title: "Track & Report", desc: "All leads log to your CRM with weekly performance report in your inbox."},
          ].map((i) => (
            <div key={i.title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-semibold text-lg">{i.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">What agents are seeing</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {k: "+7", t: "extra showings in week 1"},
            {k: "-80%", t: "manual follow‑ups"},
            {k: "+3x", t: "speed‑to‑lead vs. manual"},
          ].map((m) => (
            <div key={m.t} className="rounded-2xl border border-white/10 p-6 bg-white/5 text-center">
              <div className="text-4xl font-bold">{m.k}</div>
              <div className="text-white/70 mt-2">{m.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">Simple pricing</h2>
        <p className="mt-2 text-white/70">One extra closing covers the system for the year.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {name: "Starter", price: "$1,500 setup + $400/mo", items: ["AI instant reply","Calendar booking","Weekly email report","Airtable/Sheets logging"]},
            {name: "Pro", price: "$2,500 setup + $600/mo", items: ["All in Starter","CRM integration (GHL/kvCORE/FUB)","Multi‑channel SMS+Email","2 markets/teams"]},
            {name: "Elite Team", price: "$3,500 setup + $900/mo", items: ["All in Pro","Team dashboard","Custom prompts & routing","Priority support"]},
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-semibold text-xl">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm list-disc list-inside">
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-xl bg-indigo-500 px-5 py-3 font-semibold hover:bg-indigo-400">Get Started</a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Get pricing & a 2‑minute demo</h2>
            <p className="mt-2 text-white/80">We&apos;re booking directly via Calendly right now. Tap below to schedule.</p>
            <div className="mt-6">
              <a href="#book" className="inline-flex items-center justify-center rounded-xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-white/90">Book on Calendly</a>
            </div>
          </div>

          <div id="book" className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold text-lg mb-3">Book a 15‑minute discovery call</h3>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black/30 grid place-items-center">
              <iframe src={CALENDAR_IFRAME} className="w-full h-full" title="Calendar Booking" />
            </div>
            <p className="text-white/60 text-xs mt-3">Prefer SMS? Text &quot;DEMO&quot; to (770) 744‑4228 and we’ll send a link.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <div className="mt-6 divide-y divide-white/10">
          {[{
            q: "Do I need GoHighLevel?",
            a: "No, but it’s recommended. We can integrate with GHL, Follow Up Boss, kvCORE, Chime, Sierra, or a simple Airtable/Sheets CRM if you prefer."},
            {q: "Who sends the texts?",
            a: "You’ll get a dedicated business number. Messages are sent programmatically via compliant providers (e.g., Twilio) through your account or ours."},
            {q: "How fast is setup?",
            a: "Typical launch is 3–5 business days after onboarding. Many agents are live within 48 hours."},
            {q: "What about compliance?",
            a: "We use conversational opt‑in, quiet hours, and easy opt‑out. We’ll configure your A2P/10DLC registration if needed."},
          ].map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer font-medium">{f.q}</summary>
              <p className="mt-2 text-white/80 text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex flex-col sm:flex-row justify-between gap-3">
          <span>© {new Date().getFullYear()} RealtorAIGrowth — All rights reserved.</span>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
