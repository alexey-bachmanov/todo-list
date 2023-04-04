import React, { useState } from "react";
import stars0 from "../../images/stars-0-sm.png";
import stars1 from "../../images/stars-1-sm.png";
import stars2 from "../../images/stars-2-sm.png";
import "./SortingOptions.css";

function SortingOptions(props) {
  const clickEasyHandler = function () {
    props.liftState(0);
  };
  const clickMedmHandler = function () {
    props.liftState(1);
  };
  const clickHardHandler = function () {
    props.liftState(2);
  };
  return (
    <div className="card sorting-options">
      <img
        src={stars0}
        height="60"
        className="button"
        onClick={clickEasyHandler}
      />
      <img
        src={stars1}
        height="60"
        className="button"
        onClick={clickMedmHandler}
      />
      <img
        src={stars2}
        height="60"
        className="button"
        onClick={clickHardHandler}
      />
    </div>
  );
}

export default SortingOptions;
