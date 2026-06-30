"use client";

import { useState } from "react";

type Theme = { name: string; move: string; note: string; tone: "up" | "down" | "neutral" };

const themes: Theme[] = [
  { name: "AI infrastructure", move: "+2.4%", note: "Semiconductor demand remains the strongest linked narrative.", tone: "up" },
  { name: "US technology", move: "+0.8%", note: "Large-cap leadership widened after a quieter macro session.", tone: "up" },
  { name: "Gold & real assets", move: "-0.6%", note: "A firmer dollar reduced near-term support for defensive assets.", tone: "down" },
  { name: "Crypto liquidity", move: "Mixed", note: "Risk appetite improved, but participation remained selective.", tone: "neutral" },
];

const watchlist = [
  ["Wed 09:30", "UK inflation release", "Macro", "Can reprice rate expectations across GBP and UK equities."],
  ["Wed 13:30", "US jobs update", "Macro", "May influence dollar strength and broader risk appetite."],
  ["Thu 19:00", "US policy decision", "Central banks", "Key context for growth, technology valuations and gold."],
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [saved, setSaved] = useState(false);
  const nav = ["Overview", "Themes", "Connections", "Calendar"];

  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">S</div>
            <div>
              <p className="text-lg font-semibold tracking-tight">SignalAtlas</p>
              <p className="text-xs text-slate-400">Personal market intelligence</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <span className="hidden sm:inline">Illustrative dashboard</span>
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1.5 text-cyan-200">Sample data only</span>
          </div>
        </header>

        <div className="mt-7 grid gap-7 lg:grid-cols-[190px_1fr]">
          <aside className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {nav.map((item) => (
              <button key={item} onClick={() => setActiveTab(item)} className={`whitespace-nowrap rounded-lg px-4 py-3 text-left text-sm transition ${activeTab === item ? "bg-white text-slate-950 shadow-sm" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
                {item}
              </button>
            ))}
            <div className="mt-0 hidden rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:block">
              <p className="text-xs font-medium uppercase tracking-[0.17em] text-slate-500">Your focus</p>
              <p className="mt-2 text-sm font-medium text-slate-200">AI · Gold · US Tech · Crypto</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">Choose the themes you care about. SignalAtlas explains relevance and connections.</p>
            </div>
          </aside>

          <section>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-medium text-cyan-300">Tuesday briefing</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">The market context behind the noise.</h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">A focused daily view of what moved, why it may matter to your themes, and the events worth keeping on your radar.</p>
              </div>
              <button onClick={() => setSaved(!saved)} className="rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:border-cyan-300 hover:text-cyan-200">
                {saved ? "Briefing saved" : "Save briefing"}
              </button>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 to-slate-900 p-5 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-cyan-200">Today’s main shift</p>
                <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight">Technology strength returned while defensive assets softened.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">The sample dashboard reads this as a modest tilt toward growth-sensitive themes. The important question is whether incoming macro events confirm that direction.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">AI infrastructure</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">US technology</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Gold</span>
                </div>
              </article>
              <article className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-slate-500">Signal clarity</p>
                <p className="mt-5 text-4xl font-semibold text-white">72<span className="text-xl text-slate-500">/100</span></p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Narratives are aligned, but major scheduled events could change the picture.</p>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[72%] rounded-full bg-cyan-300" /></div>
              </article>
            </div>

            <div className="mt-7 grid gap-7 xl:grid-cols-[1.25fr_.75fr]">
              <section>
                <div className="flex items-center justify-between"><h2 className="text-lg font-semibold">What changed for your themes</h2><span className="text-xs text-slate-500">Illustrative movement</span></div>
                <div className="mt-3 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                  {themes.map((theme) => (
                    <article key={theme.name} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div><h3 className="font-medium">{theme.name}</h3><p className="mt-1 text-sm leading-5 text-slate-400">{theme.note}</p></div>
                      <span className={`w-fit rounded-full px-3 py-1 text-sm font-semibold ${theme.tone === "up" ? "bg-emerald-300/10 text-emerald-200" : theme.tone === "down" ? "bg-rose-300/10 text-rose-200" : "bg-slate-400/10 text-slate-300"}`}>{theme.move}</span>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.17em] text-slate-500">Connection map</p>
                <h2 className="mt-2 text-lg font-semibold">One story, multiple markets</h2>
                <div className="relative mt-7 h-48 overflow-hidden rounded-xl border border-white/10 bg-slate-950/60">
                  <div className="absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 rotate-[25deg] bg-cyan-300/50" />
                  <div className="absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 -rotate-[22deg] bg-violet-300/40" />
                  {[ ["AI", "left-6 top-7", "bg-cyan-300 text-slate-950"], ["US Tech", "right-5 top-6", "bg-violet-300 text-slate-950"], ["Gold", "bottom-6 left-7", "bg-amber-200 text-slate-950"], ["Crypto", "bottom-6 right-6", "bg-emerald-300 text-slate-950"] ].map(([label, position, style]) => <div key={label} className={`absolute ${position} rounded-full px-3 py-2 text-xs font-bold shadow-lg ${style}`}>{label}</div>)}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-slate-900 px-3 py-2 text-xs text-slate-100">Rates</div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">A rates-driven shift can affect growth valuations, the dollar, gold demand and crypto liquidity at the same time.</p>
              </section>
            </div>

            <section className="mt-7 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.17em] text-slate-500">Next up</p><h2 className="mt-1 text-lg font-semibold">Events to watch</h2></div><span className="text-xs text-slate-500">UK time</span></div>
              <div className="mt-4 divide-y divide-white/10">
                {watchlist.map(([time, event, category, impact]) => <div key={event} className="grid gap-2 py-4 text-sm md:grid-cols-[100px_1fr_130px_1.4fr]"><span className="font-medium text-cyan-200">{time}</span><span className="font-medium">{event}</span><span className="text-slate-400">{category}</span><span className="leading-5 text-slate-400">{impact}</span></div>)}
              </div>
            </section>

            <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-5 text-slate-500">SignalAtlas is a market-intelligence and learning tool. All values and events on this page are sample content only, not live data, financial advice, or a recommendation to buy or sell anything.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
