<script lang="ts">
  import Intro from '@/components/intro/index.svelte'
  import Rule from '@/components/rule/index.svelte'
  import Info from '@/components/info/index.svelte'
  import Incentive from '@/components/incentive/index.svelte'
  import MyNFT from '@/components/mynft/index.svelte'
  import Roadmap from '@/components/roadmap/index.svelte'
  import Status from '@/components/status/index.svelte'
</script>

<svelte:head>
  <meta property="og:title" content="Old Popcat Basterds" />
  <meta property="og:description" content="The world’s first NFT project based on real Ethereum history." />
  <meta property="og:image" content="/images/og-image.png" />
</svelte:head>

<Intro />
<Rule />
<Info />
<Status />
<Incentive />
<MyNFT />
<Roadmap />
