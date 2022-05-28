import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../helpers/rainbowSetup";
import { Web3Provider } from "./components/context/web3Context";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Web3Provider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          showRecentTransactions={true}
          coolMode
          chains={chains}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
      </Web3Provider>
    </ChakraProvider>
  );
}

export default MyApp;
