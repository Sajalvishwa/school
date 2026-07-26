import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "How to Choose the Best School in Aligarh for Your Child",
    date: "March 13, 2026",
    author: "Excellence",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
    excerpt:
      "Choosing the right school is one of the most important decisions parents make for their child's future. A good school provides academic excellence, strong values, experienced teachers, and a nurturing environment where children grow with confidence and curiosity."
  },
  {
    id: 2,
    title: "The Importance of Strong Primary Education for Student Success",
    date: "March 13, 2026",
    author: "Excellence",
    category: "Primary Education",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=80",
    excerpt:
      "Primary education lays the foundation for lifelong learning. It develops communication skills, creativity, confidence, discipline, and problem-solving abilities that prepare students for future academic success."
  },
  {
    id: 3,
    title:
      "What Makes a School the Best Choice for Quality Education in Aligarh",
    date: "March 13, 2026",
    author: "Excellence",
    category: "School Guide",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
    excerpt:
      "A great school offers much more than classrooms. Modern facilities, holistic development, sports, innovation, and caring educators create an environment where every child can achieve excellence."
  }
];

export default function Blog() {
  const featured = blogs[0];

  return (
    <div className="blog-page">

      {/* ================= HERO ================= */}

      <section className="blog-hero">

        <div className="blog-circle circle1"></div>
        <div className="blog-circle circle2"></div>
        <div className="blog-circle circle3"></div>

        <div className="container">

          <span className="blog-tag">
            Excellence International School
          </span>

          <h1>
            School <span>Blog</span>
          </h1>

          <p>
            Discover expert parenting advice, education insights,
            school updates, learning tips and inspiring articles
            to help every child achieve academic excellence.
          </p>

        </div>

      </section>

      {/* ================= FEATURED BLOG ================= */}

      <section className="featured-blog">

        <div className="container">

          <div className="featured-card">

            <div className="featured-image">

              <img
                src={featured.image}
                alt={featured.title}
              />

              <span className="featured-badge">
                Featured
              </span>

            </div>

            <div className="featured-content">

              <span className="blog-category">
                {featured.category}
              </span>

              <h2>
                {featured.title}
              </h2>

              <div className="blog-meta">

                <span>
                  👤 {featured.author}
                </span>

                <span>
                  📅 {featured.date}
                </span>

              </div>

              <p>
                {featured.excerpt}
              </p>

                            <button className="read-btn">
                Read Full Article →
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ================= LATEST BLOGS ================= */}

      <section className="latest-blogs">

        <div className="container">

          <div className="section-heading">

            <span>Latest Articles</span>

            <h2>Explore More Educational Insights</h2>

            <p>
              Stay updated with expert educational tips, parenting guidance,
              learning strategies and the latest happenings at Excellence
              International School.
            </p>

          </div>

          <div className="blog-grid">

            {blogs.map((blog) => (

              <div className="blog-card" key={blog.id}>

                <div className="blog-image">

                  <img
                    src={blog.image}
                    alt={blog.title}
                  />

                  <span className="card-category">
                    {blog.category}
                  </span>

                </div>

                <div className="blog-content">

                  <div className="blog-info">

                    <span>
                      👤 {blog.author}
                    </span>

                    <span>
                      📅 {blog.date}
                    </span>

                  </div>

                  <h3>
                    {blog.title}
                  </h3>

                  <p>
                    {blog.excerpt}
                  </p>

                  <button className="blog-btn">

                    Read More

                    <span>→</span>

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= NEWSLETTER ================= */}

      <section className="newsletter">

        <div className="container">

          <div className="newsletter-box">

            <span>Stay Updated</span>

            <h2>
              Subscribe To Our School Newsletter
            </h2>

            <p>
              Receive school news, educational articles,
              parenting tips and important announcements
              directly in your inbox.
            </p>

            <div className="newsletter-form">

              <input
                type="email"
                placeholder="Enter your email address"
              />

              <button>
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </section>

            {/* ================= CALL TO ACTION ================= */}

      <section className="blog-cta">

        <div className="container">

          <div className="cta-card">

            <div className="cta-content">

              <span>Admissions Open 2026-27</span>

              <h2>
                Give Your Child The Best Start
                With Excellence International School
              </h2>

              <p>
                Join a school where academic excellence, modern learning,
                character development and holistic growth come together to
                prepare students for a bright future.
              </p>

              <div className="cta-buttons">

                <a href="/admissions" className="primary-btn">
                  Apply Now
                </a>

                <a href="/contact" className="secondary-btn">
                  Contact Us
                </a>

              </div>

            </div>

            <div className="cta-icon">

              <div className="icon-circle">
                🎓
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}