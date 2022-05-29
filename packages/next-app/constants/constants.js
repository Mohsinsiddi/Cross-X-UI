export const BRIDGE_WRAPPER_ETH = '0x3b99a659AD59ED01B352159ABdFE5B0E3Ce2f25c'
export const BRIDGE_WRAPPER_BSC = '0xa149C13e16E5b38E34F0107A71df69F0b2DBfD52'
export const BRIDGE_WRAPPER_POLY = '0xD256A6C08D00975886947A79e57B1963F4cdceB5'

export const CrossXToken_ETH = '0x6cDd2aC516a6c1c6410938D313a24035De4C7A43'
export const CrossXToken_BSC = '0xA98d378c3d8f4B8B9dfB86b12ABC39B6B4197314'
export const CrossXToken_POLY = '0xEd22DCA00B4d71F08bc184574b028c4Dc53479DE'

export const networks = {
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"]
    },
    bsc: {
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18
      },
      rpcUrls: [
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed2.binance.org",
        "https://bsc-dataseed3.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io",
        "https://bsc-dataseed4.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.ninicoin.io",
        "https://bsc-dataseed3.ninicoin.io",
        "https://bsc-dataseed4.ninicoin.io",
        "wss://bsc-ws-node.nariox.org"
      ],
      blockExplorerUrls: ["https://bscscan.com"]
    }
  };
