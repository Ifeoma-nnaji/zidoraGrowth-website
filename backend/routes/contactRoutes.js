const express = require("express");

const router = express.Router();

router.post("/contact-messages", async (req, res) => {
  try {
    const { name, email, company, service, message } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, service, and message are required.",
      });
    }

    console.log("New contact enquiry:", {
      name,
      email,
      company,
      service,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Contact message received successfully.",
    });
  } catch (error) {
    console.error("Contact message error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to process your enquiry.",
    });
  }
});

module.exports = router;
