import React from 'react';

class Square extends React.Component {
    render() {
        return (
            <span
                className="square"
                onClick={() => this.props.onClick()}
                >
                {this.props.value}
            </span>
        );
    }
}

export default Square;