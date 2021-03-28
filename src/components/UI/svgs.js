import React from "react";
import Link from "next/link";

const leftArrow = (props) => {
  const svgClasses = ["ionicon", "w-12", "text-gray-darkest"];
  if (props.active1) {
    svgClasses.pop();
    svgClasses.push("hover:text-blue-dark", "cursor-pointer", "text-gray-lightest");
  }
  return (
    <React.Fragment>
      <Link href={props.leftPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={svgClasses.join(" ")}
          viewBox="0 0 512 512"
        >
          <title>{props.active1 ? "Previous Page" : null}</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M328 112L184 256l144 144"
          />
        </svg>
      </Link>
    </React.Fragment>
  );
};

const rightArrow = (props) => {
  const svgClasses = ["ionicon", "w-12", "text-gray-dark"];
  if (props.active2) {
    svgClasses.pop();
    svgClasses.push("hover:text-blue-dark", "cursor-pointer", "text-gray-lightest");
  }

  return (
    <React.Fragment>
      <Link href={props.rightPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={svgClasses.join(" ")}
          viewBox="0 0 512 512"
        >
          <title>{props.active2 ? "Next Page" : null}</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M184 112l144 144-144 144"
          />
        </svg>
      </Link>
    </React.Fragment>
  );
};

const twitter = (props) => {
  const svgClasses = [
    "ionicon",
    "w-12",
    "cursor-pointer",
    "transform-gpu",
    "hover:scale-105",
  ];
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses.join(" ")}
      viewBox="0 0 512 512"
    >
      <title>Twitter</title>
      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
    </svg>
  );
};

const linkedIn = (props) => {
  const svgClasses = [
    "ionicon",
    "w-12",
    "cursor-pointer",
    "transform-gpu",
    "hover:scale-105",
  ];
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses.join(" ")}
      viewBox="0 0 512 512"
    >
      <title>Linkedin</title>
      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
    </svg>
  );
};

const instagram = (props) => {
  const svgClasses = [
    "ionicon",
    "w-12",
    "cursor-pointer",
    "transform-gpu",
    "hover:scale-105",
  ];
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses.join(" ")}
      viewBox="0 0 512 512"
    >
      <title>Instagram</title>
      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
    </svg>
  );
};

const discord = (props) => {
  const svgClasses = [
    "ionicon",
    "w-12",
    "cursor-pointer",
    "transform-gpu",
    "hover:scale-105",
  ];
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses.join(" ")}
      viewBox="0 0 512 512"
    >
      <title>Discord</title>
      <path d="M464 66.52A50 50 0 00414.12 17L97.64 16A49.65 49.65 0 0048 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100zM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 01-27.85 14.25 173.31 173.31 0 01-35.11 10.39 170.05 170.05 0 01-62.72-.24 184.45 184.45 0 01-35.59-10.4 141.46 141.46 0 01-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 014.12-.49 205.62 205.62 0 0148.91-.48 201.62 201.62 0 0172.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19z" />
      <path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57zM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218z" />{" "}
    </svg>
  );
};

const codepen = (props) => {
  const svgClasses = [
    "ionicon",
    "w-12",
    "cursor-pointer",
    "transform-gpu",
    "hover:scale-105",
  ];
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses.join(" ")}
      viewBox="0 0 512 512"
    >
      <title>Codepen</title>
      <path d="M241.24 303.94c-15.32-10.36-30.74-20.57-46.06-30.93-2-1.38-3.43-1.48-5.5 0l-38.88 26.12C182 319.9 244 361.32 244 361.32v-53.79c0-1.22-1.55-2.78-2.76-3.59zM195.09 240.67q23.19-15.24 46.11-30.86a7.54 7.54 0 002.8-5.34v-51.7s-62 41.12-93.26 61.94c13.7 9.16 26.67 17.91 39.78 26.44 1.02.66 3.4.28 4.57-.48zM269.84 209.35q23.71 16.07 47.63 31.82a4.3 4.3 0 003.83 0l39.76-26.47L268 152.48v53.35a4.79 4.79 0 001.84 3.52zM258.11 230.37a5.27 5.27 0 00-4.74.17c-4.82 3-9.47 6.2-14.17 9.35-8.25 5.53-25.35 17-25.35 17l38.84 25.86a6.18 6.18 0 006.26.11l39-26s-34.07-22.66-39.84-26.49zM141 237.12v39.61l29.62-19.84L141 237.12z" />
      <path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm139 265c0 5.78-2.65 9.86-7.51 13.09q-61.71 41-123.29 82.19c-5.85 3.92-11.17 3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14 2.52-10.34 7.62-13.72 40.91-27.13 81.94-54.36 122.73-81.68 5.82-3.89 11.09-4 16.94-.09q61.54 41.21 123.26 82.19c4.68 3.11 7.45 6.95 7.45 12.66z" />
      <path d="M316.25 273.23q-22.59 15.34-45.39 30.34c-2.41 1.58-2.89 3.31-2.86 6.19v51.34l93-62-38.53-25.88c-2.3-1.61-3.89-1.57-6.22.01zM370 276.68v-39.62l-29.59 19.87L370 276.68z" />
    </svg>
  );
};

const youtube = (props) => {
  const svgClasses = [
    "ionicon",
    "w-12",
    "cursor-pointer",
    "transform-gpu",
    "hover:scale-105",
  ];
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses.join(" ")}
      viewBox="0 0 512 512"
    >
      <title>Youtube</title>
      <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z" />
    </svg>
  );
};
const linkIcon = (props) => {
  const svgClasses = [
    "ionicon",
    "w-6",
    "ml-3",
    "text-white"
  ];
  return (
    <svg
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClasses.join(" ")}
      viewBox="0 0 512 512"
    >
      <path d='M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='36'/>
    </svg>
  );
};

export {
  rightArrow as Forward,
  leftArrow as Backward,
  twitter as Twitter,
  linkedIn as LinkedIn,
  instagram as Instagram,
  discord as Discord,
  codepen as Codepen,
  youtube as Youtube,
  linkIcon as LinkIcon
};
