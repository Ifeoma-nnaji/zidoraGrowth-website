import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* ZIDORA GROWTH LOGO */}
        <a
          href="/"
          className="navbar__logo"
          aria-label="Zidora Growth"
          onClick={closeMobileMenu}
        >
          <span className="navbar__logo-mark" aria-hidden="true">
            <svg viewBox="0 0 80 80">
              <path
                d="M10 20 H60 L20 60 H70"
                fill="none"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />

              <path
                d="M46 14 H67 V35"
                fill="none"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />

              <path
                d="M67 14 L27 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="9"
                strokeLinecap="square"
              />
            </svg>
          </span>

          <span className="navbar__brand">
            <strong>ZIDORA</strong>
            <small>GROWTH</small>
          </span>
        </a>

        {/* MAIN NAVIGATION */}
        <nav
          className={`navbar__links ${
            mobileMenuOpen ? "navbar__links--open" : ""
          }`}
        >

          {/* DIGITAL MARKETING */}
          <div className="navbar__item navbar__item--dropdown">
            <a href="/services/digital-marketing">
              Digital Marketing
              <span className="navbar__chevron">⌄</span>
            </a>

            <div className="navbar__dropdown">
              <a href="/services/digital-marketing/google-ads">
                Google Ads
              </a>

              <a href="/services/digital-marketing/facebook-instagram-ads">
                Facebook & Instagram Ads
              </a>

              <a href="/services/digital-marketing/tiktok-ads">
                TikTok Ads
              </a>

              <a href="/services/digital-marketing/email-marketing">
                Email Marketing
              </a>

              <a href="/services/digital-marketing/funnels-lead-generation">
                Funnels & Lead Generation
              </a>

              <a href="/services/digital-marketing/copywriting">
                Copywriting & Ad Writing
              </a>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="navbar__item navbar__item--dropdown">
            <a href="/services/social-media">
              Social Media
              <span className="navbar__chevron">⌄</span>
            </a>

            <div className="navbar__dropdown">
              <a href="/services/social-media/management">
                Social Media Management
              </a>

              <a href="/services/social-media/content">
                Social Media Content
              </a>

              <a href="/services/social-media/facebook-instagram-ads">
                Facebook & Instagram Ads
              </a>

              <a href="/services/social-media/tiktok-ads">
                TikTok Ads
              </a>
            </div>
          </div>

          {/* WEB & DIGITAL */}
          <div className="navbar__item navbar__item--dropdown">
            <a href="/services/web-digital">
              Web & Digital
              <span className="navbar__chevron">⌄</span>
            </a>

            <div className="navbar__dropdown">
              <a href="/services/web-digital/website-design">
                Website Design
              </a>

              <a href="/services/web-digital/website-redesign">
                Website Redesign
              </a>

              <a href="/services/web-digital/ecommerce">
                E-commerce Websites
              </a>

              <a href="/services/web-digital/website-maintenance">
                Website Maintenance
              </a>
            </div>
          </div>

          {/* AI & AUTOMATION */}
          <div className="navbar__item navbar__item--dropdown">
            <a href="/services/ai-automation">
              AI & Automation
              <span className="navbar__chevron">⌄</span>
            </a>

            <div className="navbar__dropdown">
              <a href="/services/ai-automation/customer-support-bots">
                Customer Support Bots
              </a>

              <a href="/services/ai-automation/email-reply">
                Email Reply Automation
              </a>

              <a href="/services/ai-automation/report-generation">
                Report Generation
              </a>

              <a href="/services/ai-automation/whatsapp">
                WhatsApp Automation
              </a>
            </div>
          </div>

          {/* TECH COACHING */}
          <div className="navbar__item navbar__item--dropdown">
            <a href="/services/tech-coaching">
              Tech Coaching
              <span className="navbar__chevron">⌄</span>
            </a>

            <div className="navbar__dropdown">
              <a href="/services/tech-coaching/learn-to-code">
                Learn to Code
              </a>

              <a href="/services/tech-coaching/real-world-projects">
                Real-World Projects
              </a>

              <a href="/services/tech-coaching/portfolio">
                Portfolio Development
              </a>

              <a href="/services/tech-coaching/junior-career">
                Junior Developer Career Preparation
              </a>
            </div>
          </div>

          {/* BLOG */}
          <div className="navbar__item navbar__item--direct">
            <a href="/blog" onClick={closeMobileMenu}>
              Blog
            </a>
          </div>

        </nav>

        {/* CTA */}
        <a
          href="/contact"
          className="navbar__cta"
          onClick={closeMobileMenu}
        >
          Let&apos;s Talk
        </a>

        {/* MOBILE MENU */}
        <button
          type="button"
          className={`navbar__menu ${
            mobileMenuOpen ? "navbar__menu--open" : ""
          }`}
          aria-label={
            mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;
