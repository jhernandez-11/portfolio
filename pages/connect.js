import React, { Component } from "react";
import ConnectContent from "../components/ConnectContent";
import Header from "../layout/Nav";
import Footer from "../layout/Footer";

class Connect extends Component {
  state = {
    arrows: {
      left: true,
      right: false,
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header tab="connect" />
          <ConnectContent />
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Connect;
