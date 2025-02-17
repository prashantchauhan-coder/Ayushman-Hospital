import React from 'react'
import '../Component/ReuseCard.scss'
import Linkedin from '../assets/LinkedIn.png';

const ReuseCard = ({titleimage,title,desc}) => {
    return (
        <div className='reusecard'>
            <img
                src={titleimage}
                alt="title"
                id='Doctor-one'
            />
            <img
                src={Linkedin}
                alt="LinkedIn"
                id='LinkedIn'
            />
            <div className='reusecard_container'>
                <h2 className='reusecard_container_heading'>{title}</h2>
                <p className='reusecard_container_para'>{desc}</p>
            </div>
        </div>
    )
}

export default ReuseCard;