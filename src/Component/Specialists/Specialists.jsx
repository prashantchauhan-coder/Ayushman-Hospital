import React from "react";
import "./Specialists.scss";
import specilistsimg1 from '../../assets/specilistsimg1.png';
import specilistsimg2 from '../../assets/specilistsimg2.png';
import specilistsimg3 from '../../assets/specilistsimg3.png';
import { useNavigate } from "react-router-dom";

const specialists = [
    {
        name: "Dr. Brent",
        specialty: "General & Cosmetic Services",
        description:
            "Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full-mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.",
        image: `${specilistsimg1}`,
    },
    {
        name: "Dr. Ashish J. Vashi",
        specialty: "Implant Dentistry",
        description:
            "Dr. Ashish J. Vashi has been practicing general, cosmetic and implant dentistry in California for over 15 years. He believes in giving the highest quality dentistry in a comfortable, caring environment. His services include full-mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.",
        image: `${specilistsimg2}`,
    },
    {
        name: "Dr. James Connors",
        specialty: "Oral Surgery",
        description:
            "When it comes to oral surgeons, few can compare to the modern-day legend that is Dr. James Connors. As our oral and maxillofacial surgery specialist, Dr. Connors will perform highly-precise extractions and other complex oral surgeries.",
        image: `${specilistsimg3}`,
    },
];

const Specialists = () => {
    const navigate = useNavigate()

    const bookNow = () => {
        navigate('/Contact')
    }

    return (
        <section className="specialists-container">
            <h2>Meet Our Specialists</h2>
            <p>
                We use only the best quality materials on the market in order to provide
                the best products to our patients.
            </p>
            {specialists.map((specialist, index) => (
                <div className="specialist-card" key={index}>
                    <img
                        src={specialist.image}
                        alt={specialist.name}
                    />
                    <div className="specialist-info">
                        <h3>
                            {specialist.name} <span>({specialist.specialty})</span>
                        </h3>
                        <p>{specialist.description}</p>
                        <button onClick={bookNow}>Book an appointment</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Specialists;
