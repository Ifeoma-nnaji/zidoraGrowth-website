import "./AboutPage.css";

const AboutPage = () => {
  const principles = [
    {
      number: "01",
      title: "Strategy First",
      description:
        "We start with the business goal, understand the challenge, and build a digital approach around what actually needs to be achieved.",
    },
    {
      number: "02",
      title: "Practical Technology",
      description:
        "Technology should solve problems. We focus on useful digital solutions, automation, and experiences that businesses can actually use.",
    },
    {
      number: "03",
      title: "Built for Growth",
      description:
        "We think beyond a single campaign or project and create foundations that can support the business as it grows.",
    },
  ];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__container container">
          <div className="about-hero__content">
            <p className="about-page__eyebrow">
              ABOUT ZIDORA GROWTH
            </p>

            <h1 className="about-hero__title">
              Where strategy,
              <span>technology, and growth meet.</span>
            </h1>

            <p className="about-hero__description">
              Zidora Growth helps ambitious businesses navigate the digital
              world through marketing, technology, AI, and practical
              solutions designed around their goals.
            </p>
          </div>

          <div className="about-hero__visual" aria-hidden="true">
            <div className="about-hero__visual-main">
              <span>OUR PHILOSOPHY</span>

              <strong>
                THINK.
                <br />
                BUILD.
                <br />
                GROW.
              </strong>

              <div className="about-hero__visual-line" />
            </div>

            <div className="about-hero__card about-hero__card--top">
              <span>01</span>
              <strong>Strategy</strong>
            </div>

            <div className="about-hero__card about-hero__card--bottom">
              <span>02</span>
              <strong>Technology</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__container container">
          <div className="about-story__intro">
            <p className="about-page__eyebrow">
              OUR STORY
            </p>

            <h2 className="about-story__title">
              Helping businesses make
              <span>better use of digital.</span>
            </h2>
          </div>

          <div className="about-story__content">
            <p>
              Businesses today have more digital tools available to them
              than ever before. But having access to technology does not
              automatically create growth.
            </p>

            <p>
              Zidora Growth was created around a simple idea: businesses
              need practical digital strategies and solutions that connect
              technology to real business goals.
            </p>

            <p>
              From attracting customers and improving online experiences to
              automating repetitive work and developing technical skills, we
              bring different areas of digital growth together under one
              approach.
            </p>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-principles__container container">
          <div className="about-principles__intro">
            <p className="about-page__eyebrow">
              WHAT GUIDES US
            </p>

            <h2 className="about-principles__title">
              Simple principles.
              <span>Meaningful work.</span>
            </h2>
          </div>

          <div className="about-principles__grid">
            {principles.map((principle) => (
              <article
                className="about-principle"
                key={principle.number}
              >
                <div className="about-principle__number">
                  {principle.number}
                </div>

                <div className="about-principle__content">
                  <h3>{principle.title}</h3>

                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-capabilities">
        <div className="about-capabilities__container container">
          <div className="about-capabilities__content">
            <p className="about-page__eyebrow">
              WHAT WE BRING TO THE TABLE
            </p>

            <h2 className="about-capabilities__title">
              One partner for
              <span>digital growth.</span>
            </h2>

            <p>
              Our work brings together several areas that businesses often
              have to manage separately.
            </p>

            <p>
              Digital marketing helps you reach the right audience. Social
              media strengthens your presence. Web and digital solutions
              improve how customers interact with your business. AI and
              automation help you work more efficiently. Technology coaching
              helps people develop the skills to build with technology.
            </p>
          </div>

          <div className="about-capabilities__list">
            <div>
              <span>01</span>
              <strong>Digital Marketing</strong>
            </div>

            <div>
              <span>02</span>
              <strong>Social Media</strong>
            </div>

            <div>
              <span>03</span>
              <strong>Web & Digital</strong>
            </div>

            <div>
              <span>04</span>
              <strong>AI & Automation</strong>
            </div>

            <div>
              <span>05</span>
              <strong>Tech Coaching</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__container container">
          <p className="about-page__eyebrow">
            LET'S BUILD SOMETHING BETTER
          </p>

          <h2>
            Your next stage of growth
            <span>starts with a conversation.</span>
          </h2>

          <a href="/contact">
            Let's Talk
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
