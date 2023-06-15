import React from "react";
import { useTranslation } from "react-i18next";
import { LangageButton } from "../components/contents";
import "../styles/header.scss";

const Header = () => {
    const {t} = useTranslation();
    return (
        <header id="tobei-header">
            <div id="title">
                <div className="guesthouse">
                    {t("guesthouse")}
                </div>
                <h1 className="tobei">{t("tobei")}</h1>
            </div>
            <div>
                <LangageButton />
            </div>
        </header>
    )
}

export default Header