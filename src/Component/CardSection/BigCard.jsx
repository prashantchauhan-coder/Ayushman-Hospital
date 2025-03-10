import React, { useState } from 'react';
import '../CardSection/BigCart.scss';
import Rectangle from '../../assets/Rectangle.png';

const BigCard = () => {

    const [phoneNum, setPhoneNum] = useState('')
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (/^\d+$/.test(phoneNum)) {
            setSuccessMessage('Success! Your phone number has been submitted.');
            console.log(phoneNum)
            setPhoneNum('');
        } else {
            setSuccessMessage('Please enter a valid phone number.');
        }
    }

    let meeting = "We’re welcoming new patients and can’t wait to meet you.";
    let meetingDesc = "We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.";

    return (
        <div className='big_card'>
            <div className='big_card_one'>
                <h3>{meeting}</h3>
                <p>{meetingDesc}</p>
                <div className='mobile'>
                    <input
                        type="text"
                        placeholder='Enter Mobile Number'
                        className="inputfield"
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                    />
                    <button type='submit' className='btn1' onClick={handleSubmit}>Submit</button>
                </div>
                {successMessage && <p className='success_message' style={{color:"green",fontSize:"15px"}}>{successMessage}</p>}
            </div>
            <div className='big_card_two'>
                <img
                    src={Rectangle}
                    alt="image"
                    id='Rectangle'
                />
            </div>
        </div>
    )
}

export default BigCard;