<div class="nftlist-wrap">
  <div class="nft-list-wrap">
    <img class="list-image" src="images/nft.png" alt="nft" />
    <img class="list-image" src="images/nft.png" alt="nft" />
    <img class="list-image" src="images/nft.png" alt="nft" />
  </div>
  <div class="nft-list-wrap-mobile">
    <img class="list-image" src="images/nft.png" alt="nft" />
  </div>
  <div class="nftlist-button-wrap">
    <div class="button">&lt; <br /> Back</div>
    <div class="button">&gt; <br />Next</div>
  </div>
</div>

<style lang="scss">
  .nftlist-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .nftlist-button-wrap {
    display: flex;
    font-family: 'PC Senior';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 40px;
    .button {
      margin: 10px;
      cursor: pointer;
      text-align: center;
    }
  }

  .nft-list-wrap {
    display: flex;
  }

  .list-image {
    width: 33.3%;
    padding: 20px;
    box-sizing: border-box;
  }

  .nft-list-wrap-mobile {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    .nftlist-button-wrap {
      display: flex;
      font-family: 'PC Senior';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 40px;
      .button {
        margin: 10px;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nft-list-wrap {
      display: none;
    }

    .nft-list-wrap-mobile {
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;

      .list-image {
        padding: 0px;
        width: 70%;
        box-sizing: border-box;
      }
    }
  }
</style>
