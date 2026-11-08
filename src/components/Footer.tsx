import { Phone, Mail, Clock, MapPin, Snowflake, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { navConfig } from "../lib/site-data";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-24 lg:pb-12 text-muted-foreground text-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="https://vibe.filesafe.space/1793360822455392081/attachments/a69ad1bc-0262-4f43-9e8b-518018d2a2ef.jpg"
                alt="ID Klíma logó"
                className="h-10 w-10 object-contain rounded-xl bg-white p-0.5 border border-border/80 shadow-sm"
              />
              <span className="text-xl font-bold text-foreground">
                ID <span className="text-primary">KLÍMA</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Klímaszerelés lakossági ügyfeleknek Székesfehérváron és 50 km-es körzetében.
              Klímatelepítés, klímakarbantartás és klímatisztítás megbízható, precíz és tiszta
              munkavégzéssel, gyors kiszállással és 100% elégedettségi garanciával.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="tel:+36208051772"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                Hívás
              </a>
              <Link
                to="/kapcsolat"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary/80 transition-colors"
              >
                Kapcsolat
              </Link>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-foreground font-bold text-base mb-4">Szolgáltatások</h4>
            <ul className="space-y-2.5 text-xs">
              {navConfig.services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="hover:text-primary transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/arak" className="hover:text-primary transition-colors">
                  Árak & márkák
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Areas */}
          <div>
            <h4 className="text-foreground font-bold text-base mb-4">Hol dolgozunk?</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Székesfehérvár
                </Link>
              </li>
              {navConfig.locations.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-foreground font-bold text-base mb-4">Kapcsolat</h4>
            <ul className="space-y-3 text-xs">
              <li className="font-bold text-foreground">Iván Dániel</li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+36208051772" className="hover:text-primary transition-colors">
                  +36 20 805 1772
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a
                  href="mailto:ivanska012@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  ivanska012@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Minden nap: 0–24 óra</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="font-bold text-foreground">
                  Polgárdi, 8154 – Székesfehérvár és 50 km-es körzete
                </span>
              </li>
              <li>
                <a
                  href="https://share.google/rXRiO6bfqteLT4cq3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  5.0 Google értékelés
                </a>
              </li>
            </ul>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link to="/rolunk" className="hover:text-primary transition-colors">
                  Rólunk
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-[11px] text-muted-foreground">Adószám: 92338441-1-27</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 text-center text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 ID Klíma. Minden jog fenntartva.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Adatvédelmi nyilatkozat
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              ÁSZF
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
