"use client";

import type { ReactNode } from "react";
import { EstimatorSummary } from "@/components/estimate/estimator-summary";
import { useBrief } from "@/components/estimate/estimate-provider";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";
import {
  budgetOptions,
  moduleOptions,
  projectTypeOptions,
  scopeLabels,
  timelineOptions,
} from "@/lib/brief-copy";

export function EstimatorWidget() {
  const { brief, update, toggleModule } = useBrief();

  function setScope(value: number) {
    const scope = value <= 1 ? 1 : value >= 3 ? 3 : 2;
    update({ scope });
  }

  return (
    <section id="wycena" className="border-t border-line py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Wycena"
          title="Powiedz, co ma powstać."
          description="Zaznacz rodzaj strony i dodatki. Od razu zobaczysz orientacyjny czas i koszt, a ten sam wybór dołączy się do wiadomości."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
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
            <OptionGroup label="Co jeszcze" className="mt-8">
              {moduleOptions.map((option) => (
                <Tile
                  key={option.id}
                  pressed={brief.modules.includes(option.id)}
                  label={option.label}
                  onClick={() => toggleModule(option.id)}
                />
              ))}
            </OptionGroup>
            <div className="mt-8">
              <label htmlFor="zakres" className="text-sm font-medium text-heading">
                Zakres
              </label>
              <input
                id="zakres"
                type="range"
                min={1}
                max={3}
                step={1}
                value={brief.scope}
                aria-valuetext={scopeLabels[brief.scope]}
                onChange={(event) => setScope(Number(event.target.value))}
                className="mt-3 w-full"
              />
              <p className="mt-2 text-sm text-muted">{scopeLabels[brief.scope]}</p>
            </div>
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
          <EstimatorSummary brief={brief} />
        </div>
      </div>
    </section>
  );
}

function OptionGroup({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className={className}>
      <legend className="text-sm font-medium text-heading">{label}</legend>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">{children}</div>
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
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-xl border px-3 py-3 text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt",
        pressed
          ? "border-line-strong bg-surface-hover text-heading"
          : "border-line bg-obsidian text-body hover:border-line-strong",
      )}
    >
      <span className="block text-sm">{label}</span>
      {detail ? <span className="mt-1 block text-xs text-muted">{detail}</span> : null}
    </button>
  );
}
