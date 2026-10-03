"use strict";

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const leadRoutes = require("./routes/leadRoutes");
const contactMessageRoutes = require("./routes/contactMessageRoutes");
const projectRoutes = require("./routes/projectRoutes");
const testimonialRoutes = require("./routes/testimonialRoutes");
const blogCategoryRoutes = require("./routes/blogCategoryRoutes");
const blogPostRoutes = require("./routes/blogPostRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const errorMiddleware = require("./errors/errorMiddleware");

const app = express();



app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

app.use(
  express.urlencoded({
    extended: true,
    limit: "1mb",
  })
);


app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Zidora Growth API is running",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Zidora Growth API is healthy",
  });
});


app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/services", serviceRoutes);

app.use("/api/leads", leadRoutes);

app.use("/api/contact-messages", contactMessageRoutes);

app.use("/api/projects", projectRoutes);

app.use("/api/testimonials", testimonialRoutes);

app.use("/api/blog-categories", blogCategoryRoutes);

app.use("/api/blog-posts", blogPostRoutes);

app.use("/api/dashboard", dashboardRoutes);


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});


app.use(errorMiddleware);

module.exports = app;