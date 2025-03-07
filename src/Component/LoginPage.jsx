import React from "react";
import "./LoginPage.scss";
import missionimg from '../assets/missionimg.png';
import googleimg from '../assets/Google.png';
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const LoginPage = () => {
    return (
        <>
            <Navbar />
            <div className="login-container">
                <div className="login-left">
                    <img
                        src={missionimg}
                        alt="Dentist"
                    />
                    <div className="quote">
                        <p>
                            "For There Was Never Yet Philosopher, That Could Endure The
                            Toothache Patiently."
                        </p>
                        <span>— Dr. Dre Andre Romelle</span>
                        <small>Founder of Smile Pvt Ltd.</small>
                    </div>
                </div>

                <div className="login-right">
                    <h2>Welcome Back</h2>
                    <p>Discover a better way of spending with Ulity.</p>

                    <button className="google-login">
                        <img
                            src={googleimg}
                            alt="Google"
                        />
                        Log in with Google
                    </button>

                    <div className="divider">Or</div>

                    <form>
                        <input type="email" placeholder="Enter your Email" />
                        <input type="password" placeholder="Password" />

                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" /> Remember Me
                            </label>
                            <a href="/">Forgot Password?</a>
                        </div>

                        <button type="submit" className="login-btn">Log in</button>
                    </form>

                    <p className="signup-link">
                        Not a member yet? <Link to="/SignupPage">Create an account</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
