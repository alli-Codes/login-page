<script>
  import Icon from "./Icon.svelte";
  let show = false;
  let type = "password";
  function togglePassword() {
    show = !show;
    type == "password" ? (type = "text") : (type = "password");
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
        <input {type} placeholder="Password" />
        <Icon {show} {togglePassword} />
      </section>
      <button>Login</button>
      <a href=".">Forgotten Password?</a>
    </form>
  </div>
</div>
