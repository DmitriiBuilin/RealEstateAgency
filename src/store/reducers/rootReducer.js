import { combineReducers } from "redux";

import currencyReducer from "./currencyReducer";
import languageReducer from "./languageReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers ({
    currency: currencyReducer,
    languge: languageReducer,
    page: pageReducer,
});

export default rootReducer;