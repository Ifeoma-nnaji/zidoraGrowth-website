import "./FloatingActions.css";

const WhatsAppButton = () => {
  const phoneNumber = "447000000000";

  const message = encodeURIComponent(
    "Hello Zidora Growth, I would like to enquire about your services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Zidora Growth on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M20.5 3.5A11.8 11.8 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.83c0 2.08.54 4.1 1.57 5.89L.13 24l6.43-1.68a11.82 11.82 0 0 0 5.52 1.37h.01c6.52 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.42-8.35ZM12.09 21.65h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.84 9.84 0 1 1 8.4 4.67Zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.49-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
