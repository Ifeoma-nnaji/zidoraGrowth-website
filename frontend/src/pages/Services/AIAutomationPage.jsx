import "./AIAutomationPage.css";

const AIAutomationPage = () => {
  const solutions = [
    {
      number: "01",
      title: "Customer Support Bots",
      description:
        "Give customers faster answers with AI-powered support systems that handle common questions, guide customers, and support your team around the clock.",
      link: "/services/ai-automation/customer-support-bots",
    },
    {
      number: "02",
      title: "Email Reply Automation",
      description:
        "Reduce repetitive communication by automating email responses, follow-ups, routing, and everyday customer interactions.",
      link: "/services/ai-automation/email-reply",
    },
    {
      number: "03",
      title: "Report Generation",
      description:
        "Turn business information into useful reports and summaries faster, helping your team spend less time compiling information and more time making decisions.",
      link: "/services/ai-automation/report-generation",
    },
    {
      number: "04",
      title: "WhatsApp Automation",
      description:
        "Create automated WhatsApp experiences that help businesses communicate with customers, answer questions, manage enquiries, and improve response times.",
      link: "/services/ai-automation/whatsapp",
    },
  ];

  return (
    <main className="ai-automation-page">
      {/* HERO */}
      <section className="ai-automation-hero">
        <div className="ai-automation-hero__container container">
          <div className="ai-automation-hero__content">
            <p className="ai-automation-page__eyebrow">
              AI • AUTOMATION • EFFICIENCY
            </p>

            <h1 className="ai-automation-hero__title">
              Work smarter with
              <span>AI & Automation.</span>
            </h1>

            <p className="ai-automation-hero__description">
              We help businesses use AI and automation to reduce repetitive
              work, improve customer experiences, and create more efficient
              ways of working.
            </p>

            <div className="ai-automation-hero__actions">
              <a
                href="/contact"
                className="ai-automation-page__button"
              >
                Explore Your Opportunities
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#ai-automation-solutions"
                className="ai-automation-page__button ai-automation-page__button--secondary"
              >
                Explore Solutions
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="ai-automation-hero__visual" aria-hidden="true">
            <div className="ai-automation-hero__visual-main">
              <span>SMARTER OPERATIONS</span>

              <strong>
                AUTOMATE
                <br />
                WHAT
                <br />
                SLOWS YOU
                <br />
                DOWN.
              </strong>

              <div className="ai-automation-hero__visual-line" />
            </div>

            <div className="ai-automation-hero__card ai-automation-hero__card--top">
              <span>AI</span>
              <strong>Assist</strong>
            </div>

            <div className="ai-automation-hero__card ai-automation-hero__card--bottom">
              <span>AUTOMATION</span>
              <strong>24/7</strong>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="ai-automation-intro">
        <div className="ai-automation-intro__container container">
          <div>
            <p className="ai-automation-page__eyebrow">
              WHAT WE DO
            </p>

            <h2 className="ai-automation-intro__title">
              Turn repetitive work into
              <span>smarter systems.</span>
            </h2>
          </div>

          <div className="ai-automation-intro__text">
            <p>
              AI should not be something a business adopts simply because it
              is trending. The right technology should solve a real problem,
              save time, improve operations, or create a better experience
              for your customers.
            </p>

            <p>
              We identify opportunities where automation and AI can make a
              meaningful difference, then help turn those opportunities into
              practical digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="ai-automation-solutions"
        className="ai-automation-solutions"
      >
        <div className="ai-automation-solutions__container container">
          <div className="ai-automation-solutions__intro">
            <p className="ai-automation-page__eyebrow">
              OUR SOLUTIONS
            </p>

            <h2 className="ai-automation-solutions__title">
              Practical AI solutions
              <span>for real business needs.</span>
            </h2>
          </div>

          <div className="ai-automation-solutions__grid">
            {solutions.map((solution) => (
              <article
                className="ai-automation-solution"
                key={solution.number}
              >
                <div className="ai-automation-solution__top">
                  <span>{solution.number}</span>

                  <a
                    href={solution.link}
                    aria-label={`Explore ${solution.title}`}
                  >
                    ↗
                  </a>
                </div>

                <div className="ai-automation-solution__content">
                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>

                  <a
                    href={solution.link}
                    className="ai-automation-solution__link"
                  >
                    Explore Service
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ai-automation-process">
        <div className="ai-automation-process__container container">
          <div className="ai-automation-process__content">
            <p className="ai-automation-page__eyebrow">
              OUR APPROACH
            </p>

            <h2 className="ai-automation-process__title">
              Technology should make
              <span>business easier.</span>
            </h2>

            <p>
              We start by understanding how your business currently works.
              From there, we identify repetitive processes and opportunities
              where AI or automation can create real value.
            </p>

            <p>
              The goal is simple: build technology around your business,
              rather than forcing your business to work around technology.
            </p>
          </div>

          <div className="ai-automation-process__steps">
            <div className="ai-automation-process__step">
              <span>01</span>

              <div>
                <h3>Understand</h3>

                <p>
                  Identify the challenges and repetitive processes.
                </p>
              </div>
            </div>

            <div className="ai-automation-process__step">
              <span>02</span>

              <div>
                <h3>Identify</h3>

                <p>
                  Find where AI and automation can create value.
                </p>
              </div>
            </div>

            <div className="ai-automation-process__step">
              <span>03</span>

              <div>
                <h3>Build</h3>

                <p>
                  Create practical systems around your workflow.
                </p>
              </div>
            </div>

            <div className="ai-automation-process__step">
              <span>04</span>

              <div>
                <h3>Improve</h3>

                <p>
                  Refine the system as your business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ai-automation-cta">
        <div className="ai-automation-cta__container container">
          <p className="ai-automation-page__eyebrow">
            READY TO WORK SMARTER?
          </p>

          <h2>
            Let&apos;s find where AI can
            <span>move your business forward.</span>
          </h2>

          <a href="/contact">
            Start a Conversation
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default AIAutomationPage;
