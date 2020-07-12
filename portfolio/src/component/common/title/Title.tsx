import React from 'react';
import style from './title.module.css';

class Title extends React.Component {
    render() {
        return(
            <h1 className={style.title}>
                {this.props.children}
            </h1>
        );
    }
}

export default Title;