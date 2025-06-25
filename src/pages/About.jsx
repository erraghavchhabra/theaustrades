import React from "react";

function About() {
  return (
    <section>
      <div className="container mt-5 mb-5">
        <h2 className="text-primarycolor">About Us</h2>
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

        <div className="row mt-4">
          <div className="col-md-6">
            <h5 className="text-primarycolor">Address</h5>
            <address>
              licensedtrades.com.au <br />
              Level 2 <br />
              338 Pitt St <br />
              Sydney NSW 2000 <br />
              Australia
            </address>
          </div>
          <div className="col-md-6">
            <h5 className="text-primarycolor">Contact Information</h5>
            <address>
              <div className="d-flex">
                <strong className="me-1">A</strong>
                <div>
                  licensedtrades.com.au <br />
                  P.O Box 2210 <br />
                  Strawberry Hills NSW 2012 <br />
                  Australia
                </div>
              </div>
              <strong>P</strong> (02) 8396 1300 <br />
              <strong>F</strong> (02) 8396 1399 <br />
              <strong>E</strong>{" "}
              <a
                className="text-primarycolor"
                href="mailto:accounts@licensedtrades.com.au"
              >
                accounts@licensedtrades.com.au
              </a>
            </address>
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
    </section>
  );
}

export default About;
