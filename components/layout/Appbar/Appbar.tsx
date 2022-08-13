import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LeftSwipeableDrawer from "./LeftSwipeableDrawer";
import Link from "next/link";
import { Link as MuiLink, useTheme } from "@mui/material";
import GlobalCurrencySelect from "./GlobalCurrencySelect";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <LeftSwipeableDrawer
          isDrawerOpen={isDrawerOpen}
          setIsDrawerOpen={setIsDrawerOpen}
        />
        <Toolbar disableGutters>
          <Link href="/" passHref>
            <MuiLink
              underline="none"
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "all .2s ease-in-out",
                },
              }}
            >
              <ShowChartIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              COINLER
            </MuiLink>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link href="/" passHref>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </Link>

              <Link href="/exchanges" passHref>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Exchanges</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <ShowChartIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Link href="/" passHref>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              COINLER
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link href="/" passHref>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
            </Link>

            <Link href="/exchanges" passHref>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Exchanges</Typography>
              </MenuItem>
            </Link>

            <Box sx={{ marginLeft: "auto" }}>
              <GlobalCurrencySelect />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
