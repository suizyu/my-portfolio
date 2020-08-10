import React from 'react';
import { Link } from 'react-scroll';
import style from './navigation.module.css';

interface ScrollLinkProps {
    to: string;
}

class ScrollLink extends React.Component<ScrollLinkProps> {
    render(){
        const offset = window.innerHeight / 7;
        return(
            <Link activeClass="active" 
                to={this.props.to} 
                smooth={true}
                offset={offset * -1}>
                {this.props.children}
            </Link>
        );
    }
}

class MenuBar extends React.Component {
    render(){
        return(
            <div className={style.menu}>
                <ScrollLink to="/">top</ScrollLink>
                <ScrollLink to="/about">about</ScrollLink>
                <ScrollLink to="/images">images</ScrollLink>
                <ScrollLink to="/skills">skills</ScrollLink>
                <ScrollLink to="/contact">contact</ScrollLink>
            </div>
        );
    }
}

class Footer extends React.Component {
    //仮
    render(){
        return(
            <div className={style.footer}>
                <ScrollLink to="/">top</ScrollLink>
                <ScrollLink to="/about">about</ScrollLink>
                <ScrollLink to="/images">images</ScrollLink>
                <ScrollLink to="/contact">contact</ScrollLink>
            </div>
        );
    }
}

export { MenuBar, Footer };

