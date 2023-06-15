import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experince = () => {
  return (
   <section id='experience'>
    <h5>Wath Skills I Have</h5>

    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="exeperince_content">
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
          </article> 
          <article className='experience_details'>
            <BsPatchCheckFill />
            <h4>React</h4>
            <small className='text-light'>Beginner</small>
          </article>
        </div>

      </div>
      <div className="experience_ux_ui">

      </div>
    </div>
   </section>
   )
}

export default Experince
