import React from 'react';
import {Routes, Route, useLocation} from  'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';
import { AnimatePresence } from 'framer-motion';

const AnimateRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key = {location.pathname}>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/skills' element = {<Skills/>}/>
            <Route path='/contact' element = {<Contact/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimateRoutes
