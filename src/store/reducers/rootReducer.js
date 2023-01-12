import { combineReducers } from "redux";

import currencyReducer from "./currencyReducer";
import languageReducer from "./languageReducer";
import pageParamReducer from "./pageParamReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers ({
    currency: currencyReducer,
    languge: languageReducer,
    page: pageReducer,
    pageParam: pageParamReducer,
});

export default rootReducer;