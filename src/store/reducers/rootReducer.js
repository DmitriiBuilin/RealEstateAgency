import { combineReducers } from "redux";

import currencyReducer from "./currencyReducer";
import dataBaseReducer from "./dataBaseReduser";
import languageReducer from "./languageReducer";
import pageParamReducer from "./pageParamReducer";
import pageReducer from "./pageReducer";

const rootReducer = combineReducers ({
    currency: currencyReducer,
    languge: languageReducer,
    page: pageReducer,
    pageParam: pageParamReducer,
    fullDataBase: dataBaseReducer,
});

export default rootReducer;