import { createContext, useEffect, useState, useContext } from 'react'

const Web3Context = createContext()

export const Web3Provider = ({ children }) => {
<<<<<<< HEAD
    const [isWalletConnected, setIsWalletConnected] = useState(false)
    const [walletAddress, setWalletAddress] = useState(null)
    const [chainID,setchainID]=useState(null);
=======
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState(null)
  const [swapFrom, setSwapFrom] = useState('CRX')
  const [swapTo, setSwapTo] = useState('CRX')
>>>>>>> 1c19b3148e6b0f7df4abcf415da217ac17a1f7f7

  const [swapFromBlockchain, setSwapFromBlockchain] = useState('1')
  const [swapToBlockchain, setSwapToBlockchain] = useState('1')

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
        console.log('Account Connected: ', account)

        window.ethereum.on('accountsChanged', refresh)
      } else {
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
