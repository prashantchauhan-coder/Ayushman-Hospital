import React from 'react'
import Navbar from './Navbar/Navbar'
import './About.scss'
import Mission from './Mission/Mission'
import Specialists from './Specialists/Specialists'
import Technology from './Technology/Technology'
import Card from './CardSection/Card'
import img1 from '../assets/teeth.png'
import img2 from '../assets/smile.png';
import img3 from '../assets/implant.png';
import { Hero } from './Hero/Hero'
import Footer from './Footer/Footer'


const About = () => {
  return (
    <>
      <Navbar />
      <div className='about'>
        <h1 className='about-heading'>About Us</h1>
        <Mission />
        <Specialists />
        <Technology />
        <div className='flexcontainer'>
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
        <Footer />
      </div>
    </>
  )
}

export default About