
import "./OnlinePotential.css";

const OnlinePotential = () => {
  return (
    <section className="online-potential">
      <div className="online-potential__container container">
        <div className="online-potential__content">
          <p className="online-potential__eyebrow">
            YOUR DIGITAL GROWTH PARTNER
          </p>

          <h2 className="online-potential__title">
            Unlock Your Business's{" "}
            <span>Digital Potential.</span>
          </h2>

          <p className="online-potential__description">
            Every ambitious business deserves the opportunity to grow.
            Zidora Growth brings digital strategy, creative thinking,
            technology, and practical execution together to help businesses
            reach the right audience, improve customer experiences, and
            create opportunities for sustainable growth.
          </p>

          <p className="online-potential__description">
            From attracting new customers to building better digital
            experiences and automating everyday tasks, we work alongside
            you to turn your business goals into action.
          </p>

          <a href="/contact" className="online-potential__link">
            Let's grow together <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div
          className="online-potential__visual"
          aria-label="Zidora Growth's approach to digital business growth"
        >
          <div className="online-potential__visual-main">
            <span className="online-potential__visual-label">
              THE ZIDORA APPROACH
            </span>

            <h3>
              Strategy.
              <br />
              Creativity.
              <br />
              Technology.
            </h3>

            <div className="online-potential__visual-line" />
          </div>

          <div className="online-potential__visual-card online-potential__visual-card--top">
            <span>01</span>
            <strong>Attract</strong>
            <p>Reach the right audience.</p>
          </div>

          <div className="online-potential__visual-card online-potential__visual-card--bottom">
            <span>02</span>
            <strong>Grow</strong>
            <p>Build better digital experiences.</p>
          </div>

          <div className="online-potential__visual-accent" />
        </div>
      </div>
    </section>
  );
};

export default OnlinePotential;
