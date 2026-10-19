
import "./GrowthResults.css";

const GrowthResults = () => {
  return (
    <section className="growth-results">
      <div className="growth-results__overlay" />

      <div className="growth-results__container container">
        <div className="growth-results__content">
          <p className="growth-results__eyebrow">BUILT FOR GROWTH</p>

          <h2 className="growth-results__title">
            Ready to Grow Your Business?
            <span> Let's Make It Happen.</span>
          </h2>

          <p className="growth-results__description">
            From digital marketing and website development to AI automation
            and technology coaching, Zidora Growth helps you turn your
            business goals into practical digital solutions.
          </p>

          <a href="/contact" className="growth-results__button">
            GET YOUR FREE QUOTE
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GrowthResults;
