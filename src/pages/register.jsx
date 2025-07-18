import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [form, setForm] = useState({
        name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
        terms: false,
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirm_password) {
            setError("Passwords do not match");
            return;
        }

        if (!form.terms) {
            setError("You must accept terms and conditions");
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}/register`, form); // Replace with your real endpoint

            setSuccess("Registration successful!");
            setError("");
             window.location.href = "/login";
            // Optional: Redirect to login
            // window.location.href = "/login";
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed.");
            setSuccess("");
        }
    };

    return (
        <div className="inner-wrap">
            <section className="section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit} className="reg-form shadow">
                                <h5 className="reg-title">Register</h5>

                                {error && <div className="alert alert-danger">{error}</div>}
                                {success && <div className="alert alert-success">{success}</div>}

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label-top">First Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label-top">Last Name</label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                className="form-control"
                                                value={form.last_name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label-top">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label-top">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control"
                                                value={form.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label-top">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                value={form.password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="label-top">Confirm Password</label>
                                            <input
                                                type="password"
                                                name="confirm_password"
                                                className="form-control"
                                                value={form.confirm_password}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="rememberMe2"
                                            name="terms"
                                            checked={form.terms}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label nm-check" htmlFor="rememberMe2">
                                            I accept all the <a href="#">Term & Conditions</a>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark mt-2 w-100">
                                        Submit
                                    </button>
                                </div>

                                <div className="text-center">
                                    <p>Already have an account? <a href="/login">Login</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Register;
