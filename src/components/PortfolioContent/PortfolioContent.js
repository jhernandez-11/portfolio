import React, { Component } from "react";
import Project from "./Project";

class PortfolioContent extends Component {
  state = {
    currentProject: "https://jhernandez-11.github.io/Natours/",
    active: "natours",
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
      "https://jhernandez-11.github.io/TeaCozy/"
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
                  this.setState({
                    currentProject: links[0],
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
                  activeLink("outerpage") ? "text-gray-lightest" : "text-blue-default"
                }
                onClick={() => {
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
                  activeLink("cozy") ? "text-gray-lightest" : "text-blue-default"
                }
                onClick={() => {
                  this.setState({
                    currentProject: links[7],
                    active: "cozy",
                  });
                }}
              >
                Tea Cozy
              </button>
            </div>
            <Project project={this.state.currentProject} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default PortfolioContent;
