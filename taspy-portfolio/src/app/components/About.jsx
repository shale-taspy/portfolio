import React from 'react';

const stats = [
  { value: '6+',  label: 'Core Technologies' },
  { value: '2',   label: 'Flagship Projects' },
  { value: '95%', label: 'Test Coverage' },
  { value: '3',   label: 'Languages Spoken' },
];

export default function About() {
  return (
    <>
      <section className="bg-[#0e1012] text-white py-24">
        <div className="max-w-5xl mx-auto px-8">

          {/* Top row — label + heading */}
          <div className="flex items-start gap-16 mb-12">
            <p className="text-white/30 text-sm tracking-[0.2em] uppercase font-mono font-semibold shrink-0 w-32 mt-2">
              / About Me
            </p>
            <h2 className="text-4xl font-semibold leading-snug tracking-wide">
              Clean code, solid architecture,<br />
              products that ship.
            </h2>
          </div>

          {/* Body text */}
          <div className="flex items-start gap-20 mb-16">
            <div className="shrink-0 w-32" />
            <div className="grid grid-cols-2 gap-12 flex-1">
              <p className="text-white/50 text-base leading-loose font-semibold tracking-wide">
                I&apos;m Shale Ahammed Taspy, a full-stack developer and
                Computer Science undergraduate at United International University.
                I focus on turning requirements into well-structured systems — typed
                frontends, documented APIs, and databases designed to grow.
              </p>
              <p className="text-white/50 text-base leading-loose font-semibold tracking-wide">
                I care about performance budgets, accessibility, and readable code
                that the next developer can maintain. Continuous learning keeps me
                close to the tooling — currently deepening my work with TypeScript,
                Next.js and PostgreSQL.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="flex gap-16 mb-12">
            <div className="shrink-0 w-32" />
            <hr className="border-[#2d3037] flex-1" />
          </div>

          {/* Stats */}
          <div className="flex gap-16">
            <div className="shrink-0 w-32" />
            <div className="grid grid-cols-4 gap-10 flex-1">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-2">
                  <span className="text-4xl font-semibold text-white">{value}</span>
                  <span className="text-white/30 text-sm tracking-[0.25em] uppercase font-mono font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <div className="w-full border-t border-[#2d3037]" />
    </>
  );
}
