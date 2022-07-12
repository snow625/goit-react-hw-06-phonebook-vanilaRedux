import { ADD_PHONE, REMOVE_PHONE, CHANGE_FILTER } from "./type";
const initialState = {
  items: [],
  filter: "",
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PHONE:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case REMOVE_PHONE:
      return {
        ...state,
        items: [...state.items.filter((el) => el.id !== payload)],
      };
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};
