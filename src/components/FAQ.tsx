import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { faqJsonLd } from "../lib/seo";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Question-form H3 headings + concise first-sentence answers for AEO.
  // Answers link to the relevant service/area page where deeper info lives.
  const faqs = [
    {
      q: "Hol vállal az ID Klíma klímaszerelést?",
      a: (
        <>
          Polgárdi telephelyről vállalok klímaszerelést Székesfehérváron és annak 50 km-es
          körzetében. A fő kiszolgált települések:{" "}
          <Link to="/hol-dolgozunk/velence" className="text-primary font-semibold hover:underline">
            Velence
          </Link>
          ,{" "}
          <Link to="/hol-dolgozunk/mor" className="text-primary font-semibold hover:underline">
            Mór
          </Link>
          ,{" "}
          <Link to="/hol-dolgozunk/bicske" className="text-primary font-semibold hover:underline">
            Bicske
          </Link>
          ,{" "}
          <Link
            to="/hol-dolgozunk/dunaujvaros"
            className="text-primary font-semibold hover:underline"
          >
            Dunaújváros
          </Link>{" "}
          és{" "}
          <Link
            to="/hol-dolgozunk/martonvasar"
            className="text-primary font-semibold hover:underline"
          >
            Martonvásár
          </Link>
          . A pontos kiszállásról egyeztessünk telefonon.
        </>
      ),
    },
    {
      q: "Milyen klímás munkákat vállalsz?",
      a: (
        <>
          Három fő szolgáltatást vállalok lakossági ügyfeleknek:{" "}
          <Link
            to="/szolgaltatasok/klimatelepites"
            className="text-primary font-semibold hover:underline"
          >
            klímatelepítést
          </Link>
          ,{" "}
          <Link
            to="/szolgaltatasok/klimakarbantartas"
            className="text-primary font-semibold hover:underline"
          >
            klímakarbantartást
          </Link>{" "}
          és{" "}
          <Link
            to="/szolgaltatasok/klimatisztitas"
            className="text-primary font-semibold hover:underline"
          >
            klímatisztítást
          </Link>
          . A Midea és MDV készülékek beszerzéséről és telepítéséről is gondoskodom.
        </>
      ),
    },
    {
      q: "Van garancia a munkára?",
      a: "Igen, 100% elégedettségi garanciát vállalok: ha bármi nem stimmel az elvégzett munkával, visszajövök és javítom. A klímaberendezés gyári garanciáját a gyártó biztosítja.",
    },
    {
      q: "Hogyan kérhetek árajánlatot?",
      a: (
        <>
          A leggyorsabb, ha felhívsz a +36 20 805 1772 számon – a fő célom, hogy személyesen
          beszéljünk. Vagy töltsd ki az{" "}
          <a href="#ajanlatkeres" className="text-primary font-semibold hover:underline">
            ajánlatkérő űrlapot
          </a>{" "}
          a településeddel és a kért szolgáltatással, és visszahívlak.
        </>
      ),
    },
    {
      q: "Mikor lehet időpontot egyeztetni?",
      a: "Minden nap 0–24 óráig várom a megkereséseket. A kiszállás gyakran 48 órán belül megoldható – a szezonban érdemes azonban hetekkel előre foglalni.",
    },
    {
      q: "Mennyibe kerül a klímaszerelés?",
      a: (
        <>
          A klímatelepítés és karbantartás ára a készülék típusától és a beépítés nehézségétől függ.
          A{" "}
          <Link to="/arak" className="text-primary font-semibold hover:underline">
            Midea és MDV készülékek bruttó árait megnézheted az árak oldalon
          </Link>
          , a szerelési díjat pedig a felmérés alapján kedvezően alakítom.
        </>
      ),
    },
  ];

  // Plain-text version for JSON-LD (links stripped).
  const faqsText = [
    {
      q: "Hol vállal az ID Klíma klímaszerelést?",
      a: "Polgárdi telephelyről vállalok klímaszerelést Székesfehérváron és annak 50 km-es körzetében – Velencén, Móron, Bicskén, Dunaújvárosban, Martonvásáron és a környező településeken. A pontos kiszállásról egyeztessünk telefonon.",
    },
    {
      q: "Milyen klímás munkákat vállalsz?",
      a: "Klímatelepítést (új split klímák kiépítését), szezonális klímakarbantartást és vegyszeres klímatisztítást lakossági ügyfeleknek. A Midea és MDV készülékek beszerzéséről és telepítéséről is gondoskodom.",
    },
    {
      q: "Van garancia a munkára?",
      a: "Igen, 100% elégedettségi garanciát vállalok: ha bármi nem stimmel az elvégzett munkával, visszajövök és javítom. A klímaberendezés gyári garanciáját a gyártó biztosítja.",
    },
    {
      q: "Hogyan kérhetek árajánlatot?",
      a: "A leggyorsabb, ha felhívsz a +36 20 805 1772 számon. Vagy töltsd ki az ajánlatkérő űrlapot a településeddel és a kért szolgáltatással, és visszahívlak.",
    },
    {
      q: "Mikor lehet időpontot egyeztetni?",
      a: "Minden nap 0–24 óráig várom a megkereséseket. A kiszállás gyakran 48 órán belül megoldható – a szezonban érdemes hetekkel előre foglalni.",
    },
    {
      q: "Mennyibe kerül a klímaszerelés?",
      a: "A klímatelepítés és karbantartás ára a készülék típusától és a beépítés nehézségétől függ. A Midea és MDV készülékek bruttó árait megnézheted az árak oldalon, a szerelési díjat a felmérés alapján alakítom.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-card/30 border-t border-border/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqsText)) }}
      />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full border border-primary/20">
            KÉRDÉSEK ÉS VÁLASZOK
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight pt-2">
            Gyakori <span className="text-primary">kérdések</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Minden fontos tudnivaló a klímaszerelési munkákról, a kiszállási területről és a
            kapcsolatfelvételről.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-card border border-border/80 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-foreground text-lg hover:text-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground text-lg">{faq.q}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-muted-foreground text-sm leading-relaxed border-t border-border/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
