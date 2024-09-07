import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
            <h3>Web-services</h3>
            <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div> 
            <div className='footer-top-right'>
                <div className='footer-email-input'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>2024 web-services. All rights reserved</div>
        <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
