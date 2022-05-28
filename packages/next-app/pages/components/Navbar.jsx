import React from "react";
import { Flex } from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";

function Navbar() {
  return (
    <>
      <Flex px={"4em"} py={"1.5em"} justifyContent={"flex-end"}>
        <ConnectButton />
      </Flex>
    </>
  );
}

export default Navbar;
