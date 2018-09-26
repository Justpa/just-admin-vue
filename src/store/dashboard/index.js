  import Mock from 'mockjs'
  const Random = Mock.Random;

  const getRandomInt=()=>{
    return Random.natural(100000, 10000000)
  }

  const getRandomFloat=()=>{
    return (Random.float(0, 100) / 100).toFixed(2)
  }

  let series = [[],[],[]];
  for(let i=0; i<7; i++) {
    series[0][i] = getRandomInt();
    series[1][i] = getRandomInt();
    series[2][i] = getRandomInt();
  }

  const state = {
    salesVolume:getRandomInt(), //销量
    Sales: getRandomInt(), //销售额
    year2year:getRandomFloat(),//同比
    month2month:getRandomFloat(),//环比
    series: series
  }
 const mutations = {
  UPDATESALES(state) {
    state.Sales = getRandomInt();
    state.salesVolume = getRandomInt();
    state.year2year = getRandomFloat();
    state.month2month = getRandomFloat();
    for(let i=0; i<7; i++) {
      state.series[0][i] = getRandomInt();
      state.series[1][i] = getRandomInt();
      state.series[2][i] = getRandomInt();
    }
  }
}

const actions = {
  updateSales: ({ commit }) => {
    commit('UPDATESALES')
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
  namespaced:true,
  state,
  mutations,
  actions
}
