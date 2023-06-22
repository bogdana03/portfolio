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
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_detalis-icon' />
            <div>
              <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_detalis-icon'/>
            <div>
               <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_detalis-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_detalis-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article> 
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_detalis-icon'/>
            <div>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>
            </div>
          </article>
           <article className='experience_details'>
            <BsPatchCheckFill className='experience_detalis-icon'/>
           <div>
             <h4>MySQL</h4>
             <small className='text-light'>Beginner</small>
           </div>
          </article>
        </div>
      </div>

      {/* END OF FRONTEND */}

      <div className="experience_ux_ui">
         <h3>UI/UX</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_detalis-icon'/>
           <div>
             <h4>Figma</h4>
             <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_detalis-icon'/>
            <div>
              <h4>UX</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_detalis-icon'/>
          <div>
              <h4>UI</h4>
              <small className='text-light'>Intermediate</small>
          </div>
          </article>
        </div>
      </div>
    </div>
  </section>
 )
}

export default Experince
