import React, { useState } from "react";
import SortingOptions from "./SortingOptions";
import ItemsList from "./ItemsList";
import "./ItemsContainer.css";

function ItemsContainer(props) {
  // console.log("ItemsContainer evaluated");

  // event handlers
  const completeEventHandler = function (state) {
    props.liftCompleteEvent(state);
  };
  const filterChangeHandler = function (indexToFlip) {
    props.liftFilterChange(indexToFlip);
  };
  return (
    <div>
      <SortingOptions liftState={filterChangeHandler} />
      <ItemsList list={props.list} liftState={completeEventHandler} />
    </div>
  );
}

export default ItemsContainer;
