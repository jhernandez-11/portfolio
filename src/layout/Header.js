import React, { Component } from "react";
import Link from "next/link";

const header = (props) => {
  const aClasses1 = ["hover:text-gray-600", "transition-all", "text-gray-lightest"];
  const aClasses2 = ["text-blue-default", "transition-all", "cursor-default"];
  const liClasses = ["mr-3", "pr-3", "border-r", "border-gray-lightest"];
  let portfolioTab = aClasses1,
    resumeTab = aClasses1,
    contactTab = aClasses1

  const tab = props.tab;
  switch (tab) {
    case "portfolio":
      portfolioTab = aClasses2;
      break;
    case "resume":
      resumeTab = aClasses2;
      break;
    case "contact":
      contactTab = aClasses2;
      break;
  }

  return (
    <React.Fragment>
      <nav className="flex justify-around font-nunito w-screen py-6 z-10">
        <Link href="/">
          <h1 className="transform-gpu hover:scale-105 transition ease-linear text-2xl font-bold text-blue-default cursor-pointer">
            Home
          </h1>
        </Link>

        <ul className="flex justify-evenly text-lg">
          <li className={liClasses.join(" ")}>
            <Link href="/portfolio">
              <a className={portfolioTab.join(" ")}>Portfolio</a>
            </Link>
          </li>
          <li className={liClasses.join(" ")}>
            <Link href="/resume">
              <a className={resumeTab.join(" ")}>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className={contactTab.join(" ")}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default header;
