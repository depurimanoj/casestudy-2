import { Link } from "react-router-dom";

const SKILL_GROUPS = [
  {
    title: "Design & Prototyping",
    items: [
      "Figma (Design Systems, Auto Layout, Variables)",
      "Adobe XD",
      "Framer",
      "Webflow",
      "Anima",
      "Interaction & Visual Design",
      "Responsive Design",
    ],
  },
  {
    title: "UX Research & Testing",
    items: [
      "User Research & Interviews",
      "Usability Testing",
      "A/B Testing",
      "Heuristic Evaluation",
      "Competitive Analysis",
      "Persona Development",
      "Journey Mapping",
    ],
  },
  {
    title: "UX Foundations",
    items: [
      "Wireframing & User Flows",
      "Information Architecture",
      "Design Systems",
      "Accessibility (WCAG 2.2)",
      "Human-Centered Design",
      "Design Thinking",
    ],
  },
  {
    title: "Technical",
    items: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React",
      "REST APIs",
      "Git & GitHub",
      "Design Handoff",
    ],
  },
];

const QUICK_FACTS = [
  { label: "Based in", value: "Cleveland, OH" },
  { label: "Experience", value: "3+ Years" },
  { label: "Focus", value: "Product / UX / UI Design" },
  { label: "Currently", value: "Product Designer @ Hubspot" },
];

export default function About() {
  return (
    <div>
      {/* Intro */}
      <section className="bg-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1160px] px-6 sm:px-10 lg:px-[171px]">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-purple">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Manoj Depuri
          </h1>
          <p className="mt-4 max-w-2xl font-display text-xl font-bold text-white/90 sm:text-2xl">
            Product / UX / UI Designer
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            UI/UX Designer and Product Designer with 3+ years of experience
            designing web and mobile applications from research to
            high-fidelity prototypes. I focus on user research, wireframing,
            prototyping, design systems, usability testing, responsive
            design, and WCAG accessibility &mdash; collaborating with Agile
            teams to deliver scalable, user-centered products aligned with
            business and user goals.
          </p>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-brand-tint py-12 sm:py-14">
        <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-6 px-6 sm:px-10 lg:grid-cols-4 lg:px-[171px]">
          {QUICK_FACTS.map((fact) => (
            <div key={fact.label}>
              <p className="font-display text-xs font-bold uppercase tracking-wide text-brand-navy/70">
                {fact.label}
              </p>
              <p className="mt-2 font-display text-lg font-bold text-brand-navy sm:text-xl">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6 sm:px-10 lg:px-[171px]">
          <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            Skills &amp; Tools
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl bg-brand-tint2 p-6 sm:p-8"
              >
                <h3 className="font-display text-lg font-bold text-brand-navy">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-black/75 sm:text-base">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-6 px-6 text-center sm:px-10 lg:px-[171px]">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Want the full picture?
          </h2>
          <p className="max-w-xl text-base text-white/90 sm:text-lg">
            See detailed experience, education, and a downloadable copy of my
            resume, or reach out directly to talk about a project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/resume"
              className="rounded-full bg-white px-7 py-3 font-display text-sm font-bold text-brand-navy transition-opacity hover:opacity-90"
            >
              View Resume
            </Link>
            <Link
              to="/contact"
              className="rounded-full border-2 border-white px-7 py-3 font-display text-sm font-bold text-white transition-opacity hover:opacity-80"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
