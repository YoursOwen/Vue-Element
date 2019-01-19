import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import getters from './getters'
import mutations from './mutations'

const state = {
  userInfo:""


}

export default new Vuex.Store({
  state,
  getters,
  mutations

})