import "./WebDigitalPage.css";

const WebDigitalPage = () => {
  const services = [
    {
      number: "01",
      title: "Website Design",
      description:
        "Professional, responsive websites designed around your brand, your customers, and the goals you want your website to achieve.",
      link: "/services/web-digital/website-design",
    },
    {
      number: "02",
      title: "Website Redesign",
      description:
        "Transform an outdated website into a modern digital experience that looks professional, works better, and gives visitors a clearer path to action.",
      link: "/services/web-digital/website-redesign",
    },
    {
      number: "03",
      title: "E-commerce Websites",
      description:
        "Build an online store that makes it easier for customers to discover your products, make purchases, and interact with your brand.",
      link: "/services/web-digital/ecommerce",
    },
    {
      number: "04",
      title: "Website Maintenance",
      description:
        "Keep your website secure, updated, functional, and performing properly so you can focus on running your business.",
      link: "/services/web-digital/website-maintenance",
    },
  ];

  return (
    <main className="web-digital-page">
      {/* HERO */}
      <section className="web-digital-hero">
        <div className="container web-digital-hero__container">
          <div className="web-digital-hero__content">
            <p className="web-digital-hero__label">
              WEB & DIGITAL
            </p>

            <h1>
              Build a digital
              <br />
              presence that
              <br />
              <span>works for you.</span>
            </h1>

            <p className="web-digital-hero__description">
              We design and build digital experiences that help businesses
              attract customers, communicate clearly, and grow online.
            </p>

            <div className="web-digital-hero__actions">
              <a
                href="/contact"
                className="web-digital-page__button web-digital-page__button--primary"
              >
                Start a Project
                <span>→</span>
              </a>

              <a
                href="#web-digital-services"
                className="web-digital-page__button web-digital-page__button--secondary"
              >
                Explore Services
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="web-digital-hero__visual">
            <div className="web-digital-hero__circle">
              <div className="web-digital-hero__browser">
                <div className="web-digital-hero__browser-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="web-digital-hero__browser-content">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="web-digital-intro">
        <div className="container">
          <div className="web-digital-intro__grid">
            <div>
              <p className="web-digital-page__label">
                DIGITAL EXPERIENCE
              </p>

              <h2>
                Your website should be working even when you are not.
              </h2>
            </div>

            <div>
              <p>
                Your website is more than an online brochure. It is often the
                first interaction someone has with your business.
              </p>

              <p>
                We create digital experiences that make your business easier
                to understand, easier to trust, and easier for customers to
                engage with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="web-digital-services"
        className="web-digital-services"
      >
        <div className="container">
          <div className="web-digital-services__heading">
            <div>
              <p className="web-digital-page__label">
                OUR SERVICES
              </p>

              <h2>
                Digital solutions
                <br />
                <span>built around your goals.</span>
              </h2>
            </div>

            <p>
              Whether you need a new website, a complete redesign, an online
              store, or ongoing support, we build solutions around your
              business needs.
            </p>
          </div>

          <div className="web-digital-services__grid">
            {services.map((service) => (
              <article
                className="web-digital-service-card"
                key={service.number}
              >
                <span className="web-digital-service-card__number">
                  {service.number}
                </span>

                <div className="web-digital-service-card__content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <a href={service.link}>
                    Explore Service
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="web-digital-approach">
        <div className="container">
          <div className="web-digital-approach__heading">
            <p className="web-digital-page__label">
              OUR APPROACH
            </p>

            <h2>
              Design with purpose.
              <br />
              <span>Build for results.</span>
            </h2>
          </div>

          <div className="web-digital-approach__grid">
            <div>
              <span>01</span>
              <h3>Discover</h3>
              <p>
                We understand your business, audience, objectives, and what
                your digital presence needs to achieve.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Design</h3>
              <p>
                We create a clear visual direction and user experience that
                reflects your brand and guides visitors naturally.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Build</h3>
              <p>
                We turn the design into a responsive, functional digital
                experience that works across devices.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Improve</h3>
              <p>
                We continue to improve your website so it remains useful,
                relevant, secure, and aligned with your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="web-digital-cta">
        <div className="container">
          <div className="web-digital-cta__inner">
            <div>
              <p className="web-digital-page__label">
                READY TO BUILD?
              </p>

              <h2>
                Let&apos;s create a digital experience your customers can
                trust.
              </h2>
            </div>

            <a
              href="/contact"
              className="web-digital-page__button web-digital-page__button--primary"
            >
              Start a Project
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDigitalPage;
