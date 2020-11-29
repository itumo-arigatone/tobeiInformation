import React from "react"
import { Link } from "gatsby"
import Head from "../components/header"

export default function Home() {
  return (
    <div>
      <Head headerText="Check-out"/>
      <div>
          <strong>
              10:00a.m.
          </strong>
      </div>
      <br/>
      <span>&nbsp;※ After checking out we will keep baggage until departure.</span>
    </div>
    );
}
