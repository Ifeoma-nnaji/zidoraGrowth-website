
import { Link, useLocation } from "react-router-dom";
import "./ServiceDetailPage.css";

const serviceDetails = {
  "/services/digital-marketing/google-ads": {
    category: "Digital Marketing",
    title: "Google Ads Management",
    subtitle:
      "Reach people who are already searching for what your business offers.",
    description:
      "We help businesses build targeted Google Ads campaigns designed to reach relevant audiences, attract qualified traffic, and generate enquiries.",
    benefits: [
      "Campaign planning and keyword research",
      "Search campaign setup and optimisation",
      "Ad copy development",
      "Conversion tracking and performance monitoring",
    ],
  },

  "/services/digital-marketing/facebook-instagram-ads": {
    category: "Digital Marketing",
    title: "Facebook & Instagram Ads",
    subtitle:
      "Turn social media attention into meaningful business opportunities.",
    description:
      "Reach potential customers across Facebook and Instagram with targeted advertising campaigns built around your audience, offer, and business goals.",
    benefits: [
      "Audience research and targeting",
      "Campaign setup and management",
      "Ad creative and copy planning",
      "Performance tracking and optimisation",
    ],
  },

  "/services/digital-marketing/tiktok-ads": {
    category: "Digital Marketing",
    title: "TikTok Ads",
    subtitle:
      "Introduce your brand to new audiences through engaging short-form campaigns.",
    description:
      "Plan and manage TikTok advertising campaigns that help your business increase visibility, connect with relevant audiences, and promote its offers.",
    benefits: [
      "Campaign strategy and setup",
      "Audience and objective planning",
      "Creative direction and ad messaging",
      "Campaign performance reviews",
    ],
  },

  "/services/digital-marketing/email-marketing": {
    category: "Digital Marketing",
    title: "Email Marketing",
    subtitle: "Build stronger customer relationships beyond social media.",
    description:
      "Use thoughtful email campaigns to nurture leads, communicate with customers, promote offers, and encourage repeat business.",
    benefits: [
      "Email campaign planning",
      "Newsletter and promotional email copy",
      "Audience segmentation",
      "Campaign performance tracking",
    ],
  },

  "/services/digital-marketing/funnels-lead-generation": {
    category: "Digital Marketing",
    title: "Funnels & Lead Generation",
    subtitle:
      "Create a clearer path from discovering your business to becoming a customer.",
    description:
      "Build a structured lead-generation journey that helps attract potential customers, capture enquiries, and guide prospects towards taking action.",
    benefits: [
      "Customer journey planning",
      "Lead capture landing pages",
      "Lead magnet and offer planning",
      "Lead nurturing recommendations",
    ],
  },

  "/services/digital-marketing/copywriting": {
    category: "Digital Marketing",
    title: "Copywriting & Ad Writing",
    subtitle:
      "Communicate your value clearly and give customers a reason to act.",
    description:
      "Develop persuasive, audience-focused messaging for advertising campaigns, landing pages, email campaigns, and business offers.",
    benefits: [
      "Advertising copy",
      "Landing page messaging",
      "Email and promotional copy",
      "Calls to action aligned with business goals",
    ],
  },

  "/services/social-media/management": {
    category: "Social Media",
    title: "Social Media Management",
    subtitle: "Build a consistent social media presence for your business.",
    description:
      "Plan and manage your social media presence with purposeful content, a consistent publishing schedule, and audience-focused communication.",
    benefits: [
      "Social media strategy",
      "Content calendar planning",
      "Publishing and account management",
      "Performance reporting",
    ],
  },

  "/services/social-media/content": {
    category: "Social Media",
    title: "Social Media Content",
    subtitle: "Create content that educates, connects, and encourages action.",
    description:
      "Develop social media content around your brand, audience questions, business goals, and the messages you want customers to remember.",
    benefits: [
      "Content pillar planning",
      "Post and carousel concepts",
      "Short-form video scripts",
      "Captions and calls to action",
    ],
  },

  "/services/social-media/facebook-instagram-ads": {
    category: "Social Media",
    title: "Facebook & Instagram Ads",
    subtitle: "Put your offers in front of relevant social media audiences.",
    description:
      "Plan targeted Facebook and Instagram advertising campaigns to promote your products or services and generate business enquiries.",
    benefits: [
      "Campaign planning",
      "Audience targeting",
      "Ad messaging and creative direction",
      "Performance monitoring",
    ],
  },

  "/services/social-media/tiktok-ads": {
    category: "Social Media",
    title: "TikTok Ads",
    subtitle:
      "Connect your brand with audiences through short-form advertising.",
    description:
      "Develop TikTok advertising campaigns that support your brand awareness, traffic, and lead-generation goals.",
    benefits: [
      "Campaign planning",
      "Audience research",
      "Creative and messaging direction",
      "Performance reviews",
    ],
  },

  "/services/web-digital/website-design": {
    category: "Web & Digital Solutions",
    title: "Website Design",
    subtitle: "Give your business a professional home online.",
    description:
      "Create a website that communicates your value, presents your services clearly, and helps visitors take the next step with your business.",
    benefits: [
      "Website structure and page planning",
      "Responsive design for mobile and desktop",
      "Clear service and contact sections",
      "User-friendly navigation",
    ],
  },

  "/services/web-digital/website-redesign": {
    category: "Web & Digital Solutions",
    title: "Website Redesign",
    subtitle: "Make your existing website work harder for your business.",
    description:
      "Improve the design, structure, usability, and presentation of your existing website to create a more effective visitor experience.",
    benefits: [
      "Review of the existing website",
      "Visual and layout improvements",
      "Mobile usability improvements",
      "Clearer calls to action",
    ],
  },

  "/services/web-digital/ecommerce": {
    category: "Web & Digital Solutions",
    title: "E-commerce Websites",
    subtitle: "Build an online store designed to make shopping straightforward.",
    description:
      "Create an online shopping experience where customers can discover products, understand your offers, and move through the purchasing journey.",
    benefits: [
      "Product and category organisation",
      "Responsive storefront design",
      "Shopping journey planning",
      "Essential store functionality planning",
    ],
  },

  "/services/web-digital/website-maintenance": {
    category: "Web & Digital Solutions",
    title: "Website Maintenance",
    subtitle: "Keep your website updated, reliable, and ready for visitors.",
    description:
      "Maintain your website through regular checks, content updates, troubleshooting, and improvements based on your site's needs.",
    benefits: [
      "Content and page updates",
      "Website functionality checks",
      "Troubleshooting and technical support",
      "Ongoing improvement recommendations",
    ],
  },

  "/services/ai-automation/customer-support-bots": {
    category: "AI & Automation",
    title: "Customer Support Bots",
    subtitle: "Help customers get answers without waiting for every response.",
    description:
      "Plan customer support bots that handle common questions, provide useful information, and direct customers to the right next step.",
    benefits: [
      "Frequently asked question flows",
      "Customer enquiry routing",
      "Business information integration planning",
      "Escalation to a human when needed",
    ],
  },

  "/services/ai-automation/email-reply": {
    category: "AI & Automation",
    title: "Email Reply Automation",
    subtitle: "Reduce repetitive email work with more organised workflows.",
    description:
      "Design email workflows that help organise incoming messages, prepare suggested replies, and route enquiries according to your business rules.",
    benefits: [
      "Email enquiry categorisation",
      "Draft reply workflows",
      "Message routing and notifications",
      "Human review for sensitive replies",
    ],
  },

  "/services/ai-automation/report-generation": {
    category: "AI & Automation",
    title: "Automated Report Generation",
    subtitle: "Spend less time compiling information manually.",
    description:
      "Plan automated workflows that collect relevant information and turn it into structured reports for business monitoring and decision-making.",
    benefits: [
      "Report requirements and data mapping",
      "Automated information processing",
      "Consistent report formatting",
      "Scheduled report delivery planning",
    ],
  },

  "/services/ai-automation/whatsapp": {
    category: "AI & Automation",
    title: "WhatsApp Automation",
    subtitle: "Make customer conversations and follow-ups easier to manage.",
    description:
      "Design WhatsApp workflows for customer enquiries, approved notifications, lead follow-ups, and routine business communication.",
    benefits: [
      "Customer enquiry workflows",
      "Automated approved responses",
      "Lead follow-up planning",
      "Escalation and human handover",
    ],
  },

  "/services/tech-coaching/learn-to-code": {
    category: "Tech Coaching",
    title: "Learn to Code",
    subtitle: "Build your programming foundation one practical step at a time.",
    description:
      "Develop your understanding of programming concepts through guided learning, exercises, debugging, and practical coding tasks.",
    benefits: [
      "Programming fundamentals",
      "Problem-solving and debugging",
      "Working with development tools",
      "Practical coding exercises",
    ],
  },

  "/services/tech-coaching/real-world-projects": {
    category: "Tech Coaching",
    title: "Real-World Projects",
    subtitle: "Turn what you learn into applications you can demonstrate.",
    description:
      "Practise applying your knowledge by planning, building, testing, and improving projects that reflect real development workflows.",
    benefits: [
      "Project planning and requirements",
      "Building features step by step",
      "Debugging and testing",
      "Version control and documentation",
    ],
  },

  "/services/tech-coaching/portfolio": {
    category: "Tech Coaching",
    title: "Portfolio Development",
    subtitle: "Show what you can build, not just what you have studied.",
    description:
      "Develop a focused portfolio that presents your projects, explains your contribution, and makes your skills easier for others to assess.",
    benefits: [
      "Project selection and presentation",
      "GitHub repository organisation",
      "Project descriptions and documentation",
      "Portfolio website planning",
    ],
  },

  "/services/tech-coaching/junior-career": {
    category: "Tech Coaching",
    title: "Junior Developer Career Preparation",
    subtitle: "Prepare to present your skills and pursue entry-level opportunities.",
    description:
      "Get practical guidance on presenting your projects, preparing your CV, explaining technical decisions, and practising for interviews.",
    benefits: [
      "Junior developer CV and portfolio guidance",
      "Technical interview practice",
      "Project walkthrough preparation",
      "Job application strategy",
    ],
  },
};

