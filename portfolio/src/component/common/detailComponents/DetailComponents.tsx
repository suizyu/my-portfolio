import React from 'react';
import style from './detailComponents.module.css';

interface ImagesProps {
    img: string,
    alt?: string
}

class Wh2 extends React.Component {
    render() {
        return(
            <h2 className={style.detailItem}>
                {this.props.children}
            </h2>
        );
    }
}

const TopImage = (props: ImagesProps) => {
    const explanation = "イメージ画像:" + props.alt ?? "";
    return(
        <div className={style.imgConatiner}>
            <img src={require('../../contents/works/details/images/'+ props.img)}
                className={style.topImage}
                alt={explanation} />
        </div>
    );
}

class MainTextDiv extends React.Component {
    render() {
        return(
            <div className={style.mainText}>
                {this.props.children}
            </div>
        )
    }
}

export { Wh2, TopImage, MainTextDiv};
