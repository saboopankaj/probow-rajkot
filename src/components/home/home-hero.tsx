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
            <a className="button button--outline home-hero__secondary" href={orderUrl} target="_blank" rel="noreferrer"><span aria-hidden="true" className="wa-icon">&#9742;</span>Order on WhatsApp</a>
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
          <div className="home-hero__partners"><span>Also order on</span><a className="partner-zomato" href="https://link.zomato.com/xqzv/rshare?id=13135322730563ae8" target="_blank" rel="noreferrer">Zomato</a><a className="partner-swiggy" href="https://swiggy.com" target="_blank" rel="noreferrer">Swiggy</a></div>
        </div>
        <div className="home-hero__visual-column">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
