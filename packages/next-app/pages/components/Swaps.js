import React, { useEffect, useState } from "react";
import {
  Heading,
  Menu,
  MenuButton,
  Container,
  Stack,
  Input,
  ChevronDownIcon,
  MenuList,
  MenuItem,
  centerContent,
  Center,
  Select,
  Text,
  Flex,
  Link,
  Code,
  Box,
  Button,
} from "@chakra-ui/react";
import Objects from "./Objects";
import { chainlist } from "./chainlist";
import ConnectButton from "./ConnectButton";
import Header from "../Header";
import { useWeb3 } from "./context/web3Context";

function Swaps() {
    const web3Context = useWeb3()



  const [amount, setAmount] = useState(null);
  const [totoken, setToToken] = useState("Select Token");
  return (
    <>
      <Header />
      <Flex
        bgGradient="linear(blue.100 0%, gray.100 25%, gray.100 50%)"
        w="100%"
        h={"100%"}
      >
        <Flex padding={"10px"}></Flex>
        <Container maxW="2xl" centerContent>
          <Flex>
            <Box
              borderRadius={"40px"}
              blur={"6xl"}
              padding={"30px"}
              flexDirection={"row"}
              alignSelf={"center"}
              width={"55%"}
              bgColor={"whiteAlpha.400"}
              mt={"8vh"}
              ml={"400px"}
              height={"95%"}
              boxShadow={"2xl"}
            >
              <Flex flexDirection={"row"} >
                <Text
                  bgGradient="linear(to-l, #009ffd, #2a2a72)"
                  bgClip="text"
                  fontSize="3xl"
                  fontWeight="extrabold"
                >
                  SWAP
                </Text>
              </Flex>
              <Flex
              >
                <Box
                  flex
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  ml={"5px"}
                  width={"60vw"}
                  padding={"40px"}
                  mt={"70px"}
                  borderRadius={"38px"}
                  bgColor={"white"}
                 
                >
                  <Flex>
                    <Flex flexDirection={"column"}>
                      {/* <label>Select Token</label> */}
                      <Flex>
                        <Objects />
                      </Flex>
                    </Flex>
                    <Box>
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
                        ml={"30%"}
                        borderRadius={"22px"}
                      >
                        <option value="option1"> ETH </option>
                        <option value="option2"> MATIC </option>
                        <option value="option3"> BNB </option>
                      </Select>
                    </Box>
                  </Flex>
                  <Box>
                    <Text ml={"6%"} mt={"10%"} mb={"5%"}>
                      Balance:
                    </Text>
                  </Box>
                  <Box>
                    <Stack spacing={3}>
                      <Input
                        placeholder="$0.0"
                        onChange={(e) => setAmount(e.target.value)}
                        borderColor={"gray"}
                        borderWidth={"3px"}
                        fontWeight={"bold"}
                        size="lg"
                      />
                      <Text>{amount}</Text>
                    </Stack>
                  </Box>
                </Box>
              </Flex>
              <Flex>
                <Box
                  flex
                  justifyContent={"space-between"}
                  flexWrap={"wrap"}
                  ml={"5px"}
                  width={"60vw"}
                  padding={"40px"}
                  mt={"70px"}
                  borderRadius={"38px"}
                  bgColor={"white"}
                  
                >
                  <Flex>
                    <Flex flexDirection={"column"}>
                      {/* <label>Select Token</label> */}
                      <Flex>
                        <Objects />
                      </Flex>
                    </Flex>
                    <Box>
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
                        ml={"30%"}
                        borderRadius={"22px"}
                      >
                        <option value="option1"> ETH </option>
                        <option value="option2"> MATIC </option>
                        <option value="option3"> BNB </option>
                      </Select>
                    </Box>
                  </Flex>
                  <Box>
                    <Text ml={"6%"} mt={"10%"} mb={"5%"}>
                      Balance:
                    </Text>
                  </Box>
                  <Box>
                    <Stack spacing={3}>
                      <Input
                        placeholder="$0.0"
                        readOnly
                        borderColor={"gray"}
                        borderWidth={"3px"}
                        fontWeight={"bold"}
                        size="lg"
                      />
                    </Stack>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
}
export default Swaps;
