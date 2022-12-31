<script>
  import loginSchema from "./schema";
  import Icon from "./Icon.svelte";
  let show = false;
  let type = "password";
  let inputData = {};
  const togglePassword = function () {
    show = !show;
    type == "password" ? (type = "text") : (type = "password");
  };
  const validate = function () {
    let email = inputData.email.value;
    let password = inputData.password.value;

    let result = loginSchema.validate({
      email: email,
      password: password,
    });

    console.log(result);
    // console.log(email, password);
  };
</script>

<div class="container">
  <div class="wrapper">
    <header>
      <h1>Login</h1>
      <p>Login to your account</p>
    </header>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <form action="" on:click|preventDefault>
      <input
        on:input={validate}
        type="text"
        placeholder="Email"
        bind:this={inputData.email}
      />
      <section>
        <input
          on:input={validate}
          {type}
          placeholder="Password"
          bind:this={inputData.password}
        />
        <Icon {show} {togglePassword} />
      </section>
      <button>Login</button>
      <a href=".">Forgotten Password?</a>
    </form>
  </div>
</div>
