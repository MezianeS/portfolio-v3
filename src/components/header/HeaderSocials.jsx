import React from 'react'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import { VscGithub } from 'react-icons/vsc'

const HeaderSocials = () => {
  return (
    <div className='header__socials--menu'>
      <TiSocialLinkedinCircular />
      <VscGithub />
    </div>
  )
}

export default HeaderSocials