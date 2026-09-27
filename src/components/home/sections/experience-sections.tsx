import { process, audience, meals, zomatoUrl } from "@/components/home/content";
import { FeatureCard, SectionHeading } from "@/components/home/section-primitives";
export function Reviews() {
  const reviews = [
    { text: "Without a second thought just go for it, food was not only healthy but was yummy too, the veggies with tomato gravy and melted cheese was too good and even quantity was fair for the price.", author: "Krupaba Jadeja" },
    { text: "I had the best salad dish and it does serves 1 people easily and veggies and beans all stuff is completely fresh. Thank you made my stomach's day!", author: "Prince Chapla" },
    { text: "Excellent product! Quality is amazing and delivery was quick. Totally satisfied. Highly recommended!", author: "Satish Patel" },
  ];
  return <section className="home-section reviews-section" id="reviews"><div className="page-container"><div className="reviews-panel"><SectionHeading eyebrow="Customer love" title="Good food. Happy customers." description={<>PROBOW is rated <strong>4.4/5</strong> on Zomato from <strong>213 delivery ratings.</strong></>}/><div className="reviews-layout"><aside className="reviews-rating-card"><strong>4.4</strong><span aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><b>Zomato delivery rating</b><small>213 ratings</small><a href={zomatoUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">&#8599;</span> Read reviews on Zomato</a></aside><div className="reviews-grid">{reviews.map(({ text, author }) => <blockquote key={author}><header><span aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span><b>ZOMATO REVIEW</b></header><p>&ldquo;{text}&rdquo;</p><cite>{author}</cite></blockquote>)}</div></div></div></div></section>;
}

export function PreparationSteps() {
  return <section className="home-section process-section" id="process"><div className="page-container"><SectionHeading eyebrow="Our kitchen to your door" title="How your food is prepared &amp; delivered"/><div className="feature-grid">{process.map(([number,title,text]) => <FeatureCard key={number} number={number} title={title} text={text}/>)}</div></div></section>;
}


export function AudienceSection() {
  return <section className="home-section audience-section" id="audience"><div className="page-container"><SectionHeading eyebrow="Food for everyday life" title="Who enjoys PROBOW?"/><div className="feature-grid">{audience.map(([title,text],index) => <FeatureCard key={title} title={title} text={text} icon={index === 0 ? <svg viewBox="0 0 24 24"><path d="M3 5h18v12H3zM2 20h20M8 20l1-3m7 3-1-3M9 10l2-2 2 2m-4 4 2-2 2 2"/></svg> : index === 1 ? <svg viewBox="0 0 24 24"><path d="M3 9v6m3-8v10m12-10v10m3-8v6M6 12h12M9 10v4m6-4v4"/></svg> : <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>}/>)}</div></div></section>;
}


export function HealthyMeals() {
  return <section className="home-section healthy-meals" id="healthy-meals"><div className="page-container"><SectionHeading eyebrow="Made for real life" title="Healthy meals for every kind of day"/><div className="feature-grid">{meals.map(([title,text],index) => <FeatureCard key={title} number={`0${index + 1}`} title={title} text={text}/>)}</div></div></section>;
}
