<template>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about"> | About</router-link>
      <router-link v-if="!$store.state.authenticated" to="/login"> | Login</router-link>
      <a a v-if="$store.state.authenticated" @click="logout()"> | Logout</a>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return{}
  },
  methods: {
    logout() {
      this.$store.commit("authentication", false);
      this.$router.replace({ name: "home" });
    }
  }
}
</script>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
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
