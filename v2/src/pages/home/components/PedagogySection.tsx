import { useState } from "react";
import Reveal from "@/components/base/Reveal";
import { pedagogyModes } from "@/mocks/home";

export default function PedagogySection() {
  const [activeKey, setActiveKey] = useState("discovery");
  const active = pedagogyModes.find((mode) => mode.key === activeKey) ?? pedagogyModes[1];
  const isDiscovery = active.key === "discovery";

  return (
    <section className="w-full bg-background-100 py-20 md:py-28">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="rounded-2xl border border-background-200 bg-background-50 p-6 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-950 tracking-tight leading-tight">
                  Rote vs. Consequence-Driven Discovery
                </h2>
                <p className="mt-3 text-sm text-foreground-600 leading-relaxed">
                  Toggle below to see how learning through consequence builds durable engineering
                  intuition, compared with traditional instruction.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Learning approach switcher"
                className="inline-flex self-start lg:self-auto p-1 bg-background-200/70 rounded-full border border-background-200"
              >
                {pedagogyModes.map((mode) => {
                  const selected = mode.key === activeKey;
                  return (
                    <button
                      key={mode.key}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveKey(mode.key)}
                      className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300 cursor-pointer ${
                        selected
                          ? mode.key === "discovery"
                            ? "bg-accent-600 text-background-50"
                            : "bg-secondary-700 text-background-50"
                          : "text-foreground-600 hover:text-foreground-900"
                      }`}
                    >
                      {mode.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              key={active.key}
              className={`mt-8 rounded-xl border p-6 md:p-8 ${
                isDiscovery
                  ? "bg-accent-50/80 border-accent-200"
                  : "bg-secondary-50/80 border-secondary-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isDiscovery ? "bg-accent-600 text-background-50" : "bg-secondary-600 text-background-50"
                  }`}
                >
                  <i
                    className={isDiscovery ? "ri-flask-line text-xl" : "ri-book-open-line text-xl"}
                    aria-hidden="true"
                  ></i>
                </span>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground-950">
                  {active.heading}
                </h3>
              </div>

              <p className="mt-4 text-sm md:text-base text-foreground-800 leading-relaxed">
                {active.summary}
              </p>

              <ul className="mt-6 space-y-3">
                {active.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                        isDiscovery ? "bg-accent-600" : "bg-secondary-600"
                      }`}
                    ></span>
                    <span className="text-sm text-foreground-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}