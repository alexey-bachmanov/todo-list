import React from "react";
import stars0 from "../../images/stars-0-sm.png";
import stars1 from "../../images/stars-1-sm.png";
import stars2 from "../../images/stars-2-sm.png";
import "./DiffDisplay.css";

function DiffDisplay(props) {
  const stars = [stars0, stars1, stars2];
  const diff = props.diff;
  return <img src={stars[diff]} height="60" className="diff-display" />;
}

export default DiffDisplay;
