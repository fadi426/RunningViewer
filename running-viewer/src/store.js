import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/modules/userModule.js'
import auth from '@/modules/authModule.js'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    runningData: [],
    selectedDestination: ""
  },
  mutations: {
    addRunningData: (state, payload) => {
      state.runningData = payload;
    },
    setSelectedDestination: ( state, payload) => {
      state.selectedDestination = payload;
    }
  },
  actions: {},
  modules: {
    user,
    auth,
  }
});
