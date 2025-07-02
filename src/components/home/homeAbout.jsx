import React from 'react';
import Info from "../../assets/img/info.png";
import Stock from "../../assets/img/stock.png";
import Hiring from "../../assets/img/hiring.png";
import Note from "../../assets/img/note.png";
function HomeAbout() {
    return (
        <section className='home-about section-space'>

            <div className='container'>
               <div className='row'>
                <div className='col-lg-3 d-flex'>
                    <div className='about-card'>
                        <div className='about-icon'>
                            <img src={Info} className='img-fluid' alt="" />
                        </div>
                        <h4 className='about-title'>About Us</h4>
                        <p>Theaustrades.com is Australia's only comprehensive licence checking site so you can do all your licensed trades checks in one place. Ensure that the trade professional you hire has the appropriate licence for your job.</p>
                    <a href="#" className='read-more'>Read More</a>
                    </div>
                </div>
                 <div className='col-lg-3 d-flex'>
                    <div className='about-card'>
                        <div className='about-icon'>
                            <img src={Stock} className='img-fluid' alt="" />
                        </div>
                        <h4 className='about-title'>Trade Data Analysis</h4>
                       <p>Over 1.2 million trade professionals rely on our platform to elevate their business—whether it's discovering new partners, showcasing their expertise, or streamlining day-to-day operations. From seasoned contractors to emerging startups, we provide the tools, insights, and network they need to thrive in a competitive industry.</p>
                    </div>
                </div>
                 <div className='col-lg-3 d-flex'>
                    <div className='about-card'>
                        <div className='about-icon'>
                            <img src={Hiring} className='img-fluid' alt="" />
                        </div>
                        <h4 className='about-title'>Find a Tradie</h4>
                       <p>We can put you in touch with licensed trade professionals in your area.</p>
                       <div className='form-group'>
                        <select className='form-control form-select'>
                            <option selected disabled>i am looking for a...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                       </div>
                       <div className='form-group'>
                        <input type='text' className='form-control' placeholder="Near" />
                       </div>
                       <div className='form-group'>
                        <a class="btn-light" href="#">Get Started</a>
                       </div>
                    </div>
                </div>
                <div className='col-lg-3 d-flex'>
                    <div className='about-card'>
                        <div className='about-icon'>
                            <img src={Note} className='img-fluid' alt="" />
                        </div>
                        <h4 className='about-title'>List Your Business</h4>
                       <p>List your business and connect with 1.2 million trade professionals</p>
                       <div className='form-group'>
                         <input type='text' className='form-control' placeholder="Business Name" />
                       </div>
                       <div className='form-group'>
                        <input type='text' className='form-control' placeholder="Location" />
                       </div>
                       <div className='form-group'>
                        <a class="btn-light" href="#">Get Started</a>
                       </div>
                    </div>
                </div>
               </div>
            </div>
        </section>
    );
}

export default HomeAbout;
