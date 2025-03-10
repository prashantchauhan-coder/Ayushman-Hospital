import React from 'react';
import '../SecondFooter/SecondFooter.scss';
import Button from '../Button';
import seconffooterimg from '../../assets/secondfooterimg.png'

const SecondFooter = () => {
    return (
        <section className='Secondfooter_container'>
            <div className='Secondfooter'>
                <div className='secondfooter_one'>
                    <h2 className='secondfooter_title_title'>Dental Website that's gonna shake the game rules up.</h2>
                    <p className='secondfooter_descr'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                </div>
                <img
                    src={seconffooterimg}
                    alt="seconffooterimg"
                    id='secondfooter_img'
                />

            </div>
        </section>
    )
}

export default SecondFooter