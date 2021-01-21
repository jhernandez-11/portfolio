import React, { Component } from "react";
import Header from "../src/layout/Header";
import AboutContent from "../src/components/AboutContent";
import Footer from "../src/layout/Footer";

class About extends Component {
  state = {
    arrows: {
      left: true,
      right: true,
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="global-container">
          <Header tab="about" />
          <AboutContent />
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
            rightPage="/connect"
            leftPage="/developments"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default About;
