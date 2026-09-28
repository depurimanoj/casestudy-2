import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="sticky top-0 z-50 bg-black px-6 py-4">
        <Link
          to="/"
          className="font-display text-sm font-bold tracking-wide text-white opacity-90 transition hover:opacity-100"
        >
          ← Back to Home
        </Link>
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
