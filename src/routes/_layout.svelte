<script>
  import Nav from '../components/Nav.svelte';
  import Footer from '../components/Footer.svelte';

  export let segment;
</script>

<style lang="scss">
  main {
    position: relative;
    width: 100%;
    box-sizing: border-box;
  }
  .container {
    padding: 1em 2em;
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
  }
</style>

<main>
  <Nav {segment} />
  <div class="container">
    <slot />
    <Footer />
  </div>
</main>
