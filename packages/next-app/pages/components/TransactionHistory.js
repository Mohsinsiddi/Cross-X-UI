import axios from 'axios'

export const getChains = async () => {
  const chains = (await axios.get('https://chainid.network/chains.json')).data

  return chains
}

// export const Transaction = {

// }
