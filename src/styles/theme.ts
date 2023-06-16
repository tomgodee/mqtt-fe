import { Open_Sans } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

export const openSans = Open_Sans({
  subsets: ["latin"],
});

const theme = {
  colors: {
    brand: {
      100: "#2a69ac",
      900: "#1a365d",
    },
  },
  fonts: {
    body: openSans.style.fontFamily,
    heading: openSans.style.fontFamily,
  },
};

export default extendTheme(theme);
