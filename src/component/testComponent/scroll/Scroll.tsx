import React from 'react';
import style from './scroll.module.css';
import {Link} from 'react-scroll';

interface ScrollLinkProps {
    to: string;
}

class ScrollLink extends React.Component<ScrollLinkProps> {
    render(){
        return(
            <Link 
                activeClass="active" 
                to={this.props.to} 
                smooth={true}
                offset={-65}
            >
                {this.props.children}
            </Link>
        );
    }
}

class MenuButtom extends React.Component {
    render() {
        return(
            <button className={style.btnMenu}>
                {this.props.children}
            </button>
        );
    }
}

class Scroll extends React.Component {
    render() {
        return (
        <div className={style.menu}>
            <ScrollLink to="/"> 
                <MenuButtom>Home</MenuButtom>
            </ScrollLink>
            <ScrollLink to="/about">
                <MenuButtom>about me</MenuButtom>
            </ScrollLink>
            <ScrollLink to="/images">
                <MenuButtom>images</MenuButtom>
            </ScrollLink>
            <ScrollLink to="/top">
                <MenuButtom>top</MenuButtom>
            </ScrollLink>
        </div>);
    }
}

export default Scroll;