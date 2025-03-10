import React, { useRef,useEffect } from "react";
import '../ReatingSection/Reating.scss';
import RatingCard from '../RatingCard';
import RatingImg1 from '../../assets/ratingimage1.png';
import RatingImg2 from "../../assets/ratingimg2.png";
import RatingImg3 from '../../assets/ratingimg3.png';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Reating = () => {
    const sliderRef = useRef(null);

    const hendleLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 300;
        }
    };

    const handleRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 300;
        }
    };
    useEffect(() => {
        const autoScroll = setInterval(() => {
            if (sliderRef.current) {
                const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
                if (sliderRef.current.scrollLeft >= maxScroll) {
                    sliderRef.current.scrollLeft = 0; 
                } else {
                    sliderRef.current.scrollLeft += 300; 
                }
            }
        }, 2000); 

        return () => clearInterval(autoScroll); 
    }, []);

    const reatings = [
        {
            reatingimage: RatingImg1,
            name: "Thomas daniel",
            desc: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
        },
        {
            reatingimage: RatingImg2,
            name: "Alena Alex", desc:
                "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
        },
        {
            reatingimage: RatingImg3,
            name: "Thomas Edison",
            desc: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
        },
        {
            reatingimage: RatingImg1,
            name: "Thomas daniel",
            desc: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."
        },
    ];


    return (
        <section className='reatingcontainer'>
            <div className='reatingSection'>
                <h2 className='h2'>Our Happy Clients</h2>
                <p className='p'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
            </div>
            <div className='cardflex' ref={sliderRef}>
                {reatings.map((img, index) => (
                    <div className="same_class" key={index}>
                        <RatingCard
                            RatingImg={img.reatingimage}
                            authorName={img.name}
                            ratingDecription={img.desc}
                        />
                    </div>
                ))}
            </div>
            <div className='arrow_parent'>
                <div className='arros_child' onClick={hendleLeft}>
                    <img
                        src={leftArrow}
                        alt="leftArrow"
                        className='arrow_one_child'
                    />
                </div>
                <div className='arros_child' onClick={handleRight}>
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

export default Reating;
