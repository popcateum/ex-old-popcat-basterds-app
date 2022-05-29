<script lang="ts">
  import Saos from 'saos'
  import { myYear, myAddressPercent, myFirstTxHash, myFirstTxBlcok, myFirstTxHashShort } from '@/stores'
  import axios from 'axios'
  import { onMount } from 'svelte'

  const test = 2022

  export let params: any = {}
  onMount(async () => {
    console.log('wallet')
    await getCheckWallet(params.first)
  })

  async function getCheckWallet(address: string) {
    const data = await axios.get(`https://api.oldpopcatbasterds.com/whitelist/ticket?address=${address}`)
    console.log(data.data)

    // data.data.address
    // data.data.year
    // data.data.first_tx_hash
    // data.data.first_tx_time
    // data.data.first_tx_block
    // data.data.data_info
  }
</script>

<svelte:head>
  <meta property="og:image" content="/images/{test}.png" />
</svelte:head>

<div class="space"></div>

<div class="wrap">
  <div class="title-wrap">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color">Check Wallet</div>
    </Saos>
  </div>
  <div class="title-wrap-mobile">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color">Check Wallet</div>
    </Saos>
  </div>
  <div class="content-wrap">
    {#if $myYear === 1}
      <div class="window-box">
        <div class="window-bar">
          <div class="window-close">
            <div class="x-box" on:click>x</div>
          </div>
        </div>
        <div class="window-content">
          <div class="content-paragraph">Your wallet is not in the snapshot.</div>
          <div>
            <button class="normal-button" on:click> close </button>
          </div>
        </div>
      </div>
    {:else}
      <div class="window-box">
        <div class="window-bar">
          <div class="window-close">
            <div class="x-box" on:click>x</div>
          </div>
        </div>
        <div class="window-content">
          <div class="content-paragraph">
            Your ETHEREUM wallet was born in <span class="red-sentence">{$myYear}</span>.
            <br />
            Your wallet age is top <span class="red-sentence">{$myAddressPercent}</span> from total Ethereum wallets.
            <br />
            Your first Tx hash is
            <span class="red-sentence"
              ><a href="https://etherscan.io/tx/{$myFirstTxHash}" target="_blank">{$myFirstTxHashShort}</a></span
            >.
            <br />
            Your first Tx block is <span class="red-sentence">{$myFirstTxBlcok}</span>.
          </div>
          <div class="button-wrap">
            <button class="normal-button"> share </button>
            <button class="normal-button"> check my wallet </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

<!-- <MetaTags
  openGraph={{
    images: [
      {
        url: 'https://www.example.ie/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt'
      },
      {
        url: 'https://www.example.ie/og-image-2.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt 2'
      }
    ]
  }}
/> -->
<style lang="scss">
  .wrap {
    max-width: 1000px;
    margin: 0px auto;
    height: 100vh;
    padding: 10px;
  }
  .title-wrap-mobile {
    display: none;
  }
  .space {
    height: 100px;
  }
  .window-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-wrap {
    display: flex;
    .normal-button {
      margin: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    .title-wrap-mobile {
      display: flex;
      flex-direction: column;
    }
    .button-wrap {
      flex-direction: column;
    }
  }
</style>
