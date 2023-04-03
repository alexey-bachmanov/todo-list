import React, { useState } from "react";
import addImg from "../../images/add-sign-sm.png";
import { v4 as uuid } from "uuid";
import DifficultySelector from "./DifficultySelector";
import "./NewItemForm.css";

function NewItemForm(props) {
  // state declarations
  const [isOpen, setIsOpen] = useState(true);
  const [diff, setDiff] = useState(0);
  const [textInput, setTextInput] = useState("");

  // event handlers
  const textChangeHandler = function (e) {
    setTextInput(e.target.value);
  };

  const diffChangeHandler = function (diffState) {
    setDiff(diffState);
  };

  const submitHandler = function (e) {
    const newToDo = {
      id: uuid(),
      text: textInput,
      diff: diff,
      date: new Date(),
    };
    setTextInput("");
    setDiff(0);
    props.liftState(newToDo);
  };

  return (
    <div className={`card diff${diff} new-item-form`}>
      <img
        src={addImg}
        height="60"
        className="button add-button"
        onClick={submitHandler}
      />
      <input type="text" value={textInput} onChange={textChangeHandler} />
      <DifficultySelector liftState={diffChangeHandler} />
    </div>
  );
}

export default NewItemForm;
