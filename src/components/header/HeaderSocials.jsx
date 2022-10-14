import React from 'react'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { VscGithub } from 'react-icons/vsc'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials--menu'>
      <div className="header__socials--icons">
        <BsGithub className='header--socials--ico' />
        <FaLinkedinIn className='header--socials--ico' />
      </div>
      <div className="header__socials--contactme">
        <a href="#">Contact me</a>
      </div>
    </div>
  )
}

export default HeaderSocials