import { Box, LinearProgress, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import Link from "next/link";
import AppLink from "components/AppLink";

export const exchangesTableColumns: GridColDef[] = [
  { field: "trust_score_rank", headerName: "#", width: 80 },
  {
    field: "name",
    headerName: "Name",
    flex: 5,
    renderCell: (cellProps) => {
      return (
        <Box display="flex" alignItems="center">
          <Image
            src={cellProps.row.image}
            alt={cellProps.row.image + "icon"}
            width={20}
            height={20}
          />
          <Link href={`/exchange/${cellProps.row.id}`} passHref>
            <AppLink marginLeft={1}>{cellProps.row.name}</AppLink>
          </Link>
        </Box>
      );
    },
  },
  {
    field: "trust_score",
    headerName: "Trust Score",
    width: 150,
    renderCell: (cellProps) => (
      <Box width="100%" display="flex" alignItems="center">
        <Box width="75%">
          <LinearProgress
            sx={{ height: 10, borderRadius: 2 }}
            color={
              cellProps.row.trust_score < 4
                ? "error"
                : cellProps.row.trust_score < 7
                ? "warning"
                : "success"
            }
            variant="determinate"
            value={cellProps.row.trust_score * 10}
          />
        </Box>
        <Box width="25%" pl={1}>
          <Typography variant="body2">{cellProps.row.trust_score}</Typography>
        </Box>
      </Box>
    ),
    align: "right",
    headerAlign: "right",
  },
  {
    field: "trade_volume_24h_btc",
    headerName: "Volume 24h",
    renderCell: (cellProps) =>
      cellProps.row.trade_volume_24h_btc.toFixed(2) + " BTC",
    align: "right",
    headerAlign: "right",
    flex: 2,
  },
];
