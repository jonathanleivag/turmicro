import Web3 from 'web3/dist/web3.min.js'

// deprecaded

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

export const getWeb3 = async (): Promise<Web3> => {
  let web3: Web3 = window.web3

  if (typeof web3 !== 'undefined') {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    web3 = new Web3(window.ethereum)
  } else {
    throw new Error('No tienes instalado MetaMask')
  }
  return web3
}
