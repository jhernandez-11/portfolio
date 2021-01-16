import React from "react";
import { Backward, Forward } from "../components/UI/svgs";

const footer = (props) => (
  <React.Fragment>
    <footer className="absolute bottom-0 left-0 p-3 flex row w-full h-max justify-between place-items-center">
      <p className="font-secondary text-lg">&copy; 2021 Jose L Hernandez</p>
      <div className="flex row">
        <Backward active1={props.arrowLeft} leftPage={props.leftPage} />
        <Forward active2={props.arrowRight} rightPage={props.rightPage} />
      </div>
    </footer>
  </React.Fragment>
);

export default footer;
