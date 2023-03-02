import React from 'react';
import Typed from "typed.js";
import { useRef, useEffect} from 'react';
import { motion} from "framer-motion";
import "./Home.css"
import SocialLinks from '../components/SocialLinks.js'

const Home = () => {
    const multiText = useRef(null);
    useEffect(()=> {
        const typed = new Typed(multiText.current, {
            strings: ["a Programmer", "a Graphic Designer", "An Animator"],
            typeSpeed: 90,
            backSpeed: 100,
            showCursor: false,
            loop: true,
        })
    })
  return (
    <>
        <motion.div className='Landing-page' 
        initial ={{opacity: 0}}
        animate = {{opacity: 1}}
        exit={{opacity: 0}}>
            <div className='About'>
                <div className='Desc-Container'>
                    <strong className='Hi'>Hello</strong>
                    <h1>I'm <span ref={multiText}></span></h1>
                    <div className='message'>
                        <p>My name is Godwin Afari and I have extensive experience for over 10 years in the above listed fields.</p>
                    </div>
                    <div className='btns'>
                        <a href='mailto:afgod98@gmail.com'>Message Me</a>
                        <a className='button' href='MR. Sam CV.pdf' download= "MR. Sam CV.pdf">Resume</a>
                    </div>
                </div>
            </div>
            <div className='imgBox'>
                <img src = "https://www.selligent.com/wp-content/uploads/2021/08/Selligent-Marketing-Cloud-Homepage-Hero.png"/>
            </div>
        </motion.div>
        <SocialLinks/>
    </>
  )
}

export default Home
