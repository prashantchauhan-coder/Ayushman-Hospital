import React, { useState,useEffect } from "react";
import "./SignupPage.scss";
import signupimg from '../assets/signupimg.png';
import Googleimg from '../assets/Google.png';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError('Fill All Field');
        } else {
            setSuccess('Successfull');
            setEmail('');
            setName('');
            setPassword('')
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

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

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="terms">
                            <input
                                type="checkbox"
                                id="terms"
                            />
                            <label htmlFor="terms">I agree with Terms and Privacy</label>
                        </div>

                        <button type="submit" className="signup-btn">Sign up</button>
                        {error && <p style={{ color: "red", fontSize: "15px" }}>{error}</p>}
                        {success && <p style={{ color: "green", fontSize: "15px" }}>{success}</p>}
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
