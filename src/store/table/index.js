import { getUserList } from '../../api/api'
  const state = {
    count: 100,
    users:[],
    pagination:{
      total:0,
      pageIndex:1,
      pageSize:10
    }
  }

  const mutations = {
    GET_USER(state, payload){
      if(payload.isTrusted) delete payload.isTrusted
      getUserList({...payload}).then(res=>{
        const data = res.data;
        state.users = data.records;
        state.pagination = {
          total: data.total,
          pageIndex:data.pageIndex,
          pageSize:data.pageSize,
          currentPage: data.currentPage
        }
      });
    },
  }

const getters = {

}

const actions = {
  getUserList:({commit}, payload)=>{
    const { type, ...params } = payload
    if(params.isTrusted) delete params.isTrusted
    commit('GET_USER', {...params})
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
