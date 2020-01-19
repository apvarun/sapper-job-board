<script>
  export let job;

  $: tags = job.frontmatter.tags;
</script>

<style lang="scss">
  .post {
    margin: 10px 2px;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 15px 40px -20px rgba(58, 155, 255, 0.2);
    transition: 250ms ease-in all;
    text-decoration: none;
    text-align: center;
    &:hover {
      box-shadow: 0 15px 10px -10px rgba(58, 155, 255, 0.25);
      transform: translateY(-5px);
    }
  }
  .title {
    font-weight: bold;
    margin-top: 10px;
  }
  img {
    max-width: 150px;
    margin: 0 auto;
    display: block;
    border-radius: 5px;
  }
  .muted {
    color: #94979a;
  }
</style>

<a class="post" href=".">
  <img src={job.frontmatter.logo} alt="logo" />
  <div class="title">{job.frontmatter.title}</div>
  <div class="muted">{job.frontmatter.company}﹒{job.frontmatter.location}</div>
</a>
