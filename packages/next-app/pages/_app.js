import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { wagmiClient, chains } from "../helpers/rainbowSetup";
import { Web3Provider } from "./components/context/web3Context";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Track from "./components/Track";
import Hero from "./components/Hero";
import Header from "./Header";
import Swaps from "./components/Swaps";
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
        <BrowserRouter>
                
                <Routes>
                    
                    <Route path='/Swaps' element={<Swaps/>} />
                    <Route path='/Track' element={<Track/>} />
                    <Route path='/' element={<Hero/>} />
                    


                </Routes>
            </BrowserRouter>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
      </Web3Provider>
    </ChakraProvider>
  );
}

export default MyApp;
