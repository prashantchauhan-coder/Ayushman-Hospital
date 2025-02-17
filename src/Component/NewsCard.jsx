import React from 'react'
import '../Component/NewsCard.scss'

const NewsCard = ({newsImg,newsButton,newsTitle,newsDesc,author}) => {
    return (
        <div className='News_section'>
            <img
                src={newsImg}
                alt=""
                className='News_img'
            />
            <button className='news_btn'>{newsButton}</button>
            <h2 className='news_heading'>{newsTitle}</h2>
            <p className='news_para'>{newsDesc}</p>
            <h3 className='name'>{author}</h3>
        </div>
    )
}

export default NewsCard