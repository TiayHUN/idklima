import { useState } from "react";
import {
  MessageCircle,
  X,
  Phone,
  Mail,
  ShieldCheck,
  Star,
  Clock,
  Snowflake,
  Wrench,
  Sparkles,
  Settings,
  type LucideIcon,
} from "lucide-react";

// Self-contained "gyorsgomb" widget.
// Nem AI chatbot és nem űrlap — csak annyi: a látogató egy kattintással
// kiválasztja, milyen szolgáltatás kell, utána pedig a fő célt (telefonhívás)
// és a másodlagos célt (e-mail) gombbal elindíthatja. Nincs szöveges
// mező — a kiválasztott szolgáltatás bekerül az e-mail tárgyába.
// Client-only: hydration után jelenik meg az error boundary mögött.

const PHONE_DISPLAY = "+36 20 805 1772";
const PHONE_HREF = "tel:+36208051772";
const EMAIL_ADDR = "ivanska012@gmail.com";

const serviceOptions: { label: string; icon: LucideIcon; hint: string }[] = [
  { label: "Klímatelepítés", icon: Snowflake, hint: "Új klíma beszerelése" },
  { label: "Klímakarbantartás", icon: Wrench, hint: "Szerviz, átellenőrzés" },
  { label: "Klímatisztítás", icon: Sparkles, hint: "Baktériummentesítés" },
  { label: "Egyéb / javítás", icon: Settings, hint: "Hibás klíma javítása" },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const [service, setService] = useState("");

  const emailHref = (() => {
    const subject = `Ajánlatkérés${service ? ` – ${service}` : ""}`;
    return `mailto:${EMAIL_ADDR}?subject=${encodeURIComponent(subject)}`;
  })();

  const closePanel = () => setOpen(false);

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => {
          if (open) closePanel();
          else {
            setOpen(true);
            setShowTeaser(false);
          }
        }}
        aria-label={open ? "Panel bezárása" : "Kapcsolat — hívás vagy e-mail"}
        className="fixed bottom-24 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/30 transition-transform hover:scale-105 active:scale-95 lg:bottom-6 lg:right-6"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Teaser bubble (only when closed) */}
      {!open && showTeaser && (
        <div className="fixed bottom-24 right-20 z-50 hidden max-w-[260px] animate-[fadeIn_0.2s_ease] rounded-2xl rounded-br-sm border border-border bg-card p-4 text-sm text-foreground shadow-2xl lg:bottom-6 lg:right-24 lg:block">
          <button
            onClick={() => setShowTeaser(false)}
            aria-label="Teaser bezárása"
            className="absolute -top-2 -left-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3" />
          </button>
          <p className="font-semibold leading-snug">Klímás munka kell?</p>
          <p className="mt-1 text-muted-foreground">Hívj fel vagy írj e-mailt — egy kattintás!</p>
          <button
            onClick={() => {
              setOpen(true);
              setShowTeaser(false);
            }}
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
          >
            Hívás vagy e-mail <Phone className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="ID Klíma — hívás vagy e-mail"
          className="fixed bottom-[8.5rem] right-4 z-50 flex w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl lg:bottom-28 lg:right-6"
          style={{ maxHeight: "min(640px, calc(100dvh - 9rem))" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary/40 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight">ID Klíma</p>
                <p className="text-xs text-muted-foreground">Hívj vagy írj — gyors válasz</p>
              </div>
            </div>
            <button
              onClick={closePanel}
              aria-label="Bezárás"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
            {/* Trust row (always visible near the CTA) */}
            <div className="flex flex-wrap gap-1.5 border-b border-border/60 px-4 py-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2 py-1 text-[11px] font-medium text-muted-foreground">
                <ShieldCheck className="h-3 w-3 text-primary" /> 100% garancia
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2 py-1 text-[11px] font-medium text-muted-foreground">
                <Star className="h-3 w-3 text-amber-400 fill-amber-400" /> 5.0 Google
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2 py-1 text-[11px] font-medium text-muted-foreground">
                <Clock className="h-3 w-3 text-primary" /> gyors kiszállás
              </span>
            </div>

            {/* Primary phone CTA (conversion goal #1) */}
            <a
              href={PHONE_HREF}
              className="mx-4 mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
            >
              <Phone className="h-4 w-4" /> Hívás most: {PHONE_DISPLAY}
            </a>

            {/* Secondary email CTA (conversion goal #2) */}
            <a
              href={emailHref}
              className="mx-4 mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 bg-secondary/60 px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary hover:border-primary transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" /> E-mail: {EMAIL_ADDR}
            </a>

            {/* Service selection — quick buttons only, no text input */}
            <div className="flex-1 space-y-3 p-4 pt-4">
              <p className="text-sm font-semibold text-foreground">Miben segíthetek?</p>
              <p className="text-xs text-muted-foreground">
                Válassz egyet — utána hívj fel vagy írj e-mailt.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {serviceOptions.map((opt) => {
                  const href = `mailto:${EMAIL_ADDR}?subject=${encodeURIComponent(`Ajánlatkérés – ${opt.label}`)}`;
                  return (
                    <a
                      key={opt.label}
                      href={href}
                      onClick={() => setService(opt.label)}
                      className="group flex flex-col items-center gap-1.5 rounded-xl border border-border bg-secondary/40 px-3 py-3 text-center transition-colors hover:border-primary/40 hover:bg-secondary"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                        <opt.icon className="h-5 w-5" />
                      </span>
                      <span className="block text-sm font-semibold leading-tight text-foreground">
                        {opt.label}
                      </span>
                      <span className="block text-[11px] leading-tight text-muted-foreground">
                        {opt.hint}
                      </span>
                    </a>
                  );
                })}
              </div>
              <p className="text-center text-xs text-muted-foreground pt-1">
                Kattints egy gombra — megnyilik az e-mail a szolgáltatással a tárgyban. Vagy hívd
                fel:{" "}
                <a href={PHONE_HREF} className="font-semibold text-primary hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
