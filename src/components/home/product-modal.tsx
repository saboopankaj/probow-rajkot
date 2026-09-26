"use client";

import { useEffect, useMemo, useState } from "react";
import { getProBowImageUrl, getProductPrice, type MenuProduct } from "@/lib/probow-api";

function RemoteImage({ src, alt }: { src: string; alt: string }) {
  if (!src) return <div className="product-modal__image-empty" />;
  // Product image hosts are returned by the existing API and may vary by item.
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} />;
}

export function ProductModal({ product, products, onClose }: { product: MenuProduct; products: MenuProduct[]; onClose: () => void }) {
  const [quantity, setQuantity] = useState(1);
  const [variantIndex, setVariantIndex] = useState(-1);
  const [relatedQuantities, setRelatedQuantities] = useState<Record<string, number>>({});
  const variants = product.variants || [];
  const related = useMemo(() => (product.relatedProducts || []).map((id) => products.find((item) => String(item.id) === String(id))).filter((item): item is MenuProduct => Boolean(item && item.available !== false && String(item.id) !== String(product.id))), [product, products]);
  const basePrice = getProductPrice(product);
  const selectedVariant = variantIndex >= 0 ? variants[variantIndex] : null;
  const variantPrice = Number(selectedVariant?.price) || 0;
  const productTotal = (basePrice + variantPrice) * quantity;
  const relatedTotal = related.reduce((sum, item) => sum + getProductPrice(item) * (relatedQuantities[String(item.id)] || 0), 0);
  const total = productTotal + relatedTotal;
  const mainImage = getProBowImageUrl(product.images[0]);
  const messageParts = [
    `Hi PROBOW, I want to order: Item: ${product.name}${selectedVariant ? ` Add-ons: ${selectedVariant.name || selectedVariant.label || "Selected option"}` : ""}`,
    `Quantity: ${quantity} Price: \u20b9${productTotal}`,
    ...related.filter((item) => relatedQuantities[String(item.id)]).map((item) => `Additional item: ${item.name} Quantity: ${relatedQuantities[String(item.id)]} Price: \u20b9${getProductPrice(item) * relatedQuantities[String(item.id)]}`),
    `Total: \u20b9${total}`,
    "To confirm your order, please pay: https://razorpay.me/@probow Once payment is done, please share a screenshot of the payment and call/message us on WhatsApp.",
  ];
  const checkoutUrl = `https://wa.me/917874610393?text=${encodeURIComponent(messageParts.join(" "))}`;

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = oldOverflow; window.removeEventListener("keydown", closeOnEscape); };
  }, [onClose]);

  return (
    <div className="product-modal__overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
        <button className="product-modal__close" type="button" aria-label="Close product details" onClick={onClose}>&#10005;</button>
        <div className="product-modal__main">
          <div className="product-modal__media"><RemoteImage src={mainImage} alt={product.name} /></div>
          <div className="product-modal__details">
            <div className="product-modal__kicker">Your selection</div>
            <h2 id="product-modal-title">{product.name}</h2>
            <div className="product-modal__tags" aria-label="Food type">{product.tags.map((tag, index) => <span key={`${tag.type || tag.text}-${index}`}>{tag.text || tag.type}</span>)}</div>
            <p className="product-modal__description">{product.description}</p>
            {variants.length > 0 && <fieldset className="product-modal__variants"><legend>Select portion / size</legend><label><input type="radio" name="portion" checked={variantIndex === -1} onChange={() => setVariantIndex(-1)} /><span>Standard portion</span><b>&#8377;{basePrice}</b></label>{variants.map((variant, index) => <label key={variant.id ?? index}><input type="radio" name="portion" checked={variantIndex === index} onChange={() => setVariantIndex(index)} /><span>{variant.name || variant.label || "Option"}</span><b>+ &#8377;{Number(variant.price) || 0}</b></label>)}</fieldset>}
            <div className="product-modal__quantity"><div><strong>Quantity</strong><small>Choose how many you'd like</small></div><div className="quantity-stepper"><button type="button" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity((value) => Math.max(1, value - 1))}>&#8722;</button><span aria-live="polite">{quantity}</span><button type="button" aria-label="Increase quantity" disabled={quantity >= 99} onClick={() => setQuantity((value) => Math.min(99, value + 1))}>+</button></div></div>
            <div className="product-modal__delivery"><span aria-hidden="true">&#128666;</span><span><b>FREE DELIVERY</b> on orders above &#8377;249</span></div>
          </div>
        </div>
        {related.length > 0 && <section className="product-modal__related"><h3>Complete your meal</h3><div>{related.map((item) => { const id = String(item.id); const count = relatedQuantities[id] || 0; const image = getProBowImageUrl(item.images[0]); return <article key={id} className="related-product"><div className="related-product__image">{image && <RemoteImage src={image} alt="" />}</div><div><strong>{item.name}</strong><span>&#8377;{getProductPrice(item)}</span></div>{count === 0 ? <button type="button" onClick={() => setRelatedQuantities((current) => ({ ...current, [id]: 1 }))}>ADD +</button> : <div className="related-product__stepper"><button type="button" aria-label={`Remove one ${item.name}`} onClick={() => setRelatedQuantities((current) => ({ ...current, [id]: Math.max(0, (current[id] || 0) - 1) }))}>&#8722;</button><span>{count}</span><button type="button" aria-label={`Add one ${item.name}`} onClick={() => setRelatedQuantities((current) => ({ ...current, [id]: (current[id] || 0) + 1 }))}>+</button></div>}</article>; })}</div></section>}
        <footer className="product-modal__footer"><div><span>Total</span><strong>&#8377;{total}</strong></div><a id="modalWaBtn" href={checkoutUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">&#9742;</span>Order on WhatsApp</a></footer>
      </section>
    </div>
  );
}
