import { MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ServedAreas() {
  // Major locations get their own dedicated page; smaller towns fall back to home.
  const towns = [
    { name: "Székesfehérvár", to: "/" },
    { name: "Velence", to: "/hol-dolgozunk/velence" },
    { name: "Gárdony", to: "/" },
    { name: "Mór", to: "/hol-dolgozunk/mor" },
    { name: "Bicske", to: "/hol-dolgozunk/bicske" },
    { name: "Martonvásár", to: "/hol-dolgozunk/martonvasar" },
    { name: "Dunaújváros", to: "/hol-dolgozunk/dunaujvaros" },
    { name: "Siófok", to: "/hol-dolgozunk/siofok" },
    { name: "Várpalota", to: "/hol-dolgozunk/varpalota" },
    { name: "Polgárdi", to: "/" },
    { name: "Sárbogárd", to: "/" },
    { name: "Enying", to: "/" },
  ];

  return (
    <section id="terulet" className="py-20 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            HOL DOLGOZOM?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
            Szolgáltatási <span className="text-primary">Terület</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Székesfehérváron és kb. 50 km-es körzetében vállalok klímaszerelést - az alábbi
            településeken gyakran dolgozom:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
          {towns.map((town, idx) => (
            <Link
              key={idx}
              to={town.to}
              className="inline-flex items-center gap-2 rounded-full bg-card border border-border/80 px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/60 hover:bg-secondary transition-all shadow-sm"
            >
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{town.name}</span>
            </Link>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground italic max-w-xl mx-auto">
          ...és a környező települések Székesfehérvár 50 km-es körzetében (telefonon egyeztetve).
        </p>
      </div>
    </section>
  );
}
