import Link from "next/link";
import { orderUrl } from "@/components/home/content";

export function OrderCta() {
  return <section className="home-order-cta" id="homepage-order-cta"><div className="page-container"><span className="eyebrow">Hungry already?</span><h2>Your next good meal is waiting.</h2><p>Explore the complete PROBOW menu and order your favourites for delivery in Rajkot.</p><div><Link className="button button--leaf" href="/menu">Explore Menu</Link><a className="button button--dark" href={orderUrl} target="_blank" rel="noreferrer">Order on WhatsApp</a></div></div></section>;
}
