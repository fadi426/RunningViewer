<template>
  <div class="nav">
    <router-link class="menuOption" to="/">Home</router-link>
    <router-link class="menuOption" to="/about">About</router-link>
    <router-link class="menuOption" v-if="!isAuthenticated" to="/login">Login</router-link>
    <router-link class="menuOption" to="/controlpanel"> {{this.fullUserName()}}</router-link>
    <a class="menuOption" v-if="isAuthenticated && !authLoading" @click="logout()">Logout</a>
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
.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: underline;
    &.router-link-exact-active {
      color: #673ab7;
    }
  }
  a:hover {
    cursor: pointer;
    text-decoration: none;
  }
  .menuOption {
    padding: 5px;
    font-size: x-large;

    @media (max-width: 576px) {
      font-size: large;
    }
  }
}
</style>
