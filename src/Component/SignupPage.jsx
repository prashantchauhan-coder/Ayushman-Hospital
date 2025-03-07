import React from "react";
import "./SignupPage.scss";
import signupimg from '../assets/signupimg.png';
import Googleimg from '../assets/Google.png';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";

const SignupPage = () => {
    return (
        <>
            <Navbar />
            <div className="signup-container">
                <div className="signup-left">
                    <img
                        src={signupimg}
                        alt="Dentist"
                    />
                    <div className="quote">
                        <p>
                            "Effort is like toothpaste; you can usually squeeze out just a little bit more."
                        </p>
                        <span>— Dr. Andre Jackson</span>
                        <small>Manager of Smile Pvt Ltd.</small>
                    </div>
                </div>

                <div className="signup-right">
                    <h2>Create An Account</h2>
                    <p>Discover a better way of spending with Ulity.</p>

                    <button className="google-signup">
                        <img
                            src={Googleimg}
                            alt="Google"
                        />
                        Sign up with Google
                    </button>

                    <div className="divider">Or</div>

                    <form>
                        <input
                            type="text"
                            placeholder="Full Name"
                        />
                        <input
                            type="email"
                            placeholder="Enter your Email"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                        />

                        <div className="terms">
                            <input
                                type="checkbox"
                                id="terms"
                            />
                            <label htmlFor="terms">I agree with Terms and Privacy</label>
                        </div>

                        <button type="submit" className="signup-btn">Sign up</button>
                    </form>

                    <p className="login-link">
                        Have an account? <Link to="/LoginPage">Sign in</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignupPage;
