import React from 'react';
import '../ArticalsSection/Articals.scss';
import Button from '../Button';
import NewsCard from '../NewsCard';
import Newsimgone from '../../assets/newsimg-one.png';
import Newsimgtwo from '../../assets/newsimg-two.png';
import Newsimgthree from '../../assets/newsimg-three.png';
import Newsimgfour from '../../assets/newsimg-four.png';
import Newsimgfive from '../../assets/newsimg-five.png';
import Newsimgsix from '../../assets/newsimg-six.png';
import Newsimgseven from '../../assets/newsimg-seven.png';
import Newsimgeight from '../../assets/newsimg-eight.png';
import { useNavigate } from 'react-router-dom';


const Articals = () => {
  const navigate = useNavigate()

  const bookAppointment = () => {
    navigate('/LatestNewsPage')
  }

  return (
    <>
      <div className='Articals_container'>
        <div className='Articals'>
          <h2 className='Articals_heading'>News & Articles</h2>
          <p className='Articals_description'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
        </div>
        <div className='btn_divss'>
          <Button text="View All" bookAppointment={bookAppointment} />
        </div>
      </div>
      <div className='News_card_Container'>
        <div className='supercard'>
          <NewsCard
            newsImg={Newsimgone}
            newsTitle="Care of your Teeth"
            newsButton="Self Care"
            newsDesc="Lorem ipsum dolor sit amet consectetur."
            author="~Anita Jackson"
          />
        </div>
        <div className='supercard'>
          <NewsCard
            newsImg={Newsimgtwo}
            newsTitle="Care of your Teeth"
            newsButton="Self Care"
            newsDesc="Lorem ipsum dolor sit amet consectetur."
            author="~Anita Jackson"
          />
        </div>
        <div className='supercard'>
          <NewsCard
            newsImg={Newsimgthree}
            newsTitle="Care of your Teeth"
            newsButton="Self Care"
            newsDesc="Lorem ipsum dolor sit amet consectetur."
            author="~Anita Jackson"
          />
        </div>
        <div className='supercard last_card'>
          <NewsCard
            newsImg={Newsimgfour}
            newsTitle="Care of your Teeth"
            newsButton="Self Care"
            newsDesc="Lorem ipsum dolor sit amet consectetur."
            author="~Anita Jackson"
          />
        </div>
      </div>
      <div className='News_card_Container'>
        <div className='supercard'>
          <NewsCard
            newsImg={Newsimgfive}
            newsTitle="Care of your Teeth"
            newsButton="Self Care"
            newsDesc="Lorem ipsum dolor sit amet consectetur."
            author="~Anita Jackson"
          />
        </div>
        <div className='supercard'>
          <NewsCard
            newsImg={Newsimgsix}
            newsTitle="Care of your Teeth"
            newsButton="Self Care"
            newsDesc="Lorem ipsum dolor sit amet consectetur."
            author="~Anita Jackson"
          />
        </div>
        <div className='supercard'>
          <NewsCard
            newsImg={Newsimgseven}
            newsTitle="Care of your Teeth"
            newsButton="Self Care"
            newsDesc="Lorem ipsum dolor sit amet consectetur."
            author="~Anita Jackson"
          />
        </div>
        <div className='supercard last_card'>
          <NewsCard
            newsImg={Newsimgeight}
            newsTitle="Care of your Teeth"
            newsButton="Self Care"
            newsDesc="Lorem ipsum dolor sit amet consectetur."
            author="~Anita Jackson"
          />
        </div>
      </div >
      <div className='cont'>
        <Button text="Check Out More" />
      </div>
    </>
  )
}

export default Articals;