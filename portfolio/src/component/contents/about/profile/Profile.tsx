import React from 'react';
import style from './profile.module.css';
import avater from '../../img/icon.png';
import Title from '../../../common/fadeInTitle/FadeInTitle';
import ScrollWrap from '../../../common/scrollWrap/ScrollWrap';

const Icon = () => {
    return(
        <div className={style.icon}> 
            <img src={avater}/>
        </div>
    );
}

const ProfileText = () => {
    return(
        <div className={style.proflileText}>
            <p>1995年4月生まれ。</p>
            <p>2018年4月より、プログラマーとして就職。</p>
            <p></p>
        </div>
    );
}

const SelfIntroduction = () => {
    return(
        <div className={style.selfIntroduction}>
            <Icon />
            <ProfileText />
        </div>
    );
}

interface PathProps {
    to: string;
}

class Profile extends React.Component<PathProps> {
    render(){
        return (
            <ScrollWrap to={this.props.to}>
                <Title>About me</Title>
                <SelfIntroduction />
            </ScrollWrap>
        );
    }
}

export default Profile;