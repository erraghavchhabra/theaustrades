import React from "react";
function Login() {
    return (
        <>
            <div className="inner-wrap">
                <section className="section-space">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <form action="" method="post" className="reg-form shadow">
                                    <h5 className="reg-title">Login</h5>
                                    <div className="form-group">
                                        <label className="label-top">Email</label>
                                        <input type="email" name="email" className="form-control" placeholder="Enter Email Id" required="" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-top">Password</label>
                                        <input type="password" name="password" className="form-control" placeholder="Enter Password" required="" />
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="rememberMe2" name="terms" />
                                                    <label className="form-check-label nm-check" for="rememberMe2">Remember Me</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 text-end">
                                            <p className="mb-0"><a className="forgot-link" role="button">Forgot Password?</a></p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-dark mt-2 w-100" >Submit</button>
                                    </div>
                                    <div className="text-center">

                                        <p>Don't have an account?  <a className="" href="/register">Register</a></p>

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

export default Login;
