"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { getMenuData, getProBowImageUrl, getProductPrice, type MenuCategory, type MenuPayload, type MenuProduct } from "@/lib/probow-api";
import { ProductCard } from "@/components/home/product-card";
import { ProductModal } from "@/components/home/product-modal";
import { TodaysPick } from "@/components/home/todays-pick";
import styles from "@/assets/style/home/menu-page.module.css";

const orderUrl = "https://wa.me/917874610393?text=Hi%20PROBOW%2C%20I%20want%20to%20order%20from%20the%20menu!";

function categoryName(category: MenuCategory) {
  return category.name || category.id.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function searchText(product: MenuProduct) {
  const price = getProductPrice(product);
  return [
    product.name, product.description,
    ...product.tags.map((tag) => tag.text || tag.type || ""),
    product.badge?.text, product.badge_text, price,
    product.price, product.discount_price, product.discount_percent, "1 read more choose customize add to cart",
  ].filter(Boolean).join(" ").toLowerCase();
}

export function MenuPageContent() {
  const [menu, setMenu] = useState<MenuPayload | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<MenuProduct | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCleared, setSearchCleared] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTriggerRef = useRef<HTMLButtonElement>(null);
  const categoryTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    void getMenuData().then((data) => { if (active) setMenu(data); });
    return () => { active = false; };
  }, []);

  const products = useMemo(() => (menu?.products || []).filter((product) => product.available !== false), [menu]);
  const categories = useMemo(() => {
    if (!menu) return [];
    return menu.categories.some((category) => category.id === "all")
      ? menu.categories
      : [{ id: "all", name: "All items", sort_order: 0 }, ...menu.categories];
  }, [menu]);

  const categoryProducts = useMemo(() => {
    if (selectedCategory !== "all") return products.filter((product) => String(product.category) === selectedCategory);
    const order = new Map(categories.map((category, index) => [String(category.id), Number(category.sort_order ?? index)]));
    return [...products].sort((a, b) => (order.get(String(a.category)) ?? 999999) - (order.get(String(b.category)) ?? 999999));
  }, [categories, products, selectedCategory]);

  const suggestions = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];
    return categoryProducts.filter((product) => searchText(product).includes(query)).slice(0, 6);
  }, [categoryProducts, searchQuery]);

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query) return categoryProducts.filter((product) => searchText(product).includes(query));
    return searchCleared ? [] : categoryProducts;
  }, [categoryProducts, searchCleared, searchQuery]);

  const openSearch = useCallback(() => {
    setSearchQuery("");
    setSearchCleared(false);
    setSearchOpen(true);
    window.requestAnimationFrame(() => searchInputRef.current?.focus());
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    setSearchQuery("");
    setSearchCleared(false);
    window.requestAnimationFrame(() => searchTriggerRef.current?.focus());
  }, []);

  const closeProductModal = useCallback(() => setSelectedProduct(null), []);

  useEffect(() => {
    if (!searchOpen) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") closeSearch(); };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeSearch, searchOpen]);

  useEffect(() => {
    if (window.location.hash === "#search") openSearch();
  }, [openSearch]);

  useEffect(() => {
    const track = categoryTrackRef.current;
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

  const selectCategory = (category: string) => {
    setSelectedCategory(category);
    document.getElementById("menu-list-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>
      <section className={styles.controls} aria-label="Search and filter menu">
        <button ref={searchTriggerRef} className={styles.searchTrigger} type="button" onClick={openSearch} aria-label="Open menu search">
          <span aria-hidden="true">&#9906;</span><span>Search &ldquo;salad&rdquo;</span>
        </button>
        <div ref={categoryTrackRef} className={styles.categories} role="tablist" aria-label="Menu categories">
          {categories.map((category) => {
            const image = getProBowImageUrl(category.image);
            return <button key={category.id} type="button" role="tab" aria-selected={selectedCategory === category.id} className={selectedCategory === category.id ? styles.categoryActive : ""} onClick={() => selectCategory(category.id)}>
              {image ? <Image src={image} alt="" width={34} height={34} unoptimized /> : <span className={styles.categoryIcon} aria-hidden="true">&#127835;</span>}
              <span>{categoryName(category)}</span>
            </button>;
          })}
        </div>
      </section>

      <header className={styles.hero}>
        <span className={styles.eyebrow}>Fresh from the PROBOW kitchen</span>
        <h1>The <em>PROBOW</em> Menu</h1>
        <p>Healthy vegetarian food in Rajkot, made fresh to order. Explore our rice bowls, salads, artisan pastas and smoothies.</p>
        <div className={styles.highlights} aria-label="PROBOW food highlights">
          <span><b aria-hidden="true">&#10003;</b> 100% pure veg</span><span><b aria-hidden="true">&#8856;</b> No preservatives</span><span><b aria-hidden="true">&#9832;</b> Made fresh daily</span>
        </div>
      </header>

      {searchOpen && <div className={styles.searchView} role="presentation">
        <div className={styles.searchShell} role="dialog" aria-modal="true" aria-label="Search the PROBOW menu">
          <div className={styles.searchTopbar}>
            <button className={styles.backButton} type="button" onClick={closeSearch} aria-label="Back to menu">&#8592;</button>
            <div className={styles.searchInputWrap}>
              <span aria-hidden="true">&#9906;</span>
              <input ref={searchInputRef} type="search" autoComplete="off" inputMode="search" placeholder="Search dishes..." aria-label="Search menu items" value={searchQuery} onChange={(event) => { setSearchQuery(event.target.value); setSearchCleared(!event.target.value.trim()); }} />
              {searchQuery && <button type="button" onClick={() => { setSearchQuery(""); setSearchCleared(true); searchInputRef.current?.focus(); }} aria-label="Clear search">&#10005;</button>}
            </div>
          </div>
          <div className={styles.searchContent}>
            <div className={styles.searchHeading}><span className={styles.eyebrow}>Find your bowl</span><h2>What are you craving?</h2><p>Search our complete PROBOW menu by dish, ingredient, or keyword.</p></div>
            {suggestions.length > 0 && <div className={styles.suggestions} aria-live="polite">{suggestions.map((product) => {
              const image = getProBowImageUrl(product.images[0]);
              return <button className={styles.suggestion} type="button" key={product.id} onClick={() => { setSearchQuery(product.name); setSearchCleared(false); searchInputRef.current?.focus(); }}>
                {image && <img src={image} alt="" />}<span><strong>{product.name}</strong><small>&#8377;{getProductPrice(product)}</small></span>
              </button>;
            })}</div>}
            {!searchCleared && <div className={styles.resultsHead}><span>Search results</span><span>{searchResults.length} {searchResults.length === 1 ? "item" : "items"}</span></div>}
            {searchResults.length > 0
              ? <div className={styles.searchResults} aria-live="polite">{searchResults.map((product) => <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} />)}</div>
              : searchQuery.trim() && <div className={styles.searchEmpty} role="status"><strong>Nothing found</strong><span>Try another dish, ingredient, or keyword.</span></div>}
          </div>
        </div>
      </div>}

      <TodaysPick products={products.filter((product) => product.featured?.todayPick)} onOpen={setSelectedProduct} />

      <section className={styles.menuSection} id="menu-list-section" aria-labelledby="our-menu-heading">
        <div className={styles.menuHeading}><div><span className={styles.kicker}>PROBOW / Menu</span><h2 id="our-menu-heading">Our Menu</h2></div><p>Fresh vegetarian bowls, salads, artisan pastas and smoothies, made to order.</p></div>
        {!menu ? <div className={styles.loading} role="status">Loading today&apos;s menu...</div>
          : categoryProducts.length > 0
            ? <div className={styles.productGrid}>{categoryProducts.map((product) => <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} />)}</div>
            : <div className={styles.empty} role="status"><strong>No menu items found</strong><span>Try another category.</span></div>}
      </section>

      <section className={styles.bottomCta} aria-label="Order PROBOW">
        <span className={styles.eyebrow}>Hungry already?</span><h2>Fresh food is one WhatsApp away.</h2>
        <p>Order directly from PROBOW in Malviya Nagar, Rajkot for special offers and fresh delivery.</p>
        <a href={orderUrl} target="_blank" rel="noopener noreferrer">&#9742; Order on WhatsApp</a>
      </section>

      {selectedProduct && <ProductModal product={selectedProduct} products={products} onClose={closeProductModal} />}
    </div>
  );
}

