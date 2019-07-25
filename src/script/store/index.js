import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: Cookies.get('userToken')
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token
    }
  },
  actions: {
    login ({ commit }, userInfo) {
      if (userInfo.username === 'admin' && userInfo.password === '111111') {
        let sessionId = '123456'
        Cookies.set('userToken', sessionId)
        commit('setToken', sessionId)
        return true
      }
      return false
    },
    logout ({ commit }) {
      commit('setToken', '')
      Cookies.remove('userToken')
      return true
    }
  }
})

export default store
