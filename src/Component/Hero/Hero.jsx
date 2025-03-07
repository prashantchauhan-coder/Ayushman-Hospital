import { React, useState } from 'react'
import '../Hero/Hero.scss'
import Button from '../Button'
import Vector from '../../assets/Vector.png'
import videoFile from '../../assets/doctortreatment.mp4'

export const Hero = ({ isPlaying, setIsPlaying }) => {



    let heroHeading = "We’re welcoming new patients and can’t wait to meet you."
    let heroPara = "We use only the best quality materials on the market in order to provide the best products to our patients."

    return (
        <>
            {isPlaying ? (
                <div className="fullscreen-video">
                    <video width="100%" height="100%" controls autoPlay>
                        <source src={videoFile} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button className="close-btn" onClick={() => setIsPlaying(false)}>✖</button>
                </div>
            ) : (
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
                                id='iconn' onClick={() => setIsPlaying(true)}
                            />
                        </div>
                    </div>
                    <Button text="Watch Playlist" />
                </section>
            )}
        </>
    )
}
