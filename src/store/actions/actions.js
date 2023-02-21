import { AGREEMENTVALUE, CHECK, CLEAR_INPUTS, CURRENCYOBJECT, CURRENCYSELECT, DATABASE, LANGUAGESELECT, OBJECT, PAGEPARAM, PAGESELECT, SEARCHCHECK, SEARCHSELECT, SEARCHTYPING, SEARCH_CLEAR_INPUTS, SELECT, SORTERVALUE, TYPING } from "../types/types";

export const currencySelect = (data) => {
  return { type: CURRENCYSELECT, payload: data }
};

export const currencyObject = (data) => {
  return { type: CURRENCYOBJECT, payload: data }
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

export const userAgreement = (data) => {
  return { type: AGREEMENTVALUE, payload: data }
};

export const typing = (event) => {
  return {
    type: TYPING,
    payload: {[event.target.id]: event.target.value }
  }
}

export const checkBox = (event) => {
  return {
    type: CHECK,
    payload: {[event.target.id]: event.target.checked }
  }
}

export const select = (event) => {
  return {
    type: SELECT,
    payload: {[event.target.id]: event.target.value }
  }
}

export const clearInput = () => {
  return {
    type: CLEAR_INPUTS,
    payload: {}
  }
}

export const searchTyping = (event) => {
  return {
    type: SEARCHTYPING,
    payload: {[event.target.id]: event.target.value }
  }
}

export const searchCheckBox = (event) => {
  return {
    type: SEARCHCHECK,
    payload: {[event.target.id]: event.target.checked }
  }
}

export const searchSelect = (event) => {
  return {
    type: SEARCHSELECT,
    payload: {[event.target.id]: event.target.value }
  }
}

export const searchClearInput = () => {
  return {
    type: SEARCH_CLEAR_INPUTS,
    payload: ""
  }
}