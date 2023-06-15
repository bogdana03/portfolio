import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {AiOutlineProject} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'


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
          </article>

          <article className='about_card'>
            <BsBook className='about_icon'/>
            <h5>Experience</h5>
          </article>
        </div> 

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Amet beatae, omnis officiis alias commodi cumque in placeat accusamus praesentium blanditiis 
          reprehenderit accusantium ab tenetur reiciendis vitae sit dolor sequi. 
          Reiciendis.
        </p>  

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About
