<script lang="ts">
  import { web3ModalConnect, getInstance, getProvider, getSigner } from '@/blockchain/chain/chain'

  async function connect() {
    await web3ModalConnect()
    const instance = await getInstance()
    const provider = await getProvider(instance)
    const signer = await getSigner(provider)
    console.log(signer)
  }
</script>

<button class="wallet-button" on:click="{connect}"> connect </button>
