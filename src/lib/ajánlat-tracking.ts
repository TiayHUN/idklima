// Form tracking helper for the ID Klíma ajánlatkérő form.
// Wired to the platform's form_tracking integration.
//
// A beküldés visszatér egy { ok, error } eredménnyel, hogy a formok csak
// tényleges CRM-sikernél mutassanak sikert, hiba esetén viszont megőrizzék
// a beírt adatokat és hibaüzenetet jelenítsenek meg.

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File | File[]; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const TRACKING_ID = "tk_68258d21a0bf4b27be53d5ac8dae86bc";
const LOCATION_ID = "t3J9uij5zBurZomoflZn";
const PROJECT_ID = "1793360822455392081";
const FORM_ID = "id-klima-ajanlatkeres";
const FORM_NAME = "ID Klíma ajánlatkérés";
const SOURCE_LABEL = "ID Klíma weboldal ajánlatkérés";
const SOURCE_LABEL_HIVAS = "ID Klíma weboldal hívás gomb kattintás";

// Regisztrált egyéni mezők (a register_custom_field eszközből kapott ID-k).
const CUSTOM_FIELD_IDS = {
  service: "5NyOwomBau0vJIWEBr9O", // Szolgáltatás
  location: "YKvtQzO4cJ0uus3lW8Rd", // Település / irányítószám
  timeframe: "kn7mUxWpWkhvzMg6tV8q", // Időpontigény
  details: "VSGRd51lhHgKWN7BWqU3", // Igények leírása
  consent: "QBx3z2QW3RUSDrSnNsBK", // Adatkezelési hozzájárulás (CHECKBOX)
  source: "AB4msoEcpvBoKSV0ygTo", // Forrás (ezt most regisztráltuk)
  fileUpload: "wEdUzPPschkVi0Xa93R9", // Helyszíni fotó
} as const;

export const postTrackingEvent = async (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
): Promise<{
  ok: boolean;
  status: number;
  parsed: { status?: string; message?: string } | null;
}> => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const fileInput = field.file;
    if (!fileInput) continue;
    const fileList = Array.isArray(fileInput) ? fileInput : [fileInput];
    if (fileList.length === 0) continue;
    const first = fileList[0];
    if (!first) continue;
    if (first.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: first.name,
      size: first.size,
      type: first.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    fileList.forEach((file) => body.append(key, file, file.name));
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  const res = await fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
    keepalive: true,
  });

  // A CRM 200-as státusszal válaszol, de a body tartalmazhat hibaüzenetet.
  // Olvassuk ki a válasz body-t és ellenőrizzük a status mezőt.
  let parsed: { status?: string; message?: string } | null = null;
  try {
    parsed = await res.json();
  } catch {
    /* nem JSON válasz — nem kritikus */
  }
  const ok = res.ok && parsed?.status !== "error";
  return { ok, status: res.status, parsed };
};

// Reuse the published site's analytics session so the submission joins the
// visit's page views; fall back to a fresh id when the cookie is absent or
// unreadable (document.cookie throws in a sandboxed iframe).
const getTrackingSessionId = () => {
  try {
    const sid = document.cookie.match(/(?:^|;\s*)__vibe_sid=([0-9a-f-]{36})(?:;|$)/)?.[1];
    if (sid) return sid;
  } catch {}
  return crypto.randomUUID();
};

export type AjánlatFormValues = {
  service: string;
  location: string;
  timeframe: string;
  name: string;
  phone: string;
  email: string;
  details: string;
  consent: boolean;
};

export type SubmitResult = { ok: true } | { ok: false; error: string };

