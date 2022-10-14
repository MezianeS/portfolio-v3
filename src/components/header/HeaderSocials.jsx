import React from 'react'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { VscGithub } from 'react-icons/vsc'

const HeaderSocials = () => {
  return (
    <div className='header__socials--menu'>
      <div className="header__socials--icons">
        <img src="./../../assets/icons/nav-icon1.svg" alt="" />
        <img src="../../assets/icons/nav-icon1.svg" alt="" />
        <VscGithub />
      </div>
      <div className="header__socials--contactme">
        <a href="#">Contact me</a>
      </div>
    </div>
  )
}

export default HeaderSocials