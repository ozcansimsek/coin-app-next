import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { fetchSupportedCurrenciesAsync } from "store/slices/supportedCurrenciesSlice";
import Appbar from "../Appbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSupportedCurrenciesAsync());
  }, [dispatch]);

  return (
    <>
      <header>
        <Appbar />
      </header>
      <main>
        <Container maxWidth="xl" sx={{ pt: 4 }}>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
