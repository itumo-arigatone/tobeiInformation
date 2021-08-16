import React from "react";
import { useTranslation } from "react-i18next";
import { Head, ImportantTime, Comment, OtherTime, Itemization, LangageButton } from "../components/contents";
import Fade from "../components/fade";
import Covid from "../components/covid";
import HowTo from "../components/howto";
import Links from "../components/links";
import { BrowserRouter as Router, Route  } from "react-router-dom";

import '../components/i18n';

import "../styles/global.scss";

export default function Home() {
    const {t} = useTranslation();
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
                <Router>
                    <div>
                        <Links title={t("hotSpring")} />
                        <Route exact path="/howto" component={HowTo}/>
                    </div>
                </Router>
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
}
