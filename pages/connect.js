import React, { Component } from "react";
import ConnectContent from "../src/components/ConnectContent";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import Head from "next/head";


class Connect extends Component {
  state = {
    arrows: {
      left: true,
      right: false,
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
          <Header tab="connect" />
          <ConnectContent />
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
            rightPage="/connect"
            leftPage="/about"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Connect;
