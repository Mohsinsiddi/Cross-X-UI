import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";

const ConnectButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  const [addr, setAddr] = useState("");

  const btnhandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  const getbalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  const accountChangeHandler = (account) => {
    setdata({
      address: account,
    });
    setAddr(account);

    getbalance(account);
  };

  return (
    <>
      {addr === "" ? (
        <div>
          {
            <Button colorScheme="twitter" onClick={onOpen}>
              Connect Wallet
            </Button>
          }
        </div>
      ) : (
        <div>
          {
            <Button colorScheme="twitter">
              {addr.substring(0, 7) + "..." + addr.substring(37)}
            </Button>
          }
        </div>
      )}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Select Wallet
            </AlertDialogHeader>

            <AlertDialogBody>
              <Flex justifyContent={"center"} alignItems={"center"}>
                <Button
                  height={"200px"}
                  width={"200px"}
                  onClick={btnhandler}
                  onClickCapture={onClose}
                  variant={"outline"}
                  colorScheme={"white"}
                >
                  <img
                    src="https://i.postimg.cc/8P2dmYQ0/Group-5345.png"
                    width={"260px"}
                  />
                </Button>
              </Flex>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ConnectButton;
