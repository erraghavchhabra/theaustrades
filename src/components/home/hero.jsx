import React from 'react';
import HeroVideo from "../../assets/img/hero-vid.mp4";
import SearchBar from '../SearchForm';

function Hero() {
  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  return (
    <section className='main-hero'>
      <video playsInline autoPlay muted loop>
        <source src={HeroVideo} type="video/mp4" />
      </video>

      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9 text-center'>
            <h1 className='hero-title'>
              Free Online Licence Verification of All Trade Professionals Across Australia
            </h1>
            <p className='hero-p'>
              Search Over 1.5 Million License Records Covering 31 Licensing Bodies and 47 Occupations
            </p>
          </div>
          <SearchBar BASE_URL={BASE_URL} variant="hero"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
