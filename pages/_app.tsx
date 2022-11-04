import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css"
import PlayerLayout from "../components/playerLayout";


const theme = extendTheme({
  colors: {
    gray: {
      100: "#f5f5f5",
      200: "#000000",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxshadow: "none",
          },
        },
      },
    },
  },
});


const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
       </PlayerLayout>
    </ChakraProvider>
  );
};

export default MyApp;
