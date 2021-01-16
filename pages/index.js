import React, { Component } from "react";
import Header from "../layout/Header";
import Main from "../layout/MainContent";
import Footer from "../layout/Footer";
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
