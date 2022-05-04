<script lang="ts">
</script>

<div class="wrap">
  <div class="title-wrap">
    <div class="middle-title-color">
      When is <br />
      your Ethereum Wallet <br />
      born in?
    </div>
  </div>

  <div class="title-wrap-mobile">
    <div class="middle-title-color-sm">When is <br /> your</div>
    <div class="middle-title-color">Ethereum Wallet</div>
    <div class="middle-title-color-sm">born in?</div>
  </div>

  <div class="content-wrap">
    <div class="info-wrap">
      <img src="images/nft.png" alt="nft" class="nft-image" />
      <div class="nft-info">
        <div class="tier">Top 0% ~ 0.1%</div>
        <div class="year">2015</div>
        <div class="title">Legendary Popcat</div>
        <div class="info">
          Some people can not believe that you started to use Ethereum blockchain in 2015. You’re one of early adopters
          in the blockchain. 2015 is too early even though some chart services do not have price data. Well, did you
          participate in Ethereum ICO? Your blockchain story becomes a hot topic among people.Are you already a whale?
          People would guess so.
        </div>
      </div>
    </div>
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
    width: 83%;
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
    font-size: 16px;
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
