import React from "react";
import { useLocation } from "react-router-dom";

function LogoJS() {
  const { pathname } = useLocation();

  return (
    <div className={pathname === "/login" ? "js-svg-login" : "js-svg"}>
      <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path
          id={pathname === "/login" ? "logo_svg" : null}
          d="M45.2741 2.325C45.0841 2.118 44.8171 2 44.5361 2H5.46411C5.18311 2 4.91611 2.118 4.72611 2.325C4.53611 2.532 4.44311 2.81 4.46811 3.089L7.98811 42.516C8.02511 42.928 8.31211 43.275 8.71011 43.389L24.7201 47.962C24.8091 47.987 24.9021 48 24.9941 48C25.0861 48 25.1791 47.987 25.2681 47.962L41.2921 43.389C41.6901 43.275 41.9771 42.928 42.0141 42.516L45.5321 3.089C45.5571 2.81 45.4631 2.532 45.2741 2.325ZM12.0001 29.004L19.0001 30.946V11H23.0001V37L12.0001 33.949V29.004ZM38.0541 22L37.0001 34.25L27.0001 37V32.399L33.7501 30.544L34.0001 26.794L27.0001 28V11H39.0001L38.6551 15H31.0001V23L38.0541 22Z"
          fill="#3385FF"
        />
      </svg>
    </div>
  );
}

export default LogoJS;
