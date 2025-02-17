import React from 'react'
import '../Component/ReuseCard.scss'

const ReuseCard = ({titleimage,title,desc}) => {
    return (
        <div className='reusecard'>
            <img
                src={titleimage}
                alt="title"
                id='Doctor-one'
            />
            <img
                src="\src\assets\LinkedIn.png"
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

export default ReuseCard