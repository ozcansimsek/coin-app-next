import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CurrencyExchange, House } from "@mui/icons-material";
import Link from "next/link";

const LeftSwipeableDrawer = ({
  isDrawerOpen,
  setIsDrawerOpen,
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: React.SetStateAction<boolean>) => void;
}) => {
  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
          onKeyDown={() => setIsDrawerOpen(false)}
        >
          <List>
            <Link href="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <House />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link href="/submit-cryptocurrency/form">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CurrencyExchange />
                  </ListItemIcon>
                  <ListItemText primary={"Exchanges"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default LeftSwipeableDrawer;
