import React from "react"
import Img from "../images/information.png"
import "../styles/first.scss"

export default class Fade extends React.Component {
    state = {
        isOpen: true,
        isHide: false,
        background: false
    };

    skipEvent = () => {
        this.setState({
            isOpen: false,
            background: true,
        });
        setTimeout(() => {
            this.setState({
                isHide: true,
            });
            document.getElementsByClassName("outer")[0].setAttribute("style", "display:block");
        }, 1000);
        // document.getElementsByClassName("outer")[0].setAttribute("style", "display:block");
    }

    timeout = setTimeout(() => { this.setState({ isOpen: false }); }, 4000);
    timeout = setTimeout(() => {
        this.setState({ isHide: true });
        document.getElementsByClassName("outer")[0].setAttribute("style", "display:block");
    }, 5000);

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
                <span onClick={this.skipEvent}
                    className="skip-button"
                    style={{
                        background: this.state.background ? "#727272" : "#ffffff",
                    }}
                >skip</span>
                <div className="category">
                    <div className="first-message">
                        Tobei
                        <br />
                        Information
                    </div>
                    <img src={Img} className="first-image" />
                </div>
            </div>
        );
    };
}