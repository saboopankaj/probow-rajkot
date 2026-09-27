import Link from "next/link";
import { HeroCarousel } from "@/components/home/hero-carousel";

const orderUrl = "https://wa.me/917874610393?text=Hi%20PROBOW%2C%20I%20want%20to%20order!";

export function HomeHero() {
  return (
    <section className="home-hero">
      <div className="page-container home-hero__grid">
        <div className="home-hero__copy">
          <p className="eyebrow">Healthy &middot; Fresh &middot; 100% Vegetarian</p>
          <h1>Healthy Vegetarian Food in Rajkot</h1>
          <p className="home-hero__description">Fresh, tasty rice bowls, salads, pesto pasta and smoothies &mdash; made to order in Rajkot.</p>
          <div className="home-hero__actions">
            <Link className="button button--leaf home-hero__primary" href="#menu"><span aria-hidden="true">&#127860;</span>Explore the menu <span aria-hidden="true">&#8594;</span></Link>
            <a
  className="button button--outline home-hero__secondary"
  href={orderUrl}
  target="_blank"
  rel="noreferrer"
>
  <span aria-hidden="true" className="wa-icon">
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.56 0 .25 5.3.25 11.82c0 2.08.54 4.11 1.57 5.9L.17 24l6.45-1.69a11.8 11.8 0 0 0 5.46 1.35h.01c6.52 0 11.82-5.31 11.82-11.83 0-3.16-1.23-6.13-3.39-8.35ZM12.09 21.65h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.83 1 1.02-3.73-.23-.38a9.82 9.82 0 1 1 8.4 4.68Zm5.39-7.36c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.37-.27.29-1.02.99-1.02 2.41s1.04 2.8 1.19 2.99c.15.19 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.72-.7 1.96-1.37.24-.68.24-1.26.17-1.37-.07-.12-.27-.19-.56-.34Z" />
    </svg>
  </span>
  Order on WhatsApp
</a>
          </div>
          <div className="home-hero__trust" aria-label="PROBOW qualities">
            <span className="home-hero__rating"><i aria-hidden="true">&#9733;</i><strong>4.4 / 5</strong><small>customer rating</small></span>
            <span><i aria-hidden="true">&#10003;</i> 100% vegetarian</span>
            <span><i aria-hidden="true">&#10003;</i> Made fresh to order</span>
          </div>
          <a className="delivery-banner" href="#delivery">
            <span className="delivery-banner__icon" aria-hidden="true">&#128666;</span>
            <span><strong>Free delivery</strong><small>on orders above <b>&#8377;249</b></small></span>
            <span className="delivery-banner__arrow" aria-hidden="true">&#8594;</span>
          </a>
          
        </div>
        <div className="home-hero__visual-column">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
