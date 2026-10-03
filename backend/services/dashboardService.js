"use strict";

const {
  User,
  Lead,
  ContactMessage,
  Project,
  Testimonial,
  BlogPost,
} = require("../models");

const getDashboardStats = async () => {
  const [
    totalUsers,
    activeUsers,
    totalLeads,
    newLeads,
    qualifiedLeads,
    wonLeads,
    totalMessages,
    unreadMessages,
    totalProjects,
    publishedProjects,
    totalTestimonials,
    publishedTestimonials,
    totalBlogPosts,
    publishedBlogPosts,
    draftBlogPosts,
  ] = await Promise.all([
    User.count(),

    User.count({
      where: {
        is_active: true,
      },
    }),

    Lead.count(),

    Lead.count({
      where: {
        status: "new",
      },
    }),

    Lead.count({
      where: {
        status: "qualified",
      },
    }),

    Lead.count({
      where: {
        status: "won",
      },
    }),

    ContactMessage.count(),

    ContactMessage.count({
      where: {
        status: "unread",
      },
    }),

    Project.count(),

    Project.count({
      where: {
        is_published: true,
      },
    }),

    Testimonial.count(),

    Testimonial.count({
      where: {
        is_published: true,
      },
    }),

    BlogPost.count(),

    BlogPost.count({
      where: {
        status: "published",
      },
    }),

    BlogPost.count({
      where: {
        status: "draft",
      },
    }),
  ]);

  return {
    users: {
      total: totalUsers,
      active: activeUsers,
    },

    leads: {
      total: totalLeads,
      new: newLeads,
      qualified: qualifiedLeads,
      won: wonLeads,
    },

    contact_messages: {
      total: totalMessages,
      unread: unreadMessages,
    },

    projects: {
      total: totalProjects,
      published: publishedProjects,
    },

    testimonials: {
      total: totalTestimonials,
      published: publishedTestimonials,
    },

    blog_posts: {
      total: totalBlogPosts,
      published: publishedBlogPosts,
      drafts: draftBlogPosts,
    },
  };
};

module.exports = {
  getDashboardStats,
};