import { DeliveryTerms } from "@/components/home/delivery-terms";
import { orderUrl, zomatoUrl } from "@/components/home/content";
import { ContentImage, SectionHeading } from "@/components/home/section-primitives";
export function DeliverySection() {
  return <section className="home-section delivery-section" id="delivery"><div className="page-container"><div className="delivery-section__inner"><div className="delivery-section__icon" aria-hidden="true">&#128757;</div><div className="delivery-section__copy"><span className="eyebrow">Fresh from our kitchen to your door</span><h2>FREE DELIVERY on orders above &#8377;249</h2><p>Enjoy <strong>free delivery within 3 km</strong> of our kitchen, with delivery charges covered up to <strong>&#8377;50</strong>. Deliveries are fulfilled through <strong>Rapido and other available delivery partners</strong>, subject to availability.</p><ul className="delivery-section__perks"><li><span aria-hidden="true">&#9673;</span> Within 3 km</li><li><span aria-hidden="true">&#8377;</span> Free on &#8377;249+</li><li><span aria-hidden="true">&#128757;</span> Rapido &amp; delivery partners</li></ul><div className="delivery-section__actions"><DeliveryTerms /><a className="delivery-section__order" href={orderUrl} target="_blank" rel="noreferrer">Check availability on WhatsApp <span aria-hidden="true">&#8599;</span></a></div></div></div></div></section>;
}

export function PackagingSection() {
  return <section className="home-section packaging-section" id="packaging"><div className="page-container packaging-section__grid"><div className="packaging-section__visual"><ContentImage src="https://assets.probow.in/probo/categories/packaging-probow.webp" alt="PROBOW food packaging"/><ContentImage src="https://assets.probow.in/probo/products/12/01.jpg" alt="A PROBOW meal packed for delivery"/></div><div><SectionHeading eyebrow="From our kitchen to your table" title="Delivered clean, served fresh" description="Our custom round paper bowls keep dressings fresh, veggies crisp, and rice warm without sogginess."/><ul className="check-list"><li>100% recyclable food-grade kraft bowls</li><li>Spill-proof lids &amp; clean thermal bags</li><li>Wooden cutlery &amp; hygienic napkins included</li><li>Zero plastic odor &mdash; safe eating</li></ul></div></div></section>;
}


export function RajkotDelivery() {
  return <section className="home-section rajkot-delivery" id="rajkot-delivery"><div className="page-container"><SectionHeading eyebrow="Freshly prepared in Nana Mava" title="Healthy food delivery in Rajkot" description="PROBOW delivers fresh vegetarian meals across selected areas of Rajkot. Availability depends on your exact location."/><a className="button button--dark" href={orderUrl} target="_blank" rel="noreferrer">Check delivery availability</a></div></section>;
}


export function DeliveryZones() {
  return <section className="home-section delivery-zones" id="zones"><div className="page-container delivery-zones__inner"><div><span className="eyebrow">Across Rajkot</span><h2>We deliver straight to your doorstep</h2><p>Order directly on WhatsApp for special discounts, or find us on Zomato &amp; Swiggy.</p><div className="delivery-zones__tags"><span>Corporate offices</span><span>Tech parks &amp; hubs</span><span>Residential apartments</span><span>Gyms &amp; fitness centers</span></div></div><div className="delivery-zones__actions"><a className="button button--dark" href={orderUrl} target="_blank" rel="noreferrer">Order direct on WhatsApp</a><a className="button button--outline" href={zomatoUrl} target="_blank" rel="noreferrer">Order on Zomato</a><a className="button button--outline" href="https://swiggy.com" target="_blank" rel="noreferrer">Order on Swiggy</a></div></div></section>;
}


export function OfficeMeals() {
  const officeUrl = "https://wa.me/917874610393?text=Hi%20PROBOW,%20I%20want%20to%20know%20about%20office%20or%20corporate%20meal%20orders%20in%20Rajkot!";
  return <section className="home-section office-meals" id="office-meals"><div className="page-container office-meals__inner"><div><span className="eyebrow">For workdays</span><h2>Healthy office meals &amp; corporate food delivery in Rajkot</h2><p>Looking for convenient vegetarian meals for an office, team or workplace? PROBOW offers fresh bowls, salads and other vegetarian options for busy workdays.</p></div><a className="button button--leaf" href={officeUrl} target="_blank" rel="noreferrer">Ask about office orders <span aria-hidden="true">&#8599;</span></a></div></section>;
}
