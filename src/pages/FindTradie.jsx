import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hiPageIMage from "../assets/img/hiPagesCom.png";
import helpImage from "../assets/img/helpImage.png";
import icanhelpImge from "../assets/img/icanhelpImge.png";
import choosetradespersonImage from "../assets/img/choosetradespersonImage.png";
import { FaCheck } from "react-icons/fa";

const FindTradie = () => {
  const benefits = ["Free to use", "No obligations to hire", "Quick responses"];
  const [timing, setTiming] = useState("");
  return (
    <div className="inner-wrap">
      <section className="section-space">
        <div className="container py-5">
          {/* Header Section */}
          <div className="find-tradie-header">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="main-heading">
                  Need something done around the house?
                </h4>
                <p>
                  Our <strong>FREE SERVICE</strong> quickly puts you in touch with
                  Local Tradesmen who are eager to quote for your job.
                </p>
                <ul className="m-list">
                  <li>
                    Don’t do the ring around. Tradespeople who are keen to work WILL CONTACT YOU!
                  </li>
                  <li>Get up to 3 quotes then you choose the best one.</li>
                  <li>There is 100% no obligation to hire.</li>
                  <li>
                    Backed by Australia’s largest home services directory. We have over 39,000 tradesmen on site.
                  </li>
                  <li>Call us anytime on 1300 192 161 (7 days a week)</li>
                </ul>
              </div>
              <div className="col-lg-4 offset-lg-2 align-items-end d-flex">
                <div className="info-box ">
                  <p>
                    Powered by the million+ licenses at{" "}
                    <a
                      href="http://theaustrades.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      theaustrades.com
                    </a>{" "}
                    and the more than 70,000 businesses at{" "}
                    <a
                      href="http://www.homeimprovementpages.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hipages.com.au
                    </a>
                    , this is the perfect way to find tradespeople in Australia.
                  </p>
                  <div className="text-end">
                    <img
                      src={hiPageIMage}
                      alt="hipages logo"
                      className="img-fluid"
                      style={{ maxHeight: "40px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section-space pb-0">
            {/* Steps + Benefits */}
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
                  <img
                    src={icanhelpImge}
                    alt="I can help"
                    height={150}
                    className="mb-2"
                  />
                  <p className="mb-0">2. Tradespeople contact you</p>
                </div>
                <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                  <img
                    src={choosetradespersonImage}
                    alt="Choose"
                    height={150}
                    className="mb-2"
                  />
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

            {/* Form Section */}
            <form className="reg-form">
              <div className="row">
                <div className="form-group">
                  <label className="label-top">What do you need?</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. plumber, cleaner, fix my door"
                  />
                </div>
                <div className="form-group">
                  <label className="label-top">
                    Where do you need the job done?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your suburb or postcode"
                  />
                </div>
                <div className="form-group">
                  <label className="label-top">
                    When do you need the work to start?
                  </label>
                  <select
                    className="form-select form-control"
                    value={timing}
                    onChange={(e) => setTiming(e.target.value)}
                  >
                    <option>Please select</option>
                    <option>This is an emergency, I need someone now</option>
                    <option>
                      ASAP, I need the job completed in the next few days
                    </option>
                    <option>
                      I need someone to contact me in the next few days, and start in
                      the next few weeks
                    </option>
                    <option>
                      I need someone to contact me in the next few days, but I'm
                      flexible on start dates
                    </option>
                    <option>other</option>
                  </select>
                </div>
                {timing === "other" && (
                  <div className="col-12 d-flex">
                    <label className="label-top">
                      Other: Please provide more details of when you would like your
                      work to start
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. When you need a quote, when you would like work to start"
                    />
                  </div>
                )}
                <div className="form-group">
                  <label className="label-top">Describe what you need done?</label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Please provide as much detail as possible"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="label-top">Your name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="label-top">Your email address</label>
                  <input type="email" className="form-control" />
                  <small className="text-muted">
                    Why do we need your email address?
                  </small>
                </div>
                <div className="form-group">
                  <label className="label-top">Best number to contact you on</label>
                  <input type="tel" className="form-control" />
                  <small className="text-muted">
                    Why do we need your phone number?
                  </small>
                </div>
                <div className="col-12 text-center mt-3">
                  <button type="submit" className="btn-dark">
                    Get Quotes Now »
                  </button>
                  <p className="mt-3 text-muted small">
                    By pressing ‘Get Quotes Now’, you agree to the{" "}
                    <a href="/terms">terms and conditions</a> of
                    theaustrades.com
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
