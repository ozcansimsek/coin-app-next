import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { theme } from "pages/_app";
import React from "react";

interface ChangeProps {
  change: number;
}

const Change = (props: ChangeProps) => {
  const { change } = props;
  if (change) {
    return (
      <Box
        display="flex"
        alignItems="center"
        color={
          change > 0 ? theme.palette.error.main : theme.palette.success.main
        }
      >
        <Typography variant="body2" display="flex" alignItems="center">
          {change > 0 ? <ArrowDropDown /> : <ArrowDropUp />}
        </Typography>

        <Typography variant="body2">
          {(change as number).toFixed(2).replace("-", "") + "%"}
        </Typography>
      </Box>
    );
  } else return null;
};

export default Change;
