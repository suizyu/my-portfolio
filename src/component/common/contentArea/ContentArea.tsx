import React from 'react';
import style from './contetnArea.module.css';

interface MediaState {
    isPC: boolean;
}

class ContentArea extends React.Component<{}, MediaState> {
    constructor(props: any) {
        super(props);
        this.state = { isPC: true };
    }

    onResize = () => {
        if(window.matchMedia("(max-width: 480px)").matches) {
            this.setState({ isPC: false });
        } else {
            this.setState({ isPC: true });
        }
    }

    //リサイズイベント
    componentDidMount = () => {
        window.addEventListener('resize', this.onResize, false);
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.onResize, false);
    }

    render() {
        return (
            <div className={style.fullSizeContainer}>
                <div className={ this.state.isPC ? style.contentsContainer : style.mobileContainer }>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ContentArea;