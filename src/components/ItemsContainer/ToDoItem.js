import React, { useState } from "react";
import completeImg from "../../images/remove-sign-sm.png";
import DiffDisplay from "./DiffDisplay";
import "./ToDoItem.css";

function ToDoItem(props) {
  // parse list item
  const diff = props.listItem.diff;
  const text = props.listItem.text;

  const completeBtnHandler = function () {
    // pass the object up for deletion
    props.liftState(props.listItem);
  };

  return (
    <li className={`card to-do-item diff${diff}`}>
      <img
        src={completeImg}
        height="60"
        className="button"
        onClick={completeBtnHandler}
      />
      <h3>{text}</h3>
      <DiffDisplay diff={diff} />
    </li>
  );
}

export default ToDoItem;
