<script lang="ts">
  import Marquee from 'svelte-marquee'
</script>

<div class="text-moving-bar">
  <Marquee content="OLD POPCAT BASTARDS &nbsp; &nbsp; &nbsp;" />
</div>

<style lang="scss">
  .text-moving-bar {
    background-color: #edbdf4;
    color: #C4F4BD;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-family: 'Arcade';
    font-style: normal;
    font-size: 60px;
  }

  @media screen and (max-width: 1280px) {
    .text-moving-bar {
      background-color: #edbdf4;
      color: #C4F4BD;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      margin: 0px;
      padding: 0px;
      border: 0px;
      font-family: 'Arcade';
      font-style: normal;
      font-size: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    .text-moving-bar {
      background-color: #edbdf4;
      color: #C4F4BD;
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      margin: 0px;
      padding: 0px;
      border: 0px;
      font-family: 'Arcade';
      font-style: normal;
      font-size: 30px;
    }
  }
</style>
