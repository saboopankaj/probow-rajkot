"use client";

import { useEffect, useState } from "react";
import { createProbowApiClient, type Offer } from "@/lib/probow-api";

const api = createProbowApiClient();

function isActive(offer: Offer) {
  if (!offer.enabled) return false;
  const now = Date.now();
  const start = Date.parse(String(offer.start_at || offer.starts_at || offer.start_date || ""));
  const end = Date.parse(String(offer.end_at || offer.ends_at || offer.end_date || ""));
  if (Number.isFinite(start) && now < start) return false;
  if (Number.isFinite(end) && now > end) return false;
  const mode = String(offer.page_mode || offer.page_type || "all");
  if (mode === "selected") {
    const pages = Array.isArray(offer.pages) ? offer.pages : String(offer.pages || "").split(",").map((page) => page.trim());
    if (!pages.includes(window.location.pathname) && !pages.includes("home")) return false;
  }
  return true;
}

function dismissed(frequency: string) {
  try {
    if (frequency === "session") return sessionStorage.getItem("probow_offer_popup_session") === "1";
    if (frequency === "24h" || frequency === "7d") {
      const stamp = Number(localStorage.getItem(`probow_offer_popup_${frequency}`) || 0);
      const duration = frequency === "24h" ? 86400000 : 604800000;
      return Date.now() - stamp < duration;
    }
    return sessionStorage.getItem("probow_offer_popup_session") === "1";
  } catch { return false; }
}

export function OfferPopup() {
  const [offer, setOffer] = useState<Offer | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let active = true;
    const timer = window.setTimeout(() => {
      void api.fetchOfferPopup().then(async (response) => {
        if (!response.ok) return;
        const payload = await response.json() as { offer?: Offer };
        const nextOffer = payload.offer;
        if (!active || !nextOffer || !isActive(nextOffer)) return;
        const frequency = String(nextOffer.frequency || "visit");
        if (dismissed(frequency)) return;
        setOffer(nextOffer);
        setOpen(true);
      }).catch(() => undefined);
    }, 1200);
    return () => { active = false; window.clearTimeout(timer); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") close(); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
    // close uses current offer state; dialog lifecycle is keyed by open.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function close() {
    const frequency = String(offer?.frequency || "visit");
    try {
      if (frequency === "24h" || frequency === "7d") localStorage.setItem(`probow_offer_popup_${frequency}`, String(Date.now()));
      else sessionStorage.setItem("probow_offer_popup_session", "1");
    } catch { /* storage may be disabled */ }
    setOpen(false);
  }

  if (!offer || !open) return null;
  const phone = String(offer.whatsapp_number || "917874610393").replace(/\D/g, "");
  const message = String(offer.whatsapp_message || "Hi PROBOW, I would like to know more about this offer.");
  const href = String(offer.button_link || offer.button_url || "#menu-categories");
  const image = String(offer.image_url || offer.image || "");
  const description = String(offer.description || "");
  const highlight = String(offer.highlight || "");
  return <div className="offer-popup__overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}><section className="offer-popup" role="dialog" aria-modal="true" aria-labelledby="offer-popup-title"><button className="offer-popup__close" type="button" onClick={close} aria-label="Close offer">&#215;</button>{image && <img src={image} alt="" />}<span className="offer-popup__badge">{String(offer.badge || "SPECIAL OFFER")}</span><span className="eyebrow">{String(offer.eyebrow || "A little something for you")}</span><h2 id="offer-popup-title">{String(offer.title || offer.heading || "Free Smoothie on &#8377;249+")}</h2>{description && <p>{description}</p>}{highlight && <strong className="offer-popup__highlight">{highlight}</strong>}<a className="button button--leaf" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{String(offer.button_text || "Order Now")}</a></section></div>;
}
