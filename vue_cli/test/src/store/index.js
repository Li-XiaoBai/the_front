// 状态管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用于存储状态
    count:0,
    number:2
  },
  mutations: {
    //修改状态
    //修改state只能在mutation中进行
    add(state,num){
      state.count+=num;
    },
    reduce(state){
      state.count--;
    }
  },
  getters: {
    //计算
    sum(state){
      return state.count*state.number;
    }
  },
  actions: {
    //异步修改状态
    // 无论如何要触发mutation
    addAction(commit){
      setTimeout(()=>{
        commit('add',100)
      },1000);
    }
  },
  modules: {
    // 模块化方便管理
  }
  // const store =new Vuex.store{

  // }
  // const moduleA = {
  //   state:{...}
  //   mutations:{...}
  //   actions:{...}
  // }
})
