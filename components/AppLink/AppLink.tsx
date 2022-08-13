import { Link as MuiLink, LinkProps, styled, Theme } from "@mui/material";
import React from "react";

const StyledLink = styled(MuiLink)(({ theme }: { theme: Theme }) => ({
  fontWeight: "bold",
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

const AppLink = (props: LinkProps) => {
  const { children, ...rest } = props;
  return <StyledLink {...rest}>{children}</StyledLink>;
};

export default AppLink;
