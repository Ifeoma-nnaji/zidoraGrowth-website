
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import BlogPage from "./pages/Blog/BlogPage";

import DigitalMarketingPage from "./pages/Services/DigitalMarketingPage";
import SocialMediaPage from "./pages/Services/SocialMediaPage";
import WebDigitalPage from "./pages/Services/WebDigitalPage";
import AIAutomationPage from "./pages/Services/AIAutomationPage";
import TechCoachingPage from "./pages/Services/TechCoachingPage";
import ServiceDetailPage from "./pages/Services/ServiceDetailPage";

const serviceDetailRoutes = [
  // Digital Marketing
  "/services/digital-marketing/google-ads",
  "/services/digital-marketing/facebook-instagram-ads",
  "/services/digital-marketing/tiktok-ads",
  "/services/digital-marketing/email-marketing",
  "/services/digital-marketing/funnels-lead-generation",
  "/services/digital-marketing/copywriting",

  // Social Media
  "/services/social-media/management",
  "/services/social-media/content",
  "/services/social-media/facebook-instagram-ads",
  "/services/social-media/tiktok-ads",

  // Web & Digital Solutions
  "/services/web-digital/website-design",
  "/services/web-digital/website-redesign",
  "/services/web-digital/ecommerce",
  "/services/web-digital/website-maintenance",

  // AI & Automation
  "/services/ai-automation/customer-support-bots",
  "/services/ai-automation/email-reply",
  "/services/ai-automation/report-generation",
  "/services/ai-automation/whatsapp",

  // Tech Coaching
  "/services/tech-coaching/learn-to-code",
  "/services/tech-coaching/real-world-projects",
  "/services/tech-coaching/portfolio",
  "/services/tech-coaching/junior-career",
];

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />

          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketingPage />}
          />

          <Route
            path="/services/social-media"
            element={<SocialMediaPage />}
          />

          <Route
            path="/services/web-digital"
            element={<WebDigitalPage />}
          />

          <Route
            path="/services/ai-automation"
            element={<AIAutomationPage />}
          />

          <Route
            path="/services/tech-coaching"
            element={<TechCoachingPage />}
          />

          {serviceDetailRoutes.map((path) => (
            <Route
              key={path}
              path={path}
              element={<ServiceDetailPage />}
            />
          ))}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
