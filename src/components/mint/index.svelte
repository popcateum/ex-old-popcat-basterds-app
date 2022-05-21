<script lang="ts">
  export let modalState: boolean

  async function mint() {
    alert('mint end')
  }
</script>

{#if modalState}
  <div class="modal">
    <div class="window-box">
      <div class="window-bar">
        <div class="window-close">
          <div class="x-box" on:click>x</div>
        </div>
      </div>
      <div class="window-content">
        <div class="image-wrap">
          <img src="images/eth.png" alt="eth" />
        </div>
        <div class="content-paragraph">
          Your ETHEREUM wallet was born in <span class="red-sentence">2018</span>.
          <br />
          Your wallet age is top <span class="red-sentence">62.51%</span> from total Ethereum wallets.
          <br />
          You can mint <span class="red-sentence">Legendary Popcat</span>.
        </div>
        <div>
          <button class="normal-button" on:click="{mint}"> Mint </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    z-index: 100;
    position: fixed;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
  }

  .window-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-paragraph {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    .content-paragraph {
      width: 80%;
    }

    .image-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      img {
        width: 50%;
      }
    }
  }
</style>
