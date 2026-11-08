import { Phone, Mail, ShieldCheck } from "lucide-react";

// Reusable mid-page CTA banner with trust micro-elements.
// Telefon (elsődleges) + e-mail (másodlagos) — űrlap nélkül.
export function CTABanner() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-card via-secondary to-card border border-primary/30 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">Kezdjük el az egyeztetést!</h3>
            <p className="text-muted-foreground text-sm">
              Hívj most, vagy írj e-mailt — 100% elégedettségi garanciával vállalom a munkát.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 pt-1 text-xs font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> 100% garancia
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Válasz 48 órán belül
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Több száz sikeres projekt
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="tel:+36208051772"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              <Phone className="h-4 w-4" />
              <span>Hívás most</span>
            </a>
            <a
              href="mailto:ivanska012@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>E-mail küldése</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
