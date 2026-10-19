
import api from "./api.js";

const contactService = {
  // Submit a message from the website contact form.
  submitContactMessage: (messageData) =>
    api.post("/contact-messages", messageData),
};

export default contactService;
