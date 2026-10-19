
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  BLOG: "/blog",
  BLOG_POST: "/blog/:slug",

  DIGITAL_MARKETING: "/services/digital-marketing",
  SOCIAL_MEDIA: "/services/social-media",
  WEB_DIGITAL: "/services/web-digital",
  AI_AUTOMATION: "/services/ai-automation",
  TECH_COACHING: "/services/tech-coaching",
};

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api",
  TIMEOUT: 15000,
};

export const BRAND_COLORS = {
  primary: "#007F73",
  primaryDark: "#005F56",
  primaryLight: "#B8E5DE",
  black: "#111111",
  charcoal: "#1A1A1A",
  white: "#FFFFFF",
  warmCream: "#FAF8F3",
  gray100: "#F1F3EF",
  gray200: "#E2E6E1",
  gray500: "#777777",
  gray700: "#3D3D3D",
};

export const SITE_CONFIG = {
  name: "Zidora Growth",
  tagline: "Strategy. Technology. Growth.",
  defaultTitle: "Zidora Growth | Digital Marketing, Technology & AI",
  defaultDescription:
    "Zidora Growth helps businesses grow through digital marketing, social media, web and digital solutions, AI automation, and technology coaching.",
};
