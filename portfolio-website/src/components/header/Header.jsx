import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Bogdana Sorinescu</h1>
         <h5 className="text-light">UI/UX, Frontend Developer</h5>
         <CTA />

         <div className="me">
           <img src={ME} alt="me" />
         </div>

         <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
} 

export default Header
