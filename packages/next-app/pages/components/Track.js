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

function Track() {
  return (
    <>
      <Flex>
        <Stack direction={["row"]} spacing="24px">
          <Text
            bgGradient="linear(to-l, #445E88, #B1C0D8)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            pl={"10"}
            pt={"8"}
          >
            CROSS
          </Text>
          <Text
            bgGradient="linear(to-r, #445E86, #B1C0D8)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
            pl={"6"}
            pt={"8"}
          >
            {" "}
            X{" "}
          </Text>
        </Stack>
        <Flex ml={"60px"}>
          <Box
            ml={"450px "}
            bgColor={"blue.200"}
            width={"60vw"}
            padding={"20px"}
            borderRadius={"22px"}
          >
            <InputGroup>
              <InputLeftElement bgcolor="white" />

              <Input
                placeholder="Search for your address"
                borderRadius={"22px"}
                border={"3px solid"}
                fontSize="xl"
                fontWeight="bold"
                align={"center"}
                justifyContent={"center"}
                ml={"120px"}
                width={"50vw"}
                bgColor={"white"}
                color={"blackAlpha.100"}
                padding={"20px"}
              />
            </InputGroup>
          </Box>
        </Flex>
      </Flex>

      <Flex color="white">
        <Box
          flex
          flexWrap={"wrap"}
          ml={"100px"}
          width={"500px"}
          padding={"50px"}
          mt={"100px"}
          borderRadius={"22px"}
          bgColor={"blue.200"}
        >
          <Text
            bgGradient="linear(to-l, #009ffd, #2a2a72)"
            bgClip="text"
            fontSize="xl"
            fontWeight="extrabold"
          >
            <Center color="white">You are now tracking</Center>
            <Center>0x000000000000000000 </Center>
          </Text>
        </Box>
      </Flex>
      <Text color={"black"}></Text>

      <Flex>
        <Flex ml={"100px"} flexDirection={"row"}>
          <Box
            bgColor={"blue.200"}
            width={"500px"}
            padding={"100px"}
            borderRadius={"20px"}
            mt={"100px"}
            height={"60%"}
          >
            <Stack
              direction={"column"}
              spacing={4}
              align="center"
              colorScheme="white"
            >
              <Button
                colorScheme="blue"
                bgcolor={"white"}
                paddingTop={"0px"}
                ml={"10px"}
                width={"260px"}
                mt={"20px"}
                variant="solid"
                borderRadius={"20px"}
              >
                <Image
                  src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022"
                  width={"20px"}
                />{" "}
                &nbsp; BitCoin
              </Button>
              <Button
                colorScheme="blue"
                paddingTop={"0px"}
                ml={"10px"}
                width={"260px"}
                mt={"20px"}
                variant="solid"
                borderRadius={"20px"}
              >
                <Image
                  src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=022"
                  width={"20px"}
                />{" "}
                &nbsp; Ethereum
              </Button>
              <Button
                colorScheme="blue"
                paddingTop={"0px"}
                ml={"10px"}
                width={"260px"}
                mt={"20px"}
                variant="solid"
                borderRadius={"20px"}
              >
                <Image
                  src="https://cryptologos.cc/logos/solana-sol-logo.svg?v=022"
                  width={"20px"}
                />{" "}
                &nbsp; Solana
              </Button>
              <Button
                colorScheme="blue"
                paddingTop={"0px"}
                ml={"10px"}
                width={"260px"}
                mt={"20px"}
                variant="solid"
                borderRadius={"20px"}
              >
                <Image
                  src="https://cryptologos.cc/logos/polygon-matic-logo.svg?v=022"
                  width={"20px"}
                />{" "}
                &nbsp; Polygon
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Flex>

      <Box flex="1"></Box>
    </>
  );
}
export default Track;
