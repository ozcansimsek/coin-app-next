export const formattedMarketCap = (
  selectedCurrency: string,
  marketCap: number
) => {
  if (marketCap)
    // prevent currency code errors
    try {
      return new Intl.NumberFormat(navigator.language || "en-US", {
        style: "currency",
        currency: selectedCurrency,
        maximumFractionDigits: marketCap < 0 ? 5 : 0,
      }).format(marketCap);
    } catch (err) {
      return (
        selectedCurrency.toUpperCase() +
        " " +
        new Intl.NumberFormat(navigator.language || "en-US", {
          maximumFractionDigits: marketCap > 1 ? 2 : 10,
        }).format(marketCap)
      );
    }
  else return "?";
};
