import { Heading, Container, Text, Flex, Link, Code, Box } from "@chakra-ui/react";
import React from "react";
import { useConnect } from "wagmi";
import Header from "../Header";

function Hero() {
  const { isConnected } = useConnect();
  return (
    <>
      <Header/>
        <Flex
         
          alignItems={"center"}
          justifyContent={"center"}
          h={"100vh"}
          w={"100vw"}
          
          
          bgGradient='linear(blue.100 10%, gray.100 25%, gray.100 20%)'
        >
        <Flex>
        <Box 
             
        
        
        
        > 
         
        <Text
          bgGradient="linear(to-l, #445E88, #B1C0D8)"
          bgClip="text"
          fontSize="8xl"
          fontWeight="extrabold"
          
        >
          CROSS 
          
    </Text>
    </Box>
    </Flex>
     <Flex > 
     <Box p='8'
     pt='20' 
     pb='100'> 
    <Text
    bgClip="text"
          fontSize={"400"}
          fontWeight="extrabold"
          bgGradient="linear(to-l, #445E88, #B1C0D8)"> 
          

    X
    </Text>
    </Box>
    </Flex>
        </Flex>
      
    </>
  );
}

export default Hero;

