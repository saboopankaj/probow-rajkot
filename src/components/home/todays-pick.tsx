"use client";

import { useState } from "react";
import Image from "next/image";
import { getProBowImageUrl, getProductPrice, type MenuProduct } from "@/lib/probow-api";

export function TodaysPick({ products, onOpen }: { products: MenuProduct[]; onOpen: (product: MenuProduct) => void }) {
  const [index, setIndex] = useState(0);
  if (!products.length) return null;
  const product = products[index % products.length];
  const image = getProBowImageUrl(product.images[0]);
  const price = getProductPrice(product);
  const move = (step: number) => setIndex((value) => (value + step + products.length) % products.length);

  return (
    <section className="todays-pick" id="todaysPickSection" aria-labelledby="todays-pick-title">
      <div className="todays-pick__inner">
        <header className="todays-pick__header">
          <h2><span aria-hidden="true">&#9832;</span> CHEF&apos;S SPECIAL TODAY</h2>
          <div className="todays-pick__arrows">
            <button type="button" onClick={() => move(-1)} aria-label="Previous chef special">&#8592;</button>
            <button type="button" onClick={() => move(1)} aria-label="Next chef special">&#8594;</button>
          </div>
        </header>
        <div className="todays-pick__feature" aria-live="polite">
          <div className="todays-pick__image">{image && <Image src={image} alt={product.name} width={720} height={560} unoptimized />}</div>
          <div className="todays-pick__copy">
            <span className="todays-pick__eyebrow">Handpicked for you</span>
            <h3 id="todays-pick-title">{product.name}</h3>
            <p>{product.description}</p>
            <div className="todays-pick__order"><strong>&#8377;{price}</strong><button type="button" onClick={() => onOpen(product)}>Choose yours <span aria-hidden="true">&#8594;</span></button></div>
          </div>
        </div>
      </div>
      <div className="todays-pick__promise"><span>&#10003; <b>PURE VEG</b></span><span>&#10003; <b>NO PRESERVATIVES</b></span><span>&#10003; <b>ECO PACKAGING</b></span><span>&#10003; <b>MADE FRESH DAILY</b></span></div>
    </section>
  );
}
