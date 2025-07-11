import React, { useState, useEffect } from "react";
import axios from "axios";

function MyProfile() {
    const [form, setForm] = useState({
        name: "",
        last_name: "",
        email: "",
        phone: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // ✅ Load user data safely from localStorage
    useEffect(() => {
        const userData = localStorage.getItem("user");
        try {
            if (userData && userData !== "undefined") {
                const user = JSON.parse(userData);
                setForm({
                    name: user.name || "",
                    last_name: user.last_name || "",
                    email: user.email || "",
                    phone: user.phone || "",
                });
            }
        } catch (err) {
            console.error("Invalid user data in localStorage:", err);
            localStorage.removeItem("user");
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                "https://rehabhospitality.com/api/profile",
                {
                    name: form.name,
                    last_name: form.last_name,
                    phone: form.phone,
                },
                {
                    headers: {
                        token: `${token}`,
                        Accept: "application/json"
                    }
                }
            );

            setSuccess("Profile updated successfully!");
            localStorage.setItem("user", JSON.stringify(response.data.user));
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || "Update failed.");
        }
    };

    return (
        <div className="inner-wrap">
            <section className="section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit} className="reg-form shadow">
                                <h5 className="reg-title">My Profile</h5>

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
                                                disabled
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

                                <div className="form-group">
                                    <button type="submit" className="btn btn-dark mt-2 w-100">
                                        Update
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

export default MyProfile;
