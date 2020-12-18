import React from "react";
import Screen from "../components/screen.js";
import { useTranslation } from 'react-i18next';

import '../components/i18n';

import "../styles/global.scss";

export default function Home() {
    const {t} = useTranslation();
    return (
        <Screen t={ t }/>
    );
}
