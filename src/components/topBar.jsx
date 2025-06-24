import React from 'react';
import Logo from "../assets/img/logo.svg";


function TopBar() {
  return (
    <section className='topbar'>
        <div className='container'>
            <div className='row'>
                <div className='col-4 my-auto'>
                <img src={Logo} className='img-fluid logo-main' alt="theaustrades.com" />
                </div>
                <div className='col-8 text-end  my-auto'>
                    <ul className='list-inline topbar-ul mb-0'>
                        <li className='list-inline-item'><a className='btn-light' href="#">Find A Tradie</a></li>
                        <li className='list-inline-item'><a className='btn-dark' href="#">List Your Business</a></li>
                         <li className='list-inline-item'>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="circle-btn facebook">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className='list-inline-item'>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="circle-btn twitter">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

export default TopBar;
