import React from "react"

export const Head = props => <h1>{props.headerText}</h1>

export const ImportantTime = props =>
    <div className="importantTime">
        <strong>
            {props.time}
        </strong>
    </div>

export const OtherTime = props =>{
    if (props.option == "undefined" || props.option == null) {
        return(
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
            <br/>
            <strong>
                &nbsp;{props.time}
            </strong>
        </div>
    );
}

export const Comment = props => <span>&nbsp; {props.comment}</span>

export const Itemization = props =>{
    const messages = JSON.parse(props.message)
    let li = [];
    messages.forEach((message, index) => {
        li.push(<li key={index}>{message}</li>);
    });
    return(
        <div style={{
            margin: "60px 0 0 0",
        }}
        >
            <h1 style={{
                textAlign: "center",
            }}>{props.head}</h1>
            <ul>
                {li}
            </ul>
        </div>
    )
}
