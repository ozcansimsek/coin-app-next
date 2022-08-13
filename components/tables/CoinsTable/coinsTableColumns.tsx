import { Box, Chip } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Image from "next/image";
import SimpleChart from "components/charts/SimpleChart";
import { formattedMarketCap } from "utils/formattedMarketCap";
import { formattedCirculatingSupply } from "utils/formattedCirculatingSupply";
import { formattedCurrentPrice } from "utils/formattedCurrentPrice";
import Change from "components/Change";
import { Coin } from "types/coin";
import AppLink from "components/AppLink";
import Link from "next/link";

export const coinsTableColumns = (globalCurrency: string): GridColDef[] => [
  {
    field: "market_cap_rank",
    headerName: "#",
    width: 80,
    disableColumnMenu: true,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 200,
    renderCell: (cellProps: GridRenderCellParams<Coin>) => {
      return (
        <Box display="flex" alignItems="center">
          <Image
            src={cellProps.row.image}
            alt={cellProps.row.image + "icon"}
            width={20}
            height={20}
          />
          <Link href={`/coin/${cellProps.row.id}`} passHref>
            <AppLink marginLeft={1}>{cellProps.row.name}</AppLink>
          </Link>

          <Chip
            sx={{ marginLeft: 1, borderRadius: 1 }}
            label={cellProps.row.symbol.toUpperCase()}
            size="small"
          />
        </Box>
      );
    },
  },
  {
    field: "current_price",
    headerName: "Price",
    renderCell: (cellProps) =>
      formattedCurrentPrice(globalCurrency, cellProps.row.current_price),
    align: "right",
    headerAlign: "right",
    width: 150,
  },
  {
    field: "price_change_percentage_1h_in_currency",
    headerName: "1h",
    renderCell: (cellProps) => (
      <Change change={cellProps.row.price_change_percentage_1h_in_currency} />
    ),
    align: "right",
    headerAlign: "right",
    disableColumnMenu: true,
  },
  {
    field: "price_change_percentage_24h",
    headerName: "24h",
    renderCell: (cellProps) => (
      <Change change={cellProps.row.price_change_percentage_24h} />
    ),
    align: "right",
    headerAlign: "right",
    disableColumnMenu: true,
  },
  {
    field: "price_change_percentage_7d_in_currency",
    headerName: "7d",
    renderCell: (cellProps) => (
      <Change change={cellProps.row.price_change_percentage_7d_in_currency} />
    ),
    align: "right",
    headerAlign: "right",
    disableColumnMenu: true,
  },
  {
    field: "market_cap",
    headerName: "Market Cap",
    renderCell: (cellProps) =>
      formattedMarketCap(globalCurrency, cellProps.row.market_cap),
    align: "right",
    headerAlign: "right",
    width: 150,
  },
  {
    field: "circulating_supply",
    headerName: "Circulating Supply",
    renderCell: (cellProps) =>
      formattedCirculatingSupply(
        globalCurrency,
        cellProps.row.circulating_supply,
        cellProps.row.symbol
      ),
    align: "right",
    headerAlign: "right",
    width: 200,
    disableColumnMenu: true,
  },
  {
    field: "sparkline_in_7d",
    headerName: "Last 7 Days",
    width: 220,
    renderCell: (cellProps) => (
      <SimpleChart data={cellProps.row.sparkline_in_7d} />
    ),
    align: "right",
    headerAlign: "right",
    disableColumnMenu: true,
    sortable: false,
  },
];
