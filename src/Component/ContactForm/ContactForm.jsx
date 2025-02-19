import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits";
        }
        if (!formData.date) newErrors.date = "Please select a date";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("");

        if (validateForm()) {
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                date: "",
                message: ""
            });
            setErrors({});
            setSuccessMessage("Form submitted successfully!");
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <div className="map">
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?..."
                        width="100%"
                        height="200"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                    <div className="info-box">
                        <span>📍 Office Address</span>
                        <p>141 Morris Ave, Union, NJ 07883</p>
                    </div>
                </div>
                <div className="info-card">
                    <span>🕒 Office Timings</span>
                    <p>Monday - Saturday (9:00 AM to 5:00 PM)</p>
                    <p>Sunday (Closed)</p>
                </div>

                <div className="info-card">
                    <span>📧 Email Address</span>
                    <p>smith02@gmail.com</p>
                </div>

                <div className="info-card">
                    <span>📞 Phone Number</span>
                    <p>090-78601</p>
                </div>

                <div className="info-card">
                    <span>💬 Live chat</span>
                    <p>+1 206 412 5659</p>
                </div>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-group">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <span className="error">{errors.firstName}</span>}
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <span className="error">{errors.lastName}</span>}
                        </div>
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="input-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <span className="error">{errors.phone}</span>}
                    </div>

                    <div className="input-group">
                        <select name="date" value={formData.date} onChange={handleChange}>
                            <option value="">Select date</option>
                            <option value="February 12, 2025">February 12, 2025</option>
                        </select>
                        {errors.date && <span className="error">{errors.date}</span>}
                    </div>

                    <div className="input-group">
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>

                    <button type="submit">Book an appointment</button>

                    {successMessage && <p className="success">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

