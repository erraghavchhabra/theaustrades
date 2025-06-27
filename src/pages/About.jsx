import React from "react";
import BigMap from "../assets/img/big-map.png"
function About() {
  return (
    <>
      <div className="inner-wrap">
        <section className="section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-auto">
                <h2 className="main-heading ">About Us</h2>
                <p>
                  <a
                    href="https://web.archive.org/web/20160314191541/http://www.licensedtrades.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primarycolor"
                  >
                    Licensedtrades.com.au
                  </a>{" "}
                  is Australia's only comprehensive licence checking website. We are
                  indexing over 48 licensing authorities and over 1 million trade
                  professionals! So you can do all your licensed trades checks in one
                  place.
                </p>
                <p>
                  We are committed to ensuring that the trade professional you hire has
                  the appropriate licence for your job. Conduct an online licence check
                  or let us put you in touch with a licensed tradesperson in your local
                  area.
                </p>

              </div>
              <div className="col-lg-4 offset-lg-2 text-center">
                <img src={BigMap} className="img-fluid" alt="" />
              </div>
            </div>


          </div>
        </section>
        <section className="section-space ab-cont">
          <div class="container">
            <h5 className="main-heading text-center">Contact Information</h5>
            <div className="row">
              <div className="col-lg-3 d-flex">
                <div class="con-box">
                  <i class="fa-solid fa-location-dot"></i>
                  <div class="con-box-text">
                    <h6>Address</h6>
                    <p>icensedtrades.com.au
                      P.O Box 2210
                      Strawberry Hills NSW 2012
                      Australia</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex">
                <div class="con-box">
                  <i class="fa-solid fa-phone"></i>
                  <div class="con-box-text">
                    <h6>Phone</h6>
                    <p>(02) 8396 1300</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex">
                <div class="con-box">
                  <i class="fa-solid fa-fax"></i>
                  <div class="con-box-text">
                    <h6>Fax</h6>
                    <p>(02) 8396 1399</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-flex">
                <div class="con-box">
                  <i class="fa-solid fa-envelope"></i>
                  <div class="con-box-text">
                    <h6>Email</h6>
                    <p>accounts@licensedtrades.com.au</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-container mt-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.400089379567!2d151.2068891754701!3d-33.876051673261155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3fd8e753cf%3A0x9bfa3f19e319f264!2s338%20Pitt%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sin!4v1719327500000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="text-center mt-2">
                <a
                  href="https://www.google.com/maps/place/338+Pitt+St,+Sydney+NSW+2000,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primarycolor"
                >
                  View Larger Map
                </a>
              </div>
            </div>
          </div>


        </section >
      </div>
    </>
  );
}

export default About;
