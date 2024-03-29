import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};
export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
