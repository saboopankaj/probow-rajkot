"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { image: "brocco-crunch-salad.webp", name: "Brocco Crunch Salad" },
  { image: "fiest-pizza-rice.webp", name: "Fiesta Pizza Rice" },
  { image: "lemon-brocoli-rice.webp", name: "Lemon Broccoli Rice" },
  { image: "waktak-salad-bowl.webp", name: "WakTak Salad Bowl" },
  { image: "meditarian-hammus-bowl.webp", name: "Mediterranean Hummus Bowl" },
  { image: "onepot-rice-bowl.webp", name: "One Pot Rice Bowl" },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(1);
  const [paused, setPaused] = useState(false);
  const current = slides[index];
  const previous = () => setIndex((value) => (value - 1 + slides.length) % slides.length);
  const next = () => setIndex((value) => (value + 1) % slides.length);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div className="hero-visual" aria-label="Fresh PROBOW food">
      <div className="hero-visual__background">
        <Image key={current.image} className="hero-visual__image" src={`/assets/images/hero-carousel/${current.image}`} alt={current.name} fill priority sizes="(max-width: 768px) 100vw, 55vw" unoptimized />
        <div className="hero-visual__shade" />
        <span className="fresh-label"><i /> Freshly prepared</span>
        <p className="hero-visual__caption" aria-live="polite"><span>{String(index + 1).padStart(2, "0")}</span>{current.name}</p>
        <div className="hero-visual__footer">
          <div className="hero-visual__copy">
            <p className="hero-visual__message">Real food.<br />Made with care.</p>
          </div>
          <div className="hero-visual__controls" aria-label="Featured food carousel controls">
            <div className="hero-visual__dots" aria-label="Choose featured dish">
              {slides.map((slide, dotIndex) => <button key={slide.image} type="button" className={dotIndex === index ? "is-active" : ""} aria-label={`Show ${slide.name}`} aria-current={dotIndex === index ? "true" : undefined} onClick={() => setIndex(dotIndex)} />)}
            </div>
            <div className="hero-visual__arrows">
              <button type="button" onClick={previous} aria-label="Previous featured dish">&#8592;</button>
              <button className="hero-visual__pause" type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Resume slideshow" : "Pause slideshow"} aria-pressed={paused}><span aria-hidden="true">{paused ? ">" : "||"}</span></button>
              <button type="button" onClick={next} aria-label="Next featured dish">&#8594;</button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <span className="hero-visual__badge"><span aria-hidden="true">&#10022;</span> Healthy, never boring</span>
*/}
      <div className="home-hero__partners"><span>Also order on</span><a className="partner-zomato" href="https://link.zomato.com/xqzv/rshare?id=13135322730563ae8" target="_blank" rel="noreferrer">Zomato</a><a className="partner-swiggy" href="https://swiggy.com" target="_blank" rel="noreferrer">Swiggy</a></div>
    </div>
  );
}
