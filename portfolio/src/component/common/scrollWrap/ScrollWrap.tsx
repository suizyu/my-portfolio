import React from 'react';
import styled from 'styled-components';

interface PathProps {
    to: string;
    height?: string;
}

class ScrollWrap extends React.Component<PathProps> {
    customWrap() {
        const CustomDiv = styled.div`
            height: ${props => this.props.height};
            margin: 0;
            padding: 0;
        `
        return(
            <CustomDiv className={this.props.to}>
                {this.props.children}
            </CustomDiv>
        );
    }

    defaultWrap() {
        const DefaultWrapDiv = styled.div`
            margin: 0;
            padding: 25px 0;
        `
        return (
            <DefaultWrapDiv className={this.props.to}>
                {this.props.children}
            </DefaultWrapDiv>
        );
    }

    render() {
        const ScrollWrap = this.props.height ?  this.customWrap() : this.defaultWrap();
        return ScrollWrap;
    }
}

export default ScrollWrap;