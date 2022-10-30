import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#Skills" onClick={() => setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#Projects" onClick={() => setActiveNav('#Projects')} className={activeNav === '#Projects' ? 'active' : ''}><BiBook/></a>
        <a href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><BiMessageSquareDetail/></a>      
    </nav>
  )
}

export default Navbar