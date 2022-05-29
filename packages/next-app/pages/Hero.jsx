import {
  Heading,
  Container,
  Text,
  Flex,
  Link,
  Code,
  Box,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useConnect } from "wagmi";
import Header from "./Header";
import { MyComponent } from "./MyComponent";


function Hero() {
  const { isConnected } = useConnect();
  return (
    <>
      <Header />
      <Flex
        alignItems={"center"}
        
       
        h={"88vh"}
        w={"100vw"}
        bgGradient="linear(blue.100 10%, gray.100 25%, gray.100 20%)"
      >
       
          <Box ml={"50px"} >

            <Text
              bgGradient="linear(to-l, #445E88, #B1C0D8)"
              bgClip="text"
              fontSize="8xl"
              fontWeight="extrabold"
            >
              CROSS
            </Text>
          </Box>
        
        
          <Box p="8" pt="20" pb="100">
          <MyComponent /> 

          </Box>
          
         <Box> 
         
         
         
         <Image src='https://iili.io/XWvnp9.png' alt='' width={"100vw"} height={"77vh"} mt={"60px"} mr={"-30px"}/>
         
         
         </Box>




      </Flex>
    </>
  );
}

export default Hero;
