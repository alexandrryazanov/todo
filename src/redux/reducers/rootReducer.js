// action = {
//    type: 'CHANGE_A',
//    payload: новое значение а
//    id: 0
// }

import {
  ADD_ITEM,
  CHANGE_FILTER,
  INIT_ITEMS,
  REMOVE_ITEM,
  TOGGLE_COMPLETED,
} from "../types";
const initialState = {
  todoList: [
    { id: 1, text: "Купить слона", completed: true },
    { id: 2, text: "Научиться летать", completed: false },
    { id: 3, text: "Сделать сальто", completed: true },
  ],
  filter: "all",
};

export const rootReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_COMPLETED)
    return {
      ...state,
      todoList: state.todoList.map((item) => {
        return action.id !== item.id
          ? item
          : { ...item, completed: !item.completed };
      }),
    };
  if (action.type === REMOVE_ITEM)
    return {
      ...state,
      todoList: state.todoList.filter((item) => item.id !== action.id),
    };
  if (action.type === ADD_ITEM) {
    const newId = Math.max(...state.todoList.map((item) => item.id), 0) + 1;
    return {
      ...state,
      todoList: [
        ...state.todoList,
        { id: newId, text: action.taskText, completed: false },
      ],
    };
  }

  if (action.type === CHANGE_FILTER) {
    return {
      ...state,
      filter: action.value,
    };
  }

  if (action.type === INIT_ITEMS) {
    return { ...state, todoList: action.items };
  }

  return state;
};
