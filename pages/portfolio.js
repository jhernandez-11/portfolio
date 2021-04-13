import React, { Component } from "react";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import PortfolioContent from "../src/components/PortfolioContent/PortfolioContent";
import Head from "next/head";

class Portfolio extends Component {
  state = {
    arrows: {
      left: true,
      right: true,
    },
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Astrosites | Portfolio</title>
          <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        </Head>

        <div className="global-container">
          <Header tab="portfolio" />
          <PortfolioContent />
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
            rightPage="/resume"
            leftPage="/"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;

