export function ContentImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  // Source uses remote CDN images supplied by PROBOW and Unsplash.
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={src} alt={alt} loading="lazy" />;
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function FeatureCard({ title, text, number }: { title: string; text: string; number?: string }) {
  return <article className="feature-card">{number ? <span className="feature-card__number">{number}</span> : <span className="feature-card__icon" aria-hidden="true">&#10022;</span>}<h3>{title}</h3><p>{text}</p></article>;
}
