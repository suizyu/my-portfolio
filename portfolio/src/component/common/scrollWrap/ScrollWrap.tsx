import React from 'react';
import styled from 'styled-components';

interface PathProps {
    to: string;
    height?: string;
}

class ScrollWrap extends React.Component<PathProps> {
    customWrap() {
        const CustomDiv = styled.div`
            height: ${props => this.props.height}
        `
        return(
            <CustomDiv className={this.props.to}>
                {this.props.children}
            </CustomDiv>
        );
    }

    defaultWrap() {
        return (
            <div className={this.props.to}>
                {this.props.children}
            </div>
        );
    }

    render() {
        const ScrollWrap = this.props.height ?  this.customWrap() : this.defaultWrap();
        return ScrollWrap;
    }
}

export default ScrollWrap;