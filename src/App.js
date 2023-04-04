import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import logoImg from "./images/todo-logo.png";
import NewItemForm from "./components/NewItem/NewItemForm";
import ItemsContainer from "./components/ItemsContainer/ItemsContainer";
import "./App.css";

const toDoInit = [];
toDoInit.push({
  id: uuid(),
  text: "Wash dishes",
  diff: 0,
  date: new Date(2023, 2, 20),
});
toDoInit.push({
  id: uuid(),
  text: "Finish to-do list",
  diff: 2,
  date: new Date(2023, 2, 22),
});
toDoInit.push({
  id: uuid(),
  text: "Walk the cats",
  diff: 0,
  date: new Date(2023, 2, 24),
});
toDoInit.push({
  id: uuid(),
  text: "Vacuum the house",
  diff: 1,
  date: new Date(2023, 4, 25),
});

function App() {
  const [toDoList, setToDoList] = useState(toDoInit);

  const formSubmitHandler = function (newToDo) {
    setToDoList([newToDo, ...toDoList]);
  };
  const completeEventHandler = function (completeItem) {
    const index = toDoList.indexOf(completeItem);
    setToDoList((oldList) => [
      ...oldList.slice(0, index),
      ...oldList.slice(index + 1),
    ]);
    console.log("item deleted");
  };
  return (
    <div className="App">
      <img src={logoImg} height="60" />
      <NewItemForm liftState={formSubmitHandler} />
      <ItemsContainer list={toDoList} liftState={completeEventHandler} />
    </div>
  );
}

export default App;
