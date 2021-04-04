import React, { useState } from "react";
import { ToDoWrapper } from "./units";
import Item from "./Item";
import AddItem from "./AddItem";

const toDoListInit = [
  { id: 1, text: "Купить слона", completed: true },
  { id: 2, text: "Научиться летать", completed: false },
  { id: 3, text: "Сделать сальто", completed: true },
];

const ToDo = () => {
  const [list, setList] = useState(toDoListInit);

  const itemClick = (id) => {
    setList(
      list.map((item) => {
        return id !== item.id ? item : { ...item, completed: !item.completed };
      })
    );
  };

  const onAdd = (taskText) => {
    const maxId = Math.max(...list.map((item) => item.id)) + 1;
    setList([...list, { id: maxId, text: taskText, completed: false }]);
  };

  return (
    <>
      <ToDoWrapper>
        <h1>ToDo List</h1>
        {list.map((item) => (
          <Item {...item} key={item.id} onClick={itemClick} />
        ))}
        <AddItem onAdd={onAdd} />
      </ToDoWrapper>
      <button onClick={() => console.log(list)}>Вывести в консоль</button>
    </>
  );
};

export default ToDo;
