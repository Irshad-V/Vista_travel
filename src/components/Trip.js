import React from 'react'
import './TripStyle.css'
import TripData from './TripData'
import Trip1 from "../asset/4.jpg"

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using google maps.</p>
            <div className='tripcard'>
                <TripData
                    image={Trip1}

                    heading="Trip in Indonesia"
                    text="A trip to Indonesia promises a diverse and enchanting experience,
                        as this Southeast Asian archipelago is renowned for its breathtaking natural beauty, rich cultural heritage,
                        and vibrant cities. From the pristine beaches of Bali to the ancient temples of Java, the lush rainforests of Borneo to
                        the bustling streets of Jakarta, Indonesia offers a myriad of experiences for every traveler. Explore vibrant coral reefs
                        while diving in the crystal-clear waters of Raja Ampat, trek through the dense jungles of Sumatra in search of orangutans,
                        savor the diverse cuisine influenced by various regional flavors, and immerse yourself in the warm hospitality of the 
                        Indonesian people. With its stunning landscapes, unique wildlife, and a tapestry of cultures
                        Indonesia is a captivating destination that promises adventure, relaxation, and cultural enrichment.Indonesia"
                />
                <TripData
                    image={Trip1}

                    heading="Trip in Indonesia"
                    text="A trip to Indonesia promises a diverse and enchanting experience,
                        as this Southeast Asian archipelago is renowned for its breathtaking natural beauty, rich cultural heritage,
                        and vibrant cities. From the pristine beaches of Bali to the ancient temples of Java, the lush rainforests of Borneo to
                        the bustling streets of Jakarta, Indonesia offers a myriad of experiences for every traveler. Explore vibrant coral reefs
                        while diving in the crystal-clear waters of Raja Ampat, trek through the dense jungles of Sumatra in search of orangutans,
                        savor the diverse cuisine influenced by various regional flavors, and immerse yourself in the warm hospitality of the 
                        Indonesian people. With its stunning landscapes, unique wildlife, and a tapestry of cultures
                        Indonesia is a captivating destination that promises adventure, relaxation, and cultural enrichment.Indonesia"
                />
                <TripData
                    image={Trip1}

                    heading="Trip in Indonesia"
                    text="A trip to Indonesia promises a diverse and enchanting experience,
                        as this Southeast Asian archipelago is renowned for its breathtaking natural beauty, rich cultural heritage,
                        and vibrant cities. From the pristine beaches of Bali to the ancient temples of Java, the lush rainforests of Borneo to
                        the bustling streets of Jakarta, Indonesia offers a myriad of experiences for every traveler. Explore vibrant coral reefs
                        while diving in the crystal-clear waters of Raja Ampat, trek through the dense jungles of Sumatra in search of orangutans,
                        savor the diverse cuisine influenced by various regional flavors, and immerse yourself in the warm hospitality of the 
                        Indonesian people. With its stunning landscapes, unique wildlife, and a tapestry of cultures
                        Indonesia is a captivating destination that promises adventure, relaxation, and cultural enrichment.Indonesia"
                />
            </div>
        </div>
    )
}

export default Trip
