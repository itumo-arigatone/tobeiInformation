import React from "react";
import { useTranslation } from "react-i18next";
import { Headline, ImportantTime, Comment, OtherTime, Itemization, LangageButton } from "../components/contents";
import { Link } from "gatsby";
import Fade from "../components/fade";
import Seo from "../components/seo"

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
                <Link to="/howto">{t("hotSpring")}</Link>

                <Headline headerText={ t("checkOut") } />
                <ImportantTime time="10:00a.m." />
                <br />
                <Comment comment={ t("checkOutOption") } />

                <Headline headerText={ t("curfew") } />
                <ImportantTime time="11:00p.m." />
                <br />
                <Comment comment={ t("curfewOption")} />

                <Headline headerText={ t("mealtime") } />
                <OtherTime option={ t("breakfast") } time="7:30a.m.~8:30a.m" />
                <br />
                <Comment comment={ t("mealtimeOption") } />

                <Headline headerText={ t("bathTime") } />
                <OtherTime time="4:00p.m.~10:00p.m." />
                <br />
                <Comment comment={ t("bathTimeOption") } />

                <Headline headerText={ t("showerRoom") } />
                <OtherTime time="3:00p.m.~10:00p.m." />
                <OtherTime time="7:00a.m.~9:00p.m." />
                <br />
                <Comment comment={ t("bathTimeOption") } />

                <Itemization message={JSON.stringify(messageArray)} head="Note"/>
            </div>
        </>
    );
}

export const Head = () => {
    const {t} = useTranslation();

    return (
        <>
            <Seo
                title={ t("siteTitleTop") }
                description={ t("siteDescriptionTop") }
            />
        </>
    );
}
