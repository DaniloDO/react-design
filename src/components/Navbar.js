import React from "react";
import Button from "./Button";

import './Navbar.css';

import { useState } from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [click, setClick] = useState(false)
    const [active, setActive] = useState('menu-container')

    const handleClick = () => setClick((prevClick) => {

        setActive((prevActive) => prevActive === 'menu-container' ? 'menu-container-active' : 'menu-container')

        return !prevClick;
    })

    return(
        <>
            <nav className="nav-container">
                <div className="logo-container">
                    <Link to='/' className="logo-link">
                        <img className="logo-image" src="./images/logo-design.jpg" />
                    </Link>
                </div>
                <div className="icon-container" onClick={handleClick}>
                    <i className={click? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className={active}>
                    <ul className={'menu-list'}>
                        <li>
                            <a href='/' className="menu-link">Home</a>
                        </li>
                        <li>
                            <a href='/Search' className="menu-link">Search</a>
                        </li>
                        <li>
                            <a href='/All' className="menu-link">All</a>
                        </li>
                        <li>
                            <a href='/Contact' className="menu-link">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    <Button className='btn btn-outline-primary' text='SIGN UP' />
                </div>
            </nav>
        </>
    )
}