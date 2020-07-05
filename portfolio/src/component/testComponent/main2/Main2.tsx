import React from 'react';
import style from './main2.module.css';
import bg2 from '../../../img/6.jpg';
import bg3 from '../../../img/7.jpg';
import bg4 from '../../../img/13.jpg';
import ScrollWrap from '../../common/scrollWrap/ScrollWrap';

const Main2 = () => {
    
    return (
        <div>
            <ScrollWrap to="/">
                <div className={style.box1}>
                    <span>KagaRe's</span>
                    <span>Portfolio</span>
                </div>
            </ScrollWrap>
            <ScrollWrap to="/images">
                <img src={bg2} />
                <img src={bg3} />
                <img src={bg4} />
            </ScrollWrap>
        </div>
    );
}


export default Main2;