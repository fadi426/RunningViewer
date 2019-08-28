<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "./components/Navbar";
export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          this.$store.dispatch(AUTH_LOGOUT);
          // you can also redirect to /login if needed !
        }
        throw err;
      });
    });
  },
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background: url("./assets/hardlopen-2.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}
</style>
