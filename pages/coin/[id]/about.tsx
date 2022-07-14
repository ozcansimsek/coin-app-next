import type { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { GetStaticPaths } from "next";
import { Coin } from "types/coin";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface CoinDetailProps {
  coinDetail: Coin;
}

const CoinDetail = (props: CoinDetailProps) => {
  const createMarkup = () => {
    return { __html: props.coinDetail.description.en };
  };

  return (
    <>
      <Head>
        <title>About {props.coinDetail.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">{props.coinDetail.name}</Typography>
        <Image
          src={props.coinDetail.image.large}
          alt={props.coinDetail.name + "icon"}
          width={50}
          height={50}
        ></Image>
      </Box>
      <p dangerouslySetInnerHTML={createMarkup()}></p>
    </>
  );
};

export default CoinDetail;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${context.params?.id}`
  );
  const data = await res.json();

  return {
    props: {
      coinDetail: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
  );
  const coins = await res.json();

  const paths = (coins as unknown as Coin[]).map((coin: Coin) => ({
    params: { id: coin.id },
  }));

  return {
    paths,
    fallback: false,
  };
};
