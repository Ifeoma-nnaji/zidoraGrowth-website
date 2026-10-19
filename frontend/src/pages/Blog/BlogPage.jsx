import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import blogService from "../../services/blogService.js";
import "./BlogPage.css";

const getCategoryName = (post) =>
  post?.category?.name || post?.category_name || "Business Insights";

const getExcerpt = (post) => {
  if (post?.excerpt) return post.excerpt;

  const content = String(post?.content || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return content.length > 180
    ? `${content.slice(0, 177)}...`
    : content || "Explore this practical insight from Zidora Growth.";
};

const getArticleUrl = (post) =>
  post?.slug ? `/blog/${encodeURIComponent(post.slug)}` : "/blog";

const formatDate = (date) => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "";

  return parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadBlog = async () => {
      setLoading(true);
      setError("");

      try {
        const [postsResponse, categoriesResponse] = await Promise.all([
          blogService.getPosts(),
          blogService.getCategories(),
        ]);

        if (!active) return;

        const posts = Array.isArray(postsResponse?.data?.data)
          ? postsResponse.data.data
          : Array.isArray(postsResponse?.data)
            ? postsResponse.data
            : [];

        const categoryData = Array.isArray(categoriesResponse?.data?.data)
          ? categoriesResponse.data.data
          : Array.isArray(categoriesResponse?.data)
            ? categoriesResponse.data
            : [];

        setArticles(posts);
        setCategories(categoryData);
      } catch (requestError) {
        if (!active) return;

        console.error("Unable to load blog content:", requestError);
        setError(
          "We couldn't load the articles right now. Please try refreshing the page."
        );
      } finally {
        if (active) setLoading(false);
      }
    };

    loadBlog();

    return () => {
      active = false;
    };
  }, []);

  const filteredArticles = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "all" ||
        String(article.category_id) === selectedCategory ||
        getCategoryName(article).toLowerCase() ===
          selectedCategory.toLowerCase();

      const searchableText = [
        article.title,
        article.excerpt,
        article.content,
        getCategoryName(article),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!search || searchableText.includes(search));
    });
  }, [articles, searchTerm, selectedCategory]);

  const featuredArticle = filteredArticles[0];
  const remainingArticles = filteredArticles.slice(1);

  return (
    <main className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero__container container">
          <div className="blog-hero__content">
            <p className="blog-page__eyebrow">TUTORIALS & ARTICLES</p>

            <h1 className="blog-hero__title">
              Ideas to help you
              <span>build and grow.</span>
            </h1>

            <p className="blog-hero__description">
              Practical insights, tutorials, and ideas around digital
              marketing, technology, AI, business growth, and building
              better digital experiences.
            </p>
          </div>

          <div className="blog-hero__visual" aria-hidden="true">
            <div className="blog-hero__visual-main">
              <span>THE ZIDORA JOURNAL</span>
              <strong>
                LEARN.
                <br />
                APPLY.
                <br />
                GROW.
              </strong>
              <div className="blog-hero__visual-line" />
            </div>

            <div className="blog-hero__card blog-hero__card--top">
              <span>01</span>
              <strong>Ideas</strong>
            </div>

            <div className="blog-hero__card blog-hero__card--bottom">
              <span>02</span>
              <strong>Insights</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-articles" aria-labelledby="blog-insights-title">
        <div className="blog-articles__container container">
          <div className="blog-articles__intro">
            <div>
              <p className="blog-page__eyebrow">THE ZIDORA JOURNAL</p>
              <h2 id="blog-insights-title">
                Explore our
                <span>latest thinking.</span>
              </h2>
            </div>

            <p>
              Explore practical ideas designed to help you make better
              decisions around marketing, technology, digital products,
              automation, and business growth.
            </p>
          </div>

          <div className="blog-filters">
            <label className="blog-filters__search">
              <span>Search articles</span>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search topics, ideas, or keywords..."
              />
            </label>

            <label className="blog-filters__category">
              <span>Category</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                <option value="all">All categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={String(category.id)}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {loading && (
            <p className="blog-state" role="status">
              Loading articles...
            </p>
          )}

          {!loading && error && (
            <div className="blog-state blog-state--error" role="alert">
              <p>{error}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
              >
                Try again
              </button>
            </div>
          )}

          {!loading && !error && filteredArticles.length === 0 && (
            <div className="blog-state">
              <h3>No articles found</h3>
              <p>
                {articles.length === 0
                  ? "Published articles will appear here once they are added to the blog."
                  : "Try a different search term or choose another category."}
              </p>
              {(searchTerm || selectedCategory !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
          )}

          {!loading && !error && featuredArticle && (
            <>
              <div className="blog-featured">
                <div className="blog-featured__container">
                  <div className="blog-featured__label">
                    <p className="blog-page__eyebrow">
                      {filteredArticles.length === articles.length
                        ? "FEATURED ARTICLE"
                        : "SEARCH RESULT"}
                    </p>
                  </div>

                  <article className="blog-featured__article">
                    <Link
                      className="blog-featured__visual blog-image-link"
                      to={getArticleUrl(featuredArticle)}
                      aria-label={`Read ${featuredArticle.title}`}
                    >
                      {featuredArticle.featured_image ? (
                        <img
                          src={featuredArticle.featured_image}
                          alt=""
                          loading="lazy"
                        />
                      ) : (
                        <div className="blog-image-placeholder">
                          <span>01</span>
                          <strong>GROWTH</strong>
                          <small>IDEAS THAT MOVE BUSINESS FORWARD</small>
                        </div>
                      )}
                    </Link>

                    <div className="blog-featured__content">
                      <p className="blog-featured__category">
                        {getCategoryName(featuredArticle)}
                      </p>

                      <h2>{featuredArticle.title}</h2>
                      <p>{getExcerpt(featuredArticle)}</p>

                      {formatDate(featuredArticle.published_at) && (
                        <p className="blog-article__date">
                          {formatDate(featuredArticle.published_at)}
                        </p>
                      )}

                      <Link to={getArticleUrl(featuredArticle)}>
                        Read Article <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </article>
                </div>
              </div>

              {remainingArticles.length > 0 && (
                <div className="blog-results">
                  <p className="blog-page__eyebrow">
                    MORE INSIGHTS ({remainingArticles.length})
                  </p>

                  <div className="blog-articles__grid">
                    {remainingArticles.map((article, index) => (
                      <article className="blog-article" key={article.id}>
                        <Link
                          className="blog-article__image blog-image-link"
                          to={getArticleUrl(article)}
                          aria-label={`Read ${article.title}`}
                        >
                          {article.featured_image ? (
                            <img
                              src={article.featured_image}
                              alt=""
                              loading="lazy"
                            />
                          ) : (
                            <div className="blog-image-placeholder blog-image-placeholder--small">
                              <span>
                                {String(index + 2).padStart(2, "0")}
                              </span>
                              <strong>ZIDORA</strong>
                            </div>
                          )}
                        </Link>

                        <div className="blog-article__top">
                          <span>{getCategoryName(article)}</span>
                          <span aria-hidden="true">↗</span>
                        </div>

                        <div className="blog-article__content">
                          <h3>{article.title}</h3>
                          <p>{getExcerpt(article)}</p>

                          {formatDate(article.published_at) && (
                            <p className="blog-article__date">
                              {formatDate(article.published_at)}
                            </p>
                          )}

                          <Link to={getArticleUrl(article)}>
                            Read Article <span aria-hidden="true">↗</span>
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="blog-cta">
        <div className="blog-cta__container container">
          <p className="blog-page__eyebrow">KEEP LEARNING</p>

          <h2>
            Better ideas create
            <span>better opportunities.</span>
          </h2>

          <Link to="/contact">
            Work With Us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
