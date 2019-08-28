import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/modules/userModule.js'
import auth from '@/modules/authModule.js'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    runningData: [],
    authenticated: false
  },
  mutations: {
    authentication: (state, payload) => {
      state.authenticated = payload;
    },
    addRunningData: (state, payload) => {
      state.runningData = payload;
    }
  },
  actions: {},
  modules: {
    user,
    auth,
  }
});
