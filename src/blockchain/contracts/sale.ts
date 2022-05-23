import { signer, provider } from '../chain/chain';
import { ethers, Contract } from 'ethers';
import SaleAbiJSON from '../abi/Sale.json';

const saleCA = '0xA33aAE8Bda6518838e2d027B1a71AB7735F0093D';
const saleABI: any = SaleAbiJSON;

async function testFunc(address: string) {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, signer);
  const tx = await sale.addToWhitelist(address);
  await tx.wait();
}

export {
  testFunc,
}