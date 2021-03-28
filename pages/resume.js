import React, { Component } from "react";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import ResumeContent from '../src/components/ResumeContent/ResumeContent'

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
