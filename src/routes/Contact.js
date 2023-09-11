import React from 'react'
import Hero from '../components/Hero'
import heroImg from '../asset/2.jpg'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <>
    <Hero
        cName="hero-about"
        heroImg={heroImg}
        title="Contact"
        text="We're here to assist you with all your travel inquiries."
        btnText="Travel Plan"
        url="/"
        btnClass="hide"
    />
    <ContactForm/>
     <Footer/>
</>
  )
}

export default Contact
