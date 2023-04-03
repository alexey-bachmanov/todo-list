import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./ItemsList.css";

function ItemsList(props) {
  const passStateHandler = function (state) {
    props.liftState(state);
  };

  // JSX-ify list handed down in props, hand down individual objects
  const listJSX = props.list.map((li) => (
    <ToDoItem key={li.id} listItem={li} liftState={passStateHandler} />
  ));
  return <ul className="items-list">{listJSX}</ul>;
}

export default ItemsList;