// Magyar mobil/vonal telefonszám ellenőrzés. Elfogad +36 vagy 06 előtagot,
// és a 20/30/70 mobilszámokat valamint a 1 (Budapest) és 2x/3x/4x/5x/6x/8x/9x
// körzeteket. Szóköz, zárójel, kötőjel eltűrő.
const HU_PHONE_RE = /^(\+36|06)\s?[0-9()\-\s]{7,}$/i;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateAjánlatValues = (values: AjánlatFormValues): string | null => {
  if (!values.name.trim()) return "Kérjük, add meg a neved!";
  if (!values.phone.trim()) return "Kérjük, add meg a telefonszámod!";
  if (!HU_PHONE_RE.test(values.phone.trim()))
    return "Érvénytelen telefonszám. Formátum: +36 20 123 4567 vagy 06 30 123 4567.";
  if (!values.email.trim()) return "Kérjük, add meg az e-mail címed!";
  if (!EMAIL_RE.test(values.email.trim())) return "Érvénytelen e-mail cím, pl. nev@pelda.hu.";
  if (!values.consent) return "Az adatkezelési hozzájárulás szükséges az ajánlatkéréshez.";
  return null;
};

const normalizePhone = (phone: string) => {
  const digits = phone.replace(/[^\d+]/g, "");
  if (digits.startsWith("+36")) return digits;
  if (digits.startsWith("06")) return `+36${digits.slice(2)}`;
  return digits;
};

export const submitAjánlatTracking = async (
  values: AjánlatFormValues,
  files: File[],
): Promise<SubmitResult> => {
  const [firstName, ...rest] = values.name.trim().split(/\s+/);
  const lastName = rest.join(" ");

  // A CRM Analytics -> Form Submissions nézet a standard "form_submission"
  // eseménytípust listázza (az "external_form_submission" a külső követési
  // pipeline-ba kerül). Mindkét eseményt elküldjük, hogy a Form Submissions
  // táblázatban is azonnal megjelenjen, és a külső eseménykövető workflow-k is lefussanak.
  const basePayload = {
    timestamp: Date.now(),
    formId: FORM_ID,
    formData: {
      first_name: firstName,
      last_name: lastName,
      email: values.email.trim(),
      phone: normalizePhone(values.phone),
    },
    formLabels: {
      first_name: "Keresztnév",
      last_name: "Vezetéknév",
      email: "E-mail-cím",
      phone: "Telefonszám",
    },
    // A CRM "external_form_submission" sémája kötelezően `pageUrl`-t vár,
    // különben "pageUrl is required" hibával eldobja az eseményt, és nem
    // jön létre contact. A teljes URL-t ide tesszük; `url`/`path`/`title`
    // az analitikai egyeztetéshez megmarad.
    pageUrl: window.location.href,
    url: window.location.href,
    title: document.title,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    trackingId: TRACKING_ID,
    locationId: LOCATION_ID,
    projectId: PROJECT_ID,
    sessionId: getTrackingSessionId(),
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
      source: "ai_studio",
      projectId: PROJECT_ID,
      formName: FORM_NAME,
    },
  };

  const fileFields: Record<string, TrackingFileField> = {};
  if (files.length > 0) {
    fileFields[CUSTOM_FIELD_IDS.fileUpload] = {
      file: files,
      label: "Helyszíni fotó",
    };
  }

  const customFields = {
    [CUSTOM_FIELD_IDS.service]: { value: values.service, label: "Szolgáltatás" },
    [CUSTOM_FIELD_IDS.location]: {
      value: values.location,
      label: "Település / irányítószám",
    },
    [CUSTOM_FIELD_IDS.timeframe]: {
      value: values.timeframe,
      label: "Időpontigény",
    },
    [CUSTOM_FIELD_IDS.details]: {
      value: values.details,
      label: "Igények leírása",
    },
    [CUSTOM_FIELD_IDS.consent]: {
      value: values.consent ? "Igen" : "",
      label: "Adatkezelési hozzájárulás",
    },
    [CUSTOM_FIELD_IDS.source]: {
      value: SOURCE_LABEL,
      label: "Forrás",
    },
  };

  // 1) form_submission (ez jelenik meg a Form Submissions nézetben)
  // 2) external_form_submission (ez futtatja a külső követési pipeline-t)
  try {
    const [rForm, rExt] = await Promise.all([
      postTrackingEvent({ ...basePayload, type: "form_submission" }, { customFields, fileFields }),
      postTrackingEvent(
        { ...basePayload, type: "external_form_submission" },
        { customFields, fileFields },
      ),
    ]);

    // Bármelyik sikeresnek számít
    if (rForm.ok || rExt.ok) {
      return { ok: true as const };
    }
    // Ha mindkettő hibázott, a hibaüzenetet a parsed body-ból vesszük
    const errMsg =
      rForm.parsed?.message ||
      rExt.parsed?.message ||
      `CRM hiba (${rForm.status}/${rExt.status}). Kérlek, próbáld újra!`;
    return { ok: false as const, error: errMsg };
  } catch {
    return {
      ok: false as const,
      error: "Nem sikerült elküldeni az ajánlatkérést. Kérlek, hívj minket: +36 20 805 1772.",
    };
  }
};

