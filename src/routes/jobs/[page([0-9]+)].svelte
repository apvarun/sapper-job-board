<script context="module">
  export async function preload({ params }) {
    const page = +params.page;
    const res = await this.fetch(`jobs/${page}.json`);
    const response = await res.json();
    return {
      page,
      ...response,
    };
  }
</script>

<script>
  import Post from '../../components/Post.svelte';
  import Breadcrumb from '../../components/Breadcrumb.svelte';
  export let jobs;
  export let jobsPerPage;
  export let isFirst;
  export let isLast;
  export let page;
</script>

<style lang="scss">
</style>

<svelte:head>
  <title>Stunning Theme - Page {page}</title>
</svelte:head>

<div class="jobs">
  {#each jobs.slice(0, jobsPerPage) as job}
    <Post {job} />
  {/each}
</div>

<Breadcrumb {isFirst} {isLast} {page} />
