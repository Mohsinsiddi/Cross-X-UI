import { createContext, useEffect, useState, useContext } from 'react'
import ABI from '../../../contracts/ABI/BridgeWrapper.json'
import ERC20ABI from '../../../contracts/ABI/ERC20Token.json'
import { ethers, utils } from 'ethers'
import {
  BRIDGE_WRAPPER_BSC,
  BRIDGE_WRAPPER_ETH,
  BRIDGE_WRAPPER_POLY,
  CrossXToken_BSC,
  CrossXToken_ETH,
  CrossXToken_POLY,
} from '../../../constants/constants'

const Web3Context = createContext()

export const Web3Provider = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState(null)
  const [amount, setAmount] = useState(0)
  const [swapFrom, setSwapFrom] = useState('CRX')
  const [swapTo, setSwapTo] = useState('CRX')
  const [web3, setWeb3] = useState(null)
  const [selectedTokenAmount,setTokenAmount]=useState(null)

  const [swapFromBlockchain, setSwapFromBlockchain] = useState('4')
  const [swapToBlockchain, setSwapToBlockchain] = useState('97')

  const [approved, setApproved] = useState(null)

  const [deposited, setDeposited] = useState(null)

  useEffect(() => {
    console.log('Swap From: ', swapFrom)
    console.log('Swap To: ', swapTo)
    console.log('Swap From Blockchain: ', swapFromBlockchain)
    console.log('Swap To Blockchain: ', swapToBlockchain)
  }, [swapFrom, swapTo, swapFromBlockchain, swapToBlockchain])

  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        })
        const account = accounts[0]
        setIsWalletConnected(true)
        setWalletAddress(account)
        setWeb3(window.ethereum)
        console.log('Account Connected: ', account)
        window.ethereum.on('accountsChanged', refresh)
        await getTokenBalance();
      } else {
        setError('Install a MetaMask wallet to get our token')
        console.log('No Metamask detected')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const depositAsset = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        let bidgeContract
        let tokenAddress
        let tokenContract
        if (swapFromBlockchain == '4') {
          bidgeContract = new ethers.Contract(BRIDGE_WRAPPER_ETH, ABI, signer)
          tokenAddress = CrossXToken_ETH
          tokenContract = new ethers.Contract(CrossXToken_ETH, ERC20ABI, signer)
        } else if (swapFromBlockchain == '97') {
          bidgeContract = new ethers.Contract(BRIDGE_WRAPPER_BSC, ABI, signer)
          tokenAddress = CrossXToken_BSC
          tokenContract = new ethers.Contract(CrossXToken_BSC, ERC20ABI, signer)
        } else {
          bidgeContract = new ethers.Contract(BRIDGE_WRAPPER_POLY, ABI, signer)
          tokenAddress = CrossXToken_BSC
          tokenContract = new ethers.Contract(CrossXToken_POLY, ERC20ABI, signer)
        }
        const approve = await tokenContract.approve(
          bidgeContract.address,
          utils.parseEther(amount)
        )

        setApproved(false)
        const approveEventConfirmation = await approve.wait()
        setApproved(true)
        const tx = await bidgeContract.deposit(
          tokenAddress,
          utils.parseEther(amount),
          swapToBlockchain
        )

        setApproved(null)
        setDeposited(false)
        const depositEventConfirmation = await tx.wait()
        setDeposited(true)

        setTimeout(() => {
          setDeposited(null)
        }, 1000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getTokenBalance = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        let tokenAddress
        let tokenContract
        if (swapFromBlockchain == '4') {
          tokenAddress = CrossXToken_ETH
          tokenContract = new ethers.Contract(CrossXToken_ETH, ERC20ABI, signer)
        } else if (swapFromBlockchain == '97') {
          tokenAddress = CrossXToken_BSC
          tokenContract = new ethers.Contract(CrossXToken_BSC, ERC20ABI, signer)
        } else {
          tokenAddress = CrossXToken_POLY
          tokenContract = new ethers.Contract(CrossXToken_POLY, ERC20ABI, signer)
        }
      const balance = await tokenContract.balanceOf(signer.getAddress())
      const TokenTHVal = ethers.utils.formatEther(balance);
      console.log(TokenTHVal)
      setTokenAmount(TokenTHVal)
      }
      else{
        setError('Install a MetaMask wallet to get our token')
        console.log('No Metamask detected')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const refresh = () => {
    setIsWalletConnected(false)
    setWalletAddress(null)
    console.log('Refresh Function Called')
    checkIfWalletIsConnected()
  }

  return (
    <Web3Context.Provider
      value={{
        isWalletConnected,
        walletAddress,
        checkIfWalletIsConnected,
        swapFrom,
        swapTo,
        setSwapFrom,
        setSwapTo,
        swapFromBlockchain,
        swapToBlockchain,
        setSwapFromBlockchain,
        setSwapToBlockchain,
        depositAsset,
        setAmount,
        approved,
        deposited,
        getTokenBalance,
        selectedTokenAmount
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  const web3Context = useContext(Web3Context)

  if (!web3Context) {
    throw new Error(
      'Component must be enclosed by Web3Provider to be able to use Web3Context'
    )
  }

  return web3Context
}
