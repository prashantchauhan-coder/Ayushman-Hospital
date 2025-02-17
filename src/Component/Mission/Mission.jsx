import React from "react";
import "./Mission.scss";
import Missionimg from '../../assets/missionimg.png';

const Mission = () => {
    return (
        <section className="mission-container">
            <div className="mission-wrapper">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>
                        At Northern Heights Dental, people come first. We help each of our
                        patients to achieve optimal wellness and health by using a whole body
                        approach to oral health. This means not just focusing on cavities,
                        but focusing on; cranio-facial development, bite and joint balance,
                        oral flora, proper muscle balance/function, and bio-compatibility of
                        dental materials. Great care and planning ensure that everything we
                        do helps promote overall health and well being.
                    </p>
                    <h3>More Than Anything Else We Love Creating Happy, Healthy Smiles.</h3>
                    <p>
                        We work hard to stay up to date with the most advanced techniques and
                        technologies to ensure that our patients receive the best care
                        possible. Our office utilizes 3D CBCT radiographs to allow for guided
                        surgical and endodontic protocols. This enables these procedures to be
                        performed digitally before they are performed surgically to ensure
                        optimal results. 3D imaging also is utilized for the analysis of
                        airway growth and development. We also use the best 3D optical
                        scanner for all of our dental restoration and Invisalign impressions.
                        Dr. Williams is a strong advocate for using microsurgical techniques,
                        this means less discomfort and faster healing times.
                    </p>
                </div>
                <div className="mission-image">
                    <img
                        src={Missionimg}
                        alt="Dentist at work"
                    />
                </div>
            </div>
        </section>
    );
};

export default Mission;

