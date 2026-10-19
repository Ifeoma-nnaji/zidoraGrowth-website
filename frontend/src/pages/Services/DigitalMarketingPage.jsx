import "./DigitalMarketingPage.css";

const DigitalMarketingPage = () => {
  const services = [
    {
      number: "01",
      title: "Google Ads",
      description:
        "Reach customers who are actively searching for your products or services with targeted Google Ads campaigns built around your business goals.",
      link: "/services/digital-marketing/google-ads",
    },
    {
      number: "02",
      title: "Facebook & Instagram Ads",
      description:
        "Reach the right audience across Facebook and Instagram with targeted campaigns designed to generate awareness, leads, enquiries, and sales.",
      link: "/services/digital-marketing/facebook-instagram-ads",
    },
    {
      number: "03",
      title: "TikTok Ads",
      description:
        "Put your brand in front of a highly engaged audience with creative TikTok advertising campaigns designed to capture attention and drive action.",
      link: "/services/digital-marketing/tiktok-ads",
    },
    {
      number: "04",
      title: "Email Marketing",
      description:
        "Turn your email list into a powerful growth channel with strategic campaigns, automated follow-ups, customer communication, and conversion-focused messaging.",
      link: "/services/digital-marketing/email-marketing",
    },
    {
      number: "05",
      title: "Funnels & Lead Generation",
      description:
        "Build customer journeys that attract prospects, capture leads, nurture relationships, and move potential customers toward taking action.",
      link: "/services/digital-marketing/funnels-lead-generation",
    },
    {
      number: "06",
      title: "Copywriting & Ad Writing",
      description:
        "Create persuasive marketing messages, ad copy, landing page copy, and campaigns that communicate your value clearly and encourage customers to take action.",
      link: "/services/digital-marketing/copywriting",
    },
  ];

  return (
    <main className="digital-marketing-page">
      {/* HERO */}
      <section className="digital-marketing-hero">
        <div className="container digital-marketing-hero__container">
          <div className="digital-marketing-hero__content">
            <p className="digital-marketing-hero__label">
              DIGITAL MARKETING
            </p>

            <h1>
              Get discovered.
              <br />
              <span>Get the right customers.</span>
            </h1>

            <p className="digital-marketing-hero__description">
              We help businesses attract the right audience, generate quality
              leads, and turn digital marketing into measurable business
              growth.
            </p>

            <div className="digital-marketing-hero__actions">
              <a
                href="/contact"
                className="digital-marketing-page__button digital-marketing-page__button--primary"
              >
                Start a Project
                <span>→</span>
              </a>

              <a
                href="#digital-marketing-services"
                className="digital-marketing-page__button digital-marketing-page__button--secondary"
              >
                Explore Services
                <span>↓</span>
              </a>
            </div>
          </div>

          <div className="digital-marketing-hero__visual">
            <div className="digital-marketing-hero__circle">
              <div className="digital-marketing-hero__circle-inner">
                <span>MARKETING</span>
                <strong>GROW</strong>
                <span>WITH PURPOSE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="digital-marketing-intro">
        <div className="container">
          <div className="digital-marketing-intro__grid">
            <div>
              <p className="digital-marketing-page__label">
                DIGITAL GROWTH
              </p>

              <h2>
                Marketing should do more than make your business visible.
              </h2>
            </div>

            <div>
              <p>
                Your marketing should help the right people discover your
                business, understand what you offer, trust your brand, and
                ultimately become customers.
              </p>

              <p>
                At Zidora Growth, we combine strategy, advertising, content,
                funnels, and conversion-focused messaging to create marketing
                systems designed around your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="digital-marketing-services"
        className="digital-marketing-services"
      >
        <div className="container">
          <div className="digital-marketing-services__heading">
            <div>
              <p className="digital-marketing-page__label">
                OUR SERVICES
              </p>

              <h2>
                Digital marketing built
                <br />
                <span>around growth.</span>
              </h2>
            </div>

            <p>
              Choose the services you need or combine multiple channels into a
              complete digital marketing strategy for your business.
            </p>
          </div>

          <div className="digital-marketing-services__grid">
            {services.map((service) => (
              <article
                className="digital-marketing-service-card"
                key={service.number}
              >
                <span className="digital-marketing-service-card__number">
                  {service.number}
                </span>

                <div className="digital-marketing-service-card__content">
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

      {/* PROCESS */}
      <section className="digital-marketing-process">
        <div className="container">
          <div className="digital-marketing-process__heading">
            <p className="digital-marketing-page__label">
              HOW WE WORK
            </p>

            <h2>
              Strategy first.
              <br />
              <span>Growth follows.</span>
            </h2>
          </div>

          <div className="digital-marketing-process__grid">
            <div>
              <span>01</span>
              <h3>Understand</h3>
              <p>
                We learn about your business, audience, goals, offer, and
                current marketing challenges.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Strategise</h3>
              <p>
                We identify the right channels, campaigns, messaging, and
                customer journey for your business.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Launch</h3>
              <p>
                We put the strategy into action through targeted campaigns,
                content, funnels, and conversion-focused marketing.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Optimise</h3>
              <p>
                We monitor performance, identify opportunities, and continuously
                improve what is working.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="digital-marketing-cta">
        <div className="container">
          <div className="digital-marketing-cta__inner">
            <div>
              <p className="digital-marketing-page__label">
                READY TO GROW?
              </p>

              <h2>
                Let&apos;s build a marketing strategy around your business.
              </h2>
            </div>

            <a
              href="/contact"
              className="digital-marketing-page__button digital-marketing-page__button--primary"
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

export default DigitalMarketingPage;
