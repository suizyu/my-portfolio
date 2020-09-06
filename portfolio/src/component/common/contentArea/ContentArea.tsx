import React from 'react';
import style from './contetnArea.module.css';

class ContentArea extends React.Component {
    render (){
        return (
            <div className={style.fullSizeContainer}>
                <div className={style.contentsContainer}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ContentArea;