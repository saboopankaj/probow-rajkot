import styles from "@/assets/style/home/featured-marquee.module.css";

const featuredItems = [
  { name: "Crunch Salad", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=240&q=85" },
  { name: "Tabbouleh Bowl", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=240&q=85" },
  { name: "Berry Smoothie", image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=240&q=85" },
  { name: "Basil Pesto Pasta", image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281270?auto=format&fit=crop&w=240&q=85" },
  { name: "Tomato Cheese Bowl", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=240&q=85" },
];

function FeaturedItems({ decorative = false }: { decorative?: boolean }) {
  return <div className={styles.group} aria-hidden={decorative || undefined}>
    {featuredItems.map((item) => <div className={styles.item} key={item.name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.image} alt={decorative ? "" : item.name} width="80" height="80" loading="lazy" />
      <span>{item.name}</span>
    </div>)}
  </div>;
}

export function FeaturedMarquee() {
  return <div className={styles.featuredMarquee}>
    <div className={styles.ticker} role="region" aria-label="Featured menu items">
      <div className={styles.track}><FeaturedItems /><FeaturedItems decorative /></div>
    </div>
    <div className={styles.benefits}>
      <div className={styles.benefitsInner}>
        <span><b aria-hidden="true">&#127807;</b> 100% pure veg</span>
        <span><b aria-hidden="true">&#128683;</b> No preservatives</span>
        <span><b aria-hidden="true">&#128293;</b> Made fresh daily</span>
        <span><b aria-hidden="true">&#127873;</b> Eco bowl packaging</span>
      </div>
    </div>
  </div>;
}
