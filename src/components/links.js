import React from "react"
import "../styles/global.scss"
import { Link } from 'react-router-dom'

export default class NoHappenButton extends React.Component {
    render() {
        return (
            <div>
                <Link to="/howto">{this.props.title}</Link>
            </div>
        );
    }
}