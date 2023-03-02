import React from 'react'
import { FiLinkedin, FiInstagram, FiSend, FiFacebook, FiTwitter} from 'react-icons/fi'

const SocialLinks = () => {
  return (
    <div className='icons'>
        <a href ='#'><FiFacebook className='icon'/></a>
        <a href = '#'><FiTwitter className='icon'/></a>
        <a href = '#'><FiSend className='icon'/></a>
        <a href='#'><FiLinkedin className='icon'/></a>
        <a href ='#'><FiInstagram className='icon'/></a>
    </div>
  )
}

export default SocialLinks
