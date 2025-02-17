import React from 'react';
import '../CardSection/Card.scss';
import ArrowRightCircle from '../../assets/Arrow - Right Circle.png';

const Card = ({ titleimg, title, paragraph }) => {
    return (
        <div className='cards'>
            <div className='circle'>
                <img
                    src={titleimg}
                    alt=""
                    id='titleimg'
                />
            </div>

            <h2>{title}</h2>
            <p>{paragraph}</p>
            <div className='link_image'>
                <a href="">Learn More</a>
                <img
                    src={ArrowRightCircle}
                    alt="Arrow Right Circle"
                />
            </div>
        </div>
    )
}

export default Card