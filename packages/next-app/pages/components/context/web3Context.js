import { createContext, useEffect, useState } from "react";

const Web3Context = createContext()

export const Web3Provider = ({ children }) => {
    const [web3, setWeb3] = useState()

    useEffect(() => {
        const web3 = window.ethereum

        setWeb3(web3)
    }, [])
    
    return (
        <Web3Context.Provider>
            value={{
                web3
            }}
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