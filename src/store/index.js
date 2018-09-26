import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'
import dashboard from './dashboard'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    counter:counter,
    dashboard:dashboard
  }
})
