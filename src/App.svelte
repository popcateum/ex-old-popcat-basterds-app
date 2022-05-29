<script lang="ts">
  import Router from 'svelte-spa-router'
  import routes from './routes'
  import Header from '@/components/header/index.svelte'
  import Footer from '@/components/footer/index.svelte'
</script>

<Header />
<div class="background">
  <Router routes="{routes}" />
</div>
<Footer />
