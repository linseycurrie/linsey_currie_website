import React from 'react';
import './NavigationBar.css'

const NavigationBar = () => {

    return(
        <header>
            <ul>
                <li className="navLink">
                    <a href="/">Home</a>
                </li>
                <li className="navLink">
                    <a href="/projects">Projects</a>
                </li>
                <li className="navLink">
                    <a href="/contact">Contact Me</a>
                </li>
            </ul>
        </header>
    )

}

export default NavigationBar;