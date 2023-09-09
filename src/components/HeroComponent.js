import React from "react";
import Button from "./Button.js";

import './HeroComponent.css';

export default function HeroComponent() {
    return (
        <div className="hero-container">
            <h1 className="hero-title">SHARE YOUR VISION WITH US</h1>
            <Button className='btn btn-primary btn-lg' text='GET STARTED' /> 
            <Button className='btn btn-outline-primary' text='LOG IN' />
        </div>
    )
}