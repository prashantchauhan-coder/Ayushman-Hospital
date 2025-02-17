import React from 'react';
import '../Experience/Experience.scss';
import Button from '../Button';
import Ellipse from '../../assets/Ellipse.png';
import Maskdoctor from '../../assets/Mask-doctor.png';
import icondas from '../../assets/icon-das.png';

const Experience = () => {

    let experienceHeading = "Get Ready For Your Best";
    let experienceSecond = "Ever Dental Experience!";
    let phone = "0900-78601";
    let experiencePara = "We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.";
    let emeregency = "Dental 24H Emergency";
    let desc = "Top Quailty dental treatment done by field experts, Highly Recommended for everyone";

    return (
        <div className='experience_container'>
            <div className='experience_container_one'>
                <div className='experience_heading'>
                    <h1 >{experienceHeading}</h1>
                    <h1> {experienceSecond}</h1>
                </div>
                <div className='experience_paragraph'>
                    <p>{experiencePara}</p>
                </div>
                <div className='book_contact'>
                    <Button text="Get Started" />
                    <div className='phone'>
                        <div id='phone_heading_para'>
                            <h2 className='phone_heading'>{emeregency}</h2>
                            <p id='phone_para'>{phone}</p>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_section'>
                        <img
                            src={Ellipse}
                            alt="Ellipse"
                            id='img'
                        />
                        <div className='card_heading'>
                            <h3 id='heding1' >Thomas daniel</h3>
                            <h3 id='heading2'>Sr Dental</h3>
                        </div>

                    </div>
                    <p className='card_para'>{desc}</p>

                </div>
            </div>
            <div className='images'>
                <img
                    src={Maskdoctor}
                    alt="Doctor"
                    id='img_one'
                />
                <img
                    src={icondas}
                    alt="icon"
                    id='img_two'
                />
            </div>
        </div>
    )
}

export default Experience