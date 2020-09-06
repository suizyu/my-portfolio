import React from 'react';
import style from './effectButton.module.css';

class MenuBtn extends React.Component {
    render() {
        return(
            <button className={style.effectBtn}>
                {this.props.children}
            </button>
        );
    }
}

class EffectButton extends React.Component {
    render() {
    return(
        <button className={style.effectBtn}>
            {this.props.children}
        </button>);
    }
}

export { EffectButton, MenuBtn };