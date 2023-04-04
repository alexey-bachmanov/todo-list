import React, { useState } from "react";
import SortingOptions from "./SortingOptions";
import ItemsList from "./ItemsList";
import "./ItemsContainer.css";

function ItemsContainer(props) {
  // sorting and filtering function, used everywhere downstream
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

  // state declarations
  const [filter, setFilter] = useState([true, true, true]);
  const [filteredList, setFilteredList] = useState(
    sortAndFilter(props.list, filter)
  );

  // event handlers
  const passStateHandler = function (state) {
    props.liftState(state);
  };
  const filterChangeHandler = function (n) {
    // flip-flop filter state, depends on previous state
    setFilter((oldFilter) => {
      const newFilter = oldFilter;
      newFilter[n] = !newFilter[n];
      return newFilter;
    });
    console.log("filter updated!", filter);
    // BUG BUG BUG
    // enabling this line of code stops the filter from updating?
    // setFilteredList(sortAndFilter(props.list, filter));
  };
  return (
    <div>
      <SortingOptions liftState={filterChangeHandler} />
      <ItemsList list={filteredList} liftState={passStateHandler} />
    </div>
  );
}

export default ItemsContainer;
