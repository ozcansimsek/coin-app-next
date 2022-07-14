export const formattedCurrentPrice = (
  selectedCurrency: string,
  currentPrice: number,
  noStyle: boolean = false
) => {
  if (currentPrice) {
    // prevent currency code errors
    try {
      return new Intl.NumberFormat(navigator.language || "en-US", {
        style: noStyle ? undefined : "currency",
        currency: selectedCurrency,
        maximumFractionDigits: currentPrice > 1 ? 2 : 10,
      }).format(currentPrice);
    } catch (error) {
      return (
        selectedCurrency.toUpperCase() +
        " " +
        new Intl.NumberFormat(navigator.language || "en-US", {
          maximumFractionDigits: currentPrice > 1 ? 2 : 10,
        }).format(currentPrice)
      );
    }
  } else return "?";
};
