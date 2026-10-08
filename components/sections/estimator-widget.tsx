"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { EstimatorSummary } from "@/components/estimate/estimator-summary";
import { useBrief } from "@/components/estimate/estimate-provider";
import { SectionHeading } from "@/components/sections/section-heading";
import { budgetOptions, moduleOptionsFor, projectTypeOptions, timelineOptions } from "@/lib/brief-copy";
import { packageById } from "@/lib/estimator-data";
import { reveal } from "@/lib/reveal";
import { cn, formatPln } from "@/lib/utils";

export function EstimatorWidget() {
  const { brief, update, toggleModule } = useBrief();
  const selected = packageById(brief.projectType);
  const addOns = moduleOptionsFor(brief.projectType);

  return (
    <section id="wycena" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Wycena"
          title="Powiedz, co ma powstać."
          description="Wybierz pakiet i dodatki. Kwota to suma ceny bazowej i zaznaczonych opcji. Ten sam wybór dołączy się do wiadomości."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
          <div {...reveal()} className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
            <OptionGroup label="Jaka to strona">
              {projectTypeOptions.map((option) => (
                <Tile
                  key={option.id}
                  pressed={brief.projectType === option.id}
                  label={option.label}
                  detail={option.detail}
                  onClick={() => update({ projectType: option.id })}
                />
              ))}
            </OptionGroup>
            <div className="mt-4">
              <p className="text-xs font-medium text-cobalt">✓ W cenie pakietu</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {selected.included.map((item) => (
                  <li key={item} className="rounded-full bg-[#e8f2ec] px-2.5 py-1 text-xs font-medium text-cobalt">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <OptionGroup label="Dodatki do tego pakietu" className="mt-8" motionKey={brief.projectType}>
              {addOns.map((option) => (
                <Tile
                  key={option.id}
                  pressed={brief.modules.includes(option.id)}
                  label={option.label}
                  detail={`+${formatPln(option.price)} · +${option.days} dni`}
                  onClick={() => toggleModule(option.id)}
                />
              ))}
            </OptionGroup>
            <OptionGroup label="Budżet" className="mt-8">
              {budgetOptions.map((option) => (
                <Tile
                  key={option.id}
                  pressed={brief.budget === option.id}
                  label={option.label}
                  onClick={() => update({ budget: option.id })}
                />
              ))}
            </OptionGroup>
            <OptionGroup label="Termin" className="mt-8">
              {timelineOptions.map((option) => (
                <Tile
                  key={option.id}
                  pressed={brief.timeline === option.id}
                  label={option.label}
                  onClick={() => update({ timeline: option.id })}
                />
              ))}
            </OptionGroup>
          </div>
          <div {...reveal(80)}>
            <EstimatorSummary brief={brief} />
          </div>
        </div>
      </div>
    </section>
  );
}

function OptionGroup({
  label,
  className,
  motionKey,
  children,
}: {
  label: string;
  className?: string;
  motionKey?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className={className}>
      <legend className="text-sm font-medium text-heading">{label}</legend>
      <div key={motionKey} className={cn("mt-3 grid gap-3 sm:grid-cols-2", motionKey && "swap-in")}>
        {children}
      </div>
    </fieldset>
  );
}

function Tile({
  pressed,
  label,
  detail,
  onClick,
}: {
  pressed: boolean;
  label: string;
  detail?: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "cursor-pointer rounded-xl border px-3 py-3 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt",
        pressed ? "border-line-strong bg-surface-hover text-heading" : "border-line bg-obsidian text-body hover:border-line-strong",
      )}
    >
      <span className="block text-sm">{label}</span>
      {detail ? <span className="mt-1 block text-xs text-muted">{detail}</span> : null}
    </motion.button>
  );
}
