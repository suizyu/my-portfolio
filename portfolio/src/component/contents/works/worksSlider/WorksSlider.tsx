import React from 'react';
import ScrollWrap from '../../../common/scrollWrap/ScrollWrap';
import Title from '../../../common/fadeInTitle/FadeInTitle';
import Slider from './slider/Slider';
import style from './worksSlider.module.css';

interface PathProps {
    to: string;
}

class WorksSlider extends React.Component<PathProps> {
    render() {
        return(
        <ScrollWrap to={this.props.to}>
            <Title>Works</Title>
            <div className={style.sliderbox}>
                <Slider />
            </div>
        </ScrollWrap>
        );
    }
}

export default WorksSlider;