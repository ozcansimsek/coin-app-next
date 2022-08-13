import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";

export interface CurrencyState {
  globalCurrencyCode: string;
}

const initialState: CurrencyState = {
  globalCurrencyCode: "usd",
};

export const globalCurrencySlice = createSlice({
  name: "globalCurrencyCode",
  initialState,
  reducers: {
    setGlobalCurrencyCode: (state, action: PayloadAction<string>) => {
      state.globalCurrencyCode = action.payload;
    },
  },
});

export const { setGlobalCurrencyCode } = globalCurrencySlice.actions;

export const globalCurrencyCode = (state: RootState) =>
  state.globalCurrency.globalCurrencyCode;

export default globalCurrencySlice.reducer;
