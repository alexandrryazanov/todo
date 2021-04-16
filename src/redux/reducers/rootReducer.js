// action = {
//    type: 'CHANGE_A',
//    payload: новое значение а
// }

export const rootReducer = (state = { a: 0, b: 1 }, action) => {
  if (action.type === "CHANGE_A") return { ...state, a: action.payload };
  return state;
};
