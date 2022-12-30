<script>
  import Icon from "./Icon.svelte";
</script>

<div class="container">
  <div class="wrapper">
    <header>
      <h1>Login</h1>
      <p>Login to your account</p>
    </header>
    <form action="">
      <input type="text" placeholder="Email" />
      <section>
        <input type="password" placeholder="Password" />
        <Icon />
      </section>
      <button>Login</button>
      <a href=".">Forgotten Password?</a>
    </form>
  </div>
</div>
