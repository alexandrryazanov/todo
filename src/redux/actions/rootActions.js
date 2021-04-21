import {
  ADD_ITEM,
  CHANGE_FILTER,
  INIT_ITEMS,
  REMOVE_ITEM,
  TOGGLE_COMPLETED,
} from "../types";

//ACTION CREATORS
export const toggleCompleted = (id) => ({ type: TOGGLE_COMPLETED, id });
export const removeItem = (id) => ({ type: REMOVE_ITEM, id });
export const addItem = (taskText) => ({ type: ADD_ITEM, taskText });
export const changeFilter = (value) => ({ type: CHANGE_FILTER, value });
export const initItems = (items) => ({ type: INIT_ITEMS, items });
export const fetchItems = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((items) => {
        const preparedItems = items.map((item) => ({
          id: item.id,
          text: item.title,
          completed: item.completed,
        }));
        dispatch(initItems(preparedItems));
      });
  };
};
