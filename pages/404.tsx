import { Link as MuiLink, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const NotFound: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not found :/ - COINLER</title>
        <meta
          name="description"
          content="Latest cryptocurrency prices, market data and capitalization"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h5">Page not found.</Typography>
      <Link href={"/"} passHref>
        <MuiLink>Return to Home</MuiLink>
      </Link>
    </>
  );
};

export default NotFound;
