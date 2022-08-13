import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSupportedCurrencies } from "httpClient/supportedCurrencies";
import { RootState } from "store";
import { Status } from "types/general";

export interface SupportedCurrenciesState {
  status: Status;
  supportedCurrenciesList: string[];
}

const initialState: SupportedCurrenciesState = {
  status: "loading",
  supportedCurrenciesList: [],
};

export const fetchSupportedCurrenciesAsync = createAsyncThunk(
  "supportedCurrencies/fetchCurrenciesList",
  async () => {
    const response = await getSupportedCurrencies();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const supportedCurrenciesSlice = createSlice({
  name: "supportedCurrencies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSupportedCurrenciesAsync.pending,
        (state: SupportedCurrenciesState) => {
          state.status = "loading";
        }
      )
      .addCase(fetchSupportedCurrenciesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.supportedCurrenciesList = action.payload;
      })
      .addCase(fetchSupportedCurrenciesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const supportedCurrencies = (state: RootState) =>
  state.supportedCurrencies;

export default supportedCurrenciesSlice.reducer;
