import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__brand">
          <a href="/" className="footer__logo">
            <span className="footer__logo-mark" aria-hidden="true">
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

            <span className="footer__brand-name">
              <strong>ZIDORA</strong>
              <small>GROWTH</small>
            </span>
          </a>

          <p className="footer__description">
            Digital marketing, technology, and AI solutions helping ambitious
            businesses build, grow, and operate better.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3>Services</h3>

            <a href="/services/digital-marketing">
              Digital Marketing
            </a>

            <a href="/services/social-media">
              Social Media
            </a>

            <a href="/services/web-digital">
              Web & Digital
            </a>

            <a href="/services/ai-automation">
              AI & Automation
            </a>

            <a href="/services/tech-coaching">
              Tech Coaching
            </a>
          </div>

          <div className="footer__column">
            <h3>Company</h3>

            <a href="/about">About</a>

            <a href="/blog">
              Tutorials & Articles
            </a>

            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container container">
          <p>
            © {new Date().getFullYear()} Zidora Growth. All rights reserved.
          </p>

          <p>Strategy. Technology. Growth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
