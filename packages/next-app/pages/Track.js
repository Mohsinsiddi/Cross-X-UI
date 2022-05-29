import {
  Heading,
  Container,
  colorScheme,
  Stack,
  Center,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Image,
  Text,
  Flex,
  Link,
  Code,
  Box,
} from "@chakra-ui/react";
import React from "react";
import History from "./UserHist";
import Navbar from "./components/Navbar";
import Header from "./Header";
import { Transaction } from "./components/Transaction";
import { useWeb3 } from "./components/context/web3Context";

function Track() {
  const web3Context = useWeb3();
  return (
    <>
      <Header />

      <Flex
        bgGradient='linear(gray.400 0%, gray.200 30%, gray.100 50%)'
        w='100%'
        h={'100%'}
        textAlign={'center'}
      >
      <Flex flexDirection={"row"} width={"100%"} >
        
        <Box   height={"100vh"} width={"100%"}> 
        
           <Transaction/> 
            
        </Box>


      </Flex>
      </Flex>
    </>
  );
}
export default Track;
