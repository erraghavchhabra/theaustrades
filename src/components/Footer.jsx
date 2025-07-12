import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className='m-footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-6'>
                        <h6 className='ft-h'>Site Links</h6>
                        <ul className='ft-ul list-unstyled'>
                            <li><NavLink to="/find_a_tradie">Find A Tradie</NavLink></li>
                            <li><NavLink to="">Check A Licence</NavLink></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-3 col-6'>
                        <h6 className='ft-h'>Resources</h6>
                        <ul className='ft-ul list-unstyled'>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms">Terms</NavLink></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-3 col-6'>
                        <h6 className='ft-h '>Social Links</h6>
                        <ul className="footer-social-list list-inline">
                            <li className="list-inline-item"><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className='col-lg-2 col-md-3 col-6'>
                        <ul className='list-unstyled'>
                            <li><Link className="btn-light w-100 text-center" to="/find_a_tradie">Find A Tradie</Link></li>
                            <li><Link className="btn-dark w-100 text-center" to="/for_business">List Your Business</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="">
                                <p>© All rights reserved. <span>theaustrades.com</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
