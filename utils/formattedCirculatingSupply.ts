export const formattedCirculatingSupply = (
  selectedCurrency: string,
  circulatingSupply: number,
  symbol: string
) => {
  return (
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(
      circulatingSupply
    ) +
    " " +
    symbol.toUpperCase()
  );
};
