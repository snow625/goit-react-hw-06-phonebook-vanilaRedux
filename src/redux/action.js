import { ADD_PHONE, REMOVE_PHONE, CHANGE_FILTER } from "./type";
import { nanoid } from "nanoid";

export const addPhone = (obj) => ({
  type: ADD_PHONE,
  payload: { ...obj, id: nanoid() },
});

export const removePhone = (id) => ({
  type: REMOVE_PHONE,
  payload: id,
});

export const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  payload: value,
});
