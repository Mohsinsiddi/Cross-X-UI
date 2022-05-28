import React, { useEffect,useState } from "react"
import { Heading, Container,Button, Text, Flex, Link,Input, Code,Select,option, Box } from "@chakra-ui/react";
import { getChains } from "./TransactionHistory";
import axios from 'axios'

export const Transaction = (props) =>  {
    const [chains, setChains] = useState([])
    const [selectedOption, setSelectedOption] = useState("mainnet");
    const [transactionHash, setTransactionHash] = useState("")

    const getTransactionDetails = async () => {
        if(transactionHash !== ""){
            const data = await axios.get(`http://13.126.247.17:3003/?hash=${transactionHash}&mode=${selectedOption}`)
        
            console.log(data)
        }
    }

    

    return (
        
    <> 
    <Flex flexDirection={"row"} width={"100%"}  mt={'100px'} ml={"150px"}>
    <Box > 
    
    <Select
                        placeholder="Select a Token"
                        borderColor={"gray"}
                        color={"black"}
                        _hover={"none"}
                        fontSize={"15px"}
                        fontWeight={"bold"}
                        width={"100%"}
                        alignItems={"flex-start"}
                        alignContent={"flex-start"}
                        mb={"40px"}
                        
                        borderRadius={"22px"}
                        value={selectedOption} onChange={
                                (e) => {
                                    setSelectedOption(e.target.value)
                                    
                                }

                        }
                      >
                        <option value="mainnet"> Mainnet  </option>
                        <option value="testnet"> Testnet </option>
                        
                      </Select>
    
    
    
    </Box>
        <Box  height={"100vh"} width={"50%"} padding={'50px'} >
        <Box   bgColor={"blue.100"} mt={"50px"} ml={"5px"} width={"500px"} height={'150px'} borderRadius={"22px"}> 
        
        <Text textAlign={"center"}  padding={'20px'} fontWeight={"bold"}>
                {" "}
                <Input   borderColor={"gray.100"} textColor={"black"}  value={transactionHash} onChange={(e) => {setTransactionHash(e.target.value)}} placeholder="Transaction hash" Color={"black" }/>
                <Button
                onClick={() => getTransactionDetails()}
              colorScheme="blue"
              borderRadius={"22px"}
              width={"260px"}
             
             
              variant="solid"
             mt={"20px"}
            > Decode Transaction</Button>
                <Text mt={"8px"} color={"white"}>
                        
                </Text>
              </Text>
        
        
        </Box>
        </Box>
</Flex>       
    
     
    
    
    
    
    
    
    
    
    
    </>
    
    
    )
    
    };