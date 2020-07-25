import React from 'react';
import Slick from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      
      const style = {
          margin: '10%',
          height: '300px',
          color: "#fff",
          background: "#3ab60b"
      };  

      return (
        <Slick {...settings}>
          <div>
            <h1 style={style}>1</h1>
          </div>
          <div>
            <h1 style={style}>2</h1>
          </div>
          <div>
            <h1 style={style}>3</h1>
          </div>
          <div>
            <h1 style={style}>4</h1>
          </div>
          <div>
            <h1 style={style}>5</h1>
          </div>        
        </Slick>
      );
}

export default Slider;