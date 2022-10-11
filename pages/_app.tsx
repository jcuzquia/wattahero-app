import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { darkTheme } from "../themes";
import createEmotionCache from "../util/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface AppPropsWithLayout extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: NextPage<AppPropsWithLayout> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {<Component {...pageProps} />}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
