"use client";

import { useEffect, useState } from "react";

const terms = [
  "Free delivery is available on orders with a minimum order value of \u20b9249.",
  "The free delivery offer is applicable for delivery locations within a 3 km radius of our kitchen.",
  "For orders below \u20b9249, or delivery locations beyond 3 km, applicable delivery charges may be charged.",
  "Deliveries are fulfilled through Rapido and other available delivery partners, subject to availability.",
  "Delivery charges, where applicable, will be communicated to the customer before order confirmation.",
  "Delivery times may vary depending on food preparation time, traffic, weather conditions, and delivery partner availability.",
  "Customers must provide an accurate delivery address and active contact number while placing an order.",
  "In case the customer is unavailable or unreachable at the delivery location, additional delivery charges may apply.",
  "PROBOW reserves the right to modify or withdraw the free delivery offer at any time.",
];

export function DeliveryTerms() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", closeOnEscape); };
  }, [open]);

  return <>
    <button className="delivery-terms-trigger" type="button" onClick={() => setOpen(true)}>View Delivery T&amp;C <span aria-hidden="true">&#8594;</span></button>
    {open && <div className="terms-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <section className="terms-dialog" role="dialog" aria-modal="true" aria-labelledby="delivery-terms-title">
        <button className="terms-dialog__close" type="button" aria-label="Close delivery terms" onClick={() => setOpen(false)}>&#10005;</button>
        <span className="eyebrow">Delivery information</span><h2 id="delivery-terms-title">Delivery Terms &amp; Conditions</h2>
        <h3>Free Delivery Offer</h3><ol>{terms.map((term) => <li key={term}>{term}</li>)}</ol>
      </section>
    </div>}
  </>;
}
