import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
// import WalletConnectProvider from '@walletconnect/web3-provider'

let ethereum: any | undefined
let provider: any
let web3Modal: any
let instance: any
// let providerOptions: any
let signer: any

async function web3ModalConnect() {
  // ethereum = (window as any).ethereum
  const WalletConnectProvider = window.WalletConnectProvider.default
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
    }
  }
  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
    disableInjectedProvider: false
  })
}

async function getInstance() {
  const instance = await web3Modal.connect()
  return instance
}

async function getProvider(instance: any) {
  const provider = new ethers.providers.Web3Provider(instance, 'any')
  return provider
}

async function getSigner(provider: any) {
  signer = provider.getSigner()
  return signer
}

async function disconnect(): Promise<void> {
  await web3Modal.clearCachedProvider()
  window.location.reload()
}

async function getAddress(): Promise<string> {
  return await signer.getAddress()
}

async function getShortAddress(): Promise<string> {
  const myAddress = await signer.getAddress()
  return `${myAddress.slice(0, 6)}...${myAddress.slice(-4)}`
}

async function getChainId(): Promise<number> {
  const chainData = await provider.getNetwork()
  return chainData.chainId
}

function accountsChanged(): void {
  instance.on('accountsChanged', () => {
    window.location.reload()
  })
}

function chainChanged(): void {
  instance.on('chainChanged', () => {
    window.location.reload()
  })
}

async function connectState() {
  return web3Modal.cachedProvider
}

async function testTransaction(ca: any, abi: any, signer: any, myadr: any) {
  const contract = new ethers.Contract(ca, abi, signer)
  const myPaxBalance = await contract.balanceOf(myadr)
  return ethers.utils.formatEther(myPaxBalance)
}

async function addChain() {
  await ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0x4bd',
        chainName: 'Popcateum',
        nativeCurrency: {
          name: 'Popcat',
          symbol: 'POP',
          decimals: 18
        },
        rpcUrls: ['https://dataseed.popcateum.org'],
        blockExplorerUrls: ['https://explorer.popcateum.org']
      }
    ]
  })
}

export {
  web3ModalConnect, getInstance, getProvider, getSigner
}