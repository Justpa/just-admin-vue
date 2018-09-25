  const state = {
    count: 100,
  }
 const mutations = {
  INCREMENT(state) {
    state.count++;
  },
  DECREMENT(state) {
    state.count--;
  }
}

const getters = {
  evenOrOdd: state => (state.count + 1) % 2 == 0 ? 'odd' : 'even'
}

const actions = {
  increment: ({ commit }) => {
    commit('INCREMENT')
  },
  decrement: ({ commit }) => commit('DECREMENT'),
  incrementIfOdd({ commit, state}) {
    if ((state.count + 1) % 2 === 0) {
      commit('INCREMENT')
    }
  },
  incrementAsync({
    commit
  }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('INCREMENT')
        resolve()
      }, 1000)
    })
  }
}


// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters
}
