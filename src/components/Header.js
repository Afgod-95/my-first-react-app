import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import {FaTimes} from "react-icons/fa";

const Header = (props) => {
    const navigation = [
        {name: "Home",  href: "/", current: true},
        {name: "About", href: "/about", current: false},
        {name: "Skills", href: "/skills", current: false},
        {name: "Contact", href: "/contact", current: false},
    ]

    const [isMobile, setIsMobile] = useState(false);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }



  return (
    <>
        <div className='navigationHeader'>
            <div className='Logo'>
                <img src=''/>
                <h2>Portfolio</h2>
            </div>
            <div className='mobile-toggler' onClick = {() => setIsMobile(!isMobile)} >
                {isMobile ? (<FaTimes/>) : (<HiMenuAlt1/>)}
            </div>
            <div className={isMobile ? "Nav-menu-mobile" : "Nav-menu"} >
                {navigation.map((item) =>{
                    return(   
                        <NavLink className= "links"  
                            to={item.href} key = {item.name}>{item.name}
                        </NavLink>
                    )
                })}
            </div>
        </div>
       
        {props.children}
    </>
  )
}

export default Header
