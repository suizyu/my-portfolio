import React from 'react';
import style from './profile.module.css';
import avater from '../../../../img/icon.png';
import Title from '../../../common/fadeInTitle/FadeInTitle';
import ScrollWrap from '../../../common/scrollWrap/ScrollWrap';

interface PathProps {
    to: string;
}

const Icon = () => {
    return(
        <div className={style.icon}> 
            <img alt="プロフィール画像" src={avater}/>
        </div>
    );
}

const ProfileText = () => {
    return(
        <div className={style.proflileText}>
            <p>
                1995年生まれ。<br/>
                2018年4月より、プログラマーとして就職。<br/>
                操作性で失われる利用機会をなくしたいと思い、UI/UXデザイナーを志しております。
            </p>
            <p>
                現在、業務ではパッケージソフトの新機能開発・改修や機能テストに従事。<br/>
                実務経験：TypeScript, C#, SQL Server, PostgreSQL, AngularJS
            </p>
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