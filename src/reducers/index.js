import { combineReducers } from "redux";
import { GlobalCountryReducer } from "./GlobalCountry";
import { chooseCountryReducer } from "./chooseCountry";

export const reducers = combineReducers({
  countrys: GlobalCountryReducer,
  country: chooseCountryReducer,
});
