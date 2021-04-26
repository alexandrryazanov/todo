import {
  ADD_ITEM,
  CHANGE_FILTER,
  INIT_ITEMS,
  LOADING,
  REMOVE_ITEM,
  TOGGLE_COMPLETED,
} from "../types";

//ACTION CREATORS
export const toggleCompleted = (id) => ({ type: TOGGLE_COMPLETED, id });
export const removeItem = (id) => ({ type: REMOVE_ITEM, id });
export const addItem = (taskText) => ({ type: ADD_ITEM, taskText });
export const changeFilter = (value) => ({ type: CHANGE_FILTER, value });
export const initItems = (items) => ({ type: INIT_ITEMS, items });
export const setLoading = (value) => ({ type: LOADING, value });

export const loadItems = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          dispatch(initItems(json));
          dispatch(setLoading(false));
        }, 1000);
      });
  };
};
