// action = {
//    type: 'CHANGE_A',
//    payload: новое значение а
//    id: 0
// }

import { REMOVE_ITEM, TOGGLE_COMPLETED } from "../types";
const initialState = {
  todoList: [
    { id: 1, text: "Купить слона", completed: true },
    { id: 2, text: "Научиться летать", completed: false },
    { id: 3, text: "Сделать сальто", completed: true },
  ],
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
  return state;
};
