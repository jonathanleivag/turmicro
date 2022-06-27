import Web3 from 'web3/dist/web3.min.js'

export const weiToEther = (web3: Web3, value: number): number =>
  +web3.utils.fromWei(value.toString(), 'ether')
