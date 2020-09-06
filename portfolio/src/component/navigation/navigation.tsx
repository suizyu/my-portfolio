import React, { useState } from 'react';
import { Link } from 'react-scroll';
import style from './navigation.module.css';
import { useTrail, animated } from 'react-spring';

interface ScrollLinkProps {
    to: string;
    offset?: number | null;
}

interface MenuProps {
}

interface isOnDisplay {
    isView: boolean;
}

class ScrollLink extends React.Component<ScrollLinkProps> {
    render(){
        const offset = this.props.offset == null ? -20 : this.props.offset;
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

const AnimateMenuItem = (props: isOnDisplay) => {
    const menuItems = [
        <ScrollLink to="/" offset={0}>top</ScrollLink>,
        <ScrollLink to="/about">about</ScrollLink>,
        <ScrollLink to="/works">works</ScrollLink>,
        <ScrollLink to="/skills">skills</ScrollLink>,
        <ScrollLink to="/contact">contact</ScrollLink>
    ];
    const config = { mass: 5, tension: 1500, friction: 200 };
    const trail = useTrail(menuItems.length, {
        config,
        opacity: props.isView ? 1 : 0,
        x: props.isView ? 0 : -20,
        height: 50,
        from: { opacity: 0, x: -20, height: 0 },
    })

    return(
        <>
            {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                    key={index}
                    className={props.isView ? style.menuBtn : style.hidenMenu}
                    style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`), height }}>
                    {menuItems[index]}
                </animated.div>
            ))}
        </>
    );
}

class MenuBar extends React.Component<isOnDisplay> {
    render(){
        return(
            <div className={style.menu}>
                <AnimateMenuItem isView={this.props.isView} />
            </div>
        );
    }
}

class Footer extends React.Component {
    render(){
        return(
            <div className={style.footer}>
                <span>© 2020 Tomomi Nemoto's Portfolio</span>
            </div>
        );
    }
}

export { MenuBar, Footer };

