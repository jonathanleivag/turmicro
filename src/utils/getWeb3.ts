import { MetaMaskInpageProvider } from '@metamask/providers'
import contract from 'truffle-contract'
import Web3 from 'web3/dist/web3.min.js'

import turmicroContract from '../../build/contracts/Turmicro.json'
import { Turmicro } from '../interfaces/ITurmicro'

/* ------------------------------- deprecaded ------------------------------- */

// export const getWeb3 = async (): Promise<Web3> => {
//   let web3: Web3 = window.web3

//   if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider)
//     await window.ethereum.enable()
//   } else {
//     throw new Error('No tienes instalado MetaMask')
//   }

//   return web3
// }

/* ---------------------- problemas con test unitarios ---------------------- */
// export const getWeb3 = async (): Promise<Web3> => {
//   let web3: Web3 = window.web3

//   if (typeof web3 !== 'undefined') {
//     await window.ethereum.request({ method: 'eth_requestAccounts' })
//     web3 = new Web3(window.ethereum)
//   } else {
//     throw new Error('No tienes instalado MetaMask')
//   }
//   return web3
// }

export interface IWeb3 {
  web3?: Web3
  error: boolean
  message?: string
  ethereum?: MetaMaskInpageProvider
}

export const getWeb3 = async (): Promise<IWeb3> => {
  const web3: IWeb3 = {
    web3: undefined,
    error: false,
    message: undefined
  }

  if (typeof window.ethereum !== 'undefined') {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    web3.web3 = new Web3(window.ethereum)
    web3.error = false
    web3.ethereum = window.ethereum
  } else {
    web3.error = true
    web3.message = 'No tienes instalado MetaMask'
  }
  return web3
}

export const interfaceContract = async (web3: Web3): Promise<Turmicro> => {
  const turmicro = contract(turmicroContract)
  turmicro.setProvider(web3.eth.currentProvider)

  const instance = await turmicro.deployed()
  return instance as Turmicro
}
