"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Menu", href: "/menu" },
  { label: "How it's made", href: "/#process" },
  { label: "Delivery", href: "/#delivery" },
  { label: "Packaging", href: "/#packaging" },
  { label: "Story", href: "/#story" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact_us" },
];

const orderUrl = "https://wa.me/917874610393?text=Hi%20PROBOW%2C%20I%20want%20to%20order!";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" href="/" aria-label="PROBOW home" onClick={closeMenu}>
          <Image src="/assets/images/brand-logo/logo-green.png" alt="PROBOW - healthy but not boring" width={440} height={130} priority unoptimized />
        </Link>

        <nav className="site-header__desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => item.href.startsWith("/")
            ? <Link href={item.href} key={item.label}>{item.label}</Link>
            : <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>

        <div className="site-header__actions">
          <a className="site-header__order" href={orderUrl} target="_blank" rel="noreferrer" aria-label="Order now on WhatsApp">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l1 12H5L6 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/><path d="M9 12h6"/></svg><span>Order now</span>
          </a>
          <button className="site-header__hamburger" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`site-header__mobile-nav${menuOpen ? " is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!menuOpen} inert={!menuOpen}>
        {navigation.map((item) => item.href.startsWith("/")
          ? <Link href={item.href} key={item.label} onClick={closeMenu}>{item.label}</Link>
          : <a href={item.href} key={item.label} onClick={closeMenu}>{item.label}</a>)}
        <a className="site-header__mobile-order" href={orderUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Order on WhatsApp</a>
      </nav>
    </header>
  );
}
