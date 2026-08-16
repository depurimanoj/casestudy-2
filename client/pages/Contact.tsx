import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "depurimanoj019@gmail.com",
    href: "mailto:depurimanoj019@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (216) 256-3059",
    href: "tel:+12162563059",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cleveland, OH",
    href: undefined,
  },
];

function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" />
    </svg>
  );
}

function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function BehanceMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M7.8 12.15c.9-.45 1.4-1.2 1.4-2.3 0-2.15-1.55-2.85-3.5-2.85H0v11h5.9c2.1 0 4.1-1 4.1-3.35 0-1.45-.7-2.15-2.2-2.5zM2.6 8.9h2.3c.9 0 1.7.25 1.7 1.3 0 .95-.65 1.35-1.55 1.35H2.6zm2.6 7.1H2.6v-2.9h2.7c1.1 0 1.85.45 1.85 1.45 0 1-.75 1.45-1.95 1.45zM24 12.4c0-2.75-1.6-5.1-4.55-5.1-2.9 0-4.85 2.2-4.85 5 0 2.9 1.85 5 4.9 5 1.85 0 3.35-.8 4.15-2.5h-2.15c-.3.55-1.05.9-1.9.9-1.3 0-2.15-.8-2.25-2.15H24c0-.05 0-.1 0-.15zm-6.6-1.35c.2-1.1.95-1.75 2-1.75s1.75.7 1.85 1.75zM13.8 4.9h6.5V6.4h-6.5z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/manoj-depuri/",
    Mark: LinkedinMark,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/manojdepuri",
    Mark: BehanceMark,
  },
  {
    label: "GitHub",
    href: "https://github.com/depurimanoj",
    Mark: GithubMark,
  },
];

export default function Contact() {
  return (
    <div>
      <section className="bg-black py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1160px] px-6 text-center sm:px-10 lg:px-[171px]">
          <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-purple">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Let&rsquo;s work together
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Have a project in mind, an open role, or just want to talk
            design? I&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-brand-tint py-16 sm:py-20">
        <div className="mx-auto max-w-[720px] px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {CONTACT_DETAILS.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center transition-transform hover:-translate-y-0.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-tint2 text-brand-navy">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xs font-bold uppercase tracking-wide text-brand-navy/60">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-black sm:text-base">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );
              return detail.href ? (
                <a key={detail.label} href={detail.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-14 text-center">
            <p className="font-display text-sm font-bold uppercase tracking-wide text-brand-navy/60">
              Find me elsewhere
            </p>
            <div className="mt-5 flex items-center justify-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white transition-opacity hover:opacity-80"
                >
                  <social.Mark />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
