import { signer, provider } from '../chain/chain';
import { ethers, Contract } from 'ethers';
import SaleAbiJSON from '../abi/Sale.json';

const saleCA = '0x306249A2D1505dEfdfcB90D606d0E50d0B0B0dEB';
const saleABI: any = SaleAbiJSON;

async function mint(createdAt: number, hash: string, signature: string, amount: any) {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, signer);
  const tx = await sale.mint(createdAt, hash, signature, amount);
  await tx.wait();
}

function isMinted(address: string) {
  const sale: Contract = new ethers.Contract(saleCA, saleABI, provider);
  return sale.isMinted(address);
}

export {
  mint, isMinted
}