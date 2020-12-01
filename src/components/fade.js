import React from "react"
import Img from "../images/information.png"
import "../styles/first.scss"

export default class Fade  extends React.Component {
    state = {
        isOpen: true,
        isHide: false,
    };
    timeout = setTimeout(() => { this.setState({isOpen: false}); console.log("ちめ"); }, 3000);
    timeout = setTimeout(() => { this.setState({isHide: true}); console.log("ちめ"); }, 4000);

    render() {
        return (
            <div className="first"
            style={{
                position: "absolute",
                transition: '1s',
                opacity: this.state.isOpen ? 1 : 0,
                width: "95%",
                height: "100%",
                display: this.state.isHide ? "none" : "",
            }}
            >
                <div className="category">
                    <div className="first-message">
                        Tobei
                        <br/>
                        Information
                    </div>
                    <img src={ Img } className="first-image" />
                </div>
          </div>
        );
    };
}