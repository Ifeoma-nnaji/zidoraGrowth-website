import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_NAME = "Zidora Growth";
const SITE_URL = "https://zidoragrowth.com";

const DEFAULT_DESCRIPTION =
  "Zidora Growth helps businesses grow online with digital marketing, website design, SEO, and AI automation.";

const pageMetadata = {
  "/": {
    title: "Digital Marketing & Web Solutions",
    description:
      "Grow your business with Zidora Growth. Explore digital marketing, Google Ads, website design, SEO, social media marketing, and AI automation.",
  },
  "/about": {
    title: "About Us",
    description:
      "Discover Zidora Growth's approach to digital marketing, website solutions, AI automation, and practical technology services for businesses.",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Contact Zidora Growth to discuss digital marketing, website design, SEO, social media advertising, or AI automation for your business.",
  },
  "/blog": {
    title: "Digital Growth Blog",
    description:
      "Explore practical insights on digital marketing, websites, business growth, SEO, and AI automation from Zidora Growth.",
  },
  "/services/digital-marketing": {
    title: "Digital Marketing Services",
    description:
      "Explore digital marketing services from Zidora Growth, including Google Ads, social media advertising, email marketing, funnels, and copywriting.",
  },
  "/services/social-media": {
    title: "Social Media Marketing Services",
    description:
      "Build your social media presence with content planning, social media management, and advertising services from Zidora Growth.",
  },
  "/services/web-digital": {
    title: "Website Design & Digital Solutions",
    description:
      "Explore website design, website redesign, e-commerce development, and website maintenance services from Zidora Growth.",
  },
  "/services/ai-automation": {
    title: "AI & Business Automation",
    description:
      "Explore AI and business automation solutions, including customer support bots, email workflows, report generation, and WhatsApp automation.",
  },
  "/services/tech-coaching": {
    title: "Software Engineering Coaching",
    description:
      "Build practical coding skills with technology coaching covering programming fundamentals, real-world projects, portfolio development, and junior developer preparation.",
  },
};

const serviceMetadata = {
  "/services/digital-marketing/google-ads": {
    title: "Google Ads Management",
    description:
      "Reach relevant customers with Google Ads campaign planning, keyword research, ad copy, conversion tracking, and performance optimization.",
  },
  "/services/digital-marketing/facebook-instagram-ads": {
    title: "Facebook & Instagram Ads",
    description:
      "Promote your business with targeted Facebook and Instagram advertising, audience research, campaign management, and performance tracking.",
  },
  "/services/digital-marketing/tiktok-ads": {
    title: "TikTok Ads",
    description:
      "Introduce your brand to new audiences with TikTok advertising strategy, creative planning, campaign setup, and performance reviews.",
  },
  "/services/digital-marketing/email-marketing": {
    title: "Email Marketing",
    description:
      "Nurture leads and customers with email campaign planning, newsletters, promotional emails, audience segmentation, and performance tracking.",
  },
  "/services/digital-marketing/funnels-lead-generation": {
    title: "Funnels & Lead Generation",
    description:
      "Plan lead-generation funnels, landing pages, lead capture journeys, and nurturing workflows to help turn prospects into enquiries.",
  },
  "/services/digital-marketing/copywriting": {
    title: "Copywriting & Ad Writing",
    description:
      "Create clear, audience-focused copy for advertising campaigns, landing pages, promotional emails, and business offers.",
  },
  "/services/social-media/management": {
    title: "Social Media Management",
    description:
      "Plan and manage your business's social media presence with content calendars, publishing, audience-focused communication, and reporting.",
  },
  "/services/social-media/content": {
    title: "Social Media Content Creation",
    description:
      "Plan social media content, carousels, short-form video scripts, and captions around your brand, audience, and business goals.",
  },
  "/services/social-media/facebook-instagram-ads": {
    title: "Facebook & Instagram Advertising",
    description:
      "Reach relevant audiences with Facebook and Instagram ad planning, audience targeting, creative direction, and campaign monitoring.",
  },
  "/services/social-media/tiktok-ads": {
    title: "TikTok Advertising Services",
    description:
      "Plan TikTok advertising campaigns with audience research, creative direction, messaging, and performance reviews.",
  },
  "/services/web-digital/website-design": {
    title: "Website Design Services",
    description:
      "Get a responsive business website designed around your brand, customer needs, services, and business goals.",
  },
  "/services/web-digital/website-redesign": {
    title: "Website Redesign Services",
    description:
      "Improve your website's design, structure, mobile usability, and calls to action with website redesign services from Zidora Growth.",
  },
  "/services/web-digital/ecommerce": {
    title: "E-commerce Website Design",
    description:
      "Plan an online store with clear product categories, responsive storefront design, and a straightforward customer shopping journey.",
  },
  "/services/web-digital/website-maintenance": {
    title: "Website Maintenance Services",
    description:
      "Keep your website updated and functional with content updates, website checks, troubleshooting, and ongoing technical support.",
  },
  "/services/ai-automation/customer-support-bots": {
    title: "AI Customer Support Bots",
    description:
      "Explore customer support bot workflows for frequently asked questions, enquiry routing, business information, and human handover.",
  },
  "/services/ai-automation/email-reply": {
    title: "Email Reply Automation",
    description:
      "Organize incoming emails with automated categorization, suggested replies, message routing, and review workflows.",
  },
  "/services/ai-automation/report-generation": {
    title: "Automated Report Generation",
    description:
      "Explore automated reporting workflows that organize business information into structured reports for monitoring and decision-making.",
  },
  "/services/ai-automation/whatsapp": {
    title: "WhatsApp Business Automation",
    description:
      "Plan WhatsApp workflows for customer enquiries, approved responses, lead follow-ups, notifications, and human handover.",
  },
  "/services/tech-coaching/learn-to-code": {
    title: "Learn to Code",
    description:
      "Develop programming fundamentals through practical coding exercises, problem-solving, debugging, and guided technology learning.",
  },
  "/services/tech-coaching/real-world-projects": {
    title: "Real-World Coding Projects",
    description:
      "Practise planning, building, testing, and documenting practical software projects that demonstrate your development skills.",
  },
  "/services/tech-coaching/portfolio": {
    title: "Developer Portfolio Development",
    description:
      "Build a focused developer portfolio with well-presented projects, organized GitHub repositories, and clear project documentation.",
  },
  "/services/tech-coaching/junior-career": {
    title: "Junior Developer Career Preparation",
    description:
      "Prepare for junior developer opportunities with practical guidance on CVs, portfolios, technical interviews, and project walkthroughs.",
  },
};

const SEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = serviceMetadata[pathname] || pageMetadata[pathname];

    const title = page
      ? `${page.title} | ${SITE_NAME}`
      : `Page Not Found | ${SITE_NAME}`;

    const description = page?.description || DEFAULT_DESCRIPTION;
    const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const canonicalUrl = `${SITE_URL}${canonicalPath || "/"}`;

    document.title = title;

    let descriptionTag = document.querySelector(
      'meta[name="description"]'
    );

    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }

    descriptionTag.setAttribute("content", description);

    let canonicalTag = document.querySelector('link[rel="canonical"]');

    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute("href", canonicalUrl);

    let robotsTag = document.querySelector('meta[name="robots"]');

    if (!robotsTag) {
      robotsTag = document.createElement("meta");
      robotsTag.setAttribute("name", "robots");
      document.head.appendChild(robotsTag);
    }

    robotsTag.setAttribute(
      "content",
      page ? "index, follow" : "noindex, follow"
    );
  }, [pathname]);

  return null;
};

export default SEO;
