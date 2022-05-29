import React, { useEffect, useState } from 'react'
import {
  Heading,
  Container,
  Button,
  Text,
  Flex,
  Link,
  Input,
  Code,
  Select,
  option,
  Box,
} from '@chakra-ui/react'
import { getChains } from './TransactionHistory'
import axios from 'axios'

export const Transaction = (props) =>  {
    const [chains, setChains] = useState([])
    const [selectedOption, setSelectedOption] = useState("mainnet");
    const [transactionHash, setTransactionHash] = useState("")
    const [methodSig,setMethodSig] = useState(null)
    const [argArray,setArgArray] = useState(null)
    const [parentArray,setParentArray] = useState(null)


    const getTransactionDetails = async () => {

        if(transactionHash !== ""){
            const data =(await axios.get(`http://13.126.247.17:3003/?hash=${transactionHash}&mode=${selectedOption}`)).data?.data;
            
            setMethodSig(data.methodSignature)
            setArgArray(data.argumentsArray)
            setParentArray(data.parametersArray)

            console.log(data.parametersArray)
        }
    }
  


    

    return (
        
    <> 
    <Flex flexDirection={"row"} width={"100%"}  mt={'100px'} >
    <Box  ml={"50px"}  mb={"40px"} pl={"5px"}  alignItems={"end"} alignContent={"end"} > 
    
    {/* <Select
                        placeholder="Select a Token"
                        borderColor={"gray"}
                        color={"black"}
                        _hover={"none"}
                        fontSize={"15px"}
                        fontWeight={"bold"}
                        width={"100%"}
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
    
    
     */}
    </Box>
        <Box  height={"100vh"} width={"100%"} padding={'50px'} >
        <Box   bgColor={"gray.500"} mt={"50px"} ml={"5px"} width={"100%"} height={'150px'} borderRadius={"22px"}> 
        
        <Text textAlign={"center"}  padding={'20px'} fontWeight={"bold"}>
                {" "}

                <Input fontWeight={"bold"} border={"2px"} borderColor={"gray.400"}   value={transactionHash} onChange={(e) => {setTransactionHash(e.target.value)}} placeholder="Transaction hash" _placeholder={{ opacity: 0.9, color: 'white' }} Color={"white" }/>
                <Button
                onClick={() => getTransactionDetails()}
              colorScheme="gray"
              borderRadius={"22px"}
              width={"260px"}
             color={"black"}
             
             
              variant="solid"
             mt={"20px"}
            > Decode Transaction</Button>
             </Text>
            <Box  bgColor={"gray.500"} mt={"50px"} ml={"5px"} width={"100%"} borderRadius={"22px"}  > 
                <Text mt={"10px"}  pt={"20px"} textAlign={'center'}  color={"white"} fontWeight={"bold"}>
                {methodSig !== null ? (<h1><strong>&nbsp;Method Signature: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>{methodSig}</h1>): null}  
                </Text>
                <Text mt={"10px"}  pt={"20px"} textAlign={'center'}  color={"white"} fontWeight={"bold"}>
                {argArray !== null ? (<h1><strong>&nbsp;Argument Array: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>{argArray}</h1>): null}  
                </Text>
                <Text mt={"10px"}  pt={"20px"} textAlign={'center'}  color={"white"} fontWeight={"bold"}>
                { parentArray !== null ? <>{parentArray.map((obj, index) => {
                  return <h1>Param {index}: {obj}</h1>
                })}</>: null }  
                </Text>
                </Box>
               
              
        
       
        </Box>
        </Box> 
        
        
        
        
        
      </Flex>
    </>
  )
}
