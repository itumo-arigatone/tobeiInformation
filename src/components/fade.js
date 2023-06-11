import React, {useState} from "react";
import Img from "../images/information.png";
import "../styles/first.scss";

const Fade = ({isFirstView, setIsFirstView}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isHide, setisHide] = useState(false);
    const [background, setBackground] = useState(false);

    const skipEvent = () => {
        setIsOpen(false);
        setBackground(true);
        setTimeout(() => {
            setisHide(true);
            setIsFirstView(false);
            document.getElementsByClassName("outer")[0].setAttribute("style", "display:block");
        }, 1000);
    }

    let timeout = setTimeout(() => {
        setIsOpen(false);
    }, 4000);
    timeout = setTimeout(() => {
        setisHide(true);
        setIsFirstView(false);
        document.getElementsByClassName("outer")[0].setAttribute("style", "display:block");
    }, 5000);

    return (
        <div className="first"
            style={{
                position: "absolute",
                transition: '1s',
                opacity: isOpen? 1 : 0,
                width: "95%",
                height: "100%",
                display: isHide ? "none" : "",
            }}
        >
            <span onClick={() => skipEvent()}
                className="skip-button"
                style={{
                        background: background ? "#727272" : "#ffffff",
                    }}>
                skip
            </span>
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
}

export default Fade;