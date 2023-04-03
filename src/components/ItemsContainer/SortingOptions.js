import React, { useState } from "react";
import SortBtn from "./SortBtn";
import "./SortingOptions.css";

function SortingOptions(props) {
  return (
    <div className="card">
      <SortBtn />
      <SortBtn />
      <SortBtn />
    </div>
  );
}

export default SortingOptions;
