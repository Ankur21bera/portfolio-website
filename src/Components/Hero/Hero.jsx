import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <h3 className='logo-1'>Web-Services</h3>
      <h1> <span>I'm Ankur Bera</span>, frontend developer based in INDIA.</h1>
      <p>I am a frontend developer from India with Have Ready for the work.</p>
      <div className='hero-action'>
          <div className='hero-connect'>Connect with me</div>
          <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
