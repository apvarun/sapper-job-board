<script context="module">
  export async function preload(page, session) {
    console.log('fetching data')
    const res = await this.fetch(`jobs/index.json`);
    console.log(res)
    const response = await res.json();
    console.log(response)
    return response;
  }
</script>

<script>
  import Post from '../../components/Post.svelte';
  import Breadcrumb from '../../components/Breadcrumb.svelte';
  export let jobs;
  export let isFirst;
  export let isLast;
  export let page;
</script>

<style lang="scss">
</style>

<svelte:head>
  <title>Uplife Jobs - All Jobs</title>
</svelte:head>

{#if jobs}
<div class="jobs">
  {#each jobs as job}
    <Post {job} />
  {/each}
</div>
{/if}


<Breadcrumb {isFirst} {isLast} {page} />
