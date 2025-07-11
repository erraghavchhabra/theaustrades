import React, { useState } from "react";
import hipagesLogo from "../assets/img/hiPagesCom.png";

const ForBusiness = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    state_province: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("https://rehabhospitality.com/api/quote-for-business", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Quote submitted successfully.");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          company: "",
          state_province: "",
        });
      } else {
        if (response.status === 422) {
          setErrors(result.errors || {});
        } else {
          setMessage("❌ Submission failed. Try again later.");
        }
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inner-wrap">
      <section className="section-space">
        <div className="for-business-section container">
          <div className="row justify-content-center align-items-start position-relative">
            {/* Left Section */}
            <div className="col-12 col-md-7 col-lg-6 business-left">
              <div className="business-header shadow-lg">
                <h3 className="business-title">
                  Join Australia's Largest Network for Tradespeople
                </h3>
                <ul className="business-list">
                  <li>Are you a licensed trade professional looking to get more work?</li>
                  <li>Would you like to pick and choose the work you do?</li>
                </ul>
              </div>

              {/* Offer Ribbon */}
              <div className="offer-ribbon-container">
                <div className="offer-ribbon">
                  Special Offer: $69 for 1 year (Usually $298!)
                  <div className="ribbon-tail"></div>
                </div>
              </div>

              {/* Form */}
              <div className="business-form-box shadow-lg">
                <p className="business-p">
                  Simply fill in the form to find out how you can join Australia's
                  largest trade referral network for <strong>only $69.</strong>
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          className="form-control"
                          type="text"
                          value={formData.first_name}
                          onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                          required
                        />
                        {errors.first_name && (
                          <small className="text-danger">{errors.first_name[0]}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          className="form-control"
                          type="text"
                          value={formData.last_name}
                          onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                          required
                        />
                        {errors.last_name && (
                          <small className="text-danger">{errors.last_name[0]}</small>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          className="form-control"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                        {errors.email && (
                          <small className="text-danger">{errors.email[0]}</small>
                        )}
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Phone</label>
                        <input
                          className="form-control"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                        />
                        {errors.phone && (
                          <small className="text-danger">{errors.phone[0]}</small>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Company</label>
                    <input
                      className="form-control"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>State/Province</label>
                    <input
                      className="form-control"
                      type="text"
                      value={formData.state_province}
                      onChange={(e) => setFormData({ ...formData, state_province: e.target.value })}
                    />
                  </div>

                  <div className="form-submit mt-3 text-center">
                    <button type="submit" className="btn-dark" disabled={loading}>
                      {loading ? "Submitting..." : "Register Your Interest"}
                    </button>
                    {message && <p className="mt-2 text-muted">{message}</p>}
                  </div>
                </form>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-12 col-md-5 col-lg-5 offset-lg-1 business-right">
              <h4 className="main-heading">About Us</h4>
              <p>
                <a
                  href="https://theaustrades.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  theaustrades.com
                </a>{" "}
                is a comprehensive licence checking site.
              </p>
              <p>
                We are also part of a referral network that matches quality trades
                people with consumers that have projects in their local area.
              </p>
              <p>
                Our network receives over 260,000 projects each year and we
                currently work with 20,000 quality tradespeople.
              </p>
              <p>
                If you are a licensed trade professional that wants more work then
                register your interest today.
              </p>
              <div className="powered-by">
                <strong>Powered by</strong>
                <br />
                <img
                  src={hipagesLogo}
                  alt="hipages"
                  className="powered-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBusiness;
