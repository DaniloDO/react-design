import React from "react";
import Button from "./Button.js";

import './Card.css'

export default function Card(props) {
    
    return (
        <div className="card-container">
            <div className="card-image-container">
                <img className='card-image' src={props.src} />
            </div>
            <div className="card-tag-container">
                <span className="card-tag">{props.tag}</span>
            </div>
            <div className="card-title-container">
                <h4 className="card-title">{props.name}</h4>
            </div>
            <div className="card-text-container">
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam pharetra vitae ipsum odio.</p>
            </div>
            <div className="card-button-container">
                <Button className='btn btn-info' text='More'/>
            </div>
        </div>
    )
}