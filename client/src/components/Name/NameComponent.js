import React from 'react';
import "./NameComponent.css";
import Typing from 'react-typing-animation';

const NameComponent = () => {
    return(
        <div >
        <Typing className="typed-text">
            <Typing.Speed ms={100} />
            <span><h1>Linsey Currie - Software Developer</h1></span>
            
        </Typing>
        </div>
    )
}

export default NameComponent;