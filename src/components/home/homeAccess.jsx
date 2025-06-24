import React from 'react';
import ActGovt from "../../assets/img/act-gov.png";
import NSW from "../../assets/img/nsw.png";
import Energy from "../../assets/img/energy.png";
import VBA from "../../assets/img/vba.png";
import Worksafe from "../../assets/img/worksafe.png";
import NT from "../../assets/img/nt.png";
import TAS from "../../assets/img/tas.png";
function HomeAccess() {
    return (
        <section className='section-space'>

            <div className='container'>
                <h2 className='main-heading text-center'>Access to all major Australian licensing bodies</h2>
                <div className='row justify-content-center'>
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-4 col-6'>
                                <div className='access-box'>
                                    <img src={ActGovt} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-6'>
                                <div className='access-box'>
                                    <img src={NSW} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-6'>
                                <div className='access-box'>
                                    <img src={Energy} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-6'>
                                <div className='access-box'>
                                    <img src={VBA} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-6'>
                                <div className='access-box'>
                                    <img src={Worksafe} className='img-fluid' alt="" />
                                </div>
                            </div>
                             <div className='col-lg-3 col-md-4 col-6'>
                                <div className='access-box'>
                                    <img src={NT} className='img-fluid' alt="" />
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-6'>
                                <div className='access-box'>
                                    <img src={TAS} className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAccess;
