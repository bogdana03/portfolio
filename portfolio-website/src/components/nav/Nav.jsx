import React from 'react'
import './nav.css'
import {BiHome} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {BiMessage} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#"
      className='active'><BiHome/></a>
      <a href="#about"><BiUser/></a>
      <a href="#experiences"><BiBook/></a>
      <a href="#contact"><BiMessage/></a>
    </nav>
  )
}

export default Nav
