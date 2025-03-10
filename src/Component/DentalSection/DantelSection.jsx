import React from 'react';
import '../DentalSection/DantelSection.scss';
import Button from '../Button';
import Dantist from '../../assets/Dantist.png';
import { useNavigate } from 'react-router-dom';

const DantelSection = () => {

     const navigate = useNavigate();

    const bookAppointment=()=>{
        navigate('/Contact')
    }
    

    let firstTreatment = "Why choose Smile for all ";
    let secondTreatment = "Your Dental Treatments?"
    let treatmentDesc = "We use only the best quality materials on the market in order to provide the best products to our patients.";

    return (
        <section className='section'>
            <div className='dantelsection'>
                <div className='dantels_container'>
                    <img
                        src={Dantist}
                        alt="Dantist"
                        id='dantist'
                    />

                    <div className='parent'>
                        <h2 className='hello'>{firstTreatment}</h2>
                        <h2 className='hello'>{secondTreatment}</h2>
                        <p className='hii'>{treatmentDesc}</p>
                        {
                            [
                                {
                                    "title": "Top quality dental team"
                                },
                                {
                                    "title": "State of the art dental services"
                                },
                                {
                                    "title": "Discount on all dental treatment"
                                },
                                {
                                    "title": "Enrollment is quick and easy"
                                },
                            ].map((deta, index) => (
                                <p className='same' key={index}>{deta.title}</p>
                            ))
                        }
                        <Button text="Book an Appointment" bookAppointment={bookAppointment}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DantelSection