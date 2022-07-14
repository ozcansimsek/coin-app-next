import {
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import {
  gridPageCountSelector,
  gridPageSelector,
  gridRowCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import React, { ReactNode, useState } from "react";

const CustomPagination = () => {
  const perPageOptions: string[] = ["25", "50", "100"];
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const totalRows = useGridSelector(apiRef, gridRowCountSelector);

  const [perPage, setPerPage] = useState<string>("50");

  const handleChange = (event: SelectChangeEvent) => {
    setPerPage(event.target.value);
    apiRef.current.setPageSize(Number(event.target.value));
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        p: 2,
      }}
    >
      <Grid item>
        <Typography variant="body2">
          Showing{" "}
          {page * Number(perPage) + 1 + " - " + (page + 1) * Number(perPage)}{" "}
          out of {totalRows}
        </Typography>
      </Grid>
      <Grid mx="auto">
        <Pagination
          size="medium"
          color="primary"
          boundaryCount={3}
          count={pageCount}
          page={page + 1}
          onChange={(_event, value) => apiRef.current.setPage(value - 1)}
          sx={{ marginRight: "auto" }}
        />
      </Grid>
      <Grid display="flex" alignItems="center">
        <InputLabel htmlFor="per-page-select" sx={{ mr: 2 }}>
          Rows
        </InputLabel>
        <Select
          size="small"
          id="per-page-select"
          value={perPage}
          onChange={handleChange}
          label="Rows"
        >
          {perPageOptions.map((value: string): ReactNode => {
            return (
              <MenuItem key={"option" + value} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
    </Grid>
  );
};

export default CustomPagination;
