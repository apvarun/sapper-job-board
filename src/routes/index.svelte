<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch(`index.json`);
    const response = await res.json();
    return response;
  }
</script>

<script>
  import Post from '../components/Post.svelte';

  export let jobs;
  export let jobsPerPage;
</script>

<style>
  .hero {
    padding: 6rem 2rem;
    font-weight: bolder;
    font-size: 2rem;
    text-align: center;
  }
  .jobs {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
</style>

<svelte:head>
  <title>Uplife Jobs</title>
</svelte:head>

<div class="hero">Job board 🎯 with jobs for everyone 🌎,<br /> with skills!</div>

<div class="jobs">
  {#each jobs.slice(0, jobsPerPage) as job}
    <Post {job} />
  {/each}
</div>
