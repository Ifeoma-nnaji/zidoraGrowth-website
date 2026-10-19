
import "./Services.css";

const highlights = [
  {
    value: "08",
    label: "Digital Service Solutions",
    description: "Eight essential services to strengthen your digital presence.",
  },
  {
    value: "360°",
    label: "Digital Strategy",
    description: "Marketing, technology, and business growth working together.",
  },
  {
    value: "AI",
    label: "Smarter Operations",
    description: "Automation solutions designed to simplify everyday work.",
  },
  {
    value: "1:1",
    label: "Practical Coaching",
    description: "Personalized guidance for aspiring software developers.",
  },
];

const serviceColumns = [
  [
    {
      number: "01",
      title: "Search Engine Marketing (SEM)",
      description:
        "Reach potential customers through targeted search engine marketing campaigns designed around your business goals.",
      items: [
        "Google Search Ads",
        "Paid Search Campaigns",
        "Keyword Targeting",
        "Campaign Optimization",
      ],
    },
    {
      number: "02",
      title: "Cost Effective Website Design",
      description:
        "Get a professional, responsive website designed to showcase your business, connect with your audience, and support your budget.",
      items: [
        "Business Website Design",
        "Responsive Web Design",
        "Landing Pages",
        "E-commerce Websites",
      ],
    },
    {
      number: "03",
      title: "Social Media Marketing (SMO)",
      description:
        "Strengthen your brand presence and connect with your audience through strategic social media optimization and marketing.",
      items: [
        "Facebook Marketing",
        "Instagram Marketing",
        "LinkedIn Marketing",
        "Pinterest Marketing",
        "X/Twitter Marketing",
      ],
    },
    {
      number: "04",
      title: "Google Display Network Ads",
      description:
        "Build brand awareness and reach relevant audiences across websites and apps through Google Display advertising.",
      items: [
        "Display Ad Campaigns",
        "Audience Targeting",
        "Remarketing Campaigns",
        "Ad Performance Monitoring",
      ],
    },
  ],
  [
    {
      number: "05",
      title: "Conversion Driven Website Redesign/Revamp",
      description:
        "Improve your existing website's appearance, user experience, messaging, and conversion journey to better support your business goals.",
      items: [
        "Website Layout Improvements",
        "User Experience Enhancements",
        "Conversion-Focused Pages",
        "Mobile Responsiveness",
      ],
    },
    {
      number: "06",
      title: "Search Engine Optimization (SEO)",
      description:
        "Improve your website's visibility in search engines and help potential customers discover your business organically.",
      items: [
        "On-Page SEO",
        "Technical SEO",
        "Keyword Research",
        "Content Optimization",
      ],
    },
    {
      number: "07",
      title: "Website Maintenance Solution",
      description:
        "Keep your website updated, functional, and supported as your business and digital needs evolve.",
      items: [
        "Website Updates",
        "Bug Fixes",
        "Performance Checks",
        "Routine Maintenance",
      ],
    },
    {
      number: "08",
      title: "Website Content Development",
      description:
        "Create useful, engaging website content that communicates your value, answers customer questions, and supports your marketing goals.",
      items: [
        "Website Copywriting",
        "Service Page Content",
        "SEO-Friendly Content",
        "Landing Page Copy",
      ],
    },
  ],
];

const additionalServices = [
  {
    number: "09",
    title: "AI & Business Automation",
    description:
      "Reduce repetitive work and explore smarter ways to manage customer interactions and business processes.",
    items: [
      "AI Customer Support",
      "Email Reply Automation",
      "Document Processing",
      "Report Generation",
      "WhatsApp Automation",
      "Business Workflow Automation",
    ],
  },
  {
    number: "10",
    title: "Tech & Software Engineering Coaching",
    description:
      "Learn to build real-world software projects, develop practical coding skills, and prepare for junior software development opportunities.",
    items: [
      "Software Development Coaching",
      "Software Engineering Coaching",
      "Real-World Project Building",
      "Portfolio Development",
      "Git & GitHub",
      "Frontend & Backend Development",
      "API Development",
      "Database Development",
      "Junior Developer Preparation",
    ],
  },
];

const ServiceAccordion = ({ service }) => (
  <details className="services__accordion">
    <summary>
      <span className="services__accordion-number">{service.number}</span>

      <span className="services__accordion-title">{service.title}</span>

      <span className="services__accordion-icon" aria-hidden="true">
        +
      </span>
    </summary>

    <div className="services__accordion-content">
      <p>{service.description}</p>

      <ul>
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </details>
);

const Services = () => {
  return (
    <section className="services section" id="services">
      <div className="services__container container">
        <header className="services__header">
          <p className="services__eyebrow">STRATEGY · TECHNOLOGY · GROWTH</p>

          <h2 className="services__title">
            Digital Solutions Built for
            <span> Real Business Growth</span>
          </h2>

          <p className="services__intro-description">
            We help startups, small businesses, and growing brands strengthen
            their digital presence through digital marketing, website
            development, social media, AI automation, and practical technology
            coaching.
          </p>
        </header>

        <div className="services__highlights">
          {highlights.map((highlight) => (
            <article className="services__highlight" key={highlight.value}>
              <strong>{highlight.value}</strong>
              <h3>{highlight.label}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>

        <div className="services__list-heading">
          <h3>Explore Our Services</h3>
          <p>
            Find the right solutions for your business, digital presence, or
            technology journey.
          </p>
        </div>

        <div className="services__accordion-grid">
          {serviceColumns.map((column, columnIndex) => (
            <div className="services__accordion-column" key={columnIndex}>
              {column.map((service) => (
                <ServiceAccordion service={service} key={service.number} />
              ))}
            </div>
          ))}
        </div>

        <div className="services__additional">
          <div className="services__list-heading">
            <h3>More Ways We Help You Grow</h3>
            <p>
              Discover our AI automation solutions and practical technology
              coaching.
            </p>
          </div>

          <div className="services__accordion-grid">
            {additionalServices.map((service) => (
              <div
                className="services__accordion-column"
                key={service.number}
              >
                <ServiceAccordion service={service} />
              </div>
            ))}
          </div>
        </div>

        <div className="services__bottom">
          <div>
            <h3>Ready to take the next step?</h3>
            <p>
              Tell us what you want to achieve, and let's explore the options.
            </p>
          </div>

          <a href="/contact" className="services__button">
            GET A FREE QUOTE <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
