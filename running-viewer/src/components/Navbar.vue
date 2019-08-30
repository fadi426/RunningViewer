<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about"> | About</router-link>
    <router-link v-if="!isAuthenticated && !authLoading" to="/login">
      | Login</router-link
    >
    <a a v-if="isAuthenticated && !authLoading" @click="logout()"> | Logout</a>
    <router-link to="/controlpanel"> {{this.fullUserName()}}</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import { AUTH_LOGOUT } from "@/modules/authAction";
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    },
    fullUserName() {
      if (
        this.user.userName == undefined &&
        this.user.userSurname == undefined
      ) {
        return;
      }
      return this.user.userName + " " + this.user.userSurname;
    }
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
    ...mapState({
      authLoading: state => state.auth.status === "loading",
      user: state => state.user.profile
    })
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
