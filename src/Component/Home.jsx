import React from 'react';
import './Home.scss';
import Articals from './ArticalsSection/Articals';
import BigCard from './CardSection/BigCard';
import Card from './CardSection/Card';
import DantelSection from './DentalSection/DantelSection';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import HeltSection from './HeltSection/HeltSection';
import { Hero } from './Hero/Hero';
import Navbar from './Navbar/Navbar'
import Question from './QuesctionSection/Question';
import Reating from './ReatingSection/Reating';
import SecondFooter from './SecondFooter/SecondFooter';
import Testmonials from './Testmonials/Testmonials';
import img1 from '../assets/teeth.png';
import img2 from '../assets/smile.png';
import img3 from '../assets/implant.png';

const Home = () => {
    return (
        <>
            <Navbar />
            <Experience />
            <div id='cards_section_card'>
                <div id='card_container'>
                    <Card
                        titleimg={img1}
                        title="Root Canal Treatment"
                        paragraph="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth."
                    />
                    <Card
                        titleimg={img2}
                        title="Cosmetic Dentist"
                        paragraph="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile."
                    />
                    <Card
                        titleimg={img3}
                        title="Dental Implants"
                        paragraph="A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.."
                    />
                </div>
            </div>
            <BigCard />
            <DantelSection />
            <HeltSection />
            <Hero />
            <Testmonials />
            <Reating />
            <Articals />
            <Question />
            <SecondFooter />
            <Footer />

        </>
    )
}

export default Home;