import React, { useState } from 'react';
import { Heading,Menu,MenuButton, Container,ChevronDownIcon,MenuList,MenuItem,centerContent,Center, Select,Text, Flex, Link, Code, Box, Button } from "@chakra-ui/react";
import Objects from './Objects';
  import { chainlist } from './chainlist';

function Swaps () {
  
  const[totoken,setToToken]=useState('Select Token');
    return(
        <>

     <Flex bgGradient='linear(blue.100 0%, gray.100 25%, gray.100 50%)' w='100%' h={"100vh"}>
      <Container maxW='2xl'  centerContent> 
      
      
      
      <Flex  >
<Box borderRadius={"40px"} blur={"6xl"} padding={"40px"} flexDirection={"row"} alignSelf={"center"} width={"85%"} bgColor={"whiteAlpha.400"} mt={"8vh"} ml={"90px"} height={"95%"} boxShadow={"2xl"}>
        <Flex flexDirection={"row"} > 
        <Text
            bgGradient='linear(to-l, #009ffd, #2a2a72)'
            bgClip='text'
            fontSize='3xl'
            fontWeight='extrabold'
            
           
            
          >
          SWAP 
          </Text>
         
          </Flex>
           <Flex  > 
          
           <Box flex  flexWrap={'wrap'} ml={"5px"} width={"60vw"} padding={"50px"} 
            mt={"100px"} borderRadius={"38px"} bgColor={"blue.100"}> 
            
            
           

<Flex flexDirection={"column"} > 
                        {/* <label>Select Token</label> */}
                       <Flex> 

                               <Objects/>
                               
                                </Flex>
                   
                            </Flex>
                            <Box > 
                            
                            <Select placeholder='Select a Token' 
                            borderColor={"white"} color={"black"} _hover={"none"}
        fontSize={"20px"}
        fontWeight={"bold"}
        width={"20%"}
       alignItems={"flex-start"}
       alignContent={"flex-start"}
       ml={"80%"}
        borderRadius={"22px"}
       
                            
                            
                            
                            >
  <option value='option1'> ETH </option>
  <option value='option2'> MATIC </option>
  <option value='option3'> BNB </option>
</Select>
                            
                            
                            </Box>
                            <Box  > 

            <Text ml={"80%"} 
             > 
            Balance:
            
            </Text>
            </Box>
            
            
            </Box>
           
           </Flex>
    <Flex > 
          
      <Box flex  flexWrap={'wrap'} ml={"5px"} width={"60vw"} padding={"50px"} 
           mt={"100px"}  borderRadius={"38px"} bgColor={"blue.100"} > 
            
            
            
            <Flex  > 
                  <Objects/>
            </Flex>
            <Box> 
                            
                            <Select placeholder='Select a Token' 
                            borderColor={"white"} color={"black"} _hover={"none"}
        fontSize={"20px"}
        fontWeight={"bold"}
        width={"20%"}
       alignItems={"flex-start"}
       alignContent={"flex-start"}
       ml={"80%"}
        borderRadius={"22px"}
                            
                            
                            
                            >
  <option value='option1'> ETH </option>
  <option value='option2'> MATIC </option>
  <option value='option3'> BNB </option>
</Select>
                            
                            
                            </Box>
            <Box  > 
            <Text ml={"80%"} 
             > 
            Balance:
            
            </Text>
            </Box>
            
            
      </Box>
          
    </Flex>
 </Box>
 </Flex>
          
      
      
      
      
      
      
      
      </Container>
    </Flex>
     



        </>
    )
       
    };
    export default Swaps;                     
                       
                   