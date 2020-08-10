import React, { ReactNode } from 'react';
import { useSpring, animated } from 'react-spring';
import { InView } from 'react-intersection-observer';
import style from './fadeInTitle.module.css';

interface ITitleProps {
  children?: ReactNode
};

interface IShowState {
  isShow: boolean
}

interface ITitleDetail {
  value?: string
}

const FadeInTitle = (text: ITitleDetail) => {
  const { ...props} = useSpring({
      config: { duration: 350 },
      to: { 
          opacity: 1, 
          height: 46,
          innerHeigh: 46,
          transform: "translate(0px, 0px)"
        },
      from: { opacity: 0, height: 0, innerHeight: 0, transform: "translate(0px, -20px)"}
  });

  return(
    <animated.h1 style={{ ...props}}
    className="title"
    role="presentation">
      {text.value}
    </animated.h1>
  );
};

class Title extends React.Component<ITitleProps, IShowState> {
  private titleText: string | null = null;

  constructor(props: ITitleProps) {
    super(props);
    this.state = {
      isShow: false,
    }
    this.titleText = this.props.children?.toString() ?? "";
  }

  changeIsView = (inView: boolean) => {
    if(!this.state.isShow && inView) {
      this.setState({ isShow: true });
    }
  }

  componentDidMount() {
    this.changeIsView(this.state.isShow);
  }

  render() {
    return(
      <div className={style.resevedTitleSpace}>
        <InView rootMargin={"0px 0px -40% 0px"}
          threshold={1}
          onChange={this.changeIsView}>
          { this.state.isShow && (<FadeInTitle value={this.titleText ?? ""} />)}
        </InView>
      </div>
    );
  }
}

export default Title;