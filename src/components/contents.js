import React, { useState }from "react";
import { useTranslation } from "react-i18next";

export const Head = props => <h1>{props.headerText}</h1>

export const ImportantTime = props =>
    <div className="importantTime">
        <strong>
            {props.time}
        </strong>
    </div>

export const OtherTime = props => {
    if (props.option == "undefined" || props.option == null) {
        return (
            <div className="otherTime">
                <strong>
                    &nbsp;{props.time}
                </strong>
            </div>
        );
    }
    return (
        <div className="otherTime">
            &nbsp;{props.option}
            <br />
            <strong>
                &nbsp;{props.time}
            </strong>
        </div>
    );
}

export const Comment = props => <span>&nbsp; {props.comment}</span>

export const Itemization = props => {
    const messages = JSON.parse(props.message)
    let li = [];
    messages.forEach((message, index) => {
        li.push(<li key={index}>{message}</li>);
    });
    return (
        <div style={{
            margin: "60px 0 0 0",
        }}
        >
            <h1 style={{
                textAlign: "center",
            }}>{props.head}</h1>
            <ul className="itemization-outer">
                {li}
            </ul>
        </div>
    )
}

export const LangageButton = () => {

    const [value, setValue] = useState({
        ja: false,
        en: true,
    });
    const {i18n} = useTranslation();
    const ClickLangButton = lng => {
        i18n.changeLanguage(lng);
        if (lng === "en") {
            setValue({
                ja: false,
                en: true,
            });
        } else {
            setValue({
                ja: true,
                en: false,
            });
        }
    }

    return(
        <div className="langage-area">
            <div className="langage-button" onClick={ () => ClickLangButton("ja") } >
                <span
                    className="generic-button"
                    style={{
                        background: value.ja ? "#727272" : "#ffffff",
                    }}
                >
                    日本語
                </span>
            </div>
            <div className="langage-button" onClick={ () => ClickLangButton("en") } >
                <span
                    className="generic-button"
                    style={{
                        background: value.en ? "#727272" : "#ffffff",
                    }}
                >
                    English
                </span>
            </div>
        </div>
    );
}
