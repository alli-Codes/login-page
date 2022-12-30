<script>
  import { element } from "svelte/internal";
  import Icon from "./Icon.svelte";
  let show = false;
  let type = "password";
  let inputData = {};
  function togglePassword() {
    show = !show;
    type == "password" ? (type = "text") : (type = "password");
    console.log(inputData.email.value, inputData.password.value);
  }
</script>

<div class="container">
  <div class="wrapper">
    <header>
      <h1>Login</h1>
      <p>Login to your account</p>
    </header>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <form action="" on:click|preventDefault>
      <input type="text" placeholder="Email" bind:this={inputData.email} />
      <section>
        <input {type} placeholder="Password" bind:this={inputData.password} />
        <Icon {show} {togglePassword} />
      </section>
      <button>Login</button>
      <a href=".">Forgotten Password?</a>
    </form>
  </div>
</div>
