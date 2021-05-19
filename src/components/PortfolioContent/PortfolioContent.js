import React, { Component } from "react";
import Project from "./Project";
import { LinkIcon } from "../UI/svgs";

class PortfolioContent extends Component {
  state = {
    currentProject: "https://jhernandez-11.github.io/Natours/",
    active: "natours",
    loading: true,
  };

  loadingHandlerFalse = () => {
    this.setState({
      loading: false,
    });
  };

  loadingHandlerTrue = () => {
    this.setState({
      loading: true,
    });
  };

  render() {
    const links = [
      "https://jhernandez-11.github.io/Natours/",
      "https://hdz-jammming.herokuapp.com/",
      "https://hdz-chat-app.herokuapp.com/",
      "https://jhernandez-11.github.io/Trillo/",
      "https://jhernandez-11.github.io/Nexter/",
      "https://jhernandez-11.github.io/ChoreDoor/",
      "https://jhernandez-11.github.io/Outerpage/",
      "https://jhernandez-11.github.io/TeaCozy/",
      "https://jhernandez-11.github.io/Cosmic-Guide/"
    ];

    const activeLink = (projName) => {
      if (this.state.active === projName) {
        return true;
      }
    };

    return (
      <React.Fragment>
        <main className="overflow-scroll">
          <div className="portfolio-container bg-blue-light w-screen h-screen">
            <div className="w-full bg-blue-dark flex place-content-center justify-evenly text-blue-default text-xl py-3 shadow-lg">
              <button
                className={
                  activeLink("natours")
                    ? "text-gray-lightest "
                    : "text-blue-default "
                }
                onClick={() => {
                  this.loadingHandlerTrue();
                  this.setState({
                    currentProject: "https://jhernandez-11.github.io/Natours/",
                    active: "natours",
                  });
                }}
              >
                Natours
              </button>
              <button
                className={
                  activeLink("trillo")
                    ? "text-gray-lightest "
                    : "text-blue-default "
                }
                onClick={() => {
                  this.loadingHandlerTrue();
                  this.setState({
                    currentProject: links[3],
                    active: "trillo",
                  });
                }}
              >
                Trillo
              </button>
              <button
                className={
                  activeLink("nexter")
                    ? "text-gray-lightest "
                    : "text-blue-default "
                }
                onClick={() => {
                  this.loadingHandlerTrue();
                  this.setState({
                    currentProject: links[4],
                    active: "nexter",
                  });
                }}
              >
                Nexter
              </button>
              <button
                className={
                  activeLink("chatapp")
                    ? "text-gray-lightest "
                    : "text-blue-default "
                }
                onClick={() => {
                  this.loadingHandlerTrue();
                  this.setState({
                    currentProject: links[2],
                    active: "chatapp",
                  });
                }}
              >
                Chatapp
              </button>
              <button
                className={
                  activeLink("jammming")
                    ? "text-gray-lightest"
                    : "text-blue-default"
                }
                onClick={() => {
                  this.loadingHandlerTrue();
                  this.setState({
                    currentProject: links[1],
                    active: "jammming",
                  });
                }}
              >
                Jammming
              </button>
              <button
                className={
                  activeLink("bot") ? "text-gray-lightest" : "text-blue-default"
                }
                onClick={() => {
                  this.loadingHandlerTrue();
                  this.setState({
                    currentProject: links[5],
                    active: "bot",
                  });
                }}
              >
                Chore Door
              </button>
              <button
                className={
                  activeLink("outerpage")
                    ? "text-gray-lightest"
                    : "text-blue-default"
                }
                onClick={() => {
                  this.loadingHandlerTrue();
                  this.setState({
                    currentProject: links[6],
                    active: "outerpage",
                  });
                }}
              >
                Outerpage
              </button>
              <button
                className={
                  activeLink("cozy")
                    ? "text-gray-lightest"
                    : "text-blue-default"
                }
                onClick={() => {
                  this.loadingHandlerTrue();
                  this.setState({
                    currentProject: links[7],
                    active: "cozy",
                  });
                }}
              >
                Tea Cozy
              </button>
              <button
                className={
                  activeLink("cg")
                    ? "text-gray-lightest"
                    : "text-blue-default"
                }
                onClick={() => {
                  this.loadingHandlerTrue();
                  this.setState({
                    currentProject: links[8],
                    active: "cg",
                  });
                }}
              >
                Cosmic Guide
              </button>
            </div>
            <div className="flex justify-evenly">
              <h3 className="text-2xl text-gray-lightest opacity-75 my-3 ml-3">
                *Disclaimer - These are prototypes.
              </h3>
              <a
                className="text-2xl text-gray-lightest bg-blue-dark rounded-lg cursor-pointer px-2 py-1 opacity-75 my-3 ml-3 flex"
                href={this.state.currentProject}
                target="_blank"
              >
                Open in new tab
                <LinkIcon />
              </a>
            </div>
            <Project
              project={this.state.currentProject}
              loading={this.state.loading}
              loadingHandler={this.loadingHandlerFalse}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default PortfolioContent;
