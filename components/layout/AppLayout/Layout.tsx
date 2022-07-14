import { Container } from "@mui/material";
import React from "react";
import Appbar from "../Appbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Appbar />
      <main>
        <Container maxWidth="xl" sx={{ pt: 4 }}>
          {children}
        </Container>
      </main>
    </>
  );
};

export default Layout;
