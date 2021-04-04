import React, { Component } from "react";

class Project extends Component {
  render() {
    let classHidden = "w-full h-screen pb-16 hidden",
      classShown = "w-full h-screen pb-16";
    return (
      <React.Fragment>
        <iframe
          src={this.props.project}
          className={this.props.loading ? classHidden : classShown}
          onLoad={() => {
            this.props.loadingHandler()
          }}
        ></iframe>

        <iframe
          src="https://jhernandez-11.github.io/Loading.../"
          className={this.props.loading ? classShown : classHidden}
        ></iframe>
      </React.Fragment>
    );
  }
}

export default Project;
