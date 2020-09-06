import React from 'react';
import style from './main2.module.css';
import ScrollWrap from '../../common/scrollWrap/ScrollWrap';

const Top = () => {
    return(
        <ScrollWrap to="/top" height="70vh">
            <div className={style.box1}>
                <span>KagaRe's</span>
                <span>Portfolio</span>
            </div>
        </ScrollWrap>
    );
}

const Main2 = () => {
    return (
        <ScrollWrap to="/images">
            <div style={{height:"800px", backgroundColor: "grey" }}>
            </div>
        </ScrollWrap>
    );
}

export { Main2, Top };