import React from 'react'
import "./Contact.css"

import {RiUserLocationLine} from "react-icons/ri"
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {BsPhoneVibrate} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='Wrapper'>
      <a href='https://www.google.com/maps/place/Praise+Academy/@5.5333961,-0.4233555,15z/data=!4m6!3m5!1s0xfdfbbef49741061:0xdecd1b376c75c0e4!8m2!3d5.5333961!4d-0.4233555!16s%2Fg%2F11fhypx8v5' target= '_blank'
      className='container'>
        <div className='ic-box'>
          <RiUserLocationLine/>
        </div>
        <div>
          <h1>Locate Me</h1>
          <p>P.O. Box KS 100, Kasoa</p>
          <p>Praise Academy, Kasoa</p>
        </div>      
      </a>

      <a href='mailto:afgod98@gmail.com' target= '_blank'
      className='container'>
        <div className='ic-box'>
          <MdOutlineMarkEmailUnread/>
        </div>
        <div>
          <h1>Send a message</h1>
          <p>afgod98@gmail.com</p>
        </div>      
      </a>

      <a href='tel:0550910996'className='container'>
        <div className='ic-box'>
          <BsPhoneVibrate/>
        </div>
        <div>
          <h1>Contact me</h1>
          <p>0550310996</p>
        </div>      
      </a>
    </div>

  )
}

export default Contact
