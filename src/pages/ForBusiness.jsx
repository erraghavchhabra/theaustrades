import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hipagesLogo from "../assets/img/hiPagesCom.png"; // Your logo image

const ForBusiness = () => {
  return (
    <section className="container py-5">
      <div className="row justify-content-center align-items-start position-relative">
        {/* Left Section */}
        <div className="col-12 col-md-7">
          <div className="bg-dark text-white p-4 rounded-top">
            <h3 className="text-center text-md-start">
              Join Australia's Largest Network for Tradespeople
            </h3>
            <ul className="mt-3">
              <li>
                Are you a licensed trade professional looking to get more work?
              </li>
              <li>Would you like to pick and choose the work you do?</li>
            </ul>
          </div>

          {/* Offer Ribbon */}
          <div className="position-absolute w-75">
            <div
              className="OfferRibbonColor text-white fw-bold py-2 ps-4 pe-5 rounded-end"
              style={{
                fontSize: "18px",
                maxWidth: "fit-content",
                boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
                position: "absolute",
                left: "-15px",
                transform: "translateY(-50%)",
              }}
            >
              Special Offer: $69 for 1 year (Usually $298!)
              <div
                className="position-absolute"
                style={{
                  content: " ",
                  position: "absolute",
                  width: 0,
                  height: 0,
                  left: 0,
                  top: "100%",
                  borderStyle: "solid",
                  borderWidth: "4px 8px",
                  borderColor: "#000 #000 transparent transparent",
                }}
              ></div>
            </div>
          </div>

          <div className="bg-info bg-opacity-10 p-4 rounded-bottom border">
            <p>
              Simply fill in the form to find out how you can join Australia's
              largest trade referral network for <strong>only $69.</strong>
            </p>

            <form>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Company</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">State/Province</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="tel" className="form-control" />
              </div>
              <div className="text-center">
                <button className="btn btn-success fw-bold px-4">
                  Register Your Interest
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-md-5 mt-5 mt-md-0 ps-md-5">
          <h4 className="text-primarycolor fw-bold mb-3 text-center text-md-start">
            About Us
          </h4>
          <p>
            <a
              href="https://theaustrades.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primarycolor"
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
          <div className="mt-3 text-center text-md-start">
            <strong>Powered by</strong>
            <br />
            <img
              src={hipagesLogo}
              alt="hipages"
              className="img-fluid mt-2"
              style={{ maxHeight: "40px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusiness;
