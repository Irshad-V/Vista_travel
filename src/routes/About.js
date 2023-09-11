import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../asset/night.jpg'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
    <Hero
        cName="hero-about"
        heroImg={heroImg}
        title="Welcome to Vista Travel Agency "
        text="Your Gateway to Memorable Journeys!"
        btnText="Travel Plan"
        url="/"
        btnClass="hide"
    />
    
    <AboutUs/>
    <Footer/>
</>
  )
}

export default About
