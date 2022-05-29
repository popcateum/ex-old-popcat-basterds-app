import { provider } from '../chain/chain';
import { ethers, Contract } from 'ethers';
import ERC721AbiJSON from '../abi/OldPopcatBasterds.json';

const opbCA = '0x0fBF385B7045bFA72062c875bE92FA988d70F4aa';
const opbABI: any = ERC721AbiJSON;

async function balanceOf(address: string) {
  const opb: Contract = new ethers.Contract(opbCA, opbABI, provider);
  const balance = await opb.balanceOf(address);
  return parseInt(`${balance}`, 10);
}

async function tokenOfOwnerByIndex(owner: string, index: number) {
  const opb: Contract = new ethers.Contract(opbCA, opbABI, provider);
  const token = await opb.tokenOfOwnerByIndex(owner, index);
  return token;
}

async function tokenURI(tokenId: string) {
  const opb: Contract = new ethers.Contract(opbCA, opbABI, provider);
  const uri = await opb.tokenURI(tokenId);
  return uri;
}

export {
  balanceOf, tokenOfOwnerByIndex, tokenURI
}