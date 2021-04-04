import React from "react";

const contact = (props) => (
  <React.Fragment>
    <div className="grid h-full justify-items-center place-items-center w-full">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--1"></div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <a
            className="h-6 w-56 absolute right-6 bottom-16 cursor-pointer transform-gpu -translate-x-2 -translate-y-1"
            href="mailto:astrosites.io@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          <a
            className="h-6 w-44 absolute right-12 bottom-10 cursor-pointer"
            onClick={() => alert("Error: You are currently in this website!")}
          ></a>
          <a
            className="h-6 w-36 absolute right-16 bottom-3 cursor-pointer"
            href="https://twitter.com/astrosites_io"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default contact;
