import "./Footer.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logos/Excellence-Logo.png.webp";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* ================= Left ================= */}

          <div className="footer-about">

            <img src={logo} alt="Excellence International School" />

            <h3>Excellence International School</h3>

            <p>
              Excellence International School is one of the leading schools in
              Aligarh, Uttar Pradesh, committed to nurturing young minds
              through academic excellence, modern learning methods, and
              holistic development. Located at Ramghat Road, Aligarh 202001,
              Uttar Pradesh, India.
            </p>

            <h4>Follow Us</h4>

            <div className="footer-social">

              <a
                href="http://facebook.com/ExcllenceInternationalSchool?rdid=YCYOb0tbbOVGVS27&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GvbBbZqN5%2F#"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/excellence_school_aligarh?igsh=a2NudW0zcnlqeTVu"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@excellenceschoolinternational"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* ================= Links ================= */}

          <div className="footer-links">

            <h3>Our Links</h3>

            <ul>

              <li><Link to="/">Home</Link></li>

              <li><Link to="/about">About Us</Link></li>

              <li><Link to="/admissions">Admissions</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>

              <li><Link to="/blog">Blog</Link></li>

              <li><Link to="/contact">Contact Us</Link></li>

            </ul>

          </div>

         {/* ================= Academics ================= */}

<div className="footer-links">

  <h3>Our Academics</h3>

  <ul>

    <li>
      <Link to="/academics/pre-primary">
        Pre Primary School
      </Link>
    </li>


    <li>
      <Link to="/academics/primary">
        Primary School
      </Link>
    </li>


    <li>
      <Link to="/middle-school">
        Middle School
      </Link>
    </li>


    <li>
      <Link to="/daycare">
        Daycare
      </Link>
    </li>

  </ul>

</div>

          {/* ================= Contact ================= */}

          <div className="footer-contact">

            <h3>Contact Us</h3>

            <div className="contact-item">

              <FaMapMarkerAlt />

              <p>
                Excellence International School
                <br />
                Ramghat Road, Aligarh 202001,
                <br />
                Uttar Pradesh, India
              </p>

            </div>

            <div className="contact-item">

              <FaPhoneAlt />

              <a href="tel:+917055582117">
                +91 7055582117
              </a>

            </div>

            <div className="contact-item">

              <FaEnvelope />

              <div>

                <a href="mailto:rahulexcellence85@gmail.com">
                  rahulexcellence85@gmail.com
                </a>

                <br />

                <a href="mailto:info@excellenceinternationalschool.com">
                  info@excellenceinternationalschool.com
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Excellence International School.
            All Rights Reserved.
          </p>

          <p>
            Designed & Developed with ❤️
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;