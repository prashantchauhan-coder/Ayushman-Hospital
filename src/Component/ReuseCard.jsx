import React from 'react'
import '../Component/ReuseCard.scss'
import Linkedin from '../assets/LinkedIn.png';
import { Link } from 'react-router-dom';

const ReuseCard = ({ titleimage, title, desc }) => {
    return (
        <div className='reusecard'>
            <img
                src={titleimage}
                alt="title"
                id='Doctor-one'
            />
            <Link to="https://www.linkedin.com">
                <img
                    src={Linkedin}
                    alt="LinkedIn"
                    id='LinkedIn'
                />
            </Link>
            <div className='reusecard_container'>
                <h2 className='reusecard_container_heading'>{title}</h2>
                <p className='reusecard_container_para'>{desc}</p>
            </div>
        </div>
    )
}

export default ReuseCard;