import React from "react";
import { Head, ImportantTime, Comment, OtherTime, Itemization, LangageButton } from "./contents";
import Fade from "./fade";
import Covid from "./covid"

import "../styles/global.scss"


export default class Screen extends React.Component {

    render() {
        const t = this.props.t;
        const messageArray = [
            t("note1"),
            t("note2"),
            t("note3"),
            t("note4"),
        ];
        return (
            <>
                <Fade />
                <div className="outer"
                    style={{display:"none"}}
                >
                    <LangageButton />
                    <Covid />

                    <Head headerText={ t("checkOut") } />
                    <ImportantTime time="10:00a.m." />
                    <br />
                    <Comment comment={ t("checkOutOption") } />

                    <Head headerText={ t("curfew") } />
                    <ImportantTime time="11:00p.m." />
                    <br />
                    <Comment comment={ t("curfewOption")} />

                    <Head headerText={ t("mealtime") } />
                    <OtherTime option={ t("breakfast") } time="7:30a.m.~8:30a.m" />
                    <br />
                    <Comment comment={ t("mealtimeOption") } />

                    <Head headerText={ t("bathTime") } />
                    <OtherTime time="4:00p.m.~10:00p.m." />
                    <br />
                    <Comment comment={ t("bathTimeOption") } />

                    <Head headerText={ t("showerRoom") } />
                    <OtherTime time="3:00p.m.~10:00p.m." />
                    <OtherTime time="7:00a.m.~9:00p.m." />
                    <br />
                    <Comment comment={ t("bathTimeOption") } />

                    <Itemization message={JSON.stringify(messageArray)} head="Note"/>
                </div>
            </>
        );
    };
}
