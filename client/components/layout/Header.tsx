import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-[1512px] items-center justify-between px-6 py-5 sm:px-10 lg:px-[130px]">
        <Link
          to="/"
          className="font-display text-sm font-bold tracking-wide text-white"
        >
          Manoj Depuri
        </Link>
        <nav className="flex items-center gap-6 sm:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-display text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-70 ${
                location.pathname === link.to ? "opacity-100" : "opacity-90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
