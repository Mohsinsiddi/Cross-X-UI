import React, { useState } from 'react';
import { Heading,Menu,MenuButton,Select, Container,ChevronDownIcon,MenuList,MenuItem,centerContent,Center, Text, Flex, Link, Code, Box, Button } from "@chakra-ui/react";

  import { chainlist } from './chainlist';

function Objects () {
    const[totoken,setToToken]=useState('Select Token');
    const[selectedOption,setSelectedOption]=useState('');
    return ( 
      
        <Select borderColor={"white"} color={"black"} _hover={"none"}
        fontSize={"20px"}
        fontWeight={"bold"}
        width={"20%"}
       alignItems={"flex-start"}
       alignContent={"flex-start"}

        borderRadius={"22px"}
                        value={selectedOption}
                        onChange={e => setSelectedOption(e.target.value)}
                        className=''>
                        {Object.keys(chainlist).map((key) => (
                            <option value={chainlist[key].chainid} >{chainlist[key].name}</option>
                        ))}
                        </Select>
      
    )
    
   
}
export default Objects;