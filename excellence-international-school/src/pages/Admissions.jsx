import "./Admissions.css";

const Admission = () => {
  return (
    <div className="admission-page">

      {/* ================= Hero ================= */}
      <section className="admission-hero">
        <div className="container">
          <h1>Admission Procedure</h1>
          <p>
            Begin your child's educational journey with Excellence International
            School. We ensure a smooth, transparent, and student-friendly
            admission process for every family.
          </p>
        </div>
      </section>

      {/* ================= Admission Procedure ================= */}
      <section className="admission-info">
        <div className="container">

          <div className="section-title">
            <span>Admission Overview</span>
            <h2>Admission Procedure</h2>
            <p>
              Follow the simple admission process below to enroll your child at
              Excellence International School.
            </p>
          </div>

          <div className="info-box">

            <div className="info-card">
              <h3>01. Registration</h3>
              <p>
                Contact the school front desk and collect the admission
                registration form.
              </p>
            </div>

            <div className="info-card">
              <h3>02. Documents</h3>
              <p>
                Submit the completed admission form along with all required
                student and parent documents.
              </p>
            </div>

            <div className="info-card">
              <h3>03. Direct Admission</h3>
              <p>
                Students seeking direct admission should bring their previous
                school records and academic documents.
              </p>
            </div>

            <div className="info-card">
              <h3>04. Confirmation</h3>
              <p>
                Admissions are offered on a first come, first served basis
                subject to eligibility.
              </p>
            </div>

          </div>

          <div className="procedure-content">

            <div className="procedure-card">
              <h3>Direct Admission</h3>

              <p>
                Direct admission from <strong>Play Group to Class VIII</strong>
                is available for meritorious students. Parents are requested to
                visit the school along with previous academic records and other
                required documents.
              </p>
            </div>

            <div className="procedure-card">
              <h3>Entrance Test</h3>

              <p>
                Applicants may undergo an entrance assessment to evaluate their
                academic readiness. The assessment also helps the school guide
                parents in choosing the most suitable learning path.
              </p>
            </div>

            <div className="procedure-card">
              <h3>Payment Method</h3>

              <p>
                School fees can be deposited directly at the school office or
                through the designated bank. All standard payment methods are
                accepted.
              </p>
            </div>

            <div className="procedure-card">
              <h3>Special Note</h3>

              <p>
                Excellence International School also offers special admission
                consideration for a <strong>single girl child</strong> as per
                school policy.
              </p>
            </div>

          </div>

          <div className="contact-box">
            <h3>Need Admission Assistance?</h3>

            <p>
              For any admission-related queries, please visit our school campus
              or contact us through email. Our admission team will be happy to
              assist you throughout the enrollment process.
            </p>

            <a
              href="mailto:info@excellenceinternationalschool.com"
              className="contact-btn"
            >
              Contact Admission Office
            </a>
          </div>

        </div>
      </section>

      {/* ================= Admission Enquiry ================= */}

      <section className="enquiry-section">
        <div className="container">

          <div className="section-title">
            <span>Admission Enquiry Form</span>
            <h2>Academic Session 2026 – 2027</h2>
          </div>

          <form className="enquiry-form">

            <div className="input-group">
              <label>Board</label>
              <input type="text" value="CBSE" readOnly />
            </div>

            <div className="input-group">
              <label>Admission Type</label>
              <input type="text" value="Day Scholar" readOnly />
            </div>

            <div className="input-group">
              <label>Parent Name *</label>
              <input
                type="text"
                placeholder="Enter Parent Name"
              />
            </div>

            <div className="input-group">
              <label>Parent Email ID *</label>
              <input
                type="email"
                placeholder="Enter Email Address"
              />
            </div>

            <div className="input-group">
              <label>Parent Mobile Number *</label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
              />
            </div>

            <div className="input-group">
              <label>Select Grade *</label>

              <select>
                <option>Select Grade</option>
                <option>Nursery</option>
                <option>LKG</option>
                <option>UKG</option>
                <option>Class I</option>
                <option>Class II</option>
                <option>Class III</option>
                <option>Class IV</option>
                <option>Class V</option>
                <option>Class VI</option>
                <option>Class VII</option>
                <option>Class VIII</option>
                <option>Class IX</option>
                <option>Class X</option>
                <option>Class XI</option>
                <option>Class XII</option>
              </select>
            </div>

            <div className="input-group">
              <label>Select Gender *</label>

              <select>
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="input-group">
              <label>Date of Birth *</label>
              <input type="date" />
            </div>

            <button type="submit" className="submit-btn">
              Submit Enquiry
            </button>

          </form>

        </div>
      </section>

    </div>
  );
};

export default Admission;