import React from 'react'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { VscGithub } from 'react-icons/vsc'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials--menu'>
      <div className="header__socials--icons">
        <div className="icon_border">
          <BsGithub className='header--socials--ico' />
        </div>
        <div className="icon_border">
          <FaLinkedinIn className='header--socials--ico' />
        </div>
        <div className="header__socials--contactme">
          <a href="#">Let's Connect</a>
        </div>
      </div>
    </div>
  )
}

export default HeaderSocials