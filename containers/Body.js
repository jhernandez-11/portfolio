import React, { Component } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

class Body extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          {this.props.children}
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

export default Body;
