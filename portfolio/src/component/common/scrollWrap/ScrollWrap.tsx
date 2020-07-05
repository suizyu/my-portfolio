import React from 'react';

interface PathProps {
    to: string;
}

class ScrollWrap extends React.Component<PathProps> {
    render (){
        return (
            <div className={this.props.to}>
                {this.props.children}
            </div>
        );
    }
}

export default ScrollWrap;