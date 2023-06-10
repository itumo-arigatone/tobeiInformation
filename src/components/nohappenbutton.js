import React from "react"
import "../styles/global.scss"

export default class NoHappenButton extends React.Component {
    // TODO: stateを変える
    state = {
        background: false
    };

    changeColor = () => {
        this.setState({
            background: true,
        });
    }

    render() {
        return (
            <span
                onClick={this.changeColor}
                className="generic-button"
                style={{
                    background: this.state.background ? "#727272" : "#ffffff",
                }}
            >
                {this.props.message}
            </span>
        );
    }
}