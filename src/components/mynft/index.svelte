<script lang="ts">
  import Saos from 'saos'
  import NftList from './nft-list.svelte'
  import Twitter from './twitter.svelte'
</script>

<div class="wrap" id="my-nft">
  <div class="title-wrap">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color">My NFT</div>
    </Saos>
  </div>

  <div class="title-wrap-mobile">
    <Saos animation="{'typing 3.5s steps(40, end)'}">
      <div class="middle-title-color">My NFT</div>
    </Saos>
  </div>

  <div class="content-wrap">
    <NftList />
    <Twitter />
  </div>
</div>
