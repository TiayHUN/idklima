import { Phone, Mail, ShieldCheck } from "lucide-react";

// Sticky CTA bar visible on mobile at the bottom of the screen.
// Telefon (elsődleges) + e-mail (másodlagos) — űrlap nélkül.
export function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur-md border-t border-border px-4 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 mb-1.5">
        <ShieldCheck className="h-3 w-3 text-primary shrink-0" />
        <span className="text-[10px] font-medium text-muted-foreground">
          100% elégedettségi garancia · válasz 48 órán belül
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <a
          href="tel:+36208051772"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25"
        >
          <Phone className="h-4 w-4 text-primary-foreground" />
          <span>Hívás most</span>
        </a>
        <a
          href="mailto:ivanska012@gmail.com"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary px-4 py-3 text-sm font-semibold text-foreground"
        >
          <Mail className="h-4 w-4 text-primary" />
          <span>E-mail</span>
        </a>
      </div>
    </div>
  );
}
