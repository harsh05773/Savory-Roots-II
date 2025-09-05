import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    const currYear = new Date().getFullYear();
    return (
        <footer id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>&copy; {currYear} Savory Roots. All rights reserved.</p>
                </div>
                <div className="footer-content-center">
                    <h2>Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Mobile App</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Connect with Us</h2>
                    <div className='footer-icons'>
                        <div className='footer-social-icons'>
                            <img src={assets.facebook_icon} alt="FaceBook" />
                            <p>Facebook</p>
                        </div>
                        <div className='footer-social-icons'>
                            <img src={assets.twitter_icon} alt="X.com" />
                            <p>X</p>
                        </div>
                        <div className='footer-social-icons'>
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                            <p>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </footer>
    )
}

export default Footer