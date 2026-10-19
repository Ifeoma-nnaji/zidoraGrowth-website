import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container container">

        {/* LEFT SIDE */}
        <div className="hero__content">

          <div className="hero__eyebrow">
            <span>Digital Marketing</span>
            <span>/</span>
            <span>Web & Digital Solutions</span>
            <span>/</span>
            <span>AI & Automation</span>
          </div>

          <h1 className="hero__title">
            We help
            <br />
            businesses
            <br />
            <span>grow and scale</span>
            <br />
            digitally.
          </h1>

          <p className="hero__description">
            Zidora Growth combines strategy, digital marketing, technology
            and AI to help businesses attract customers, build better digital
            experiences and grow with confidence.
          </p>

          <div className="hero__actions">
            <a
              href="/contact"
              className="hero__button hero__button--primary"
            >
              <span>Let&apos;s Talk</span>
              <span className="hero__button-arrow">→</span>
            </a>

            <a
              href="/services/digital-marketing"
              className="hero__button hero__button--secondary"
            >
              <span>Explore Services</span>
              <span className="hero__button-arrow">→</span>
            </a>
          </div>

        </div>

        {/* RIGHT SIDE — CIRCULAR 360-STYLE VISUAL */}
        <div className="hero__visual">

          <div className="hero__circle">

            <div className="hero__circle-image">
              <img
                src="/images/zidora-hero-circle.png"
                alt="Professional working on a digital business strategy"
              />
            </div>

            <span className="hero__dot hero__dot--top"></span>
            <span className="hero__dot hero__dot--left"></span>
            <span className="hero__dot hero__dot--right"></span>

            <span className="hero__ring hero__ring--top"></span>
            <span className="hero__ring hero__ring--bottom"></span>
            <span className="hero__ring hero__ring--right"></span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
