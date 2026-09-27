import Link from "next/link";

const orderUrl = "https://wa.me/917874610393?text=Hi%20PROBOW%2C%20I%20want%20to%20order!";
const moreInfoUrl = "https://wa.me/917874610393?text=Hi%20PROBOW%2C%20I%20want%20to%20know%20more%20about%20PROBOW!";
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=22.2756748233,70.7694169879";

export function ContactPageContent() {
  return <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">Let&apos;s talk food</span>
          <h1>Good food is just a <em>message away.</em></h1>
          <p className="contact-intro">Want to order, ask about today&apos;s menu, check availability, or simply say hello? Reach out to PROBOW on WhatsApp or give us a call.</p>
          <div className="contact-hero-actions">
            <a href={orderUrl} className="contact-btn contact-btn-wa" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true" />Order on WhatsApp</a>
            <Link href="/menu" className="contact-btn contact-btn-menu"><i className="fa-solid fa-utensils" aria-hidden="true" />Explore Menu</Link>
          </div>
        </div>

        <div className="contact-main-card">
          <div className="contact-card-label">Contact PROBOW</div>
          <h2>We&apos;re here to help.</h2>
          <p>For orders, menu questions, custom requests, or anything else, contact us directly.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fa-solid fa-phone" aria-hidden="true" /></div>
              <div className="contact-detail-content"><span className="contact-detail-label">Call us</span><a href="tel:+917874610393" className="contact-detail-value">+91 78746 10393</a></div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fa-brands fa-whatsapp" aria-hidden="true" /></div>
              <div className="contact-detail-content"><span className="contact-detail-label">WhatsApp us</span><a href={orderUrl} target="_blank" rel="noopener noreferrer" className="contact-detail-value">+91 78746 10393</a></div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><i className="fa-solid fa-location-dot" aria-hidden="true" /></div>
              <div className="contact-detail-content"><span className="contact-detail-label">Serving</span><span className="contact-detail-value">Rajkot &amp; nearby areas</span></div>
            </div>
          </div>

          <div className="timings-box">
            <div className="timings-title"><i className="fa-regular fa-clock" aria-hidden="true" />Opening hours</div>
            <div className="timings-main">Monday &ndash; Sunday<br />10:30 AM &ndash; 2:30 PM&nbsp; &bull; &nbsp;6:00 PM &ndash; 10:00 PM</div>
            <div className="timings-note">Open every day &middot; Lunch &amp; evening service</div>
          </div>
        </div>
      </section>

      <section className="visit-section" id="visit-us">
        <div className="visit-head">
          <span className="visit-eyebrow">Visit us</span>
          <h2>Our kitchen.</h2>
          <p>Want to find us in person? Our kitchen is in Nana Mava, Rajkot. Come by or use the directions below to find your way.</p>
        </div>
        <div className="visit-card">
          <div className="visit-info">
            <div className="visit-info-label"><i className="fa-solid fa-location-dot" aria-hidden="true" />Our kitchen</div>
            <h3>Where PROBOW is.</h3>
            <p className="visit-address"><strong>D/39, Aalap Heritage Society,</strong><br />Maruti Chowk, Near Satyasai Heart Hospital,<br />Kalawad Road, Nana Mava,<br />Rajkot, Gujarat.</p>
            <a href={directionsUrl} className="visit-direction-btn" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-diamond-turn-right" aria-hidden="true" />Open directions</a>
          </div>

          <div className="visit-map-wrap">
            <div className="visit-map-label"><i className="fa-solid fa-location-dot" aria-hidden="true" />Find your way to us</div>
            <iframe className="visit-map" title="PROBOW Kitchen Location" src="https://www.google.com/maps?q=22.2756748233,70.7694169879&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <div className="visit-map-footer">
              <div className="visit-map-address"><strong>Where PROBOW is</strong>D/39, Aalap Heritage Society, Maruti Chowk, Nana Mava, Rajkot</div>
              <a href={directionsUrl} className="visit-map-direction" target="_blank" rel="noopener noreferrer">Directions<i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <div className="explore-card">
          <div className="explore-content">
            <span className="explore-eyebrow">Freshly made for you</span>
            <h2>Something for every craving.</h2>
            <p>Macro-balanced bowls, colourful salads, artisan pastas and refreshing smoothies &mdash; made fresh and packed with flavour.</p>
          </div>
          <Link href="/menu" className="explore-cta">Explore our food<i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="service-section">
        <div className="service-card">
          <span className="eyebrow">Around Rajkot</span>
          <h2>Serving Rajkot &amp; nearby areas.</h2>
          <p>Not sure if we deliver to your area? Just send us a WhatsApp message and we&apos;ll help you check.</p>
          <div className="zone-tags">
            <span className="zone-tag"><i className="fa-solid fa-location-dot" aria-hidden="true" />Rajkot</span>
            <span className="zone-tag">Kalawad Road</span>
            <span className="zone-tag">150 Feet Ring Road</span>
            <span className="zone-tag">University Road</span>
            <span className="zone-tag">Raiya Road</span>
            <span className="zone-tag">Mavdi</span>
            <span className="zone-tag">Nana Mava</span>
            <span className="zone-tag">Nana Chowk</span>
            <span className="zone-tag">Gondal Road</span>
            <span className="zone-tag">Amin Marg</span>
          </div>
        </div>
      </section>

      <section className="final-contact">
        <h2>Ready to eat better?</h2>
        <p>Browse our menu or message us directly. We&apos;ll help you find something you&apos;ll love.</p>
        <div className="final-actions">
          <Link href="/menu" className="contact-btn contact-btn-menu"><i className="fa-solid fa-utensils" aria-hidden="true" />Order from Menu</Link>
          <a href={moreInfoUrl} className="contact-btn contact-btn-wa" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp" aria-hidden="true" />WhatsApp Us</a>
        </div>
      </section>
    </div>
  </>;
}
