import { values, process, audience, meals, zomatoUrl } from "@/components/home/content";
import { FeatureCard, SectionHeading } from "@/components/home/section-primitives";
export function Reviews() {
  const reviews = [
    "Without a second thought just go for it, food was not only healthy but was yummy too, the veggies with tomato gravy and melted cheese was too good and even quantity was fair for the price.",
    "I had the best salad dish and it does serves 1 people easily and veggies and beans all stuff is completely fresh. Thank you made my stomach's day!",
    "Excellent product! Quality is amazing and delivery was quick. Totally satisfied. Highly recommended!",
  ];
  return <section className="home-section reviews-section" id="reviews"><div className="page-container"><SectionHeading eyebrow="Loved in Rajkot" title="Good food. Happy customers." description="PROBOW is rated 4.4/5 on Zomato from 213 delivery ratings."/><div className="reviews-section__rating"><strong>4.4</strong><span aria-label="4.4 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span><small>213 delivery ratings</small><a href={zomatoUrl} target="_blank" rel="noreferrer">See PROBOW on Zomato <span aria-hidden="true">&#8599;</span></a></div><div className="reviews-grid">{reviews.map((review) => <blockquote key={review}><span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span><p>&ldquo;{review}&rdquo;</p></blockquote>)}</div></div></section>;
}


export function PreparationSteps() {
  return <section className="home-section process-section" id="process"><div className="page-container"><SectionHeading eyebrow="Our kitchen to your door" title="How your food is prepared &amp; delivered"/><div className="feature-grid">{process.map(([number,title,text]) => <FeatureCard key={number} number={number} title={title} text={text}/>)}</div></div></section>;
}


export function AudienceSection() {
  return <section className="home-section audience-section" id="audience"><div className="page-container"><SectionHeading eyebrow="Food for everyday life" title="Who enjoys PROBOW?"/><div className="feature-grid">{audience.map(([title,text],index) => <FeatureCard key={title} number={`0${index + 1}`} title={title} text={text}/>)}</div></div></section>;
}


export function HealthyMeals() {
  return <section className="home-section healthy-meals" id="healthy-meals"><div className="page-container"><SectionHeading eyebrow="Made for real life" title="Healthy meals for every kind of day"/><div className="feature-grid">{meals.map(([title,text],index) => <FeatureCard key={title} number={`0${index + 1}`} title={title} text={text}/>)}</div></div></section>;
}
