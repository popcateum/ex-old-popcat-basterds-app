<script lang="ts">
  import Saos from 'saos'
  import axios from 'axios'
  import { onMount } from 'svelte'
  import { push, location } from 'svelte-spa-router'

  let yearData: any = []
  let thisAddress: any
  
  onMount(async () => {
    console.log('wallet')
    console.log()
    thisAddress = $location.split('/')[2]
    await getCheckWallet(thisAddress)
  })

  let walletData = {
    address: '',
    year: 0,
    first_tx_time: ''
  }

  function share() {
    if (navigator.share) {
      navigator
        .share({
          title: 'OPB Share test',
          text: 'opb',
          url: `https://oldpopcatbasterds.com/#/wallet/${thisAddress}`
        })
        .then(() => console.log('share success'))
        .catch(error => console.log('share error', error))
    }
  }

  async function getCheckWallet(address: string) {
    // const data = await axios.get(`https://api.oldpopcatbasterds.com/whitelist/ticket?address=${address}`)
    // console.log(data.data)
    walletData.year = 2018
    for (let i = 0; i < 8; i++) {
      let defaultNum = 2015
      if (walletData.year === defaultNum + i) {
      } else {
        yearData.push({
          year: defaultNum + i
        })
      }
    }
    // data.data.address
    // data.data.year
    // data.data.first_tx_hash
    // data.data.first_tx_time
    // data.data.first_tx_block
    // data.data.data_info
  }
</script>

<svelte:head>
  <meta property="og:title" content="Old Popcat Basterds" />
  <meta property="og:image" content="/images/wallet-og.png" />
  <meta property="og:description" content="{thisAddress}'s wallet" />
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
    {#if walletData.year === 0}
      <div class="window-box">
        <div class="window-bar">
          <div class="window-close">
            <div class="x-box" on:click>x</div>
          </div>
        </div>
        <div class="window-content">
          <div class="content-paragraph">Your wallet is not in the snapshot.</div>
          <div class="content-paragraph">The snapshot period is from ethereal genesis block to May 20.</div>
          <div>
            <button class="normal-button" on:click="{() => push('/')}"> main page </button>
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
          <div class="image-wrap">
            <div class="space"></div>
            <div class="main-image">
              <img src="/images/{walletData.year}.png" alt="img" />
            </div>
            <div class="sub-image-wrap">
              {#each yearData as item}
                <div class="sub-image">
                  <img src="/images/{item.year}.png" alt="img" />
                </div>
              {/each}
            </div>
            <div class="space"></div>
          </div>

          <div class="image-wrap-mobile">
            <div class="main-image">
              <img src="/images/{walletData.year}.png" alt="img" />
            </div>
          </div>
          <div class="content-paragraph">
            Your ETHEREUM wallet was born in <span class="red-sentence">3th Dec 2018</span>.
            <br />
            Your wallet age is top <span class="red-sentence">62.22%</span> from total Ethereum wallets. Click
            <span style="color: #0000aa;">here</span>
            to see the data.
            <br />
          </div>
          <div class="button-wrap">
            <button class="normal-button" on:click="{share}"> share link </button>
            <button class="normal-button"> mint </button>
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
  .image-wrap-mobile {
    display: none;
  }
  .image-wrap {
    display: flex;

    padding: 20px;
    .main-image {
      width: 40%;
      img {
        width: 100%;
      }
    }
    .space {
      width: 10%;
    }
    .sub-image-wrap {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      .sub-image {
        display: flex;
        width: 100px;
        height: auto;
        padding: 10px;
        img {
          width: 100%;
          filter: grayscale(100%);
        }
      }
    }
  }
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

  @media screen and (max-width: 1000px) {
    .image-wrap {
      display: none;
    }
    .image-wrap-mobile {
      display: flex;
      justify-content: center;
      .main-image {
        width: 60%;
        img {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .image-wrap {
      display: none;
    }
    .title-wrap-mobile {
      display: flex;
      flex-direction: column;
    }
    .button-wrap {
      flex-direction: column;
    }
  }
</style>
