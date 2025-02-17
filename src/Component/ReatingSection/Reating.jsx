import React from 'react';
import '../ReatingSection/Reating.scss';
import RatingCard from '../RatingCard';
import RatingImg1 from '../../assets/ratingimage1.png';
import RatingImg2 from "../../assets/ratingimg2.png";
import RatingImg3 from '../../assets/ratingimg3.png';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Reating = () => {
    return (
        <section className='reatingcontainer'>
            <div className='reatingSection'>
                <h2 className='h2'>Our Happy Clients</h2>
                <p className='p'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            </div>
            <div className='cardflex'>
                <div className='same_class'>
                    <RatingCard
                        RatingImg={RatingImg1}
                        authorName="Thomas daniel"
                        ratingDecription="Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
                    />
                </div>
                <div className='same_class'>
                    <RatingCard
                        RatingImg={RatingImg2}
                        authorName="Alena Alex"
                        ratingDecription="Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
                    />
                </div>
                <div className='same_class'>
                    <RatingCard
                        RatingImg={RatingImg3}
                        authorName="Thomas Edison"
                        ratingDecription="Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
                    />
                </div>
                <div className='same_class'>
                    <RatingCard
                        RatingImg={RatingImg1}
                        authorName="Thomas daniel"
                        ratingDecription="Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
                    />
                </div>
            </div>
            <div className='arrow_parent'>
                <div className='arros_child'>
                    <img
                        src={leftArrow}
                        alt="leftArrow"
                        className='arrow_one_child'
                    />
                </div>
                <div className='arros_child'>
                    <img
                        src={rightArrow}
                        alt="RightArrow"
                        className='arrow_one_child'
                    />
                </div>
            </div>
        </section>
    )
}

export default Reating