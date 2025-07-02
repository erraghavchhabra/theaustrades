import React from "react";
function Register() {
    return (
        <>
            <div className="inner-wrap">
                <section className="section-space">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <form action="" method="post" className="reg-form shadow">
                                    <h5 className="reg-title">Regsiter</h5>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="label-top">First Name</label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="label-top">Last Name</label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="label-top">Email</label>
                                                <input type="email"  className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="label-top">Phone</label>
                                                <input type="text"  className="form-control" required="" />
                                            </div>
                                        </div>
                                    </div>
                                     <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="label-top">Password</label>
                                                <input type="password"  className="form-control" required="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="label-top">Confirm Password</label>
                                                <input type="password"  className="form-control" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="rememberMe2" name="terms" />
                                                    <label className="form-check-label nm-check" for="rememberMe2">I accpet all the <a href="#">Term & Conditions</a></label>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-dark mt-2 w-100" >Submit</button>
                                    </div>
                                    <div className="text-center">

                                        <p>Don't have an account?  <a className="" href="/login">Login</a></p>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default Register;
