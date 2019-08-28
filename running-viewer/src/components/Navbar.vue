<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about"> | About</router-link>
    <router-link v-if="!this.$store.getters.isAuthenticated" to="/login">
      | Login</router-link
    >
    <a a v-if="this.$store.getters.isAuthenticated" @click="logout()"> | Logout</a>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from '@/modules/authAction'
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'))
    }
  }
};
</script>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #673ab7;
    text-decoration: underline;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:hover {
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
