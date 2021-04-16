import React, { useState, useEffect, useContext } from "react";
import { EmptyState, ToDoWrapper } from "./units";
import Item from "./Item";
import AddItem from "./AddItem";
import { MyContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCompleted,
  removeItem,
  toggleCompleted,
} from "../../redux/actions/rootActions";

const toDoListInit = [
  { id: 1, text: "Купить слона", completed: true },
  { id: 2, text: "Научиться летать", completed: false },
  { id: 3, text: "Сделать сальто", completed: true },
];

const ToDo = () => {
  const colors = useContext(MyContext);
  const list = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const [_, setList] = useState(toDoListInit);
  const [filter, setFilter] = useState("all");

  const itemClick = (id) => {
    dispatch(toggleCompleted(id));
  };

  const onAdd = (taskText) => {
    if (taskText.length === 0) return;
    const maxId = Math.max(...list.map((item) => item.id)) + 1;
    setList([...list, { id: maxId, text: taskText, completed: false }]);
  };

  const onDelete = (id) => {
    dispatch(removeItem(id));
  };

  const generateItems = list
    .filter((item) => {
      if (filter === "completed") return item.completed;
      if (filter === "uncompleted") return !item.completed;
      return item;
    })
    .map((item) => (
      <Item {...item} key={item.id} onDelete={onDelete} onClick={itemClick} />
    ));

  return (
    <>
      <ToDoWrapper>
        <h1>ToDo List</h1>
        <div>
          Фильтр:&nbsp;
          <button
            onClick={() => setFilter("uncompleted")}
            style={{ color: "black" }}
          >
            X
          </button>
          <button
            onClick={() => setFilter("completed")}
            style={{ color: "black" }}
          >
            V
          </button>
          <button
            onClick={() => setFilter("all")}
            style={{ color: colors.primary }}
          >
            Все
          </button>
        </div>
        {list.length > 0 ? (
          generateItems
        ) : (
          <EmptyState>Пока задач нет</EmptyState>
        )}
        <AddItem onAdd={onAdd} />
      </ToDoWrapper>
    </>
  );
};

export default ToDo;
