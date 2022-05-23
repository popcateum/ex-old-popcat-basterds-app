import { signer, provider } from '../chain/chain';
import { ethers, Contract } from 'ethers';
import SaleAbiJSON from '../abi/Sale.json';

const saleCA = '0xfc6920dF22B7034E031D4e046644b86375e102fA';
const saleABI: any = SaleAbiJSON;

async function mint(createdAt: number, hash: string, signature: string) {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, signer);
  const tx = await sale.mint(createdAt, hash, signature);
  await tx.wait();
}

async function testFunc(address: string) {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, signer);
  const tx = await sale.addToWhitelist(address);
  await tx.wait();
}

export {
  mint,
}