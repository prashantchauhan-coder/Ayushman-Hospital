import React from 'react'
import Navbar from './Navbar/Navbar'
import './Blogs.scss'
import Articals from './ArticalsSection/Articals'
import { Hero } from './Hero/Hero'
import Question from './QuesctionSection/Question'
import SecondFooter from './SecondFooter/SecondFooter'
import Footer from './Footer/Footer'

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className='blog'>
        <h1 className='blog_heading'>Blogs</h1>
        <p className='blog_para'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
        <input
          type="text"
          placeholder='Search'
          id='search_field'
        />
      </div>
      <Articals />
      <Hero />
      <Question />
      <SecondFooter />
      <Footer />
    </>
  )
}

export default Blogs