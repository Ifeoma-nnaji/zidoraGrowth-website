
import "./Portfolio.css";

const projects = [
  {
    number: "",
    category: "Property Management Software",
    title: "RentDocs",
    description:
      "A property management platform designed to help landlords organize property information, manage tenancy details, and keep track of essential rental activities.",
    type: "video",
    video: "/videos/RentDocs_professional_showcase.mp4",
    actionLabel: "Watch Project Video",
  },
  {
    number: "",
    category: "E-commerce Website",
    title: "Zidora Naturals",
    description:
      "An online shopping experience built to make it easier for customers to discover and shop wellness products through a dedicated e-commerce website.",
    type: "website",
    url: "https://zidora-frontend.vercel.app/",
    actionLabel: "Visit Live Website",
  },
  {
    number: "",
    category: "Property Sales & Rentals",
    title: "Ocean Pyramids Properties & Rentals",
    description:
      "A property website concept for showcasing homes for sale, accommodation for rent, and property opportunities for people looking to buy, sell, or rent.",
    type: "concept",
    actionLabel: "Explore Project",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="our-work">
      <div className="portfolio__container container">
        <div className="portfolio__intro">
          <div>
            <p className="portfolio__eyebrow">SELECTED PROJECTS</p>

            <h2 className="portfolio__title">
              Our work.
              <span>Real-world ideas.</span>
            </h2>
          </div>

          <p className="portfolio__description">
            A selection of digital experiences and software projects focused
            on helping businesses serve their customers and manage their work
            more effectively.
          </p>
        </div>

        <div className="portfolio__list">
          {projects.map((project) => (
            <article className="portfolio__item" key={project.number}>
              <div className="portfolio__number">{project.number}</div>

              <div className="portfolio__content">
                <p className="portfolio__category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="portfolio__item-description">
                  {project.description}
                </p>

                {project.type === "website" && (
                  <a
                    href={project.url}
                    className="portfolio__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.actionLabel}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                {project.type === "video" && (
                  <a
                    href="#rentdocs-video"
                    className="portfolio__link"
                  >
                    {project.actionLabel}
                    <span aria-hidden="true">↓</span>
                  </a>
                )}

                {project.type === "concept" && (
                  <a
                    href="/contact"
                    className="portfolio__link"
                  >
                    Discuss This Project
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>

              <div className="portfolio__project-preview">
                {project.type === "video" && (
                  <video
                    id="rentdocs-video"
                    className="portfolio__video"
                    controls
                    preload="metadata"
                    playsInline
                    aria-label="RentDocs property management project video"
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                )}

                {project.type === "website" && (
                  <a
                    className="portfolio__website-preview"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit the Zidora Naturals e-commerce website"
                  >
                    <div className="portfolio__browser-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="portfolio__preview-content portfolio__preview-content--shop">
                      <span>ZIDORA NATURALS</span>
                      <strong>Discover your natural wellness.</strong>
                      <small>Explore the online store ↗</small>
                    </div>
                  </a>
                )}

                {project.type === "concept" && (
                  <div className="portfolio__website-preview portfolio__website-preview--property">
                    <div className="portfolio__browser-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="portfolio__preview-content">
                      <span>OCEAN PYRAMIDS</span>
                      <strong>Find a place to call home.</strong>
                      <small>Property sales · Buying · Rentals</small>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
