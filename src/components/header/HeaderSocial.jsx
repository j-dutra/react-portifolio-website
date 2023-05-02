import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://linkedin.com/in/jdutra-" target='_blank'>
        <BsLinkedin />
      </a>

      <a href="https://github.com/j-dutra" target='_blank'>
        <BsGithub />
      </a>

      <a href="https://dribbble.com" target='_blank'>
        <BsDribbble />
      </a>
    </div>
  )
}

export default HeaderSocial