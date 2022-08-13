import supportedCurrenciesReducer from "./slices/supportedCurrenciesSlice";
import globalCurrencyReducer from "./slices/globalCurrencyCodeSlice";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  supportedCurrencies: supportedCurrenciesReducer,
  globalCurrency: globalCurrencyReducer,
});
