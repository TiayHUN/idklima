import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { navConfig } from "../lib/site-data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="https://vibe.filesafe.space/1793360822455392081/attachments/a69ad1bc-0262-4f43-9e8b-518018d2a2ef.jpg"
            alt="ID Klíma logó"
            className="h-11 w-11 object-contain rounded-xl bg-white p-0.5 border border-border/80 shadow-md group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-foreground flex items-center gap-1.5">
              ID <span className="text-primary">KLÍMA</span>
            </span>
            <span className="text-xs text-muted-foreground font-medium hidden sm:inline-block">
              Klímatelepítés & Karbantartás
            </span>
          </div>
        </Link>

        {/* Desktop Navigation — CSS-only dropdowns (group-hover) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          <Link
            to="/"
            activeProps={{ className: "text-primary" }}
            className="hover:text-primary transition-colors"
          >
            Kezdőlap
          </Link>

          {/* Services dropdown — pure CSS */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Szolgáltatások
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 translate-y-2 absolute top-full left-0 pt-2 w-64 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
              <div className="rounded-xl bg-card border border-border shadow-2xl p-2">
                {navConfig.services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Locations dropdown — pure CSS */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              Hol dolgozunk?
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible opacity-0 translate-y-2 absolute top-full left-0 pt-2 w-56 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
              <div className="rounded-xl bg-card border border-border shadow-2xl p-2">
                {navConfig.locations.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/arak"
            activeProps={{ className: "text-primary" }}
            className="hover:text-primary transition-colors"
          >
            Árak
          </Link>
          <Link
            to="/kapcsolat"
            activeProps={{ className: "text-primary" }}
            className="hover:text-primary transition-colors"
          >
            Kapcsolat
          </Link>
          <Link
            to="/rolunk"
            activeProps={{ className: "text-primary" }}
            className="hover:text-primary transition-colors"
          >
            Rólunk
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+36208051772"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Phone className="h-4 w-4" />
            <span>+36 20 805 1772</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Menü megnyitása"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu — CSS-only dropdowns via <details> */}
      {isOpen && (
        <div className="lg:hidden border-b border-border bg-card px-6 py-6 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-1 font-medium text-muted-foreground">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-primary transition-colors"
            >
              Kezdőlap
            </Link>

            {/* Services — <details> no JS */}
            <details className="group/details py-2">
              <summary className="flex items-center justify-between w-full cursor-pointer hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                Szolgáltatások
                <ChevronDown className="h-4 w-4 transition-transform group-open/details:rotate-180" />
              </summary>
              <div className="mt-2 ml-3 space-y-1 border-l border-border/60 pl-3">
                {navConfig.services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-1.5 text-sm hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </details>

            {/* Locations — <details> no JS */}
            <details className="group/details py-2">
              <summary className="flex items-center justify-between w-full cursor-pointer hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                Hol dolgozunk?
                <ChevronDown className="h-4 w-4 transition-transform group-open/details:rotate-180" />
              </summary>
              <div className="mt-2 ml-3 space-y-1 border-l border-border/60 pl-3">
                {navConfig.locations.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-1.5 text-sm hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              to="/arak"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-primary transition-colors"
            >
              Árak
            </Link>
            <Link
              to="/kapcsolat"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-primary transition-colors"
            >
              Kapcsolat
            </Link>
            <Link
              to="/rolunk"
              onClick={() => setIsOpen(false)}
              className="py-2 hover:text-primary transition-colors"
            >
              Rólunk
            </Link>
          </nav>

          <div className="pt-2">
            <a
              href="tel:+36208051772"
              className="flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground shadow-md"
            >
              <Phone className="h-4 w-4" />
              <span>Hívás most: +36 20 805 1772</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
