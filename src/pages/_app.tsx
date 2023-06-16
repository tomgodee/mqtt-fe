import "@/styles/globals.css";

import IndexPage from "@/components/IndexPage";
import { ChakraProvider } from "@chakra-ui/react";

import theme, { openSans } from "../styles/theme";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={openSans.className}>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <IndexPage />
        <Component {...pageProps} />
      </ChakraProvider>
    </main>
  );
}
