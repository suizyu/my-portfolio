import React from 'react';
import style from './top.module.css';

const Top = () => {
    return(
        <div className="/">
            <div className={style.top}>
                <div>
                    Tomomi Nemoto's <br/>
                    Portfolio
                </div>
                <ScrollGuide />
            </div>
        </div>
    );
}

const ScrollGuide = () => {
    return(
        <svg width="250" height="100" id="guide">
            <path d="M 10 10 H 150 V 150 H 10 Z" 
            fill-rule="evenodd" fill-opacity="0" stroke-width="5" stroke="white" transform="rotate(45), translate(0,-170)" />
            <path d=" M 30 30 V 130 H 130 V 30 Z" 
                fill-rule="evenodd" fill-opacity="0" stroke-width="15" stroke="white" transform="rotate(45), translate(0,-170)" />
        </svg>
    );
}

export default Top;