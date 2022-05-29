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

     
      <Flex flexDirection={"row"} width={"100%"}>
        <Box  height={"100vh"} width={"50%"} padding={'55px'} >
        <Box   bgColor={"blue.100"} ml={"5px"} width={"500px"} height={'100px'} borderRadius={"22px"}> 
        <a href="/Hero">Link</a>
        <Text textAlign={"center"} padding={'20px'} fontWeight={"bold"}>
                {" "}
                YOU ARE NOW TRACKING
                <Text mt={"8px"} color={"white"}>
                  {web3Context.walletAddress}
                </Text>
              </Text>
        
        
        </Box>

        <Box mt={'50px'}   bgColor={"blue.100"} ml={"5px"} width={"500px"} height={'600px'} borderRadius={"22px"}> 
        
        
        <Stack
            direction="column"
            spacing={16}
            align="center"
            fontWeight={"bold"}
            mt={'40px'}
            
          >
            <Button
              colorScheme="gray"
              borderRadius={"22px"}
              width={"360px"}
              mt={"120px"}
              variant="solid"
            >
              <Image
                src="https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=022"
                width={"30px"}
                mr={"30px"}
              />{" "}
              &nbsp;{" "}
              <Text fontWeight={"bold"} fontSize={"20px"}>
                {" "}
                Binance {" "}
              </Text>
            </Button>
            <Button
              colorScheme="gray"
              borderRadius={"22px"}
              width={"360px"}
              mt={"30px"}
              variant="solid"
            >
              <Image
                src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022"
                width={"20px"}
                mr={"30px"}
              />{" "}
              &nbsp;{" "}
              <Text fontWeight={"bold"} fontSize={"20px"}>
                {" "}
                Ethereum{" "}
              </Text>
            </Button>
            <Button
              colorScheme="gray"
              borderRadius={"22px"}
              width={"360px"}
              mt={"30px"}
              variant="solid"
            >
              <Image
                src="https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022"
                width={"30px"}
                mr={"30px"}
              />{" "}
              &nbsp;{" "}
              <Text fontWeight={"bold"} fontSize={"20px"}>
                {" "}
                Polygon{" "}
              </Text>
            </Button>
           
          </Stack>
        
        
        </Box>


        </Box>
        <Box   height={"100vh"} width={"50%"}> 
        
           <Transaction/> 
            
        </Box>


      </Flex>
    </>
  );
}
export default Track;
