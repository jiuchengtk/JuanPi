import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
Vue.use(Vuex)

export default new Vuex.Store({
  // 管理组件
  state: {
    loginState: ''
  },
  // 改变状态
  mutations: {
    [types.CHANGE_LOGIN_STATE] (state, data) {
      state.loginState = data.result
    }
  },
  actions: {

  }
})
