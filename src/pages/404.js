import React from "react"
import { Headline, Comment } from "../components/contents.js"
import NoHappenButton from "../components/nohappenbutton"
import { Link } from "gatsby"
import "../styles/global.scss"

export default function NotFound() {
    return (
        <div className="outer"
            style={{maxWidth:"245px"}}
        >
            <Headline headerText="404 file not found" />
            <Comment comment="ファイルが見つかりませんでした" />
            <br></br>
            <Link to="/">
                <NoHappenButton message="return Information"/>
            </Link>
        </div>
    );
}