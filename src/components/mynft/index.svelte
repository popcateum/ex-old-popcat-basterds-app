<script lang="ts">
  import NftList from './nft-list.svelte'
  import Twitter from './twitter.svelte'
</script>

<div class="wrap" id="my-nft">
  <div class="title-wrap">
    <div class="middle-title-color">My NFT</div>
  </div>

  <div class="title-wrap-mobile">
    <div class="middle-title-color">My NFT</div>
  </div>

  <div class="content-wrap">
    <NftList />
    <Twitter />
  </div>
</div>
