<template>
<div class="container">
  <h2>login</h2>
  <h3 class="alertText" v-if="incorrectPass">Incorrect username or password</h3>
  <h3 v-else><br></h3>
  <form>
    <input type="text" v-model="user.username" placeholder="Username" v-on:click="resetValidation()">
    <br/>
    <input type="password" v-model="user.password" placeholder="Password" v-on:click="resetValidation()">
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
import loginModule from '@/modules/loginModule'
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      incorrectPass: false
    };
  },
  methods: {
    login() {
      if (this.username != "" && this.password != "") {
        const { user } = this;
        // let token = loginModule.requestValidation(user);
        // if (loginModule.requestValidation(user)) {
          this.$store
            .dispatch(AUTH_REQUEST, user)
            .then(() => {
              this.$router.push('/controlpanel');
            })
            .catch(() => {
              this.incorrectPass = true;
            });
        } else {
          this.incorrectPass = true;
        }
      // } else {
      //   this.incorrectPass = true;
      // }
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
