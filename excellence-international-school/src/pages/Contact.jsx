import "./Contact.css";

export default function Contact() {

  return (

    <div className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="hero-circle circle1"></div>
        <div className="hero-circle circle2"></div>

        <div className="container">

          <span className="hero-tag">
            Excellence International School
          </span>

          <h1>
            Reach <span>Us</span>
          </h1>

          <p>
            We'd love to hear from you. Whether you have questions about
            admissions, academics, facilities or anything else, our team is
            always ready to help.
          </p>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">

        <div className="container">

          <div className="contact-wrapper">

            {/* Left Side */}

            <div className="contact-left">

              <span className="section-tag">
                Get In Touch
              </span>

              <h2>
                Excellence International School
              </h2>

              <p>
                Feel free to contact us for admissions, school visits,
                academic enquiries or any other information. We will be
                happy to assist you.
              </p>

              {/* Address */}

              <div className="contact-card">

                <div className="icon">
                  📍
                </div>

                <div>

                  <h3>Address</h3>

                  <p>
                    Excellence International School,
                    <br />
                    Ramghat Road,
                    Aligarh - 202001,
                    Uttar Pradesh, India
                  </p>

                </div>

              </div>

              {/* Email */}

              <div className="contact-card">

                <div className="icon">
                  ✉️
                </div>

                <div>

                  <h3>Email</h3>

                  <p>
                    rahulexcellence85@gmail.com
                  </p>

                  <p>
                    info@excellenceinternationalschool.com
                  </p>

                </div>

              </div>

              {/* Phone */}

              <div className="contact-card">

                <div className="icon">
                  📞
                </div>

                <div>

                  <h3>Phone</h3>

                  <p>
                    +91 7055582117
                  </p>

                </div>

              </div>

              {/* Social */}

              <div className="social-box">

                <h3>
                  Connect With Us
                </h3>

                <div className="social-icons">

                  <a href="#">
                    🌐
                  </a>

                  <a href="#">
                    📘
                  </a>

                  <a href="#">
                    📸
                  </a>

                  <a href="#">
                    ▶️
                  </a>

                </div>

              </div>

            </div>

                        {/* ================= RIGHT SIDE FORM ================= */}

            <div className="contact-right">

              <div className="contact-form">

                <span className="section-tag">
                  Send Message
                </span>

                <h2>
                  We'd Love To Hear From You
                </h2>

                <p>
                  Fill out the form below and our admissions team will
                  get back to you as soon as possible.
                </p>

                <form>

                  <div className="form-grid">

                    <div className="input-group">

                      <label>Your Name</label>

                      <input
                        type="text"
                        placeholder="Enter your name"
                      />

                    </div>

                    <div className="input-group">

                      <label>Your Email</label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                      />

                    </div>

                    <div className="input-group">

                      <label>Phone Number</label>

                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                      />

                    </div>

                    <div className="input-group">

                      <label>Subject</label>

                      <select>

                        <option>
                          General Enquiry
                        </option>

                        <option>
                          Admission Enquiry
                        </option>

                        <option>
                          School Visit
                        </option>

                        <option>
                          Fee Structure
                        </option>

                      </select>

                    </div>

                  </div>

                  <div className="input-group">

                    <label>
                      Message
                    </label>

                    <textarea
                      rows="7"
                      placeholder="Message Type Here..."
                    ></textarea>

                  </div>

                  <button
                    type="submit"
                    className="submit-btn"
                  >
                    Send Message →
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MAP ================= */}

      <section className="map-section">

        <div className="container">

          <div className="map-box">

            <iframe
              title="Excellence International School"
              src="https://www.google.com/maps?q=Excellence+International+School+Ramghat+Road+Aligarh&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>

      </section>

            {/* ================= CALL TO ACTION ================= */}

      <section className="contact-cta">

        <div className="container">

          <div className="cta-box">

            <div className="cta-content">

              <span>
                Admissions Open 2026-27
              </span>

              <h2>
                Let's Build Your Child's
                Bright Future Together
              </h2>

              <p>
                Excellence International School provides quality education,
                modern infrastructure, experienced teachers and a caring
                environment where every child learns, grows and succeeds.
              </p>

              <div className="cta-buttons">

                <a
                  href="tel:+917055582117"
                  className="primary-btn"
                >
                  📞 Call Now
                </a>

                <a
                  href="/admissions"
                  className="secondary-btn"
                  color="#000000"
                >
                  Apply Now
                </a>

              </div>

            </div>

            <div className="cta-right">

              <div className="cta-circle">

                <div className="cta-icon">
                  🎓
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}