import React from 'react'
import Hero from '../components/Hero'
import HomeImg from '../asset/12.jpg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Hero
                cName="hero"
                heroImg={HomeImg}
                title="Your Journey Your Story"
                text="Choose Your Favourite Destination"
                btnText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip/>
            <Footer/>
        </>

    )
}

export default Home
