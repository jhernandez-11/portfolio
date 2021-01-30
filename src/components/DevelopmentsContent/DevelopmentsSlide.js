import React from "react";
import { LinkIcon } from "../UI/svgs";

const developmentsSlide = (props) => (
  <div className="relative h-full w-full">
    <iframe
      title={props.title}
      loading="lazy"
      className="w-1/3 h-almost-full ml-1 z-10"
      src={props.link}
    ></iframe>
    <a
      className="flex z-10 text-lg text-white m-3 w-max transition
            hover:text-blue-600"
      href={props.link}
      target="_blank"
    >
      visit page
      <LinkIcon />
    </a>
  </div>
);

export default developmentsSlide;