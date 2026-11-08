import { Phone, Mail, ShieldCheck, Clock, Star, Award } from "lucide-react";

// Telefon (elsődleges) + e-mail (másodlagos) CTA blokk — űrlap nélkül.
// Mindenhol ezt használjuk a LeadForm helyett: a fő konverziós cél a
// telefonhívás, a másodlagos az e-mail. Mellette bizalmi mikroelemek.
const PHONE_DISPLAY = "+36 20 805 1772";
const PHONE_HREF = "tel:+36208051772";
const EMAIL_ADDR = "ivanska012@gmail.com";
const EMAIL_HREF = `mailto:${EMAIL_ADDR}`;

type ContactCTAProps = {
  title?: string;
  subtitle?: string;
  service?: string;
};

export function ContactCTA({ title, subtitle, service }: ContactCTAProps) {
  return (
    <div className="space-y-7 text-center">
      <div className="space-y-3">
        <h3 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
          {title ?? "Vegyük fel a kapcsolatot"}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {subtitle ??
            "Hívj fel, és személyesen beszéljünk a klímás munkáról — vagy írj nekem e-mailt, és hamarosan válaszolok. 100% elégedettségi garancia."}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <Phone className="h-5 w-5" />
          <span>Hívás most: {PHONE_DISPLAY}</span>
        </a>
        <a
          href={EMAIL_HREF}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-secondary/80 px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary hover:border-primary transition-all"
        >
          <Mail className="h-5 w-5 text-primary" />
          <span>E-mail küldése</span>
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" /> 100% garancia
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
          <Clock className="h-4 w-4 text-primary" /> Válasz 48 órán belül
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
          <Star className="h-4 w-4 text-amber-400 fill-amber-400" /> 5.0 Google
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-4 py-2 text-xs font-semibold text-muted-foreground">
          <Award className="h-4 w-4 text-primary" /> Több száz projekt
        </span>
      </div>

      {service && (
        <p className="text-xs text-muted-foreground">
          {service} témában egyeztetünk — hívj vagy írj, és küldök egy kötelezettség nélküli
          ajánlatot.
        </p>
      )}
    </div>
  );
}
