import Button from "../Buttons/Button";
import "./CTA.css";

const CTA = ({
  eyebrow = "Let's work together",
  title = "Ready to build something that moves your business forward?",
  description = "Tell us what you're working on and let's explore how Zidora Growth can help.",
  buttonText = "Start a Project",
  buttonHref = "/contact",
}) => {
  return (
    <section className="cta">
      <div className="cta__container container">
        <div className="cta__content">
          <p className="section-label">{eyebrow}</p>

          <h2 className="cta__title">{title}</h2>

          <p className="cta__description">{description}</p>

          <Button href={buttonHref} variant="primary">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
