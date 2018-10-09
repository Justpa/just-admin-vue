import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const stores = ['counter','dashboard'];
let modules = {}
stores.map(store=> modules[store] = require('./' + store).default)
export default new Vuex.Store({
  modules
})
