import React from "react"
import { Link } from "gatsby"
import {Head, ImportantTime, Comment, OtherTime} from "../components/header"

import "../styles/global.scss"

export default function Home() {
  return (
    <div className="outer">
      <Head headerText="Check-out"/>
      <ImportantTime time="10:00a.m." />
      <br/>
      <Comment comment="※ After checking out we will keep baggage until departure." />
    
      <Head headerText="Curfew"/>
      <ImportantTime time="11:00p.m." />
      <br/>
      <Comment comment="※ I will lock keys for crime prevention." />

      <Head headerText="Mealtime"/>
      <OtherTime option="Breakfast" time="7:30a.m.~8:30a.m" />
      <br/>
      <Comment comment="Reservations are reqired for those wishing to have breakfast." />

      <Head headerText="Bath time"/>
      <OtherTime time="4:00p.m.~10:00p.m." />
      <br/>
      <Comment comment="Please refrain from using after checkout." />

      <Head headerText="Shower room"/>
      <OtherTime time="3:00p.m.~10:00p.m." />
      <OtherTime time="7:00a.m.~9:00p.m." />
      <br/>
      <Comment comment="Please refrain from using after checkout." />
    </div>
    );
}
