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


const Articals = () => {
  return (
    <>
      <div className='Articals_container'>
        <div className='Articals'>
          <h2 className='Articals_heading'>News & Articles</h2>
          <p className='Articals_description'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
        </div>
        <div className='btn_divss'>
          <Button text="View All" />
        </div>
      </div>
      <div className='News_card_Container'>
        <NewsCard
          newsImg={Newsimgone}
          newsTitle="Care of your Teeth"
          newsButton="Self Care"
          newsDesc="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <NewsCard
          newsImg={Newsimgtwo}
          newsTitle="Care of your Teeth"
          newsButton="Self Care"
          newsDesc="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <NewsCard
          newsImg={Newsimgthree}
          newsTitle="Care of your Teeth"
          newsButton="Self Care"
          newsDesc="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <NewsCard
          newsImg={Newsimgfour}
          newsTitle="Care of your Teeth"
          newsButton="Self Care"
          newsDesc="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
      </div>
      <div className='News_card_Container'>
        <NewsCard
          newsImg={Newsimgfive}
          newsTitle="Care of your Teeth"
          newsButton="Self Care"
          newsDesc="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <NewsCard
          newsImg={Newsimgsix}
          newsTitle="Care of your Teeth"
          newsButton="Self Care"
          newsDesc="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <NewsCard
          newsImg={Newsimgseven}
          newsTitle="Care of your Teeth"
          newsButton="Self Care"
          newsDesc="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
        <NewsCard
          newsImg={Newsimgeight}
          newsTitle="Care of your Teeth"
          newsButton="Self Care"
          newsDesc="Lorem ipsum dolor sit amet consectetur."
          author="~Anita Jackson"
        />
      </div>
      <div className='cont'>
        <Button text="Check Out More" />
      </div>
    </>
  )
}

export default Articals;