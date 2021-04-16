import { REMOVE_ITEM, TOGGLE_COMPLETED } from "../types";

//ACTION CREATORS
export const toggleCompleted = (id) => ({ type: TOGGLE_COMPLETED, id });
export const removeItem = (id) => ({ type: REMOVE_ITEM, id });
