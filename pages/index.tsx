import type { NextPage } from "next";
import Head from "next/head";
import CoinsTable from "../components/tables/CoinsTable";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crytocurrency Explorer - COINLER</title>
        <meta
          name="description"
          content="Latest cryptocurrency prices, market data and capitalization"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CoinsTable />
    </>
  );
};

export default Home;
