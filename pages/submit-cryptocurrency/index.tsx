import { Button } from "@mui/material";
import Head from "next/head";
import {
  buildCoinRequestPath,
  extractCoinRequest,
} from "pages/api/coinRequest";
import { useState } from "react";
import { CoinRequest } from "types/coinRequest";

const SubmitCryptocurrencyPage = (props: {
  coinRequestItems: CoinRequest[] | undefined;
}) => {
  const [coinRequestData, setCoinRequestData] = useState<any>();

  const loadCoinRequestHandler = (id: string) => {
    fetch(`/api/coinRequest/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoinRequestData(data.coinRequest);
      });
  };

  return (
    <>
      <Head>
        <title>Submit Cryptocurrency - COINLER</title>
        <meta name="description" content="Submit new coin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {coinRequestData && <p>{coinRequestData.email}</p>}
      <ul>
        {props.coinRequestItems &&
          props.coinRequestItems.map((item: any) => (
            <li key={item.id}>
              {item.text}{" "}
              <Button onClick={loadCoinRequestHandler.bind(null, item.id)}>
                Show Details
              </Button>
            </li>
          ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const filePath = buildCoinRequestPath();
  const data = extractCoinRequest(filePath);
  return {
    props: {
      coinRequestItems: data,
    },
  };
}

export default SubmitCryptocurrencyPage;
