import { TOGGLE_FALSE, TOGGLE_TRUE } from "../const/edit"

const initialState = {
  edit: false,
};
export const editReducerrr = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_TRUE:
      return { ...state, edit: true };

    case TOGGLE_FALSE:
      return { ...state, edit: false };

    default:
      return state;
  }
};