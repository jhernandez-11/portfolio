import React, { Component } from "react";
import Link from "next/link";

const header = (props) => {
  const aClasses1 = ["hover:text-yellow-600", "transition-all"];
  const aClasses2 = ["text-yellow-600", "transition-all", "cursor-default"];
  const liClasses = ["mr-3", "pr-3", "border-r", "border-black"];
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
      <header className="flex justify-around w-screen py-6">
        <Link href="/">
          <div className="flex row items-center text-lg cursor-pointer transform hover:scale-105 transition ease-linear">
            <h1 className="text-2xl mr-6 font-bold text-blue-600">
              josehdz.io
            </h1>
          </div>
        </Link>

        <ul className="flex justify-evenly text-lg">
          <li className={liClasses.join(" ")}>
            <Link href="/designer">
              <a className={designsTab.join(" ")}>Designs</a>
            </Link>
          </li>
          <li className={liClasses.join(" ")}>
            <Link href="/developer">
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
      </header>
    </React.Fragment>
  );
};

export default header;
