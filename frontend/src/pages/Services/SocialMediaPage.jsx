import "./SocialMediaPage.css";

const SocialMediaPage = () => {
  const services = [
    {
      number: "01",
      title: "Social Media Management",
      description:
        "Build a consistent and professional social media presence with strategic planning, content management, audience engagement, and ongoing optimisation.",
      link: "/services/social-media/management",
    },
    {
      number: "02",
      title: "Social Media Content",
      description:
        "Create content that communicates your brand clearly, keeps your audience engaged, and gives your business a consistent presence across social platforms.",
      link: "/services/social-media/content",
    },
    {
      number: "03",
      title: "Facebook & Instagram Ads",
      description:
        "Reach your ideal customers with targeted Facebook and Instagram campaigns designed to increase awareness, generate leads, and drive conversions.",
      link: "/services/social-media/facebook-instagram-ads",
    },
    {
      number: "04",
      title: "TikTok Ads",
      description:
        "Use creative, attention-grabbing TikTok campaigns to reach new audiences, introduce your brand, and turn engagement into business opportunities.",
      link: "/services/social-media/tiktok-ads",
    },
  ];

  return (
    <main className="social-media-page">
      {/* HERO */}
      <section className="social-media-hero">
        <div className="container social-media-hero__container">
          <div className="social-media-hero__content">
            <p className="social-media-hero__label">SOCIAL MEDIA</p>

            <h1>
              Build a brand people
              <br />
              <span>remember and engage with.</span>
            </h1>

            <p className="social-media-hero__description">
              We help businesses build meaningful social media presence,
              connect with the right audiences, and turn attention into
              opportunities for growth.
            </p>

            <div className="social-media-hero__actions">
              <a
                href="/contact"
                className="social-media-page__button social-media-page__button--primary"
              >
                Start a Project
                <span>→</span>
              </a>

              <a
                href="#social-media-services"
                className="social-media-page__button social-media-page__button--secondary"
              >
                Explore Services
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="social-media-hero__visual">
            <div className="social-media-hero__circle">
              <div className="social-media-hero__circle-inner">
                <span>BUILD</span>
                <strong>CONNECT</strong>
                <span>ENGAGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="social-media-intro">
        <div className="container">
          <div className="social-media-intro__grid">
            <div>
              <p className="social-media-page__label">
                SOCIAL GROWTH
              </p>

              <h2>
                Social media should be more than just posting.
              </h2>
            </div>

            <div>
              <p>
                Your social media presence is often one of the first places
                potential customers encounter your business.
              </p>

              <p>
                We help you create a clear strategy around your content,
                audience, advertising, and engagement so your social channels
                support real business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="social-media-services"
        className="social-media-services"
      >
        <div className="container">
          <div className="social-media-services__heading">
            <div>
              <p className="social-media-page__label">
                OUR SERVICES
              </p>

              <h2>
                Social media built
                <br />
                <span>for business growth.</span>
              </h2>
            </div>

            <p>
              From content and management to paid advertising, we help your
              business build a social presence that attracts and engages the
              right audience.
            </p>
          </div>

          <div className="social-media-services__grid">
            {services.map((service) => (
              <article
                className="social-media-service-card"
                key={service.number}
              >
                <span className="social-media-service-card__number">
                  {service.number}
                </span>

                <div className="social-media-service-card__content">
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

      {/* STRATEGY */}
      <section className="social-media-strategy">
        <div className="container">
          <div className="social-media-strategy__heading">
            <p className="social-media-page__label">
              OUR APPROACH
            </p>

            <h2>
              Build attention.
              <br />
              <span>Turn it into action.</span>
            </h2>
          </div>

          <div className="social-media-strategy__grid">
            <div>
              <span>01</span>
              <h3>Plan</h3>
              <p>
                Define your audience, goals, content direction, platforms, and
                overall social media strategy.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Create</h3>
              <p>
                Develop relevant content that communicates your brand and
                gives your audience a reason to pay attention.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Engage</h3>
              <p>
                Build relationships with your audience through consistent
                communication, engagement, and community building.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Grow</h3>
              <p>
                Use performance data and paid campaigns to improve results and
                create more opportunities for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="social-media-cta">
        <div className="container">
          <div className="social-media-cta__inner">
            <div>
              <p className="social-media-page__label">
                BUILD YOUR PRESENCE
              </p>

              <h2>
                Let&apos;s turn your social media presence into a growth
                channel.
              </h2>
            </div>

            <a
              href="/contact"
              className="social-media-page__button social-media-page__button--primary"
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

export default SocialMediaPage;
