import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Zidora Growth helped us look at our digital presence differently. The strategy was practical, clear, and focused on what would actually move the business forward.",
    name: "Business Owner",
    role: "Business Growth",
  },
  {
    quote:
      "What stood out was the combination of technology and business thinking. Everything was explained clearly and connected back to our goals.",
    name: "Founder",
    role: "Digital Transformation",
  },
  {
    quote:
      "The approach is straightforward and practical. Instead of just recommending tools, Zidora focuses on how those tools can actually improve the way a business operates.",
    name: "Business Manager",
    role: "Operations & Technology",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__container container">
        <div className="testimonials__intro">
          <div>
            <p className="testimonials__eyebrow">
              CLIENT EXPERIENCES
            </p>

            <h2 className="testimonials__title">
              Growth starts with
              <span>the right partnership.</span>
            </h2>
          </div>

          <p className="testimonials__description">
            We work closely with businesses to understand where they are,
            where they want to go, and what needs to happen to get there.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={`${testimonial.name}-${index}`}
            >
              <div className="testimonial-card__quote-mark">
                “
              </div>

              <blockquote>
                {testimonial.quote}
              </blockquote>

              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
