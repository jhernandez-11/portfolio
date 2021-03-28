import React, { Component } from "react";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import ResumeContent from "../src/components/ResumeContent/ResumeContent";
import Head from "next/head";

class Resume extends Component {
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
          <title>Resume</title>
          <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        </Head>
        <div className="global-container">
          <Header tab="resume" />
          <ResumeContent />
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
            rightPage="/contact"
            leftPage="/portfolio"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
