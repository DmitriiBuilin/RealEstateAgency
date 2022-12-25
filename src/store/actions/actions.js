import { CURRENCYSELECT, LANGUAGESELECT } from "../types/types";

export const currencySelect = (data) => {
    return { type: CURRENCYSELECT, payload: data }
  };

  export const languageSelect = (data) => {
    return { type: LANGUAGESELECT, payload: data }
  };