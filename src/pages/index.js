import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import { Headline, ImportantTime, Comment, OtherTime, Itemization } from "../components/contents";
import { Link } from "gatsby";
import Fade from "../components/fade";
import Seo from "../components/seo"
import Footer from "../components/footer";
import Header from "../components/header";
import ImageModal from "../components/image_modal/imageModal";
import onsenImg from "../images/onsen.jpg";

import '../components/i18n';

import "../styles/global.scss";

export default function Home() {
    const [isFirstView, setIsFirstView] = useState(true);
    const {t} = useTranslation();
    const messageArray = [
        t("note1"),
        t("note2"),
        t("note3"),
        t("note4"),
    ];
    return (
        <>
            <Fade isFirstView={isFirstView} setIsFirstView={setIsFirstView} />
            {!isFirstView && (
                <>
                <Header/>
                    <div className="outer">
                        <div className="image-area">
                            <ImageModal src={onsenImg} alt={"how to take a bath at a hot spring"} />
                            <br/>
                            <Link to="/howto">{t("hotSpring")}</Link>
                        </div>

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
                    <Footer/>
                </>
            )}
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
