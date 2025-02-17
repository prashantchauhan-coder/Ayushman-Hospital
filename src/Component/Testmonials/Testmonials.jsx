import React, { useRef, useState } from 'react';
import '../Testmonials/Testmonials.scss';
import ReuseCard from '../ReuseCard';
import DoctorImageOne from '../../assets/Doctor-one.png';
import DoctorImageTwo from '../../assets/doctor-two.png';
import DoctorImageThree from '../../assets/doctor-three.png';
import DoctorImageFour from '../../assets/doctor-four.png';
import ArrowRight from '../../assets/Arrow - Right.png';
import Arrowleft from '../../assets/Arrow -left.png';


const Testmonials = () => {
    const sliderRef = useRef(null);
    const [index, setIndex] = useState(0);

    const doctors = [
        { image: DoctorImageOne, name: "Jim Carry", desc: "Orthodontist." },
        { image: DoctorImageTwo, name: "Wade Warren", desc: "Endodontist." },
        { image: DoctorImageThree, name: "Jenny Wilson", desc: "Periodontist." },
        { image: DoctorImageFour, name: "Jacob Jones", desc: "Pediatric Dentist." },
        { image: DoctorImageOne, name: "Jim Carry", desc: "Orthodontist." },
    ];

    const slideRight = () => {
        if (index < doctors.length - 4) {
            setIndex(index + 1);
        }
    };

    const slideLeft = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <section className="testmonials_section">
            <div className="testmonials">
                <h1 className="testmonials_h1">Meet our specialists</h1>
                <p className="testmonials_p">
                    We use only the best quality materials on the market in order to
                    provide the best products to our patients.
                </p>
            </div>

            <div className="slider_container">
                <div
                    className="flex"
                    ref={sliderRef}
                    style={{ transform: `translateX(-${index * 25}%)` }}
                >
                    {doctors.map((doctor, i) => (
                        <div className="around" key={i}>
                            <ReuseCard
                                titleimage={doctor.image}
                                title={doctor.name}
                                desc={doctor.desc}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="arrow">
                <div className="arros" onClick={slideLeft}>
                    <img
                        src={ArrowRight}
                        alt="Right Arrow"
                        className="arrow_icon"
                    />
                </div>
                <div className="arros" onClick={slideRight}>
                    <img
                        src={Arrowleft}
                        alt="Left Arrow"
                        className="arrow_icon"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testmonials;