// Hívásgomb-kattintás követése a már csatlakoztatott követő integráción
// keresztül. Amikor a látogató egy tel: gombra kattint (Navbar, Hero, sticky
// mobil CTA, kapcsolat stb.), ez egy mérőeseményt küld a CRM-nek.
// FONTOS: kattintást mér, NEM a ténylegesen lefolytatott hívást.
export const trackPhoneCallClick = (phoneHref: string) => {
  const phone = phoneHref.replace(/^tel:/i, "").trim();

  // A hívásgomb-kattintást is a CRM Form Submissions nézetébe küldjük,
  // hogy a képernyőképen látható táblázatban azonnal megjelenjen. Ugyanazt
  // a sémát használjuk, mint az ajánlatkérésnél: egy `form_submission`
  // típusú esemény egy dedikált formId-val (id-klima-hivas-gomb), így a
  // CRM Analytics -> Form Submissions fülön külön listázódik.
  const basePayload = {
    timestamp: Date.now(),
    formId: "id-klima-hivas-gomb",
    formData: {
      first_name: "Hívás",
      last_name: "gomb kattintás",
      phone,
    },
    formLabels: {
      first_name: "Keresztnév",
      last_name: "Vezetéknév",
      phone: "Hívott telefonszám",
    },
    pageUrl: window.location.href,
    url: window.location.href,
    title: document.title,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    trackingId: TRACKING_ID,
    locationId: LOCATION_ID,
    projectId: PROJECT_ID,
    sessionId: getTrackingSessionId(),
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
      source: "ai_studio",
      projectId: PROJECT_ID,
      formName: "ID Klíma hívás gomb kattintás",
    },
  };

  const customFields = {
    [CUSTOM_FIELD_IDS.source]: {
      value: SOURCE_LABEL_HIVAS,
      label: "Forrás",
    },
  };

  // Fire-and-forget: keepalive biztosítja, hogy a kérés elinduljon akkor is,
  // ha a kattintás navigációt váltana ki (tel: dialer-indításnál nem tölt be
  // új oldal, de így is biztonságos). A `form_submission` típus listázódik
  // a Form Submissions nézetben.
  // 1) form_submission (Analytics -> Form Submissions táblázatba)
  // 2) external_form_submission (külső követési pipeline-ba)
  Promise.allSettled([
    postTrackingEvent({ ...basePayload, type: "form_submission" }, { customFields }),
    postTrackingEvent({ ...basePayload, type: "external_form_submission" }, { customFields }),
  ]).then(([rForm, rExt]) => {
    if (typeof console !== "undefined") {
      const formOk = rForm.status === "fulfilled" && rForm.value.ok;
      const extOk = rExt.status === "fulfilled" && rExt.value.ok;
      if (formOk || extOk) {
        console.info(
          `[ID Klíma] Hívásgomb-kattintás sikeresen beküldve a CRM-be (formId: id-klima-hivas-gomb, phone: ${phone}).`,
        );
      } else {
        console.warn(
          "[ID Klíma] Hívásgomb-kattintás nem sikerült:",
          rForm.status === "fulfilled" ? rForm.value : rForm.reason,
          rExt.status === "fulfilled" ? rExt.value : rExt.reason,
        );
      }
    }
  });
};
