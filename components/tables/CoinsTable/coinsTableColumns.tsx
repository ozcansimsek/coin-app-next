import { Box, Chip } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Link as MuiLink } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SimpleChart from "components/charts/SimpleChart";
import { formattedMarketCap } from "utils/formattedMarketCap";
import { formattedCirculatingSupply } from "utils/formattedCirculatingSupply";
import { formattedCurrentPrice } from "utils/formattedCurrentPrice";
import Change from "components/shared/Change";
import { Coin } from "types/coin";

export const coinsTableColumns: GridColDef[] = [
  { field: "market_cap_rank", headerName: "#", width: 80 },
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
            <MuiLink
              variant="body2"
              marginLeft={1}
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              {cellProps.row.name}
            </MuiLink>
          </Link>
          <Chip
            sx={{ marginLeft: 1 }}
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
      formattedCurrentPrice("USD", cellProps.row.current_price),
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
  },
  {
    field: "price_change_percentage_24h",
    headerName: "24h",
    renderCell: (cellProps) => (
      <Change change={cellProps.row.price_change_percentage_24h} />
    ),
    align: "right",
    headerAlign: "right",
  },
  {
    field: "price_change_percentage_7d_in_currency",
    headerName: "7d",
    renderCell: (cellProps) => (
      <Change change={cellProps.row.price_change_percentage_7d_in_currency} />
    ),
    align: "right",
    headerAlign: "right",
  },
  {
    field: "market_cap",
    headerName: "Market Cap",
    renderCell: (cellProps) =>
      formattedMarketCap("USD", cellProps.row.market_cap),
    align: "right",
    headerAlign: "right",
    width: 150,
  },
  {
    field: "circulating_supply",
    headerName: "Circulating Supply",
    renderCell: (cellProps) =>
      formattedCirculatingSupply(
        "USD",
        cellProps.row.circulating_supply,
        cellProps.row.symbol
      ),
    align: "right",
    headerAlign: "right",
    width: 200,
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
