import React from 'react'
import '../Component/RatingCard.scss'
import starimg from '../assets/Star 5.png';

const RatingCard = ({RatingImg,authorName,ratingDecription}) => {
    return (
        <div className='rating_card'>
            <div className='stars'>
                <img
                    src={RatingImg}
                    alt="image"
                    className='small'
                />
                <div className='head_para'>
                    <h1 className='heads'>{authorName}</h1>
                    <div className='star__container'>
                        {
                            [
                                {
                                    "title": starimg
                                },
                                {
                                    "title": starimg
                                },
                                {
                                    "title": starimg
                                },
                                {
                                    "title": starimg
                                },
                                {
                                    "title": starimg
                                },
                            ].map((data, index) => (
                                <img
                                    key={index}
                                    src={data.title}
                                    alt={data.title}
                                    className='four_star'
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <p className='rating_desc'>{ratingDecription}</p>
        </div>
    )
}

export default RatingCard