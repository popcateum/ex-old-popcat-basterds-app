<script lang="ts">
  import { isConnect, myYear, myAddressPercent, claimablePopcat, myTicketHash, myTicketSignature } from '@/stores'
  import { mint } from '@/blockchain/contracts/sale'

  export let modalState: boolean

  async function saleMint() {
    try {
      await mint($myYear, $myTicketHash, $myTicketSignature)
      alert('mint end')
    } catch (e) {
      console.log(e);
      alert('mint error')
    }
  }
</script>

{#if modalState}
  <div class="modal">
    {#if $isConnect}
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
            Your ETHEREUM wallet was born in <span class="red-sentence">{$myYear}</span>.
            <br />
            Your wallet age is top <span class="red-sentence">{$myAddressPercent}</span> from total Ethereum wallets.
            <br />
            You can mint <span class="red-sentence">{$claimablePopcat}</span>.
          </div>
          <div>
            <button class="normal-button" on:click="{saleMint}"> Mint </button>
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
          <div class="content-paragraph" style="width: 100%;">Please wallet connect</div>
          <div>
            <button class="normal-button" on:click> close </button>
          </div>
        </div>
      </div>
    {/if}
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
