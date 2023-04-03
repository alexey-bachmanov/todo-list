import React, { useState } from "react";
import SortingOptions from "./SortingOptions";
import ItemsList from "./ItemsList";
import "./ItemsContainer.css";

function ItemsContainer(props) {
  // sort the items list in this component
  const filteredList = props.list;

  const passStateHandler = function (state) {
    props.liftState(state);
  };
  return (
    <div>
      <SortingOptions />
      <ItemsList list={filteredList} liftState={passStateHandler} />
    </div>
  );
}

export default ItemsContainer;
