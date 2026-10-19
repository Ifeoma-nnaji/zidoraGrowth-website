
import { useState } from "react";
import "./ContactPage.css";

const API_URL = "http://localhost:3000/api/contact-messages";

const services = [
  "Digital Marketing",
  "Google Ads",
  "Facebook & Instagram Ads",
  "TikTok Ads",
  "Email Marketing",
  "Funnels & Lead Generation",
  "Copywriting & Ad Writing",
  "Social Media Management",
  "Social Media Content",
  "Website Design",
  "Website Redesign",
  "E-commerce Websites",
  "Website Maintenance",
  "AI & Automation",
  "Customer Support Bots",
  "Email Reply Automation",
  "Lead Generation",
  "WhatsApp Automation",
  "Tech Coaching",
  "Learn to Code",
  "Real-World Projects",
  "Portfolio Development",
  "Junior Developer Career Preparation",
  "I'm not sure yet",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [notice, setNotice] = useState("");
  const [noticeType, setNoticeType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (notice) {
      setNotice("");
      setNoticeType("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const fullName = formData.name.trim();
    const nameParts = fullName.split(/\s+/);
    const firstName = nameParts.shift();
    const lastName = nameParts.join(" ") || firstName;

    const subjectParts = [
      formData.service,
      formData.budget ? `Budget: ${formData.budget}` : "",
    ].filter(Boolean);

    const businessDetails = formData.business.trim()
      ? `Business or organisation: ${formData.business.trim()}\n\n`
      : "";

    const phoneDetails = formData.phone.trim()
      ? `Phone: ${formData.phone.trim()}\n\n`
      : "";

    const messageDetails = [
      businessDetails + phoneDetails + formData.message.trim(),
    ].join("");

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      subject: subjectParts.join(" | ").slice(0, 255),
      message: messageDetails,
    };

    if (!payload.subject) {
      payload.subject = "General enquiry";
    }

    setIsSubmitting(true);
    setNotice("Submitting your enquiry...");
    setNoticeType("info");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success !== true) {
        const validationMessage = Array.isArray(result.errors)
          ? result.errors
              .map((error) => error.msg)
              .filter(Boolean)
              .join(". ")
          : "";

        throw new Error(
          validationMessage ||
            result.message ||
            "We couldn't submit your enquiry. Please try again."
        );
      }

      setNotice(
        "Thank you! Your enquiry has been submitted successfully. We'll be in touch."
      );
      setNoticeType("success");

      setFormData({
        name: "",
        email: "",
        business: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setNotice(
        error.message ||
          "Something went wrong. Please check your connection and try again."
      );
      setNoticeType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-hero-content">
            <span className="contact-eyebrow">
              LET'S BUILD SOMETHING MEANINGFUL
            </span>

            <h1>
              Have a goal?
              <br />
              <span>Let's grow together.</span>
            </h1>

            <p>
              Tell us about your business, your ideas, or the challenge you're
              trying to solve. We'll help you explore the right digital
              solution for your next stage of growth.
            </p>

            <div className="contact-highlights">
              <div className="contact-highlight">
                <span className="contact-highlight-icon">01</span>
                <div>
                  <h3>Tell us your goals</h3>
                  <p>Share what you want to achieve.</p>
                </div>
              </div>

              <div className="contact-highlight">
                <span className="contact-highlight-icon">02</span>
                <div>
                  <h3>Explore your options</h3>
                  <p>Identify a suitable solution.</p>
                </div>
              </div>

              <div className="contact-highlight">
                <span className="contact-highlight-icon">03</span>
                <div>
                  <h3>Plan your next steps</h3>
                  <p>Move forward with a clearer direction.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span className="contact-eyebrow">PROJECT ENQUIRY</span>
              <h2>Let's talk about your project.</h2>
              <p>Complete the form below to tell us what you need.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    maxLength={201}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-business">
                    Business or organisation
                  </label>
                  <input
                    id="contact-business"
                    name="business"
                    type="text"
                    placeholder="Your business name"
                    value={formData.business}
                    onChange={handleChange}
                    autoComplete="organization"
                    maxLength={200}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    maxLength={30}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">
                    Which service do you need? *
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-budget">Estimated budget</label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select a budget</option>
                    <option value="Under £250">Under £250</option>
                    <option value="£250–£500">£250–£500</option>
                    <option value="£500–£1,000">£500–£1,000</option>
                    <option value="£1,000–£3,000">£1,000–£3,000</option>
                    <option value="Over £3,000">Over £3,000</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div className="contact-field contact-field--full">
                  <label htmlFor="contact-message">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="What are you trying to achieve, and how can we help?"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={10000}
                    required
                  />
                </div>
              </div>

              {notice && (
                <p
                  className={`contact-form-notice contact-form-notice--${noticeType}`}
                  role="status"
                  aria-live="polite"
                >
                  {notice}
                </p>
              )}

              <button
                className="contact-submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                {!isSubmitting && (
                  <span aria-hidden="true">→</span>
                )}
              </button>

              <p className="contact-privacy-note">
                Your information will be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-bottom">
        <div className="contact-container contact-bottom-inner">
          <div>
            <span className="contact-eyebrow">YOUR NEXT CHAPTER</span>
            <h2>Good ideas deserve a clear plan.</h2>
          </div>

          <p>
            Whether you need better marketing, a professional website,
            practical automation, or technical coaching, let's discuss the
            next step.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
