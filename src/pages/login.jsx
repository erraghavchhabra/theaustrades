import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://rehabhospitality.com/api/login", form); // ✅ Replace with your real login endpoint

            // If login successful
            const { token, user } = response.data;

            // ✅ Store token in localStorage or cookie
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            // ✅ Redirect or navigate to dashboard
            window.location.href = "/profile";

        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
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
                                            <label className="form-check-label" htmlFor="rememberMe2">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p className="mb-0"><a className="forgot-link" href="/forgot-password">Forgot Password?</a></p>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark mt-2 w-100">Login</button>
                                </div>

                                <div className="text-center">
                                    <p>Don't have an account? <a href="/register">Register</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Login;
