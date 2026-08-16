import { Download } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Product Designer",
    company: "Hubspot",
    period: "Mar 2026 – Present",
    location: "USA",
    bullets: [
      "Led product design for SaaS web and mobile applications, conducting user research, competitive analysis, information architecture, user flows, wireframing, prototyping, and high-fidelity UI design using Figma, Adobe XD, Framer, and FigJam.",
      "Designed and maintained scalable design systems, reusable components, and responsive interfaces with Figma Auto Layout, Webflow, and Anima, ensuring WCAG 2.2 compliance and seamless developer handoff.",
      "Validated design decisions through usability testing, A/B testing, accessibility audits, and Google Analytics, leveraging data-driven insights to improve engagement, task completion, and usability.",
      "Collaborated with Product Managers, Engineers, and Agile cross-functional teams, applying HTML, CSS, JavaScript, React, REST APIs, and Git/GitHub knowledge to deliver user-centered solutions.",
    ],
  },
  {
    role: "Website Design and Support Assistant",
    company: "Cleveland State University",
    period: "Jan 2025 – May 2025",
    location: "USA",
    bullets: [
      "Collaborated with university stakeholders, designers, and developers to enhance website usability and improve project delivery efficiency by 20%.",
      "Designed and enhanced responsive web pages using Figma, conducting user research, wireframing, prototyping, and UI improvements.",
      "Streamlined design-to-development handoffs by implementing Figma and Anima workflows, ensuring pixel-perfect, cross-browser, mobile-responsive implementation.",
      "Built and maintained reusable UI components and standardized design assets, improving design consistency by 40%.",
    ],
  },
  {
    role: "UI/UX Developer",
    company: "Quality Excellence",
    period: "Aug 2022 – Jul 2024",
    location: "Hyderabad, India",
    bullets: [
      "Led end-to-end UI/UX for responsive SaaS web and mobile apps — user research, IA, flows, wireframes, prototypes, and high-fidelity UI using Figma, Adobe XD, Framer, and FigJam.",
      "Designed scalable design systems and responsive components in Figma, Webflow, and Anima, cutting design inconsistencies by 30%.",
      "Designed dashboard and workflow UIs for IT, healthcare, education, and transportation, boosting engagement and efficiency by 25%.",
      "Championed Human-Centered Design and Design Thinking, boosting user satisfaction by 35%.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "Cleveland State University",
    period: "Aug 2024 – May 2026",
    location: "USA",
  },
  {
    degree: "Bachelor of Technology",
    school: "Marri Laxman Reddy Institute of Technology & Management",
    period: "Jul 2019 – Aug 2023",
    location: "India",
  },
];

export default function Resume() {
  return (
    <div>
      {/* Header */}
      <section className="bg-black py-16 sm:py-20">
        <div className="mx-auto flex max-w-[1160px] flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center sm:px-10 lg:px-[171px]">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-purple">
              Resume
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Manoj Depuri
            </h1>
            <p className="mt-2 font-display text-lg font-bold text-white/80">
              Product / UX / UI Designer
            </p>
          </div>
          <a
            href="/Manoj-Depuri-Resume.pdf"
            download
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-brand-blue px-7 py-3 font-display text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6 sm:px-10 lg:px-[171px]">
          <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            Professional Experience
          </h2>
          <div className="mt-10 space-y-12">
            {EXPERIENCE.map((job) => (
              <div
                key={job.role + job.company}
                className="border-l-2 border-brand-tint2 pl-6 sm:pl-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-lg font-bold text-brand-navy sm:text-xl">
                    {job.role}, {job.company}
                  </h3>
                  <span className="text-sm font-semibold text-black/60">
                    {job.period} &middot; {job.location}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-black/75 sm:text-base">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-blue" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project highlight */}
      <section className="bg-brand-tint2 py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6 sm:px-10 lg:px-[171px]">
          <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            Independent Project
          </h2>
          <div className="mt-8 rounded-2xl bg-white p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-brand-navy sm:text-xl">
              RaceTrack Connect &mdash; Product Designer
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-black/75 sm:text-base">
              Single-handedly designed a full-scale motorsport booking
              ecosystem &mdash; reservations, insurance, rentals, social
              invites &mdash; from research to 40+ production-ready screens,
              demonstrating true 0-to-1 product design ownership.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6 sm:px-10 lg:px-[171px]">
          <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            Education
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {EDUCATION.map((ed) => (
              <div
                key={ed.degree}
                className="rounded-2xl bg-brand-tint p-6 sm:p-8"
              >
                <h3 className="font-display text-base font-bold text-brand-navy sm:text-lg">
                  {ed.degree}
                </h3>
                <p className="mt-2 text-sm text-black/75 sm:text-base">
                  {ed.school}
                </p>
                <p className="mt-1 text-sm font-semibold text-black/50">
                  {ed.period} &middot; {ed.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
