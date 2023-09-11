import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../asset/3.jpg'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Service() {
  return (
    <>
    <Hero
        cName="hero-about"
        heroImg={heroImg}
        title="Service"
        text="we have the perfect travel solution for you."
        btnClass="hide"
    />
    <Trip/>
    <Footer/>
</>
  )
}

export default Service
