import React, { Component } from "react";
import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";
import ContactContent from '../src/components/ContactContent/ContactContent'

class Contact extends Component {
  state = {
    arrows: {
      left: true,
      right: false,
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="global-container">
          <Header tab="contact" />
          <ContactContent />
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
            rightPage="/contact"
            leftPage="/resume"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
