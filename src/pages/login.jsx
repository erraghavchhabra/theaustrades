import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [resetEmail, setResetEmail] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://rehabhospitality.com/api/login", form);
            const { token, user } = response.data;

            // Store token and user data
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            // Redirect after login
            window.location.href = "/profile";
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Please try again.");
        }
    };

    const handleResetSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending password reset to:", resetEmail);
        // ✅ You can replace this with an actual API call to reset the password
        setShowModal(false);
    };

    return (
        <div className="inner-wrap">
            <section className="section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <form onSubmit={handleSubmit} className="reg-form shadow">
                                <h5 className="reg-title">Login</h5>

                                {error && <div className="alert alert-danger">{error}</div>}

                                <div className="form-group">
                                    <label className="label-top">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Enter Email Id"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="label-top">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        value={form.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="rememberMe2" />
                                            <label className="form-check-label" htmlFor="rememberMe2">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-6 text-end">
                                        <button
                                            type="button"
                                            className="btn btn-link forgot-link p-0"
                                            onClick={() => setShowModal(true)}
                                        >
                                            Forgot Password?
                                        </button>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark mt-2 w-100">
                                        Login
                                    </button>
                                </div>

                                <div className="text-center">
                                    <p>
                                        Don't have an account? <a href="/register">Register</a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reset Password Modal */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="position-relative p-4">
                                <button
                                    type="button"
                                    className="btn-close position-absolute end-0 top-0 m-3"
                                    onClick={() => setShowModal(false)}
                                ></button>
                                <div className="reg-form bg-white border-0 pb-0">
                                    <h5 className="text-center reg-title">Reset Your Password</h5>
                                    <form onSubmit={handleResetSubmit}>
                                        <div className="form-group mb-3">
                                            <label className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your email"
                                                value={resetEmail}
                                                onChange={(e) => setResetEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-dark w-100">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Backdrop */}
                    <div className="modal-backdrop fade show"></div>
                </div>
            )}
        </div>
    );
}

export default Login;
