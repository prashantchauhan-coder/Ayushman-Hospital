import React from "react";
import "./Technology.scss";
import technologyimg from '../../assets/technologyimg.png';

const Technology = () => {
    return (
        <section className="technology-container">
            <h2>Latest <span>Technology</span></h2>
            <p className="subtext">
                Thanks to major technological advancements, dentistry allows treating the most complex cases with less time and more efficiency.
            </p>
            <div className="technology-content">
                <div className="technology-image">
                    <img
                        src={technologyimg}
                        alt="Dental Technology"
                    />
                </div>
                <div className="technology-text">
                    <h3>The Future Of Dentistry Is Digital:</h3>
                    <p>
                        Dentists today already utilize software to capture insights in clinical decision-making.
                        These practices will continue to develop to integrate AI algorithms that enable clinicians
                        to find the best modalities for their patients.
                    </p>
                    <p>
                        In the 21st century, digital radiographs and 3D imaging have become the standard of dental care.
                        Using an intraoral scanner with digitized data for 3D dental impressions is now commonplace.
                    </p>
                    <p>
                        Artificial intelligence is laying the groundwork for the future of the dental industry.
                        Dental robots can now perform functions such as filling cavities and cleaning or extracting teeth.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Technology;
