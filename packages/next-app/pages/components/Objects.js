import React, { useState } from 'react'
import {
  Heading,
  Menu,
  MenuButton,
  Select,
  Container,
  ChevronDownIcon,
  MenuList,
  MenuItem,
  centerContent,
  Center,
  Text,
  Flex,
  Link,
  Code,
  Box,
  Button,
} from '@chakra-ui/react'

import { chainlist } from './chainlist'
import { useWeb3 } from './context/web3Context'

function Objects({ from }) {
  const [totoken, setToToken] = useState('Select Token')

  const web3Context = useWeb3()

  const swapFromBlockchain = web3Context.swapFromBlockchain
  const swapToBlockchain = web3Context.swapToBlockchain

  const setSwapFromBlockchain = web3Context.setSwapFromBlockchain
  const setSwapToBlockchain = web3Context.setSwapToBlockchain

  const chainId = web3Context.chainID
  console.log("chainId from object page",chainId)

  const changeNetwork = async ({ networkName, setError }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName]
          }
        ]
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Flex>
      {/* <Text>{from ? swapFromBlockchain : swapToBlockchain}</Text> */}
      <Select
        borderColor={'white'}
        color={'black'}
        _hover={'none'}
        fontSize={'15px'}
        fontWeight={'bold'}
        width={'80%'}
        alignItems={'flex-start'}
        alignContent={'flex-start'}
        borderRadius={'22px'}
        value={from ? swapFromBlockchain : swapToBlockchain}
        onChange={(e) => {
          from
            ? setSwapFromBlockchain(e.target.value)
            : setSwapToBlockchain(e.target.value)
        }}
        className=''
      >
{from && chainId && (<option value={chainlist[chainId].chainid}>{chainlist[chainId].name}</option>)}
        {from === false && Object.keys(chainlist).map((key) => (
          <option value={chainlist[key].chainid}>{chainlist[key].name}</option>
        ))}
      </Select>
    </Flex>
  )
}
export default Objects
