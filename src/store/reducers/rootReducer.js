import { combineReducers } from "redux";

import currencyReducer from "./currencyReducer";
import languageReducer from "./languageReducer";

const rootReducer = combineReducers ({
    currency: currencyReducer,
    languge: languageReducer,
});

export default rootReducer;