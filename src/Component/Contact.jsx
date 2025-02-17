import React from 'react'
import Navbar from './Navbar/Navbar'
import './Contact.scss'
import ContactForm from './ContactForm/ContactForm'
import Question from './QuesctionSection/Question'
import Footer from './Footer/Footer'

const Contact = () => {
  return (
    <><Navbar />
      <div className='contact'>
        <h1 className='contactheading'>Get in touch</h1>
        <p className='contactpara'>Book an Appointment to treat your teeth right now.</p>
        <ContactForm />
        <Question />
        <Footer />
      </div>
    </>
  )
}

export default Contact