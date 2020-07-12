import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated, useChain, config } from 'react-spring';

const Container = styled(animated.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  margin-top: 10%;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: background, height;
`;

const Foo = () => {
    const [open, setOpen] = useState(true);
    // useSpringでopacityのspringを定義
    const { size, ...props} = useSpring({
        config: config.stiff,
        to: { backgroundColor: open ? 'white' : 'hotpink' , size: open ? '100px': '200px' },
        from: { backgroundColor:'hotpink', size: '100px' }
    });

    return (
      <Container style={{ ...props, height: size, width: size}} 
        role="presentation"
        className={open ? 'onMode' : '' }
        onClick={() => setOpen(open => !open)} 
        />
    );
  };

class Slider extends React.Component {
    render() {
        return(
            <Foo />
        );
    }
}

export default Slider;