import React from "react"
import onsenImg from "../images/onsen.jpg";
import "../styles/global.scss"

export default class NoHappenButton extends React.Component {

    render() {
        return (
            <div>
                <img src={onsenImg} className="fullScreen"/>
            </div>
        );
    }
}