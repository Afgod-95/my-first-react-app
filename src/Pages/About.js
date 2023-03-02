import React from 'react'
import { motion} from "framer-motion";
import "./About.css"

const About = () => {
  return (
    <>
      <motion.div 
      initial= {{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}
      className='Heading' style={{width: '95%', margin: '2% auto',fontFamily: 'san-serif', textAlign: "justify", lineHeight: '20px' 
      }}>
        <div className='Decs'>
          <h1 style={{textAlign: "center", marginBottom: "10px"}}>About</h1>
          <p style={{fontSize: "13px", lineHeight: "18px"}}>
            Hello, I'm <strong>Afari Boadu Godwin</strong>, a <strong> a Programmer, a Graphic Designer", 
            "An Animator </strong> with <strong>ten (10) </strong> years of experience. Originally from Anum Apapam 
            but hails at Kasoa, I've worked with clients and companies in and outside Ghana, helping them achieve their goals and aspirations by
            the creation of websites, mobile apps and more.
          </p>
          <br></br>
          <p>
            I received my Higher National Diploma in Computer Science from Accra Technical University, Ghana and have since honed my skills 
            through a variety of professional experiences. My specialties include UI/UX Design, Graphic Design and all designs you can think of,
            and I'm always looking for new ways to innovate and improve my work.
          </p>
          <br></br>
          <p>
            I love most about my work is the ability to make a real impact 
            on my clients' lives. Whether I'm working with a small business owner or a large corporation, I'm committed to delivering results that exceed their expectations.
          </p>
        </div>
      </motion.div>
    </>
  )}

export default About
