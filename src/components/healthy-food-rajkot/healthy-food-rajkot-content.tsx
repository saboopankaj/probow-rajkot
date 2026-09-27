import Link from "next/link";
import { ContentImage } from "@/components/home/section-primitives";

export function HealthyFoodRajkotContent() {
  return <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <div className="seo-page">
      <section className="seo-hero">
        <div className="seo-hero-copy">
          <span className="eyebrow">Healthy, but never boring</span>
          <h1>Healthy food in <em>Rajkot</em> that you actually want to eat.</h1>
          <p className="lead">Fresh vegetarian rice bowls, colourful salads, artisan pastas and refreshing beverages &mdash; prepared to order with a focus on clean ingredients, balanced meals and great taste.</p>
          <div className="seo-actions">
            <Link className="seo-btn primary" href="/menu"><i className="fa-solid fa-utensils" aria-hidden="true" />Explore the Menu</Link>
            <a className="seo-btn secondary" href="#how-we-prepare">How we prepare</a>
          </div>
        </div>
        <div className="seo-hero-art">
          <ContentImage src="https://assets.probow.in/probo/products/2/01.webp" alt="Fresh healthy vegetarian salad bowl at PROBOW in Rajkot" />
          <div className="seo-hero-badge"><i className="fa-solid fa-leaf" aria-hidden="true" />100% vegetarian</div>
        </div>
      </section>

      <section className="seo-section">
        <div className="seo-wrap">
          <div className="seo-head">
            <span className="eyebrow">More than a salad</span>
            <h2>What makes PROBOW different?</h2>
            <p>Healthy food should be colourful, satisfying and full of flavour &mdash; not something you have to force yourself to eat.</p>
          </div>
          <div className="seo-grid">
            <article className="seo-card"><div className="icon"><i className="fa-solid fa-seedling" aria-hidden="true" /></div><h3>100% vegetarian</h3><p>Our menu is built around vegetarian ingredients, from hearty rice bowls and paneer to fresh vegetables, grains and salads.</p></article>
            <article className="seo-card"><div className="icon"><i className="fa-solid fa-bowl-food" aria-hidden="true" /></div><h3>Balanced bowls</h3><p>Our bowls combine a filling base with vegetables, flavourful toppings and sauces so a healthy meal still feels like a proper meal.</p></article>
            <article className="seo-card"><div className="icon"><i className="fa-solid fa-kitchen-set" aria-hidden="true" /></div><h3>Made to order</h3><p>We prepare food fresh rather than treating healthy eating as a pre-packed, one-size-fits-all experience.</p></article>
          </div>
        </div>
      </section>

      <section className="probow-rajkot-story">
        <div className="probow-rajkot-story-inner">
          <div className="probow-rajkot-story-top">
            <div><span className="eyebrow">Why PROBOW in Rajkot?</span><h2>Bringing the world&apos;s <em>interesting food</em> closer to home.</h2></div>
            <p>PROBOW started with a simple question: why should discovering interesting healthy food require looking far beyond your own city?</p>
          </div>
          <div className="probow-rajkot-story-main">
            <div className="probow-rajkot-story-copy">
              <span className="probow-rajkot-number">01</span>
              <h3>From Bengaluru experience to a new food idea in Rajkot.</h3>
              <p>Our founder spent two years running a café in Bengaluru, an experience that helped us understand how people&apos;s food preferences change and how much customers value both familiarity and variety.</p>
              <p>That experience became part of the thinking behind PROBOW in Rajkot: create healthy vegetarian food that feels exciting, satisfying and different from the usual options.</p>
            </div>
            <div className="probow-rajkot-story-points">
              <div className="probow-rajkot-point"><span>02</span><div><h4>Discover global food</h4><p>We take inspiration from dishes and food styles from different parts of the world, including Mediterranean-inspired bowls and international salads.</p></div></div>
              <div className="probow-rajkot-point"><span>03</span><div><h4>Make it our own</h4><p>We add our own flavour approach and, where appropriate, a little Indian spice so the food feels interesting while still being enjoyable for local tastes.</p></div></div>
              <div className="probow-rajkot-point"><span>04</span><div><h4>Keep discovering</h4><p>From healthy bowls and rice bowls to salads and other global inspirations, the menu is designed around variety and experimentation.</p></div></div>
            </div>
          </div>
          <div className="probow-rajkot-story-quote">
            <div className="quote-mark" aria-hidden="true">&ldquo;</div>
            <div><p>We don&apos;t want healthy food to feel like a compromise. We want every visit to feel like you discovered something new.</p><span>The PROBOW philosophy</span></div>
          </div>
          <div className="probow-rajkot-story-links">
            <Link href="/menu">Explore healthy bowls &amp; salads<i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link>
            <Link href="/contact_us">Find PROBOW in Rajkot<i className="fa-solid fa-location-dot" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="seo-section alt" id="food-in-rajkot">
        <div className="seo-wrap">
          <div className="seo-head"><span className="eyebrow">Explore PROBOW</span><h2>Healthy food for every kind of craving</h2><p>Choose a filling bowl, a fresh salad, comforting pasta or a refreshing beverage.</p></div>
          <div className="food-grid">
            <article className="food-card">
              <ContentImage src="https://assets.probow.in/probo/products/23/01.jpg" alt="Signature Tomato Cheese Bowl healthy vegetarian food Rajkot" />
              <div className="food-copy"><span className="food-kicker">Rice Bowl</span><h3>Signature Tomato Cheese Bowl</h3><p>Herb rice with vine-ripened tomato puree, cheddar cheese, exotic mixed vegetables, Italian herbs and garlic.</p><div className="ingredient-list"><span>Herb rice</span><span>Tomato</span><span>Cheese</span><span>Mixed vegetables</span><span>Italian herbs</span></div><Link className="inline-link" href="/menu#rice-bowls">View rice bowls &rarr;</Link></div>
            </article>
            <article className="food-card">
              <ContentImage src="https://assets.probow.in/probo/products/12/01.jpg" alt="Crunch Salad Bowl healthy salad in Rajkot" />
              <div className="food-copy"><span className="food-kicker">Salad Bowl</span><h3>Crunch Salad Bowl</h3><p>A colourful fresh salad built around crisp greens, vegetables and satisfying toppings for a lighter but substantial meal.</p><div className="ingredient-list"><span>Crisp lettuce</span><span>Cucumber</span><span>Bell peppers</span><span>Tomatoes</span><span>Seeds</span></div><Link className="inline-link" href="/menu#salads">View salads &rarr;</Link></div>
            </article>
            <article className="food-card">
              <ContentImage src="https://assets.probow.in/probo/products/16/01.jpg" alt="High protein vegetarian avocado bowl in Rajkot" />
              <div className="food-copy"><span className="food-kicker">High Protein</span><h3>High-Protein Green Velvet Paneer Bowl</h3><p>Fresh grilled paneer, edamame, quinoa, toasted pumpkin seeds and an olive-lime vinaigrette.</p><div className="ingredient-list"><span>Dairy fresh</span><span>Paneer</span><span>Edamame</span><span>Quinoa</span><span>Pumpkin seeds</span></div><Link className="inline-link" href="/menu#rice-bowls">Explore bowls &rarr;</Link></div>
            </article>
            <article className="food-card">
              <ContentImage src="https://assets.probow.in/probo/products/3/01.webp" alt="Basil pesto pasta with vegetables at PROBOW" />
              <div className="food-copy"><span className="food-kicker">Artisan Pasta</span><h3>Crimson Pasta Garden Bowl</h3><p>fresh pasta and eggless tomato mayo sauce, broccoli, zucchini, bell peppers, black sesame seeds, olive oil and parmesan-style seasoning.</p><div className="ingredient-list"><span>Penne</span><span>Pasta</span><span>Broccoli</span><span>Zucchini</span><span>Bell peppers</span></div><Link className="inline-link" href="/menu#pasta">View artisan pasta &rarr;</Link></div>
            </article>
          </div>
          <div className="seo-actions" style={{ justifyContent: "center", marginTop: "1.6rem" }}><Link className="seo-btn primary" href="/menu">See the complete PROBOW menu<i className="fa-solid fa-arrow-right" aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="seo-section" id="how-we-prepare">
        <div className="seo-wrap">
          <div className="seo-head"><span className="eyebrow">Fresh from the kitchen</span><h2>How we prepare your food</h2><p>The idea is simple: start with good ingredients, prepare them carefully and serve them fresh.</p></div>
          <div className="process-grid">
            <article className="process-step"><div className="num">01</div><h3>Fresh ingredients</h3><p>Vegetables and core ingredients are selected with freshness in mind for the day&apos;s preparation.</p></article>
            <article className="process-step"><div className="num">02</div><h3>Clean preparation</h3><p>Food is prepared in a clean kitchen environment with attention to handling and preparation.</p></article>
            <article className="process-step"><div className="num">03</div><h3>Made to order</h3><p>Meals are assembled fresh so bowls, salads and pastas reach you at their best.</p></article>
            <article className="process-step"><div className="num">04</div><h3>Fresh delivery</h3><p>Orders are packed carefully for delivery and served with the PROBOW fresh-food approach.</p></article>
          </div>
        </div>
      </section>

      <section className="seo-section alt" id="ingredients">
        <div className="seo-wrap">
          <div className="seo-head"><span className="eyebrow">What&apos;s in your bowl?</span><h2>Ingredients that make healthy food satisfying</h2><p>PROBOW combines familiar ingredients in colourful, flavour-forward meals rather than relying on a boring &ldquo;diet food&rdquo; formula.</p></div>
          <div className="seo-grid">
            <article className="seo-card"><div className="icon"><i className="fa-solid fa-wheat-awn" aria-hidden="true" /></div><h3>Grains &amp; rice</h3><p>Hearty bases such as herb rice and quinoa help make a bowl feel complete and satisfying.</p></article>
            <article className="seo-card"><div className="icon"><i className="fa-solid fa-carrot" aria-hidden="true" /></div><h3>Vegetables</h3><p>Colourful vegetables bring crunch, freshness and variety to bowls and salads.</p></article>
            <article className="seo-card"><div className="icon"><i className="fa-solid fa-dumbbell" aria-hidden="true" /></div><h3>Vegetarian protein</h3><p>Options include paneer, edamame, chickpeas and other vegetarian ingredients used across the menu.</p></article>
          </div>
        </div>
      </section>

      <section className="seo-section" id="packaging">
        <div className="seo-wrap">
          <div className="promise">
            <div className="promise-box"><span className="eyebrow" style={{ color: "var(--mango)" }}>Clean food, thoughtfully served</span><h3>Freshness doesn&apos;t stop at the kitchen.</h3><p>PROBOW&apos;s approach covers preparation and packaging too. Our existing packaging system uses food-grade kraft bowls, spill-proof lids, clean thermal bags, wooden cutlery and hygienic napkins.</p></div>
            <div className="promise-list">
              <div><i className="fa-solid fa-circle-check" aria-hidden="true" /><span><strong>Food-grade kraft bowls</strong><br />100% recyclable packaging.</span></div>
              <div><i className="fa-solid fa-circle-check" aria-hidden="true" /><span><strong>Spill-proof lids</strong><br />Designed for cleaner delivery.</span></div>
              <div><i className="fa-solid fa-circle-check" aria-hidden="true" /><span><strong>Wooden cutlery &amp; hygienic napkins</strong><br />Included with orders.</span></div>
              <div><i className="fa-solid fa-circle-check" aria-hidden="true" /><span><strong>Zero plastic odour</strong><br />A cleaner eating experience.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section alt" id="who-is-it-for">
        <div className="seo-wrap">
          <div className="seo-head"><span className="eyebrow">For every routine</span><h2>Healthy meals for Rajkot&apos;s everyday life</h2></div>
          <div className="audience-grid">
            <article className="audience-seo"><i className="fa-solid fa-briefcase" aria-hidden="true" /><h3>Busy professionals</h3><p>Balanced desk lunches when you want something fresh without feeling heavy.</p></article>
            <article className="audience-seo"><i className="fa-solid fa-dumbbell" aria-hidden="true" /><h3>Fitness enthusiasts</h3><p>High-protein and macro-conscious options for pre- or post-workout meals.</p></article>
            <article className="audience-seo"><i className="fa-solid fa-people-group" aria-hidden="true" /><h3>Families</h3><p>Vegetarian bowls, salads and comforting pasta with plenty of flavour and variety.</p></article>
            <article className="audience-seo"><i className="fa-solid fa-heart" aria-hidden="true" /><h3>Health-conscious eaters</h3><p>Fresh vegetarian meals for people who want to make better everyday food choices.</p></article>
          </div>
        </div>
      </section>

      <section className="seo-section" id="rajkot">
        <div className="seo-wrap">
          <div className="local-box">
            <div><span className="eyebrow">Find PROBOW in Rajkot</span><h2>Healthy food, made fresh in Nana Mava.</h2><p>PROBOW is located at D/39, Aalap Heritage Society, Maruti Chowk, near Satyasai Heart Hospital, Kalawad Road, Nana Mava, Rajkot.</p><div className="seo-actions"><Link className="seo-btn primary" href="/contact_us">Contact PROBOW</Link><Link className="seo-btn secondary" href="/menu">View Menu</Link></div></div>
            <div className="local-facts">
              <div><i className="fa-solid fa-clock" aria-hidden="true" /> Monday&ndash;Sunday &middot; 9:30 AM&ndash;10:00 PM</div>
              <div><i className="fa-solid fa-location-dot" aria-hidden="true" /> Nana Mava, Rajkot</div>
              <div><i className="fa-solid fa-utensils" aria-hidden="true" /> 100% vegetarian menu</div>
              <div><i className="fa-brands fa-whatsapp" aria-hidden="true" /> Order directly on WhatsApp</div>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-section alt" id="faq">
        <div className="seo-wrap">
          <div className="seo-head"><span className="eyebrow">Good to know</span><h2>Healthy Food in Rajkot &mdash; FAQs</h2><p>Answers to common questions about PROBOW, the menu and how your food is prepared.</p></div>
          <div className="faq-seo">
            <details open><summary>Is PROBOW a 100% vegetarian restaurant in Rajkot?</summary><p>Yes. PROBOW&apos;s menu is designed around 100% vegetarian ingredients, including rice bowls, salads, artisan pastas and beverages.</p></details>
            <details><summary>What healthy food can I order from PROBOW?</summary><p>You can choose from fresh rice bowls, salad bowls, high-protein vegetarian bowls, artisan pesto pasta and beverages. <Link className="inline-link" href="/menu">View the complete menu</Link>.</p></details>
            <details><summary>What ingredients are used in PROBOW bowls?</summary><p>Ingredients vary by bowl. Examples include herb rice, quinoa, paneer, edamame, chickpeas, avocado, fresh vegetables, tomato puree, herbs, seeds and flavourful dressings or sauces.</p></details>
            <details><summary>Is the food prepared fresh?</summary><p>PROBOW follows a made-to-order approach, with fresh preparation intended to give bowls, salads and pastas a better taste and texture.</p></details>
            <details><summary>Does PROBOW use preservatives?</summary><p>PROBOW&apos;s brand positioning is built around clean vegetarian food with zero preservatives.</p></details>
            <details><summary>Does PROBOW offer high-protein vegetarian meals?</summary><p>Yes. The menu includes protein-focused options such as the High-Protein Avocado Crunch Bowl, which includes grilled paneer, edamame, quinoa and pumpkin seeds.</p></details>
            <details><summary>Where is PROBOW located in Rajkot?</summary><p>PROBOW is at D/39, Aalap Heritage Society, Maruti Chowk, near Satyasai Heart Hospital, Kalawad Road, Nana Mava, Rajkot.</p></details>
            <details><summary>What are PROBOW&apos;s opening hours?</summary><p>PROBOW is open every day from 9:30 AM to 10:00 PM.</p></details>
          </div>
        </div>
      </section>

      <section className="seo-section" style={{ paddingBottom: "5rem" }}>
        <div className="seo-wrap">
          <div className="seo-head">
            <span className="eyebrow">Ready when you are</span><h2>Find your next healthy meal in Rajkot.</h2><p>Explore the menu, choose your bowl and order fresh from PROBOW.</p>
            <div className="seo-actions" style={{ justifyContent: "center" }}><Link className="seo-btn primary" href="/menu"><i className="fa-solid fa-utensils" aria-hidden="true" />View Menu &amp; Pricing</Link><Link className="seo-btn secondary" href="/contact_us"><i className="fa-solid fa-location-dot" aria-hidden="true" />Visit / Contact</Link></div>
          </div>
        </div>
      </section>
    </div>
  </>;
}
