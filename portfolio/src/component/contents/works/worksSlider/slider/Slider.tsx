import React, { useState } from 'react';
import Slick from 'react-slick';
import style from './slider.module.css';
import { Overlay } from 'react-portal-overlay';
import { Scrollbars } from 'react-custom-scrollbars';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import worksData from '../../worksData.json';

interface thmbnailProps {
  img: string,
  title: string,
  modify: string
};

const Thumbnail = (props: thmbnailProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalBackgroundStyle = {
      width: "100%",
      background: "rgba(0,0,0,0.5)",
      overflow: "hidden"
  }
  const workYearMonth = "【" + props.modify + "】";

  return(
      <div>
          <figure className={style.thumbnail} onClick={() => setIsOpen(true)}>
            <img src={require('../../../../../img/' + props.img)} alt={"サムネイル"} />
            <figcaption>
              <p>
                <span>{workYearMonth}</span> <br/>
                {props.title}
              </p>
            </figcaption>
          </figure>
          <Overlay style={modalBackgroundStyle} open={isOpen}>
              <div className={style.modal}>
              <Scrollbars>
                  <div className={style.closebtn} onClick={() => setIsOpen(false)}><span>×</span></div>
                  <div className={style.worksDetail}>
                    <p>ぴー</p>
                  </div>
              </Scrollbars>
              </div>
          </Overlay>
      </div>
  );
}

const Slider = () => {
  const works = worksData.works.map((work, i) =>{
    return(
      <div key={i}>
        <Thumbnail img={work.img} title={work.title} modify={work.modify} />
      </div>
    );
  });

  const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 6000,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return (
      <Slick {...settings}>
        {works}    
      </Slick>
    );
}

export default Slider;