<script lang="ts">
  import Saos from 'saos'
  import { onMount } from 'svelte'
  import { push, location } from 'svelte-spa-router'
  import { MetaTags } from 'svelte-meta-tags'
  import Mint from '@/components/mint/index.svelte'

  let yearData: any = []
  let thisAddress: any
  let modalState: boolean = false
  let walletData = {
    address: '',
    year: 0,
    date: '',
    percent: '',
    popcat: '',
    txHash: ''
  }

  onMount(async () => {
    console.log('wallet')
    thisAddress = $location.split('/')[2]
    await getCheckWallet(thisAddress)
  })

  function share() {
    if (navigator.share) {
      navigator
        .share({
          text: 'Old Popcat Basterds',
          url: `https://oldpopcatbasterds.com/#/wallet/${thisAddress}`
        })
        .then(() => console.log('share success'))
        .catch(error => console.log('share error', error))
    }
  }

  async function getCheckWallet(address: string) {
    // const data = await axios.get(`https://api.oldpopcatbasterds.com/whitelist/info?address=${address}`)
    const data = {
      data: {
        address: '0x9df1748c7691ab6725a7f2545007b54a965e900e',
        year: 2021,
        first_tx_hash: '0xe5b1ef9aa6d4932422bb37bd78d23d0ae8246f74d282b815be7bf91d3d06b928',
        first_tx_time: '2021-12-30T13:16:34.000Z',
        first_tx_block: '13,906,910',
        date_info: {
          date_string: '2021-12-30',
          created_per_day: '104,862',
          created_acc: '128,464,217',
          total_wallet_count: '139,984,693',
          top_percent: '91.7702%'
        }
      }
    }
    // console.log(data.data)
    walletData.year = data.data.year
    walletData.address = data.data.address
    walletData.date = data.data.date_info.date_string
    walletData.percent = data.data.date_info.top_percent
    walletData.txHash = data.data.first_tx_hash
    setMyAddressPopcat(walletData.year)

    for (let i = 0; i < 8; i++) {
      let defaultNum = 2015
      if (walletData.year === defaultNum + i) {
      } else {
        yearData.push({
          year: defaultNum + i
        })
      }
    }
  }

  function setMyAddressPopcat(year: number) {
    if (year === 2015) {
      walletData.popcat = 'Legendary Popcat'
    } else if (year === 2016) {
      walletData.popcat = 'GOAT POPCAT'
    } else if (year === 2017) {
      walletData.popcat = 'Grand Master Popcat'
    } else if (year === 2018) {
      walletData.popcat = 'Master Popcat'
    } else if (year === 2019) {
      walletData.popcat = 'Padawan Popcat'
    } else if (year === 2020) {
      walletData.popcat = 'Youngling Popcat'
    } else if (year === 2021) {
      walletData.popcat = 'Kitten Popcat'
    } else if (year === 2022) {
      walletData.popcat = 'N00b Popcat'
    } else {
      walletData.popcat = 'None'
    }
  }
</script>

<MetaTags
  title="Using More of Config"
  titleTemplate="%s | Svelte Meta Tags"
  description="This example uses more of the available config options."
  canonical="https://www.canonical.ie/"
  openGraph="{{
    url: 'https://www.url.ie/a',
    title: 'Open Graph Title',
    description: 'Open Graph Description',
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt'
      },
      {
        url: 'https://www.example.ie/og-image-02.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt Second'
      },
      { url: 'https://www.example.ie/og-image-03.jpg' },
      { url: 'https://www.example.ie/og-image-04.jpg' }
    ],
    site_name: 'SiteName'
  }}"
  twitter="{{
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
    title: 'Using More of Config',
    description: 'This example uses more of the available config options.',
    image: 'https://www.example.ie/twitter-image.jpg',
    imageAlt: 'Twitter image alt'
  }}"
  facebook="{{
    appId: '1234567890'
  }}"
/>

<Mint modalState="{modalState}" on:click="{() => (modalState = !modalState)}" />

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
          <div class="content-paragraph">The snapshot period is from ethereum genesis block to May 20.</div>
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
          <div class="content-paragraph" style="padding: 20px;">
            Your ETHEREUM wallet was born in <span class="red-sentence">{walletData.date}</span>.
            <br />
            Your wallet age is top <span class="red-sentence">{walletData.percent}</span> from total Ethereum wallets.
            Click
            <a href="https://etherscan.io/tx/{walletData.txHash}" target="_blank" style="color: #0000aa;">here</a>
            to see the data.
            <br />
            <br />
            Your can mint <span class="red-sentence">{walletData.popcat}</span>.
          </div>
          <div class="button-wrap">
            <button class="normal-button" on:click="{share}"> share link </button>
            <button class="normal-button" on:click="{() => (modalState = !modalState)}"> mint </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>

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
