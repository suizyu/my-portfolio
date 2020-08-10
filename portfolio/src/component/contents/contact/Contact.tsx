import React from 'react';
import Title from '../../common/fadeInTitle/FadeInTitle';
import ScrollWrap from '../../common/scrollWrap/ScrollWrap';
import '../../../webIcon/font.css';
import style from '../contact/contact.module.css';

interface PathProps {
    to: string;
}

const SnsLinks = () => {
    return (
        <div className={style.sns}>
            <span className="icon-twitter"></span>
            <span className="icon-github"></span>
            <span className="icon-instagram"></span>
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