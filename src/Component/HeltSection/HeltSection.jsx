import React from 'react';
import '../HeltSection/HeltSection.scss';
import Button from '../Button';
import Helth from '../../assets/helth.png'
import { useNavigate } from 'react-router-dom';

const HeltSection = () => {
    const navigate=useNavigate()

    const bookAppointment=()=>{
        navigate('/Contact')
    }

    let healthTitle = "Leave your worries at the door and enjoy a healthier, more precise smile"
    let healthDesc = "We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself."
    return (
        <div className='HeltSection'>
            <div className='HeltSection__info'>
                <h2 id='HeltSection__info_h1'>{healthTitle}</h2>
                <p id='HeltSection__info_p'>{healthDesc}</p>
                <Button text="Book an appointment" bookAppointment={bookAppointment}/>
            </div>
            <div className='HeltSection__image'>
                <img
                    src={Helth}
                    alt="helth"
                    id='helth'
                />
            </div>
        </div>
    )
}

export default HeltSection;