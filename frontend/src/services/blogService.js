import api from "./api.js";

const blogService = {
  // Retrieve published articles, with optional filters.
  getPosts: (params = {}) => {
    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        queryParams.set(key, String(value));
      }
    });

    const query = queryParams.toString();
    const endpoint = query
      ? `/blog-posts?${query}`
      : "/blog-posts";

    return api.get(endpoint);
  },

  // Retrieve a single public article using its actual slug.
  getPostBySlug: (slug) =>
    api.get(`/blog-posts/slug/${encodeURIComponent(slug)}`),

  // Retrieve blog categories.
  getCategories: () =>
    api.get("/blog-categories"),
};

export default blogService;
