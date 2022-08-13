import axios from "axios";

export const getSupportedCurrencies = () =>
  axios.get(`/simple/supported_vs_currencies`);
