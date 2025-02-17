import React from 'react';
import '../CardSection/BigCart.scss';
import Rectangle from '../../assets/Rectangle.png';

const BigCard = () => {

    let meeting = "We’re welcoming new patients and can’t wait to meet you.";
    let meetingDesc = "We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.";

    return (
        <div className='big_card'>
            <div className='big_card_one'>
                <h3>{meeting}</h3>
                <p>{meetingDesc}</p>
                <div className='mobile'>
                    <input
                        type="phone"
                        placeholder='Enter Mobile Number'
                        className="inputfield"
                    />
                    <button type='submit' className='btn1'>Submit</button>
                </div>

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