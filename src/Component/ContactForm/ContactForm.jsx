import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
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
                <form>
                    <div className="row">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                    </div>

                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Phone number" />

                    <select>
                        <option>Select date</option>
                        <option>February 12, 2025</option>
                    </select>

                    <textarea placeholder="Message"></textarea>

                    <button type="submit">Book an appointment</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
