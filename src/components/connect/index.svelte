<script lang="ts">
  import { isConnect, myAddress, myAddressShort } from '@/stores/index'
  import {
    web3ModalConnect,
    getInstance,
    getProvider,
    getSigner,
    accountsChanged,
    chainChanged,
    getAddress,
    getShortAddress,
    connectState,
    disconnect
  } from '@/blockchain/chain/chain'
  import Fa from 'svelte-fa'
  import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

  let isOpen = false

  async function connect() {
    await web3ModalConnect()
    const instance = await getInstance()
    const provider = await getProvider()
    const signer = await getSigner()
    $myAddress = await getAddress()
    $myAddressShort = await getShortAddress()
    // console.log(signer)
    console.log($myAddress)
    const connectSt = await connectState()
    console.log(connectSt)

    accountsChanged()
    chainChanged()
    $isConnect = true
  }
</script>

{#if $isConnect}
  {#if isOpen}
    <div class="non-button-wrap-ab">
      <div class="wallet-button">
        <div class="address-wrap" on:click="{() => (isOpen = !isOpen)}">
          <div class="address">{$myAddressShort}</div>
          <div class="icon">
            <Fa icon="{faAngleDown}" size="{'1x'}" />
          </div>
        </div>
        <hr />
        <div class="content">
          You wallet was born in <span class="red-sentence">2016</span>. <br />
          Top <span class="red-sentence">25.12%</span> from total wallets.<br />
          Now you have <span class="red-sentence">0</span> OPB NFT.
        </div>
        <hr />
        <div class="sign-out" on:click="{disconnect}">Sign-out</div>
      </div>
    </div>
  {:else}
    <div class="non-button-wrap">
      <div class="wallet-button" on:click="{() => (isOpen = !isOpen)}">
        <div class="address-wrap">
          <div class="address">{$myAddressShort}</div>
          <div class="icon">
            <Fa icon="{faAngleDown}" size="{'1x'}" />
          </div>
        </div>
      </div>
    </div>
  {/if}
{:else}
  <button class="wallet-button" on:click="{connect}"> connect </button>
{/if}

<style lang="scss">
  .wallet-button {
    font-size: 16px;
  }
  .non-button-wrap {
    display: flex;
    flex-direction: column;

    .wallet-button {
      display: flex;
      flex-direction: column;
      padding: 15px 15px;
      cursor: pointer;
      .address-wrap {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .non-button-wrap-ab {
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 260px;

    .wallet-button {
      position: absolute;
      display: flex;
      flex-direction: column;
      padding: 15px 15px;
      box-sizing: border-box;
      top: 20px;
      right: 80px;
      width: 260px;
      .address-wrap {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
      }
      hr {
        width: 100%;
        border: 0.2px solid #aaaaaa;
      }
      .content {
        font-size: 10px;
        line-height: 14px;
      }
      .sign-out {
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
      }
    }
  }

  .icon {
    margin-left: 10px;
  }

  @media screen and (max-width: 1280px) {
    .non-button-wrap-ab {
      width: 182px;
      .wallet-button {
        position: absolute;
        display: flex;
        flex-direction: column;
        padding: 15px 15px;
        box-sizing: border-box;
        top: 20px;
        right: 80px;
        width: 182px;
      }
    }
    .address {
      font-size: 10px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .non-button-wrap-ab {
      width: auto;
      .wallet-button {
        width: 100%;
        position: static;
        display: flex;
        flex-direction: column;
        padding: 15px 15px;
        box-sizing: border-box;
      }
    }
    .address {
      font-size: 16px;
      line-height: 20px;
    }
  }
</style>
