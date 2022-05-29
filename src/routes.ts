import Main from '@/pages/main/index.svelte'
import Wallet from '@/pages/wallet/index.svelte'

import NotFound from './pages/NotFound/index.svelte'

export default {
  '/': Main,
  '/wallet/:id': Wallet,

  // Catch-all, must be last
  '*': NotFound,
}