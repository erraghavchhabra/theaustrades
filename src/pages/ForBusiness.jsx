import React from "react";
import hipagesLogo from "../assets/img/hiPagesCom.png";

const ForBusiness = () => {
  return (
    <div className="inner-wrap">
      <section className="section-space">
        <div className="for-business-section container ">
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

              <div className="business-form-box shadow-lg">
                <p className="business-p">
                  Simply fill in the form to find out how you can join Australia's
                  largest trade referral network for <strong>only $69.</strong>
                </p>

                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input className="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Phone</label>
                        <input className="form-control" type="tel" />
                      </div>
                    </div>
                  </div>


                  <div className="form-group">
                    <label>Company</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>State/Province</label>
                    <input className="form-control" type="text" />
                  </div>


                  <div className="form-submit">
                    <button className="btn-dark" type="submit">Register Your Interest</button>
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
