import { provider } from '../chain/chain';
import { ethers, Contract } from 'ethers';
import ERC721AbiJSON from '../abi/OldPopcatBasterds.json';

const opbCA = '0x7150bFb3affd8c0c81380Ba45b399d34DC5C8892';
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