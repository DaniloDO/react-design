import React from "react";
import { Link } from "react-router-dom";

import './Button.css';


export default function Button(props) {
    
    return (
        <div className="button-container">
            <button className={props.className}>
                {props.text}
            </button>
        </div>
    )
}