import React, { useState } from "react";
import axios from "axios";

function ChangePassword() {
    const [form, setForm] = useState({
        password: "",
        confirm_password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const BASE_URL = process.env.REACT_APP_API_BASE_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.password !== form.confirm_password) {
            setError("Passwords do not match");
            setSuccess("");
            return;
        }

        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                `${BASE_URL}/change-password`,
                {
                    password: form.password,
                },
                {
                    headers: {
                        token: token, // If token is stored without "Bearer"
                        Accept: "application/json"
                    }
                }
            );

            setSuccess("Password updated successfully!");
            setError("");
            setForm({ password: "", confirm_password: "" });
        } catch (err) {
            setError(err.response?.data?.message || "Password update failed.");
            setSuccess("");
        }
    };

    return (
        <div className="inner-wrap">
            <section className="section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <form onSubmit={handleSubmit} className="reg-form shadow">
                                <h5 className="reg-title">Change Password</h5>

                                {error && <div className="alert alert-danger">{error}</div>}
                                {success && <div className="alert alert-success">{success}</div>}

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="label-top">New Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                value={form.password}
                                                onChange={handleChange}
                                                required
                                                placeholder="Enter new password"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label className="label-top">Confirm Password</label>
                                            <input
                                                type="password"
                                                name="confirm_password"
                                                className="form-control"
                                                value={form.confirm_password}
                                                onChange={handleChange}
                                                required
                                                placeholder="Re-enter new password"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark mt-2">
                                        Update Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ChangePassword;
