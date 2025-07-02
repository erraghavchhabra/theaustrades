import React from 'react';
import HeroVideo from "../../assets/img/hero-vid.mp4";
function Hero() {
    return (
        <section className='main-hero'>
           <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={HeroVideo} type="video/mp4" />
                </video>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8 '>
                        <div className='text-center'>
                            <h1 className='hero-title'>Free Online Licence Verification of All Trade Professionals</h1>
                        <p className='hero-p'>Across Australia Consisting Over 1.2 Million Licences Retrieved From 50 Licensing Bodies</p>
                        </div>
                        <div className='main-form'>

                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label className='label-top'>Licensee/Individual or Business/Company Name</label>
                                        <input className='form-control' placeholder='e.g. John Smith...' />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='form-group'>
                                        <label className='label-top'>Licensee Number</label>
                                        <input className='form-control' placeholder='e.g. John Smith...' />
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className='form-group'>
                                        <button type='submit' className='btn-light w-100'>Search</button>
                                    </div>
                                </div>
                                <div className="advanced-search">

                                    <div className="mb-3">
                                        <a
                                            className="btn-advance"
                                            data-bs-toggle="collapse"
                                            href="#advancedSearchCollapse"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="advancedSearchCollapse"
                                        >
                                            Advanced Search
                                        </a>
                                    </div>

                                    <div className="collapse" id="advancedSearchCollapse">
                                        <div className="">

                                            {/* Filter by State */}
                                            <h5>Filter by State</h5>
                                            <hr />
                                            <div className="mb-3 d-flex flex-wrap gap-3">
                                                {['ACT', 'NSW', 'VIC', 'WA', 'QLD', 'SA', 'NT', 'TAS'].map((state) => (
                                                    <div className="form-check" key={state}>
                                                        <input className="form-check-input" type="checkbox" id={`state-${state}`} />
                                                        <label className="form-check-label" htmlFor={`state-${state}`}>{state}</label>
                                                    </div>
                                                ))}

                                                <button type="button" className="btn btn-sm btn-outline-warning ms-3">Clear All</button>
                                            </div>

                                            {/* Filter by Occupation */}
                                            <h5>Filter by Occupation</h5>
                                            <hr />
                                            <div className="row row-cols-2 row-cols-md-3 g-3">
                                                {[
                                                    ['ACT Plumber', 'ACT Builder', 'ACT Land Surveyor'],
                                                    ['NSW Builder', 'NSW Architect'],
                                                    ['VIC Builder'],
                                                    ['WA Architect'],
                                                    ['QLD Architect'],
                                                    ['TAS Architect']
                                                ].map((group, i) => (
                                                    <div className="col" key={i}>
                                                        {group.map((item) => (
                                                            <div className="form-check" key={item}>
                                                                <input className="form-check-input" type="checkbox" id={item.replace(/\s+/g, '-').toLowerCase()} />
                                                                <label className="form-check-label" htmlFor={item.replace(/\s+/g, '-').toLowerCase()}>{item}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;
