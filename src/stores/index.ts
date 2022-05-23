import { writable } from "svelte/store";

export const isConnect: any = writable(false)
export const myAddress: any = writable('')
export const myAddressShort: any = writable('')

export const myYear: any = writable('')
export const myTicketHash: any = writable('')
export const myTicketSignature: any = writable('')
export const myAddressPercent: any = writable('')
export const claimablePopcat: any = writable('')
export const myBalance: any = writable(0)
export const myNftImages: any = writable([{ img: 'images/nft.png' }])