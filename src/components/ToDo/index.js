import React from "react";
import { ToDoWrapper } from "./units";
import Item from "./Item";
import AddItem from "./AddItem";

const toDoListInit = [
  { id: 1, text: "dfsdf", completed: true },
  { id: 2, text: "dasd", completed: false },
  { id: 3, text: "dfqw3sdf", completed: true },
];

const ToDo = () => {
  return (
    <ToDoWrapper>
      <h1>ToDo List</h1>
      {toDoListInit.map(({ id, text, completed }) => (
        <Item {...{ key: id, id, text, completed }} />
      ))}
      <AddItem />
    </ToDoWrapper>
  );
};

export default ToDo;
