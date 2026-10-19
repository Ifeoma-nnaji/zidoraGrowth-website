
import "./TechCoachingPage.css";

const coachingAreas = [
  {
    number: "01",
    title: "Learn to Code",
    description:
      "Build a strong foundation in programming through practical lessons that help you understand coding concepts and how software works.",
    link: "/services/tech-coaching/learn-to-code",
  },
  {
    number: "02",
    title: "Real-World Projects",
    description:
      "Move beyond tutorials by building practical applications, solving problems, and gaining experience with real development workflows.",
    link: "/services/tech-coaching/real-world-projects",
  },
  {
    number: "03",
    title: "Portfolio Development",
    description:
      "Build a portfolio of projects that demonstrates your abilities and gives employers and potential clients evidence of your skills.",
    link: "/services/tech-coaching/portfolio",
  },
  {
    number: "04",
    title: "Junior Developer Career Preparation",
    description:
      "Prepare for junior software development opportunities with guidance on technical skills, project presentation, applications, and interviews.",
    link: "/services/tech-coaching/junior-career",
  },
];

const TechCoachingPage = () => {
  return (
    <main className="tech-coaching-page">
      <section className="tech-coaching-hero">
        <div className="tech-coaching-hero__container container">
          <div className="tech-coaching-hero__content">
            <p className="tech-coaching-page__eyebrow">
              LEARN · BUILD · GROW
            </p>

            <h1 className="tech-coaching-hero__title">
              Learn technology by
              <span>building for real.</span>
            </h1>

            <p className="tech-coaching-hero__description">
              Turn your interest in technology into practical skills.
              Learn to code, build real-world projects, develop your
              portfolio, and prepare for junior software development roles.
            </p>

            <a href="/contact" className="tech-coaching-page__button">
              Start Your Journey
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="tech-coaching-hero__visual" aria-hidden="true">
            <div className="tech-coaching-hero__visual-main">
              <span>THE LEARNING JOURNEY</span>
              <strong>
                LEARN.
                <br />
                BUILD.
                <br />
                SHIP.
                <br />
                GROW.
              </strong>
              <div className="tech-coaching-hero__visual-line" />
            </div>

            <div className="tech-coaching-hero__card tech-coaching-hero__card--top">
              <span>SKILL</span>
              <strong>Build</strong>
            </div>

            <div className="tech-coaching-hero__card tech-coaching-hero__card--bottom">
              <span>PROJECT</span>
              <strong>01 → 10</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-coaching-intro">
        <div className="tech-coaching-intro__container container">
          <div>
            <p className="tech-coaching-page__eyebrow">
              WHY TECH COACHING?
            </p>

            <h2 className="tech-coaching-intro__title">
              Stop only watching tutorials.
              <span>Start building.</span>
            </h2>
          </div>

          <div className="tech-coaching-intro__text">
            <p>
              Learning software development can feel overwhelming when
              you jump between courses and technologies without a clear
              idea of what to learn or build next.
            </p>

            <p>
              Our coaching focuses on practical learning. Understand the
              concepts, apply them to projects, practise solving problems,
              and gradually develop the confidence to build independently.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-coaching-areas">
        <div className="tech-coaching-areas__container container">
          <div className="tech-coaching-areas__intro">
            <p className="tech-coaching-page__eyebrow">
              WHAT YOU CAN LEARN
            </p>

            <h2 className="tech-coaching-areas__title">
              From your first lines of code
              <span>to your first portfolio.</span>
            </h2>

            <p>
              Choose the area that matches your next step in technology.
            </p>
          </div>

          <div className="tech-coaching-areas__grid">
            {coachingAreas.map((area) => (
              <article className="tech-coaching-area" key={area.number}>
                <div className="tech-coaching-area__top">
                  <span>{area.number}</span>
                  <span aria-hidden="true">↗</span>
                </div>

                <div className="tech-coaching-area__content">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>

                  <a
                    className="tech-coaching-area__link"
                    href={area.link}
                    aria-label={`Explore ${area.title}`}
                  >
                    Explore service <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-coaching-process">
        <div className="tech-coaching-process__container container">
          <div className="tech-coaching-process__content">
            <p className="tech-coaching-page__eyebrow">
              HOW WE LEARN
            </p>

            <h2 className="tech-coaching-process__title">
              A practical path from
              <span>learner to builder.</span>
            </h2>

            <p>
              You do not need to know everything before you start building.
              Learn the fundamentals, practise consistently, solve problems,
              and use every project as an opportunity to improve.
            </p>

            <p>
              The goal is more than completing lessons. It is developing
              practical experience and projects you can confidently explain.
            </p>
          </div>

          <div className="tech-coaching-process__steps">
            <div className="tech-coaching-process__step">
              <span>01</span>
              <div>
                <h3>Learn</h3>
                <p>Understand the fundamentals and build your foundation.</p>
              </div>
            </div>

            <div className="tech-coaching-process__step">
              <span>02</span>
              <div>
                <h3>Practise</h3>
                <p>Strengthen your skills through exercises and challenges.</p>
              </div>
            </div>

            <div className="tech-coaching-process__step">
              <span>03</span>
              <div>
                <h3>Build</h3>
                <p>Turn what you learn into useful projects and applications.</p>
              </div>
            </div>

            <div className="tech-coaching-process__step">
              <span>04</span>
              <div>
                <h3>Prepare</h3>
                <p>Present your work and prepare for development opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-coaching-cta">
        <div className="tech-coaching-cta__container container">
          <p className="tech-coaching-page__eyebrow">
            READY TO START?
          </p>

          <h2>
            Turn what you are learning into
            <span>something you can build.</span>
          </h2>

          <a href="/contact">
            Talk About Coaching
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default TechCoachingPage;
