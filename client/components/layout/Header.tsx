import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "My Works", to: "https://manoj-portfolio-ruby.vercel.app/#case-studies", external: true },
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-[1512px] items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="font-display text-sm font-bold tracking-wide text-white"
        >
          Manoj Depuri
        </Link>
        <nav className="flex items-center gap-6 sm:gap-10">
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.to}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-display text-sm font-bold tracking-wide text-white transition opacity-90`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`font-display text-sm font-bold tracking-wide text-white transition ${
                  location.pathname === link.to ? "opacity-100" : "opacity-90"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
