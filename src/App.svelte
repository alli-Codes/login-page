<script>
    import { loginSchema, errorOutput } from './schema'
    import Icon from './Icon.svelte'

    let error
    errorOutput.subscribe(value => (error = value))

    let show = true
    let inputData = {}

    const togglePassword = () => (show = !show)

    const validate = function () {
        let email = inputData.email.value.trim() === ''? undefined : inputData.email.value
        let password = inputData.password.value.trim() === ''? undefined : inputData.password.value

        const result = loginSchema.validate({
            email: email,
            password: password
        })

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
            <div class="message" class:disable={!error.email}>{error.email}</div>
            <section>
                <input type={!show ? 'password' : 'text'} placeholder="Password" bind:this={inputData.password} />
                <span class="icon">
                    <Icon {show} {togglePassword} />
                </span>
            </section>
            <div class="message" class:disable={!error.password}>{error.password}</div>
            <button on:click={validate}>Login</button>
            <a href=".">Forgotten Password?</a>
        </form>
    </div>
</div>

<style>
    .disable {
        opacity: 0;
    }
    button:active{
       background:  #25074c !important;
    }
    a{
        padding-top: .8em;
    }
    .message {
        font-size: 0.77rem;
    }
</style>
