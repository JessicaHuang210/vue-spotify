import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuActive: false
  },
  mutations: {
    setMenuActive(state, payload) {
      state.menuActive = payload;
    }
  },
  actions: {
    async setMenuActive({ commit }, state) {
      try {
        commit("setMenuActive", state);
      } catch (err) {
        console.log("err", err);
      }
    }
  },
  getters: {
    menuActive: state => state.menuActive
  }
});
