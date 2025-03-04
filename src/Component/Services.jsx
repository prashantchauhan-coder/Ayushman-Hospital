import React from 'react';
import { Hero } from './Hero/Hero';
import Testmonials from './Testmonials/Testmonials';
import Question from './QuesctionSection/Question';
import SecondFooter from './SecondFooter/SecondFooter';
import Footer from './Footer/Footer';
import Card from './CardSection/Card';
import img1 from '../assets/teeth.png';
import img2 from '../assets/smile.png';
import img3 from '../assets/implant.png';
import './Services.scss'
import Navbar from './Navbar/Navbar';

const Services = () => {
  return (
    <>
      <Navbar />
      <div className='service'>
        <h1 className='service_heading'>Services</h1>
        <p className='service_para'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
      </div>

      <div className='servicecard_container'>
        <div className='multiple'>
          <Card
            titleimg={img1}
            title="Root Canal Treatment"
            paragraph="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth."
          />
        </div>
        <div className='multiple'>
          <Card
            titleimg={img2}
            title="Cosmetic Dentist"
            paragraph="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile."
          />
        </div>
        <div className='multiple'>
          <Card
            titleimg={img3}
            title="Dental Implants"
            paragraph="A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.."
          />
        </div>
      </div>
      <div className='servicecard_container'>
        <div className='multiple'>
          <Card
            titleimg={img1}
            title="Root Canal Treatment"
            paragraph="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth."
          />
        </div>
        <div className='multiple'>
          <Card
            titleimg={img2}
            title="Cosmetic Dentist"
            paragraph="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile."
          />
        </div>
        <div className='multiple'>
          <Card
            titleimg={img3}
            title="Dental Implants"
            paragraph="A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.."
          />
        </div>
      </div>
      <Hero />
      <Testmonials />
      <Question />
      <SecondFooter />
      <Footer />
    </>
  )
}

export default Services;