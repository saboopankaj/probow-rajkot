/* =========================================================
   PROBOW — DYNAMIC OFFER POPUP
   ---------------------------------------------------------
   Worker/D1 controlled
   Mobile-first (centered, clean card)
   Desktop layout (wide split-screen, not full screen)

   Controls:
   - ON / OFF
   - Image
   - Offer text
   - Button / link
   - WhatsApp
   - Page targeting
   - Frequency
   - Start / End date
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     SETTINGS
     ========================================================= */

  const OFFER_API = "/api/site/offer-popup";

  // Keep the same delay as the original popup
  const OFFER_DELAY = 1200;

  // Storage keys
  const STORAGE_PREFIX = "probow_offer_popup";

  /* =========================================================
     HELPERS
     ========================================================= */

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalisePath(path) {
    const clean = String(path || "")
      .split("?")[0]
      .split("#")[0]
      .replace(/\/+$/, "");

    return clean || "/";
  }

  /* =========================================================
     FETCH OFFER FROM WORKER / D1
     ========================================================= */

  async function loadOffer() {
    try {
      const response = await window.ProbowApi.fetchOfferPopup();

      if (!response.ok) {
        console.warn(
          "PROBOW offer popup: API returned",
          response.status
        );
        return null;
      }

      const data = await response.json();

      if (!data || !data.success || !data.offer) {
        return null;
      }

      return data.offer;

    } catch (error) {
      console.error(
        "PROBOW offer popup: failed to load offer",
        error
      );

      return null;
    }
  }

  /* =========================================================
     PAGE TARGETING
     ========================================================= */

  function isOfferPageAllowed(offer) {

    // Show everywhere
    if (offer.page_mode !== "selected") {
      return true;
    }

    const pages = Array.isArray(offer.pages)
      ? offer.pages
      : [];

    if (pages.length === 0) {
      return false;
    }

    const currentPath =
      normalisePath(window.location.pathname);

    return pages.some(function (page) {

      const targetPath =
        normalisePath(page);

      // Exact path match
      if (targetPath === currentPath) {
        return true;
      }

      // Allow "/" to match homepage
      if (
        targetPath === "/" &&
        currentPath === "/"
      ) {
        return true;
      }

      return false;
    });
  }

  /* =========================================================
     START / END DATE
     ========================================================= */

  function isOfferWithinSchedule(offer) {

    const now = Date.now();

    if (offer.start_at) {

      const start =
        new Date(offer.start_at).getTime();

      if (
        Number.isFinite(start) &&
        now < start
      ) {
        return false;
      }
    }

    if (offer.end_at) {

      const end =
        new Date(offer.end_at).getTime();

      if (
        Number.isFinite(end) &&
        now > end
      ) {
        return false;
      }
    }

    return true;
  }

  /* =========================================================
     FREQUENCY
     ========================================================= */

  function getFrequencyKey(offer) {

    return (
      STORAGE_PREFIX +
      "_" +
      (
        offer.frequency ||
        "24h"
      )
    );
  }

  function canShowOffer(offer) {

    const frequency =
      offer.frequency || "24h";

    /*
     * Every visit
     * ---------------------------------------------
     * No storage restriction.
     */
    if (frequency === "visit") {
      return true;
    }

    /*
     * Session
     * ---------------------------------------------
     * Show once during this browser tab/session.
     */
    if (frequency === "session") {

      try {

        const key =
          STORAGE_PREFIX + "_session";

        const shown =
          sessionStorage.getItem(key);

        return shown !== "1";

      } catch (error) {

        return true;
      }
    }

    /*
     * 24 hours / 7 days
     */
    try {

      const key =
        getFrequencyKey(offer);

      const lastShown =
        Number(localStorage.getItem(key) || 0);

      if (!lastShown) {
        return true;
      }

      let duration;

      if (frequency === "7d") {
        duration =
          7 * 24 * 60 * 60 * 1000;
      } else {
        // Default = 24 hours
        duration =
          24 * 60 * 60 * 1000;
      }

      return (
        Date.now() - lastShown >= duration
      );

    } catch (error) {

      return true;
    }
  }

  function markOfferShown(offer) {

    const frequency =
      offer.frequency || "24h";

    if (frequency === "visit") {
      return;
    }

    if (frequency === "session") {

      try {

        sessionStorage.setItem(
          STORAGE_PREFIX + "_session",
          "1"
        );

      } catch (error) {}

      return;
    }

    try {

      localStorage.setItem(
        getFrequencyKey(offer),
        String(Date.now())
      );

    } catch (error) {}
  }

  /* =========================================================
     CLEANUP OLD POPUP
     ========================================================= */

  function cleanupExistingPopup() {

    const existingPopup =
      document.getElementById(
        "probowOfferPopup"
      );

    if (existingPopup) {
      existingPopup.remove();
    }

    const existingStyle =
      document.getElementById(
        "probow-offer-popup-style"
      );

    if (existingStyle) {
      existingStyle.remove();
    }
  }

  /* =========================================================
     CSS
     ========================================================= */

  function injectStyles() {

    const style =
      document.createElement("style");

    style.id =
      "probow-offer-popup-style";

    style.textContent = `
      #probowOfferPopup {
        position: fixed;
        inset: 0;
        z-index: 999999;
        display: none;
        align-items: center;
        justify-content: center;
        padding: 16px;
        box-sizing: border-box;
        font-family: inherit;
        isolation: isolate;
      }

      #probowOfferPopup.probow-offer-visible {
        display: flex;
      }

      #probowOfferPopup .probow-offer-overlay {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(
            circle at 50% 40%,
            rgba(52, 92, 44, .18),
            transparent 50%
          ),
          rgba(8, 15, 9, .78);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        opacity: 0;
        animation:
          smoothieBackdrop .4s ease forwards;
      }

      #probowOfferPopup .probow-offer-card {
        position: relative;
        z-index: 2;
        width: 100%;
        max-width: 390px;
        overflow: hidden;
        border-radius: 26px;
        background: #fffdf9;
        box-shadow:
          0 25px 60px -10px
          rgba(0,0,0,0.35);
        opacity: 0;
        transform:
          translateY(24px) scale(.96);
        animation:
          smoothieCard .5s .05s
          cubic-bezier(.16, 1, .3, 1)
          forwards;
      }

      #probowOfferPopup .probow-offer-card::before {
        content: "";
        position: absolute;
        z-index: 30;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background:
          linear-gradient(
            90deg,
            #2d652b,
            #ffd166,
            #ffca05,
            #2d652b
          );
        background-size: 200% 100%;
        animation:
          smoothieAccent 3s linear infinite;
      }

      #probowOfferPopup .probow-offer-close {
        position: absolute;
        z-index: 40;
        top: 12px;
        right: 12px;
        width: 36px;
        height: 36px;
        padding: 0;
        border: 1px solid rgba(255,255,255,.6);
        border-radius: 50%;
        background: rgba(15,20,15,.5);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 14px;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        transition:
          transform .2s ease,
          background .2s ease;
      }

      #probowOfferPopup .probow-offer-close:hover {
        background: rgba(15,20,15,.8);
        transform: scale(1.08);
      }

      #probowOfferPopup .probow-offer-image {
        position: relative;
        width: 100%;
        height: 250px;
        overflow: hidden;
        background: #e9e1ce;
      }

      #probowOfferPopup .probow-offer-image img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.04);
        transition: transform .5s ease;
      }

      #probowOfferPopup .probow-offer-image::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background:
          linear-gradient(
            180deg,
            rgba(0,0,0,0) 40%,
            rgba(8,17,10,0.2) 70%,
            rgba(8,17,10,0.65) 100%
          );
      }

      #probowOfferPopup .probow-offer-badge {
        position: absolute;
        left: 16px;
        bottom: 14px;
        z-index: 8;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 7px 13px;
        border-radius: 999px;
        background: #ffd166;
        color: #172318;
        font-size: 11px;
        line-height: 1;
        font-weight: 900;
        letter-spacing: .08em;
        text-transform: uppercase;
        box-shadow:
          0 4px 12px rgba(0,0,0,.2);
      }

      #probowOfferPopup .probow-offer-content {
        position: relative;
        padding: 22px 20px;
        text-align: center;
      }

      #probowOfferPopup .probow-offer-eyebrow {
        display: block;
        margin-bottom: 6px;
        color: #4d7c43;
        font-size: 11px;
        line-height: 1.2;
        font-weight: 800;
        font-style: italic;
        letter-spacing: .1em;
        text-transform: uppercase;
      }

      #probowOfferPopup .probow-offer-title {
        margin: 0 auto 8px;
        max-width: 350px;
        color: #142117;
        font-family:
          'Fraunces',
          Georgia,
          serif;
        font-size: 30px;
        line-height: 1.05;
        font-weight: 800;
        letter-spacing: -.02em;
      }

      #probowOfferPopup .probow-offer-description {
        max-width: 330px;
        margin: 0 auto 14px;
        color: #5a6058;
        font-size: 13px;
        line-height: 1.5;
      }

      #probowOfferPopup .probow-offer-highlight {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        padding: 8px 14px;
        border-radius: 8px;
        background:
          linear-gradient(
            135deg,
            #eaf2e5,
            #dfeadc
          );
        color: #285625;
        font-size: 11px;
        line-height: 1;
        font-weight: 850;
        letter-spacing: .03em;
      }

      #probowOfferPopup .probow-offer-cta {
        position: relative;
        overflow: hidden;
        width: 100%;
        min-height: 48px;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 12px 20px;
        border-radius: 12px;
        background:
          linear-gradient(
            135deg,
            #ffd51a,
            #ffc400
          );
        color: #111;
        text-decoration: none;
        font-size: 13px;
        line-height: 1;
        font-weight: 850;
        box-shadow:
          0 6px 20px
          rgba(255,193,0,.25);
        transition:
          transform .2s ease,
          box-shadow .2s ease;
      }

      #probowOfferPopup .probow-offer-cta:hover {
        transform: translateY(-2px);
        box-shadow:
          0 10px 25px
          rgba(255,193,0,.35);
      }

      #probowOfferPopup .probow-offer-whatsapp {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin-top: 12px;
        color: #47733f;
        text-decoration: none;
        font-size: 10px;
        line-height: 1.3;
        font-weight: 750;
      }

      #probowOfferPopup .probow-offer-whatsapp:hover {
        color: #285625;
        text-decoration: underline;
      }

      #probowOfferPopup .probow-offer-note {
        margin-top: 8px;
        color: #8a8e85;
        font-size: 9px;
        line-height: 1.3;
      }

      @keyframes smoothieBackdrop {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      @keyframes smoothieCard {
        0% {
          opacity: 0;
          transform:
            translateY(24px)
            scale(.96);
        }

        100% {
          opacity: 1;
          transform:
            translateY(0)
            scale(1);
        }
      }

      @keyframes smoothieAccent {
        0% {
          background-position: 0% 50%;
        }

        100% {
          background-position: 200% 50%;
        }
      }

      /* =====================================================
         DESKTOP
         ===================================================== */

      @media (min-width: 768px) {

        #probowOfferPopup {
          padding: 24px;
        }

        #probowOfferPopup .probow-offer-card {
          width: 100%;
          max-width: 820px;
          display: grid;
          grid-template-columns:
            1.1fr 1.2fr;
          min-height: 420px;
          border-radius: 30px;
          background:
            linear-gradient(
              135deg,
              #fffef9 0%,
              #f7f4ea 100%
            );
          box-shadow:
            0 30px 80px
            rgba(0,0,0,0.4);
        }

        #probowOfferPopup .probow-offer-image {
          height: 100%;
          min-height: 420px;
          border-radius:
            30px 0 0 30px;
        }

        #probowOfferPopup
        .probow-offer-card:hover
        .probow-offer-image img {
          transform: scale(1.06);
        }

        #probowOfferPopup .probow-offer-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 36px 40px;
          text-align: left;
        }

        #probowOfferPopup .probow-offer-title {
          margin: 0 0 8px;
          max-width: 400px;
          font-size: 36px;
          line-height: 1.05;
        }

        #probowOfferPopup .probow-offer-description {
          margin: 0 0 14px;
          max-width: 380px;
          font-size: 13px;
        }

        #probowOfferPopup .probow-offer-highlight {
          margin: 0 0 18px;
        }

        #probowOfferPopup .probow-offer-cta {
          width: 100%;
          max-width: 210px;
        }

        #probowOfferPopup .probow-offer-whatsapp {
          justify-content: flex-start;
        }

        #probowOfferPopup .probow-offer-note {
          text-align: left;
        }
      }
    `;

    document.head.appendChild(style);
  }

  /* =========================================================
     BUILD POPUP
     ========================================================= */

  function renderOfferPopup(offer) {

    cleanupExistingPopup();

    injectStyles();

    /*
     * Your original popup has no badge column in D1.
     * Keep the exact original badge.
     */
    const badge =
      "SPECIAL OFFER";

    const eyebrow =
      offer.eyebrow || "";

    const title =
      offer.title ||
      "Free Smoothie on ₹249+";

    const description =
      offer.description ||
      "";

    const highlight =
      offer.highlight ||
      "";

    const buttonText =
      offer.button_text ||
      "Order Now";

    const buttonLink =
      offer.button_link ||
      "#menu-categories";

    const whatsappNumber =
      String(
        offer.whatsapp_number || ""
      ).replace(/\D/g, "");

    const whatsappMessage =
      offer.whatsapp_message ||
      "";

    /*
     * Escape all D1-controlled text before
     * putting it into innerHTML.
     */
    const safeBadge =
      escapeHTML(badge);

    const safeEyebrow =
      escapeHTML(eyebrow);

    const safeTitle =
      escapeHTML(title);

    const safeDescription =
      escapeHTML(description);

    const safeHighlight =
      escapeHTML(highlight);

    const safeButtonText =
      escapeHTML(buttonText);

    const safeButtonLink =
      escapeHTML(buttonLink);

    const safeImage =
      escapeHTML(
        offer.image_url || ""
      );

    const whatsappHref =
      whatsappNumber
        ? "https://wa.me/" +
          whatsappNumber +
          "?text=" +
          encodeURIComponent(
            whatsappMessage
          )
        : "";

    const popup =
      document.createElement("div");

    popup.id =
      "probowOfferPopup";

    popup.setAttribute(
      "aria-hidden",
      "true"
    );

    popup.innerHTML = `
      <div
        class="probow-offer-overlay"
        data-offer-close>
      </div>

      <div
        class="probow-offer-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="probowOfferTitle">

        <button
          type="button"
          class="probow-offer-close"
          id="probowOfferClose"
          aria-label="Close offer">

          <i class="fa-solid fa-xmark"></i>

        </button>

        <div class="probow-offer-image">

          ${
            safeImage
              ? `
                <img
                  id="probowOfferImage"
                  src="${safeImage}"
                  alt="Free smoothie offer"
                  onerror="
                    this.style.display='none';
                  ">
              `
              : ""
          }

          <div
            class="probow-offer-badge"
            id="probowOfferBadge">
            ${safeBadge}
          </div>

        </div>

        <div class="probow-offer-content">

          ${
            safeEyebrow
              ? `
                <span
                  class="probow-offer-eyebrow"
                  id="probowOfferEyebrow">
                  ${safeEyebrow}
                </span>
              `
              : ""
          }

          <h2
            class="probow-offer-title"
            id="probowOfferTitle">
            ${safeTitle}
          </h2>

          ${
            safeDescription
              ? `
                <p
                  class="probow-offer-description"
                  id="probowOfferDescription">
                  ${safeDescription}
                </p>
              `
              : ""
          }

          ${
            safeHighlight
              ? `
                <div
                  class="probow-offer-highlight"
                  id="probowOfferHighlight">
                  ${safeHighlight}
                </div>
              `
              : ""
          }

          <a
            class="probow-offer-cta"
            id="probowOfferCta"
            href="${safeButtonLink}">

            <span>
              ${safeButtonText}
            </span>

            <i
              class="fa-solid fa-arrow-right"
              aria-hidden="true">
            </i>

          </a>

          ${
            whatsappHref
              ? `
                <a
                  class="probow-offer-whatsapp"
                  id="probowOfferWhatsapp"
                  href="${escapeHTML(whatsappHref)}"
                  target="_blank"
                  rel="noopener">

                  <i
                    class="fa-brands fa-whatsapp"
                    aria-hidden="true">
                  </i>

                  <span>
                    WhatsApp us if you have questions • Hurry!
                  </span>

                </a>
              `
              : ""
          }

          <div class="probow-offer-note">
            Freshly prepared • Made with love by PROBOW
          </div>

        </div>
      </div>
    `;

    document.body.appendChild(popup);

    /* =========================================================
       HANDLERS
       ========================================================= */

    const closeButton =
      document.getElementById(
        "probowOfferClose"
      );

    const overlay =
      popup.querySelector(
        "[data-offer-close]"
      );

    function openOffer() {

      popup.classList.add(
        "probow-offer-visible"
      );

      popup.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow =
        "hidden";

      /*
       * Mark only when actually displayed.
       */
      markOfferShown(offer);
    }

    function closeOffer() {

      popup.classList.remove(
        "probow-offer-visible"
      );

      popup.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.style.overflow =
        "";
    }

    if (closeButton) {

      closeButton.addEventListener(
        "click",
        closeOffer
      );
    }

    if (overlay) {

      overlay.addEventListener(
        "click",
        closeOffer
      );
    }

    const orderNowButton =
      document.getElementById(
        "probowOfferCta"
      );

    if (orderNowButton) {

      orderNowButton.addEventListener(
        "click",
        function () {
          closeOffer();
        }
      );
    }

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape" &&
          popup.classList.contains(
            "probow-offer-visible"
          )
        ) {
          closeOffer();
        }

      }
    );

    /* =========================================================
       OPEN AFTER SAME 1.2 SECOND DELAY
       ========================================================= */

    window.setTimeout(
      function () {
        openOffer();
      },
      OFFER_DELAY
    );

    window.PROBOWOffer = {
      open: openOffer,
      close: closeOffer
    };
  }

  /* =========================================================
     INITIALISE
     ========================================================= */

  async function initOfferPopup() {

    const offer =
      await loadOffer();

    /*
     * API failed
     */
    if (!offer) {
      return;
    }

    /*
     * D1 OFF
     */
    if (!offer.enabled) {
      return;
    }

    /*
     * Page restriction
     */
    if (!isOfferPageAllowed(offer)) {
      return;
    }

    /*
     * Start / end date
     */
    if (!isOfferWithinSchedule(offer)) {
      return;
    }

    /*
     * Frequency
     */
    if (!canShowOffer(offer)) {
      return;
    }

    /*
     * Everything passed.
     */
    renderOfferPopup(offer);
  }

  /* =========================================================
     START
     ========================================================= */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initOfferPopup
    );

  } else {

    initOfferPopup();

  }

})();