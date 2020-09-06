import React from 'react';
import Title from '../../common/fadeInTitle/FadeInTitle';
import ScrollWrap from '../../common/scrollWrap/ScrollWrap';

interface PathProps {
    to: string;
}

class History extends React.Component<PathProps> {
    render() {
        return (
            <ScrollWrap to={this.props.to}>
                <Title>History</Title>
            </ScrollWrap>
        );
    }
}

export default History;