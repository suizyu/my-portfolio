import React, { useState, FormEvent } from 'react';
import style from './slider.module.css';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Overlay } from 'react-portal-overlay';
import { Scrollbars } from 'react-custom-scrollbars';
import worksData from '../../worksData.json';
import SignUpFlow from '../../details/signUpFlow/SignUpFlow';
import PortfolioWork from '../../details/portfolio/Portfolio';
import TrimmingApp from '../../details/triming/TrimingApp';
import { useSpring, animated } from 'react-spring';

const detailContents = [ 
  { key: "signUp" , detail: <SignUpFlow /> },
  { key: "trimming" , detail: <TrimmingApp /> },
  { key: "portfolio" , detail: <PortfolioWork /> },
];

interface thmbnailProps {
  id: string,
  img: string,
  title: string,
  modify: string
};

const CloseBnt = () => {
  const [isHover, setIsHover] = useState(false);
  const  { ...props} = useSpring({
    to: { 
      transform: isHover ? "scale(1)" : "scale(0.3)",
      opacity: isHover ? 1 : 0
    },
    from: { 
      transform: "scale(0.1)", 
      opacity: 0
    },
    config: { tension: 350 },
    });

    const SpringRound = () => {
      return(
        <animated.div
          className={style.springRound}
          onMouseMove={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false) }
          style={{ ...props}} />
      );
    }

    const {...colorSetting } = useSpring({
      to: { color: isHover ? "rgba(255,255,255)" : "rgba(148,187,233)" },
      from: { color: "rgba(148,187,233)" }
    })
    const CloseIcon = () => {
      return(
        <animated.div className={style.closeIcon} 
          style={{ ...colorSetting}}>
            ×
        </animated.div>
      );
    }

    return (
      <div className={style.btnBox}>
        <SpringRound />
        <CloseIcon />
      </div>
    );
}

const Thumbnail = (props: thmbnailProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalBackgroundStyle = {
      width: "100%",
      background: "rgba(0,0,0,0.5)",
      overflow: "hidden"
  }
  const workYearMonth = "【" + props.modify + "】";
  const detail = detailContents.find(c => c.key == props.id)?.detail;

  function closeEvent(event: FormEvent , closing: boolean) {
    event.stopPropagation();
    if (closing) {
      setIsOpen(false);
    }
  }

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
          <Overlay style={modalBackgroundStyle} open={isOpen} onClick={event => closeEvent(event, true)}>
              <div className={style.modal} onClick={event => closeEvent(event, false)}>
                <Scrollbars>
                    <div className={style.closebtn} onClick={event => closeEvent(event, true)}>
                      <CloseBnt />
                    </div>
                    <div className={style.worksDetail}>
                      <p>{ workYearMonth }</p>
                        {detail}
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
        <Thumbnail img={work.img} title={work.title} modify={work.modify} id={work.id}/>
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