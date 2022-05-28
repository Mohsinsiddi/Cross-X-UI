import Header from "./Header";
import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { useConnect } from "wagmi";
import Footer from "./components/Footer";
import Greeter from "./components/Greeter";
import { useToast } from "@chakra-ui/react";
import Swaps from "./components/Swaps";
import Track from "./components/Track";
import { useWeb3 } from "./components/context/web3Context";
import { getChains } from "./components/TransactionHistory";
import { Transaction } from "./components/Transaction";

export default function Home() {
  const { isConnected } = useWeb3();
  const toast = useToast();

  

  useEffect(() => {
    toast({
      title: "Network Detail",
      description: "use Polygon Mumbai for testing",
      status: "info",
      duration: 6000,
      isClosable: false,
      position: "top",
    });
  }, [toast]);
  return (
    <>
     
      {/* <Hero />  */}
      {/* <Hero/> */}
      {/* <Swaps/> */}
      {/* <Track/> */}
      {/* <Track/> */}
      <Track/>
      {isConnected && <Greeter />}
      {/* <Footer /> */}
    </>
  );
}
