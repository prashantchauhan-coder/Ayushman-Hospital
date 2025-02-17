import React from 'react';
import '../Footer/Footer.scss';
import { Link } from 'react-router-dom';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/LinkedIn.png';
import twitter from '../../assets/twitter.png';


const Footer = () => {
    return (
        <section className='footersection'>
            <div className='footer'>
                <ul className='list_container'>
                    <li><Link className='anker' to="/">Home</Link></li>
                    <li><Link className='anker' to="/Services">Services</Link></li>
                    <li><Link className='anker' to="/Blogs">Blogs</Link></li>
                    <li><Link className='anker' to="/About">About</Link></li>
                    <li><Link className='anker' to="/Contact">Contact</Link></li>
                </ul>
                <div id='horizontal_line'></div>
                <div className='footer_links'>
                    <p className='copyright'>All rights reserved ® uifry.com  | Terms and conditions apply!</p>
                    <ul className='links_aline'>
                        {[
                            { "links": `${facebook}` },
                            { "links": `${instagram}` },
                            { "links": `${LinkedIn}` },
                            { "links": `${twitter}` }
                        ].map((data, index) => (
                            <img
                                key={index}
                                src={data.links}
                                className='link_images'
                            />
                        ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;