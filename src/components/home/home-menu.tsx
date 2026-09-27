"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { getMenuData, getProBowImageUrl, type MenuCategory, type MenuPayload, type MenuProduct } from "@/lib/probow-api";
import { ProductCard } from "@/components/home/product-card";
import { ProductModal } from "@/components/home/product-modal";
import { TodaysPick } from "@/components/home/todays-pick";

const orderUrl = "https://wa.me/917874610393?text=Hi%20PROBOW%2C%20I%20want%20to%20order!";

function categoryName(category: MenuCategory | undefined, id: string) {
  return category?.name || id.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

export function HomeMenu({ beforeMenu }: { beforeMenu?: ReactNode }) {
  const [menu, setMenu] = useState<MenuPayload | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<MenuProduct | null>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    void getMenuData().then((data) => { if (active) setMenu(data); });
    return () => { active = false; };
  }, []);

  const availableProducts = useMemo(() => (menu?.products || []).filter((product) => product.available !== false), [menu]);
  const featuredProducts = useMemo(() => availableProducts.filter((product) => product.featured?.todayPick), [availableProducts]);
  const categories = useMemo(() => {
    if (!menu) return [];
    const hasAll = menu.categories.some((category) => category.id === "all");
    return hasAll ? menu.categories : [{ id: "all", name: "All items", sort_order: 0 }, ...menu.categories];
  }, [menu]);
  useEffect(() => {
    const track = categoriesRef.current;
    if (!track || !window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      const items = Array.from(track.querySelectorAll<HTMLElement>("button"));
      if (!items.length) return;
      const next = items.find((item) => item.offsetLeft > track.scrollLeft + 8);
      if (!next || next.offsetLeft + next.offsetWidth >= track.scrollLeft + track.clientWidth - 4) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollTo({ left: next.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }, 3200);
    return () => window.clearInterval(timer);
  }, [categories.length]);

  const filteredProducts = useMemo(() => availableProducts.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesQuery = `${product.name} ${product.description || ""} ${product.tags.map((tag) => tag.text || "").join(" ")}`.toLowerCase().includes(query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  }), [availableProducts, selectedCategory, query]);

  return (
    <>
      <TodaysPick products={featuredProducts} onOpen={setSelectedProduct} />
      {beforeMenu}
      <section className="home-menu" id="menu" aria-labelledby="menu-heading">
        <div className="page-container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">The Menu</span>
            <h2 id="menu-heading">Fresh, macro-balanced, made to order</h2>
          </div>
          {!menu ? <div className="menu-loading" role="status"><span className="menu-loading__spinner" />Loading today's menu...</div> : <>
            <div className="home-menu__controls">
              <div ref={categoriesRef} className="home-menu__categories" role="group" aria-label="Menu categories">
                {categories.map((category) => <button id={`category-${category.id}`} key={category.id} type="button" className={selectedCategory === category.id ? "is-active" : ""} aria-pressed={selectedCategory === category.id} onClick={() => setSelectedCategory(category.id)}>{getProBowImageUrl(category.image) && <Image className="home-menu__category-image" src={getProBowImageUrl(category.image)} alt="" width={34} height={34} unoptimized />}<span>{category.name || categoryName(category, category.id)}</span></button>)}
              </div>
              <label className="home-menu__search"><span className="visually-hidden">Search dishes</span><span aria-hidden="true">&#9906;</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search dishes..." /></label>
            </div>
            {filteredProducts.length ? <div className="home-menu__grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} />)}</div> : <div className="home-menu__empty"><h3>No dishes found</h3><p>Try a different search or choose another category.</p><button type="button" onClick={() => { setQuery(""); setSelectedCategory("all"); }}>Show all dishes</button></div>}
          </>}
          <div className="home-menu__footer"><span>Showing {filteredProducts.length} of {availableProducts.length} dishes</span><a href={orderUrl} target="_blank" rel="noreferrer">Ask about today's menu <span aria-hidden="true">&#8599;</span></a></div>
        </div>
      </section>
      {selectedProduct && menu && <ProductModal product={selectedProduct} products={availableProducts} onClose={() => setSelectedProduct(null)} />}
    </>
  );
}
