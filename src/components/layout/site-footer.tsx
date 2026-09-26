import Image from "next/image";
import Link from "next/link";

const orderUrl = "https://wa.me/917874610393?text=Hi%20PROBOW%2C%20I%20want%20to%20order!";
const zomatoUrl = "https://link.zomato.com/xqzv/rshare?id=13135322730563ae8";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__main">
        <section className="site-footer__brand">
          <Link href="/" aria-label="PROBOW home">
            <Image src="/assets/images/brand-logo/logo-green.png" alt="PROBOW" width={440} height={130} unoptimized />
          </Link>
          <p>Clean, 100% vegetarian high-protein bowls, fresh salads, and artisan pastas delivered fresh with zero preservatives.</p>
          <ul>
            <li>Call / WhatsApp: <a href="tel:+917874610393">+91 7874610393</a></li>
            <li>Serving Rajkot &amp; nearby areas</li>
            <li>Open daily: 10:30 AM - 2:30 PM &amp; 6:00 PM - 10:00 PM</li>
          </ul>
        </section>
        <section>
          <h2>Quick links</h2>
          <ul className="site-footer__links">
            <li><a href="/#menu">Menu &amp; pricing</a></li>
            <li><a href="/#ingredients">Ingredients &amp; facts</a></li>
            <li><a href="/#process">Hygiene &amp; preparation</a></li>
            <li><a href="/#packaging">Eco packaging</a></li>
            <li><a href="/#story">Our story</a></li>
            <li><a href="/#faq">FAQ</a></li>
          </ul>
        </section>
        <section>
          <h2>Order online</h2>
          <div className="site-footer__partners">
            <a className="site-footer__partner site-footer__partner--wa" href={orderUrl} target="_blank" rel="noreferrer"><span>WhatsApp direct</span><small>Best offers</small></a>
            <a className="site-footer__partner site-footer__partner--zomato" href={zomatoUrl} target="_blank" rel="noreferrer">Order on Zomato <span aria-hidden="true">&#8599;</span></a>
            <a className="site-footer__partner site-footer__partner--swiggy" href="https://swiggy.com" target="_blank" rel="noreferrer">Order on Swiggy <span aria-hidden="true">&#8599;</span></a>
          </div>
        </section>
        <section>
          <h2>Follow along</h2>
          <p>Daily specials, kitchen clips, and healthy eating tips.</p>
          <div className="site-footer__social">
            <a href="https://www.instagram.com/eatprobow/" target="_blank" rel="noreferrer">Instagram</a>
            <a href={orderUrl} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </section>
      </div>
      <div className="site-footer__bottom">
        <span>&copy; {new Date().getFullYear()} PROBOW. All rights reserved. Clean vegetarian eating, delivered fresh daily.</span>
        <div><a href="#">Privacy policy</a><a href="#">Terms of service</a><a href="#">FSSAI license</a></div>
      </div>
      <p className="site-footer__credit">Website by <a href="https://ezygodigi.in" target="_blank" rel="noopener noreferrer nofollow">EzyGoDigi</a></p>
    </footer>
  );
}
