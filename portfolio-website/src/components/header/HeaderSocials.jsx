import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFigma} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://figma.com" target="_blank" rel="noopener noreferrer"><FaFigma /></a>
        
    </div>
  )
}

export default HeaderSocials
