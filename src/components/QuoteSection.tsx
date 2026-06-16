import { assets, testimonials } from '../data/siteData';

export function QuoteSection() {
  return (
    <>
      <section className="dean-band">
        <div className="container dean-layout">
          <div>
            <p className="eyebrow">From the dean</p>
            <h2>Committed to supporting the country’s endeavors in science, engineering, and technology.</h2>
            <a href="#">About the College</a>
          </div>
          <img src={assets.deanVideo} alt="College video preview" />
        </div>
      </section>
      <section className="section testimonials">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name}>
                {testimonial.image && <img src={testimonial.image} alt={testimonial.name} />}
                <p>“{testimonial.quote}”</p>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
