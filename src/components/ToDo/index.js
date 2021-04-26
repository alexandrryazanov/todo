import React, { useState, useEffect, useContext } from "react";
import { EmptyState, ToDoWrapper } from "./units";
import Item from "./Item";
import AddItem from "./AddItem";
import { MyContext } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import {
  addItem,
  changeCompleted,
  fetchItems,
  loadItems,
  removeItem,
  toggleCompleted,
} from "../../redux/actions/rootActions";
import Filters from "./Filters";

const ToDo = () => {
  const [colors] = useContext(MyContext);
  const { list, filter, isLoading } = useSelector((state) => ({
    list: state.todoList,
    filter: state.filter,
    isLoading: state.isLoading,
  }));
  const dispatch = useDispatch();

  console.log("isLoading", isLoading);

  useEffect(() => {
    dispatch(loadItems());
  }, []);

  const itemClick = (id) => {
    dispatch(toggleCompleted(id));
  };

  const onAdd = (taskText) => {
    if (taskText.length === 0) return;
    dispatch(addItem(taskText));
  };

  const onDelete = (id) => {
    dispatch(removeItem(id));
  };

  const generatedItems = list
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
        {isLoading ? (
          <CircularProgress className={"loader"} />
        ) : (
          <>
            <Filters {...{ colors }} />
            {list.length > 0 ? (
              generatedItems
            ) : (
              <EmptyState>Пока задач нет</EmptyState>
            )}
            <AddItem onAdd={onAdd} />
          </>
        )}
      </ToDoWrapper>
    </>
  );
};

export default ToDo;
