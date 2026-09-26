"use client";

import { useEffect, useState } from "react";
import type { MenuProduct } from "@/lib/probow-api";
import { getProBowImageUrl, getProductPrice } from "@/lib/probow-api";

export function ProductCard({ product, onOpen }: { product: MenuProduct; onOpen: (product: MenuProduct) => void }) {
  const images = product.images.map(getProBowImageUrl).filter(Boolean);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setImageIndex((index) => (index + 1) % images.length), 3600);
    return () => window.clearInterval(timer);
  }, [images.length]);
  const originalPrice = Number(product.price) || 0;
  const price = getProductPrice(product);
  const discount = price < originalPrice ? Number(product.discount_percent) || Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  const badge = product.badge?.text || product.badge_text;
  const image = images[imageIndex];

  return (
    <article className="product-card">
      <div className="product-card__media">
        {image ? <img src={image} alt={product.name} loading="lazy" /> : <div className="product-card__no-image" aria-label={`Photo unavailable for ${product.name}`} />}
        {badge && <span className="product-card__badge">{badge}</span>}
        {images.length > 1 && <div className="product-card__carousel-dots" aria-label={`${images.length} photos; photo ${imageIndex + 1} shown`}>
          {images.map((src, index) => <span key={`${src}-${index}`} className={index === imageIndex ? "is-active" : ""} />)}
        </div>}
      </div>
      <div className="product-card__content">
        <div className="product-card__tags">{product.tags.slice(0, 3).map((tag, index) => <span key={`${tag.type || tag.text}-${index}`}>{tag.text}</span>)}</div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <button className="product-card__read-more" type="button" onClick={() => onOpen(product)}>Read more</button>
        <div className="product-card__bottom">
          <div className="product-card__price"><strong>&#8377;{price}</strong>{discount > 0 && <><del>&#8377;{originalPrice}</del><small>{discount}% OFF</small></>}</div>
          <button className="product-card__view" type="button" onClick={() => onOpen(product)}>Choose <span aria-hidden="true">+</span></button>
        </div>
      </div>
    </article>
  );
}
