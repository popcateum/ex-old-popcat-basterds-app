<script lang="ts">
  import Saos from 'saos'
  interface Info {
    nftImage: string
    tier: string
    year: string
    title: string
    infoContent: string
  }

  const infoData: Array<Info> = [
    {
      nftImage: './images/2015.png',
      tier: 'Top 0% ~ 0.0124%',
      year: '2015',
      title: 'Legendary Popcat',
      infoContent:
        'Some people can not believe that you started to use Ethereum blockchain in 2015. You’re one of early adopters in the blockchain. 2015 is too early even though some chart services do not have price data. Well, did you participate in Ethereum ICO? Your blockchain story becomes a hot topic among people.Are you already a whale? People would guess so.'
    },
    {
      nftImage: './images/2016.png',
      tier: 'Top 0.0124% ~ 0.4079%',
      year: '2016',
      title: 'GOAT POPCAT',
      infoContent:
        'If you say you started to use Ethereum blockchain in 2016, people will be amazed and respect you. You are above the top 3% of cryptonians because you entered the blockchain industry so early compared to other people. The price of Ethereum was less than 10 USD.You’re a fossil which is alive.'
    },
    {
      nftImage: './images/2017.png',
      tier: 'Top 0.4079% ~ 9.2262%',
      year: '2017',
      title: 'Grand Master Popcat',
      infoContent:
        '2017 was an important time when the ecosystem of Ethereum was getting bigger rapidly due to its price increase. The price reached around 400 USD per one Ethereum and people were shocked. Still you’re one of the early adopters.'
    },
    {
      nftImage: './images/2018.png',
      tier: 'Top 9.2262% ~ 28.2553%',
      year: '2018',
      title: 'Master Popcat',
      infoContent:
        '2018 was a hard time for cryptonians. If you were born in 2018, you can say that you experienced an enormous bear market and now you survived. You deserve respect as an old bastard.'
    },
    {
      nftImage: './images/2019.png',
      tier: 'Top 28.2553% ~ 42.4132%',
      year: '2019',
      title: 'Padawan Popcat',
      infoContent:
        'Theoretically, you are still early adopters. You’re not that old compared to older basterds popcats but now you know much about blockchain and Ethereum. Maybe you are experienced enough to brag to non-cryptonians.'
    },
    {
      nftImage: './images/2020.png',
      tier: 'Top 42.4132% ~ 64.0235%',
      year: '2020',
      title: 'Youngling Popcat',
      infoContent:
        'You are not that old actually. Need to respect older popcat basterds.Keep the spirit of HODL.Youngling Popcats start to have subtle lasers on their eyes.'
    },
    {
      nftImage: './images/2021.png',
      tier: 'Top 64.0235% ~ 92.4565%',
      year: '2021',
      title: 'Kitten Popcat',
      infoContent:
        'At the last, you start to have a small laser on your eyes. But you are too young.Be a young popcat bastard.'
    },
    {
      nftImage: './images/2022.png',
      tier: 'Top 92.4565% ~ 100%',
      year: '2022',
      title: 'N00b Popcat',
      infoContent:
        'You are a N00b popcat.You need to grow and learn more.You need to respect old bastard popcats.You are too young to have a laser on your eyes. Good luck, N00b.'
    }
  ]
</script>

<div class="wrap">
  <div class="title-wrap">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color">
        When is <br />
        your Ethereum Wallet <br />
        born in?
      </div>
    </Saos>
  </div>

  <div class="title-wrap-mobile">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color-sm">When is <br /> your</div>
      <div class="middle-title-color">Ethereum <br /> Wallet</div>
      <div class="middle-title-color-sm">born in?</div>
    </Saos>
  </div>

  <div class="content-wrap">
    {#each infoData as info}
      <Saos animation="{'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}">
        <div class="info-wrap">
          <img src="{info.nftImage}" alt="nft" class="nft-image" />
          <div class="nft-info">
            <div class="tier">{info.tier}</div>
            <div class="year">{info.year}</div>
            <div class="title">{info.title}</div>
            <div class="info">
              {info.infoContent}
            </div>
          </div>
        </div>
      </Saos>
    {/each}
  </div>
</div>

<style lang="scss">
  .title-wrap-mobile {
    display: none;
  }
  .info-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 83%; */
  }

  .nft-image {
    width: 35%;
    margin: 25px;
    box-sizing: border-box;
  }

  .tier {
    font-family: 'Charybdis';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #c4f4bd;
  }

  .title {
    font-family: 'Arcade';
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 52px;
    letter-spacing: -0.01em;
    background: linear-gradient(90deg, #ff0078 0%, #fdf30a 60.29%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .year {
    font-family: 'Karmatic Arcade';
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 53px;
    letter-spacing: -0.01em;
    background: linear-gradient(90deg, #ff0078 0%, #fdf30a 25.29%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .info {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  @media screen and (max-width: 1280px) {
    .info-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 93%;
    }

    .nft-image {
      width: 35%;
      margin: 25px;
      box-sizing: border-box;
    }

    .tier {
      font-family: 'Charybdis';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #c4f4bd;
    }

    .title {
      font-family: 'Arcade';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -0.01em;
      background: linear-gradient(90deg, #ff0078 0%, #fdf30a 60.29%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .year {
      font-family: 'Karmatic Arcade';
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 33px;
      letter-spacing: -0.01em;
      background: linear-gradient(90deg, #ff0078 0%, #fdf30a 25.29%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .info {
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    .title-wrap-mobile {
      display: flex;
      flex-direction: column;
      .middle-title-color {
        font-family: 'Karmatic Arcade';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 39px;
        letter-spacing: -0.01em;
        background: linear-gradient(90deg, #05f4fb 0%, #f6efa7 104.29%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .middle-title-color-sm {
        font-family: 'Karmatic Arcade';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: -0.01em;
        background: linear-gradient(90deg, #05f4fb 0%, #f6efa7 104.29%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
    .info-wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 93%;
    }

    .nft-image {
      width: 80%;
      margin: 25px;
      box-sizing: border-box;
    }

    .tier {
      font-family: 'Charybdis';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #c4f4bd;
    }

    .title {
      font-family: 'Arcade';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -0.01em;
      background: linear-gradient(90deg, #ff0078 0%, #fdf30a 60.29%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .year {
      font-family: 'Karmatic Arcade';
      font-style: normal;
      font-weight: 400;
      font-size: 26px;
      line-height: 33px;
      letter-spacing: -0.01em;
      background: linear-gradient(90deg, #ff0078 0%, #fdf30a 25.29%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .info {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
    }
  }
</style>
