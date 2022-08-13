import { MenuItem, Select, SelectProps } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  globalCurrencyCode,
  setGlobalCurrencyCode,
} from "store/slices/globalCurrencyCodeSlice";
import { supportedCurrencies } from "store/slices/supportedCurrenciesSlice";

const GlobalCurrencySelect = (props: SelectProps) => {
  const dispatch = useAppDispatch();
  const selectedCurrency = useAppSelector(globalCurrencyCode);
  const { supportedCurrenciesList } = useAppSelector(supportedCurrencies);

  return (
    <Select
      size="small"
      name="currencySelect"
      onChange={(e) =>
        dispatch(setGlobalCurrencyCode(e.target.value as string))
      }
      value={selectedCurrency}
      {...props}
    >
      {supportedCurrenciesList &&
        supportedCurrenciesList.map((currency: string) => {
          return (
            <MenuItem key={"currency" + currency} value={currency}>
              {currency.toUpperCase()}
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default GlobalCurrencySelect;
