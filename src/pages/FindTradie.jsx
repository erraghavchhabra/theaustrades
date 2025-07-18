import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hiPageIMage from "../assets/img/hiPagesCom.png";
import helpImage from "../assets/img/helpImage.png";
import icanhelpImge from "../assets/img/icanhelpImge.png";
import choosetradespersonImage from "../assets/img/choosetradespersonImage.png";
import { FaCheck } from "react-icons/fa";

const FindTradie = () => {
  const benefits = ["Free to use", "No obligations to hire", "Quick responses"];

  const [formData, setFormData] = useState({
    job_type: "",
    location: "",
    start_timeframe: "",
    otherTiming: "",
    job_description: "",
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
   const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});
    setLoading(true);

    const payload = {
      ...formData,
      start_timeframe:
        formData.start_timeframe === "other"
          ? formData.otherTiming
          : formData.start_timeframe,
    };

    try {
      const response = await fetch(`${BASE_URL}/tradie-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Your request has been submitted successfully!");
        setFormData({
          job_type: "",
          location: "",
          start_timeframe: "",
          otherTiming: "",
          job_description: "",
          name: "",
          email: "",
          phone: "",
        });
      } else {
        if (response.status === 422 && data.errors) {
          setErrors(data.errors);
        } else {
          setMessage("❌ Failed to submit the request.");
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inner-wrap">
      <section className="section-space">
        <div className="container py-5">
          <div className="find-tradie-header">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="main-heading">Need something done around the house?</h4>
                <p>
                  Our <strong>FREE SERVICE</strong> quickly puts you in touch with
                  Local Tradesmen who are eager to quote for your job.
                </p>
                <ul className="m-list">
                  <li>Don’t do the ring around. Tradespeople WILL CONTACT YOU!</li>
                  <li>Get up to 3 quotes, then choose the best one.</li>
                  <li>100% no obligation to hire.</li>
                  <li>
                    Backed by Australia’s largest home services directory. Over 39,000 tradesmen.
                  </li>
                  <li>Call us anytime on 1300 192 161 (7 days a week)</li>
                </ul>
              </div>
              <div className="col-lg-4 offset-lg-2 align-items-end d-flex">
                <div className="info-box">
                  <p>
                    Powered by{" "}
                    <a href="http://theaustrades.com" target="_blank" rel="noopener noreferrer">
                      theaustrades.com
                    </a>{" "}
                    and{" "}
                    <a href="http://www.homeimprovementpages.com.au/" target="_blank" rel="noopener noreferrer">
                      hipages.com.au
                    </a>
                    , find tradespeople in Australia fast.
                  </p>
                  <div className="text-end">
                    <img src={hiPageIMage} alt="hipages logo" className="img-fluid" style={{ maxHeight: "40px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section-space pb-0">
            <div className="find-tradie-steps text-center mb-4">
              <h5 className="main-heading">
                Fill in the form below to get 3 quotes, <em>FAST...</em>
              </h5>
              <div className="row mt-4 gy-4">
                <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                  <img src={helpImage} alt="Help" height={150} className="mb-2" />
                  <p className="mb-0">1. Tell tradespeople what you need</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                  <img src={icanhelpImge} alt="I can help" height={150} className="mb-2" />
                  <p className="mb-0">2. Tradespeople contact you</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                  <img src={choosetradespersonImage} alt="Choose" height={150} className="mb-2" />
                  <p className="mb-0">3. You choose the best tradesperson</p>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex flex-column align-items-start justify-content-center h-100">
                    {benefits.map((text, index) => (
                      <div key={index} className="d-flex align-items-center mb-2">
                        <FaCheck className="text-success me-2" />
                        <span className="fw-semibold">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <form className="reg-form" onSubmit={handleSubmit}>
              <div className="row gy-3">
                <div className="form-group">
                  <label className="label-top">What do you need?</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.job_type}
                    onChange={(e) => setFormData({ ...formData, job_type: e.target.value })}
                    placeholder="e.g. plumber, cleaner"
                    required
                  />
                  {errors.job_type && <small className="text-danger">{errors.job_type[0]}</small>}
                </div>

                <div className="form-group">
                  <label className="label-top">Where do you need the job done?</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Suburb or postcode"
                    required
                  />
                  {errors.location && <small className="text-danger">{errors.location[0]}</small>}
                </div>

                <div className="form-group">
                  <label className="label-top">When do you need the work to start?</label>
                  <select
                    className="form-select form-control"
                    value={formData.start_timeframe}
                    onChange={(e) => setFormData({ ...formData, start_timeframe: e.target.value })}
                    required
                  >
                    <option value="">Please select</option>
                    <option>This is an emergency, I need someone now</option>
                    <option>ASAP, I need the job completed in the next few days</option>
                    <option>I need someone to contact me in the next few days, and start in the next few weeks</option>
                    <option>I need someone to contact me in the next few days, but I'm flexible on start dates</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.start_timeframe && <small className="text-danger">{errors.start_timeframe[0]}</small>}
                </div>

                {formData.start_timeframe === "other" && (
                  <div className="form-group col-12">
                    <label className="label-top">Other Timing Details</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.otherTiming}
                      onChange={(e) => setFormData({ ...formData, otherTiming: e.target.value })}
                      placeholder="e.g. next month, weekends only"
                    />
                  </div>
                )}

                <div className="form-group">
                  <label className="label-top">Describe the job</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    value={formData.job_description}
                    onChange={(e) => setFormData({ ...formData, job_description: e.target.value })}
                    placeholder="Details about the job"
                    required
                  ></textarea>
                  {errors.job_description && <small className="text-danger">{errors.job_description[0]}</small>}
                </div>

                <div className="form-group">
                  <label className="label-top">Your name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  {errors.name && <small className="text-danger">{errors.name[0]}</small>}
                </div>

                <div className="form-group">
                  <label className="label-top">Your email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  {errors.email && <small className="text-danger">{errors.email[0]}</small>}
                </div>

                <div className="form-group">
                  <label className="label-top">Your phone number</label>
                  <input
                    type="tel"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  {errors.phone && <small className="text-danger">{errors.phone[0]}</small>}
                </div>

                <div className="col-12 text-center mt-3">
                  <button type="submit" className="btn btn-dark" disabled={loading}>
                    {loading ? "Submitting..." : "Get Quotes Now »"}
                  </button>
                  {message && <p className="mt-3 text-muted small">{message}</p>}
                  <p className="mt-2 text-muted small">
                    By pressing ‘Get Quotes Now’, you agree to the{" "}
                    <a href="/terms">terms and conditions</a> of theaustrades.com
                  </p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default FindTradie;
