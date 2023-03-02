import React from 'react'
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Data from "./data.json"
import "./Skills.css"



const Skills = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    

    return (
      <div className='wrapper'>
        <h1 style={{textAlign: "center"}}>Proficiencies</h1>
        <Slider {...settings}>
          {Data.map((item) => {
            return(
              <div key = {item.id}>
                <div className='cont'>
                  <div className='imageCont'>
                    <img  src= {item.icon} />
                  </div>
                  <div className='content'>
                    <h1>{item.title}</h1>
                    <div className='paragraph'><p>{item.description}
                      </p>
                    </div>
                  </div>
                </div> 
              </div>
            )
          })}
        </Slider>
      </div>

    );
  }
export default Skills
