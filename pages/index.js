import React, { Component } from "react";
import Header from "../src/layout/Header";
import Main from "../src/layout/MainContent";
import Footer from "../src/layout/Footer";
import Head from "next/head";

class Home extends Component {
  state = {
    arrows: {
      left: false,
      right: true,
    },
  };
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Astrosites | Home</title>
          <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        </Head>

        <div className="global-container">
          <Header />
          <Main />
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
            rightPage="/portfolio"
            leftPage="/"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