const categoryPaths = {
  "Digital Marketing": "/services/digital-marketing",
  "Social Media": "/services/social-media",
  "Web & Digital Solutions": "/services/web-digital",
  "AI & Automation": "/services/ai-automation",
  "Tech Coaching": "/services/tech-coaching",
};

const ServiceDetailPage = () => {
  const location = useLocation();
  const service = serviceDetails[location.pathname];

  if (!service) {
    return (
      <main className="service-detail-page">
        <section className="service-detail-page__hero">
          <div className="container">
            <p className="service-detail-page__eyebrow">ZIDORA GROWTH</p>
            <h1>Service details coming soon</h1>
            <p>
              Explore our services or contact us to discuss what your business
              needs.
            </p>
            <Link to="/contact" className="service-detail-page__button">
              Contact Us <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const categoryPath = categoryPaths[service.category] || "/services";

  return (
    <main className="service-detail-page">
      <section className="service-detail-page__hero">
        <div className="container service-detail-page__container">
          <div className="service-detail-page__content">
            <p className="service-detail-page__eyebrow">
              <Link to="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <Link to={categoryPath}>{service.category}</Link>
            </p>

            <h1>{service.title}</h1>
            <h2>{service.subtitle}</h2>
            <p className="service-detail-page__description">
              {service.description}
            </p>

            <Link to="/contact" className="service-detail-page__button">
              Discuss Your Project <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <aside className="service-detail-page__panel">
            <p className="service-detail-page__panel-label">
              WHAT WE CAN HELP WITH
            </p>
            <ul>
              {service.benefits.map((benefit) => (
                <li key={benefit}>
                  <span aria-hidden="true">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="service-detail-page__next">
        <div className="container">
          <p className="service-detail-page__eyebrow">LET'S GET STARTED</p>
          <h2>Let's find the right solution for your goals.</h2>
          <p>
            Tell us what you want to achieve, and we'll discuss the next steps
            for your business or learning journey.
          </p>
          <Link to="/contact" className="service-detail-page__button">
            Contact Zidora Growth <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailPage;
