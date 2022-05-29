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

export default function Home() {
  const { isConnected } = useWeb3();
 
  useEffect(() => {
  }, []);
  return (
    <>
     
      {/* <Hero />  */}
      {/* <Hero/> */}
      <Swaps/>
      {/* <Track/>
       */}
      {isConnected && <Greeter />}
      {/* <Footer /> */}
    </>
  );
}
