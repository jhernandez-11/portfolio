import React, { Component } from "react";
import Link from "next/link";

const header = (props) => {
  const aClasses1 = ["hover:text-gray-600", "transition-all", "text-white"];
  const aClasses2 = ["text-blue-300", "transition-all", "cursor-default"];
  const liClasses = ["mr-3", "pr-3", "border-r", "border-white"];
  let designsTab = aClasses1,
    developmentsTab = aClasses1,
    aboutTab = aClasses1,
    connectTab = aClasses1;

  const tab = props.tab;
  switch (tab) {
    case "designs":
      designsTab = aClasses2;
      break;
    case "developments":
      developmentsTab = aClasses2;
      break;
    case "about":
      aboutTab = aClasses2;
      break;
    case "connect":
      connectTab = aClasses2;
      break;
  }

  return (
    <React.Fragment>
      <nav className="flex justify-around font-nunito w-screen py-6 z-10">
        <Link href="/">
          <h1 className="transform-gpu hover:scale-105 transition ease-linear text-2xl font-bold text-blue-600 cursor-pointer">
            astrosites.io
          </h1>
        </Link>

        <ul className="flex justify-evenly text-lg">
          <li className={liClasses.join(" ")}>
            <Link href="/designs">
              <a className={designsTab.join(" ")}>Designs</a>
            </Link>
          </li>
          <li className={liClasses.join(" ")}>
            <Link href="/developments">
              <a className={developmentsTab.join(" ")}>Developments</a>
            </Link>
          </li>
          <li className={liClasses.join(" ")}>
            <Link href="/about">
              <a className={aboutTab.join(" ")}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/connect">
              <a className={connectTab.join(" ")}>Connect</a>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default header;
