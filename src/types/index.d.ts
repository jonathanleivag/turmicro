import Web3 from 'web3'
/* eslint-disable no-unused-vars */
export {}

declare global {
  interface Window {
    web3: Web3
    ethereum: any
  }
}
