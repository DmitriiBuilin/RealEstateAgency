import { CURRENCYSELECT, DATABASE, LANGUAGESELECT, OBJECT, PAGEPARAM, PAGESELECT, SORTERVALUE } from "../types/types";

export const currencySelect = (data) => {
  return { type: CURRENCYSELECT, payload: data }
};

export const languageSelect = (data) => {
  return { type: LANGUAGESELECT, payload: data }
};

export const pageSelect = (data) => {
  return { type: PAGESELECT, payload: data }
};

export const pageParam = (data) => {
  return { type: PAGEPARAM, payload: data }
};

export const objectsDataBase = (data) => {
  return { type: DATABASE, payload: data }
};

export const chosenObject = (data) => {
  return { type: OBJECT, payload: data }
};

export const sorterValue = (data) => {
  return { type: SORTERVALUE, payload: data }
};
