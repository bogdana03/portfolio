import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {AiOutlineProject} from 'react-icons/ai'


const About = () => {
  return (
   <section id='about'>
    <h2>About Me</h2>
 
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
         <img src={ME} alt="About Image" /> 
        </div>
      </div>

     <div className="about_content">
       <div className="about_cards">
          <article className='about_card'>
            <AiOutlineProject className='about_icon'/>
            <h5>Projects</h5>
            <small>Completed</small>
          </article>

          <article className='about_card'>
            <AiOutlineProject className='about_icon'/>
            <h5>Projects</h5>
            <small>Completed</small>
          </article>
        </div>   
      </div>
    </div>
   </section>
  )
}

export default About
