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
  // helper functions
  const sortAndFilter = function (list, filter) {
    let sortedAndFilteredList = [];
    // there's probably a better way to do this, but I'm stupid and lazy
    // split out into easy, medium, and hard list
    const easyList = list.filter((li) => li.diff === 0);
    const medmList = list.filter((li) => li.diff === 1);
    const hardList = list.filter((li) => li.diff === 2);
    // sort by date, newest on top
    easyList.sort((a, b) => a.date.getTime() - b.date.getTime());
    medmList.sort((a, b) => a.date.getTime() - b.date.getTime());
    hardList.sort((a, b) => a.date.getTime() - b.date.getTime());
    // conditionally build final list
    if (filter[0]) {
      sortedAndFilteredList = [...sortedAndFilteredList, ...easyList];
    }
    if (filter[1]) {
      sortedAndFilteredList = [...sortedAndFilteredList, ...medmList];
    }
    if (filter[2]) {
      sortedAndFilteredList = [...sortedAndFilteredList, ...hardList];
    }
    return sortedAndFilteredList;
  };
  const flipFilter = function (oldFilter, indexToFlip) {
    const newFilter = oldFilter;
    newFilter[indexToFlip] = !newFilter[indexToFlip];
    return newFilter;
  };

  // state declarations
  const [toDoList, setToDoList] = useState(toDoInit);
  const [filter, setFilter] = useState([true, true, true]);
  const [filteredList, setFilteredList] = useState(
    sortAndFilter(toDoList, filter)
  );

  // event handlers
  const formSubmitHandler = function (newToDo) {
    setToDoList([newToDo, ...toDoList]);
  };

  const completeEventHandler = function (completeItem) {
    const index = toDoList.indexOf(completeItem);
    setToDoList((oldList) => [
      ...oldList.slice(0, index),
      ...oldList.slice(index + 1),
    ]);
  };

  const filterChangeHandler = function (indexToFlip) {
    const newFilter = flipFilter(filter, indexToFlip);
    setFilter(newFilter);
    setFilteredList(sortAndFilter(toDoList, newFilter));
  };

  return (
    <div className="App">
      <img src={logoImg} height="60" />
      <NewItemForm liftState={formSubmitHandler} />
      <ItemsContainer
        list={filteredList}
        liftCompleteEvent={completeEventHandler}
        liftFilterChange={filterChangeHandler}
      />
    </div>
  );
}

export default App;
