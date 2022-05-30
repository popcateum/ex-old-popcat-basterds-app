import Main from '@/pages/main/index.svelte'
import Wallet from '@/pages/wallet/index.svelte'
import Share from '@/pages/share/index.svelte'
import NotFound from './pages/NotFound/index.svelte'

export default {
  '/': Main,
  '/wallet/:id': Wallet,
  '/share/:id': Share,
  
  // Catch-all, must be last
  '*': NotFound,
}