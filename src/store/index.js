import Vue from "vue";
import Vuex from "vuex";
import { state, mutations } from "./mutations";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  plugins: [createPersistedState({ storage: window.sessionStorage })] // オプションを追加
});