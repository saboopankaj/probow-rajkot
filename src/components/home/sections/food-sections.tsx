import Link from "next/link";
import { categoryCards, values } from "@/components/home/content";
import { ContentImage, FeatureCard, SectionHeading } from "@/components/home/section-primitives";
export function FoodCategories() {
  return <section className="home-section food-categories" id="food-categories"><div className="page-container"><SectionHeading eyebrow="Explore our food" title="Something for every craving" description="From wholesome salads and filling rice bowls to comforting Maggie Mania and refreshing drinks, explore the PROBOW menu."/><div className="category-grid">{categoryCards.map((item) => <Link className="category-card" href={`/menu#category-${item.id}`} key={item.id}><div className="category-card__image"><ContentImage src={item.image} alt={item.name} /></div><div className="category-card__copy"><h3>{item.name}</h3><p>{item.text}</p><span>Explore the menu <b aria-hidden="true">&#8594;</b></span></div></Link>)}</div></div></section>;
}


export function IngredientsSection() {
  return <section className="home-section ingredients-section" id="ingredients"><div className="page-container ingredients-section__grid"><div><SectionHeading eyebrow="Inside the bowl" title="Simple food, thoughtfully put together" description="PROBOW brings fresh vegetables, grains, vegetarian protein sources, herbs, sauces and toppings together in meals designed to be colourful, filling and enjoyable."/><ul className="ingredients-section__tags"><li>Fresh vegetables</li><li>Grains &amp; bowls</li><li>Vegetarian protein</li><li>Fresh herbs &amp; sauces</li></ul><Link className="ingredients-section__cta" href="/menu">Explore the menu <span aria-hidden="true">&#8594;</span></Link></div><ContentImage src="https://assets.probow.in/probo/categories/rice-bowls.webp" alt="A colourful PROBOW rice bowl" className="ingredients-section__image" /></div></section>;
}


export function HealthyFoodIntro() {
  return <section className="home-section healthy-intro" id="healthy-food-rajkot"><div className="page-container"><SectionHeading eyebrow="Healthy food in Rajkot" title="Fresh vegetarian food that does not feel like diet food" description="PROBOW is a vegetarian food brand serving fresh, satisfying meals in Rajkot. Our menu brings together rice bowls, salads, comfort-food favourites and refreshing drinks, prepared fresh to order."/><p>Whether you are looking for a convenient office lunch, a filling everyday meal or a protein-focused vegetarian option, PROBOW keeps food colourful, balanced and full of flavour.</p><Link className="text-link" href="/healthy-food-rajkot">Discover healthy food in Rajkot <span aria-hidden="true">&#8594;</span></Link></div></section>;
}


export function WhyProBow() {
  return <section className="home-section why-probow" id="why-probow"><div className="page-container"><SectionHeading eyebrow="Why PROBOW" title="Good ingredients. Smart choices. Great food." description="Healthy eating should be convenient, satisfying and genuinely enjoyable."/><div className="feature-grid">{values.map(([title,text]) => <FeatureCard key={title} title={title} text={text}/>)}</div></div></section>;
}
