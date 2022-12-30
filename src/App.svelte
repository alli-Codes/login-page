<script>
  import Icon from "./Icon.svelte";
  let show = false;
  function togglePassword() {
    show = !show;
  }
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
        <Icon {show} {togglePassword} />
      </section>
      <button>Login</button>
      <a href=".">Forgotten Password?</a>
    </form>
  </div>
</div>
