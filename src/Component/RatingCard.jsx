import React from 'react'
import '../Component/RatingCard.scss'

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
                                    "title": "/src/assets/Star 5.png"
                                },
                                {
                                    "title": "/src/assets/Star 5.png"
                                },
                                {
                                    "title": "/src/assets/Star 5.png"
                                },
                                {
                                    "title": "/src/assets/Star 5.png"
                                },
                                {
                                    "title": "/src/assets/Star 5.png"
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