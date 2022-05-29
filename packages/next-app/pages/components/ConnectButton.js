import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
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
} from '@chakra-ui/react'
import { useWeb3 } from './context/web3Context'

const ConnectButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const web3Context = useWeb3()

  const isWalletConnected = web3Context.isWalletConnected
  const walletAddress = web3Context.walletAddress

  const checkIfWalletIsConnected = web3Context.checkIfWalletIsConnected

  const btnhandler = () => {
    checkIfWalletIsConnected()
  }

  return (
    <>
      {!isWalletConnected ? (
        <div>
          {
            <Button colorScheme='twitter' onClick={onOpen}>
              Connect Wallet
            </Button>
          }
        </div>
      ) : (
        <div>
          {
            <Button colorScheme='twitter'>
              {walletAddress.slice(0, 7)}...{walletAddress.slice(37)}
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
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Select Wallet
            </AlertDialogHeader>

            <AlertDialogBody>
              <Flex justifyContent={'center'} alignItems={'center'}>
                <Button
                  height={'200px'}
                  width={'200px'}
                  onClick={btnhandler}
                  onClickCapture={onClose}
                  variant={'outline'}
                  colorScheme={'white'}
                >
                  <img
                    src='https://i.postimg.cc/8P2dmYQ0/Group-5345.png'
                    width={'260px'}
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
  )
}

export default ConnectButton
