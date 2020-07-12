import React, { useState, ReactNode } from 'react';
import { useSpring, animated } from 'react-spring';

interface titleText {
  value: ReactNode
};

const Foo = (text: titleText) => {
    const [isActive, setIsActive] = useState(true);
    // useSpringでopacityのspringを定義
    const { ...props} = useSpring({
        velocity:100,
        to: { opacity: isActive ? 1 : 0},
        from: { opacity: 1}
    });

    return (
      <animated.div style={{ ...props}} 
        role="presentation"
        onClick={() => setIsActive(isActive => !isActive)} >
          <h1 className="title">
            {text.value}
          </h1>
      </animated.div>
    );
  };
  


class FadeInTitle extends React.Component {
    render() {
        return(
            <Foo value={this.props.children} />
        );
    }
}

export default FadeInTitle;