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
import History from "../UserHist";
import Navbar from "./Navbar";

function Track() {
  return (
    <>
      <Navbar/>
      <Flex flexDirection={"column"}>
      <Box width={"50%"} justifyContent={"center"} alignContent={"center"}>
        <Box bgColor={"white"} width={"60%"} borderWidth={"2px"} borderColor={"blue"} borderRadius={"20px"} >
            <Text>Current Address</Text>
        </Box>
      </Box>
      <Box>

      </Box>
    </Flex>
    </>
  );
}
export default Track;
