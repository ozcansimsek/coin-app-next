import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  CircularProgress,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import Layout from "components/layout/AppLayout";
import { Router } from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import axios from "axios";
import { persistStore } from "redux-persist";
import { store } from "store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: { paper: "#181818", default: "#202020" },
  },
});

// Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

axios.defaults.baseURL = "https://api.coingecko.com/api/v3";
let persistor = persistStore(store);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
