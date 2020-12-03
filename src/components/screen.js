import React from "react"
import { Head, ImportantTime, Comment, OtherTime, Itemization } from "./contents"
import Fade from "./fade"

import "../styles/global.scss"

export default class Screen extends React.Component {

    messageArray = [
        "Please do not bring your ski snowboad tool into room.",
        "Please take off your slippers on the tatami mat.",
        "Please do raising and lowering the futon by yourself.",
        "Customers with valuable items should leave at reception.We will not bear any responsibility if you are suffering accident such as lost or stolen without leaving in to the front desk.",
    ];

    render() {
        return (
            <>
                <Fade />
                <div className="outer"
                    style={{display:"none"}}
                >
                    <Head headerText="Check-out" />
                    <ImportantTime time="10:00a.m." />
                    <br />
                    <Comment comment="※ After checking out we will keep baggage until departure." />

                    <Head headerText="Curfew" />
                    <ImportantTime time="11:00p.m." />
                    <br />
                    <Comment comment="※ I will lock keys for crime prevention." />

                    <Head headerText="Mealtime" />
                    <OtherTime option="Breakfast" time="7:30a.m.~8:30a.m" />
                    <br />
                    <Comment comment="Reservations are reqired for those wishing to have breakfast." />

                    <Head headerText="Bath time" />
                    <OtherTime time="4:00p.m.~10:00p.m." />
                    <br />
                    <Comment comment="Please refrain from using after checkout." />

                    <Head headerText="Shower room" />
                    <OtherTime time="3:00p.m.~10:00p.m." />
                    <OtherTime time="7:00a.m.~9:00p.m." />
                    <br />
                    <Comment comment="Please refrain from using after checkout." />

                    <Itemization message={JSON.stringify(this.messageArray)} head="Note"/>
                </div>
            </>
        );
    };
}
