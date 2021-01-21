import React, { Component } from "react";
import Header from "../src/layout/Header";
import Main from "../src/layout/MainContent";
import Footer from "../src/layout/Footer";
class Home extends Component {
  state = {
    arrows: {
      left: false,
      right: true,
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="global-container">
          <Header />
          <Main />
          <Footer
            arrowRight={this.state.arrows.right}
            arrowLeft={this.state.arrows.left}
            rightPage="/designs"
            leftPage="/"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
