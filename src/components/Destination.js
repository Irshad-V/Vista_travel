import React from 'react'
import "./DestinationStyle.css"
import DestinationData from './DestinationData'
import Mountain1 from "../asset/1.jpg"
import Mountain2 from "../asset/2.jpg"
import Mountain5 from "../asset/5.jpg"
import Mountain4 from "../asset/4.jpg"

function Destination() {
    return (
        <div className='destination'>
            <h1> Popular Destinations</h1>
            <p>Tours Give You The Opportunity to see a lot, within a time frame.</p>
            <DestinationData
                cName="first-des"
                title="Taal Volcano,Batangas"
                text="Taal Volcano in Batangas, Philippines, is a highly active stratovolcano known for
           its frequent eruptions and complex structure within Taal Lake. Its Main Crater,
           with a crater lake called Taal Lake, contains Volcano Island. The volcano is closely monitored by PHIVOLCS,
           and visitors can hike to the crater rim for scenic views, although safety precautions are crucial due to its active nature."
                img1={Mountain1}
                img2={Mountain2}
            />
            <DestinationData
                cName="first-des-reverse"

                title="Mt.Daguldul,Batangas"
                text="Mount Daguldul is a picturesque mountain located in Batangas, Philippines, known for its natural beauty and hiking opportunities. 
           Situated within the municipality of San Juan, Mount Daguldul offers a moderately challenging trek with lush forests, rolling hills, 
           and panoramic vistas of the surrounding landscape, including nearby bodies of water like Laiya Bay and Balayan Bay. 
           The hike is popular among outdoor enthusiasts, offering a rewarding experience amidst nature's splendor and a peaceful escape from 
           the hustle and bustle of urban life in Batangas."
                img1={Mountain5}
                img2={Mountain4}
            />
        </div>
    )
}

export default Destination
