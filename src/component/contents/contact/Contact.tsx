import React from 'react';
import Title from '../../common/fadeInTitle/FadeInTitle';
import ScrollWrap from '../../common/scrollWrap/ScrollWrap';
import '../../../webIcon/font.css';
import style from '../contact/contact.module.css';

const urls = {
    twitter: "https://twitter.com/suizyu620",
    github: "https://github.com/suizyu",
    instagram: "https://www.instagram.com/suizyu/?hl=ja"
}

interface PathProps {
    to: string;
}

const SnsLinks = () => {
    return (
        <div className={style.sns}>
            <a href={urls.twitter} target="_brank">
                <span className="icon-twitter"></span>
            </a>
            <a href={urls.github} target="_brank">
                <span className="icon-github"></span>
            </a>
            <a href={urls.instagram} target="_brank">
                <span className="icon-instagram"></span>
            </a>
        </div>
    );
}

const ContactInfo = () => {
    const mailaddress: string = "suizyu.m@gmail.com";
    return (
        <div>
            <p className={style.mailAddress}>{mailaddress}</p>
            <SnsLinks />
        </div>
    );
}

class Contact extends React.Component<PathProps> {
    render() {
        return(
            <ScrollWrap to={this.props.to}>
                <Title>Contact</Title>
                <ContactInfo />
            </ScrollWrap>
        );
    }
}

export default Contact;