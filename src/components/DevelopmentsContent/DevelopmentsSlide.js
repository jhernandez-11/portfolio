import React from "react";
import { Link } from "../UI/svgs";
import LoadingAnimation from '../UI/loadingAnimation'

const developmentsSlide = (props) => (
  <div className="relative h-full w-full">
    <LoadingAnimation />
    <iframe
      title={props.title}
      loading="lazy"
      className="w-2/3 h-almost-full ml-1 z-10"
      src={props.link}
    ></iframe>
    <a
      className="flex z-10 text-lg text-white m-3 w-max transition
            hover:text-blue-600"
      href={props.link}
      target="_blank"
    >
      visit page
      <Link />
    </a>
  </div>
);

export default developmentsSlide;