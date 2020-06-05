import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import basket from './basket'
import checkout from './checkout'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    basket,
    checkout
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
})
