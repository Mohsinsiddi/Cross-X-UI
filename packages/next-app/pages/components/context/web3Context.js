import { createContext, useEffect, useState, useContext } from "react";

const Web3Context = createContext()

export const Web3Provider = ({ children }) => {
    const [isWalletConnected, setIsWalletConnected] = useState(false)
    const [walletAddress, setWalletAddress] = useState(null)


    // useEffect(() => {
    //     checkIfWalletIsConnected()
    // })

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
          console.log("Refresh Function Called")
          checkIfWalletIsConnected()
      }
    
    return (
        <Web3Context.Provider
        value={{
                isWalletConnected,
                walletAddress,
                checkIfWalletIsConnected
            }}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    const web3Context = useContext(Web3Context)

    if(!web3Context){
        throw new Error(
            'Component must be enclosed by Web3Provider to be able to use Web3Context'
        )
    }

    return web3Context
}