<script>
  export let segment;
</script>

<style lang="scss">
  nav {
    font-weight: 400;
    padding: 0.25em 1em;
    font-size: 1.1rem;
    background-color: white;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
    margin-bottom: 15px;
  }

  .nav-container {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    a {
      position: relative;
      display: inline-block;
      &::after {
        position: absolute;
        content: '';
        width: 100%;
        left: 0;
        height: 4px;
        background-color: transparent;
        display: block;
        bottom: -5px;
        border-radius: 5px;
        transition: 150ms ease-in-out all;
      }
    }
  }

  .selected {
    color: #337ED9;
  }

  .selected::after {
    background-color: #337ED9;
    transform: translateY(-5px);
    transition: 300ms ease-in-out all;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  .logo {
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>

<nav>
  <div class="nav-container">
    <a href="." class="logo">Uplife Jobs</a>
    <ul>
      <li>
        <a class={segment === undefined ? 'selected' : ''} href=".">Home</a>
      </li>
      <li>
        <a class={segment === 'about' ? 'selected' : ''} href="about">About</a>
      </li>
    </ul>
  </div>
</nav>
