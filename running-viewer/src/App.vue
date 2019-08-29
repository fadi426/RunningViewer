<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "./components/Navbar";
import { USER_REQUEST } from '@/modules/userAction'

export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST)
    }
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
