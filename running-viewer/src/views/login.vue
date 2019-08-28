<template>
<div class="container">
  <h2>login</h2>
  <h3 class="alertText" v-if="incorrectPass">Incorrect username or password</h3>
  <h3 v-else><br></h3>
  <form>
    <input type="text" v-model="username" placeholder="Username" v-on:click="resetValidation()">
    <br/>
    <input type="password" v-model="password" placeholder="Password" v-on:click="resetValidation()">
  </form>
  <br/>
  <button class="signin" v-on:click="login()">
    <span>Login</span>
  </button>
  <div class="sig"></div>
</div>
</template>

<script>
import {AUTH_REQUEST} from '@/modules/authAction'
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      incorrectPass: false
    };
  },
  methods: {
    login() {
      if (this.username != "" && this.password != "") {
        const { username, password } = this;
        if (this.username == "fadi" && this.password == "qadadi") {
          this.$store
            .dispatch(AUTH_REQUEST, { username, password })
            .then(() => {
              this.$router.push('/controlpanel');
            });
        } else {
          console.log("The username and / or password is incorrect");
          this.incorrectPass = true;
        }
      } else {
        console.log("A username and password must be present");
        this.incorrectPass = true;
      }
    },
    resetValidation() {
      this.incorrectPass = false;
    }
  }
};
</script>

<style lang="scss">
@import url(../styles/form.scss);
</style>
