import React from 'react'
import '../Hero/Hero.scss'
import Button from '../Button'
import Vector from '../../assets/Vector.png'

export const Hero = () => {

    let heroHeading = "We’re welcoming new patients and can’t wait to meet you."
    let heroPara = "We use only the best quality materials on the market in order to provide the best products to our patients."

    return (
        <>
            <section id='hero_section'>
                <div className='hero'>
                    <h1 className='hero__h1'>{heroHeading}</h1>
                    <p className='hero__p'>{heroPara}</p>
                </div>
                <div className='video'>
                    <div className='icon'>
                        <img
                            src={Vector}
                            alt="Video Icon"
                            id='iconn'
                        />
                    </div>
                </div>
                <Button text="Watch Playlist" />
            </section>
        </>
    )
}
