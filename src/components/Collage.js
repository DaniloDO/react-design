import React from "react";
import Card from "./Card";

import './Collage.css'

export default function Collage() {

    const cardData = [
        {
            id: 1,
            tag: 'South America',
            name: 'Brasil',
            src: './images/card/Brasil.jpg'
        },

        {
            id: 2,
            tag: 'Europe',
            name: 'France',
            src: './images/card/France.jpg'
        },

        {
            id: 3,
            tag: 'Europe',
            name: 'Germany',
            src: './images/card/Germany.jpg'
        },

        {
            id: 4,
            tag: 'Europe',
            name: 'Prague',
            src: './images/card/Prague.jpg'
        }
    ]

    const cards = cardData.map((val) => {
        return (
            <Card 
                key={val.id}
                name={val.name}
                src={val.src}
                tag={val.tag}
            />
        )
    })

    return (
        <div className="collage-container">
            <div className="text-collage-container">
                <h3>WORK WITH OUR PARTNERS IN YOUR PREFERRED LOCATION</h3> 
                <h3>CHOOSE AMONG 15 DIFFERENT COUNTRIES</h3>
            </div>
            <div className="images-collage-container">
                {cards}
            </div>
        </div>
    )
}