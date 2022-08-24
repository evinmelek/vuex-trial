import { createStore } from 'vuex'
import axios from "axios"
 
export const store = createStore({
  state: {  
      counter: 0,
      orderno: "",  
  },
  getters: {
    getCounter(state) {
      return state.counter ++
    },
    getDoubleCounter(state){
      return state.counter * 2
    },
    stringCounter(state) {
      return Math.abs(state.counter) + ".kez tıklandı"
    },
    multiplyCounter(state) {
      return state.counter * 2
    }
  },
  mutations: {
    updateCounter(state, value){
      state.counter += value
    },
    multiplyCounter(state) {
      state.counter * 2
    },
    setOrder(state, data) {
      state.orderno = data
    }
  },
  actions: {
    increment(counter){
       counter.commit("updateCounter")
    },
    incrAsync(){
      setTimeout(({commit}) => {
        commit("multiplyCounter")
      },2000)
    },
    multiply({commit}) {
      commit("multiplyCounter")
    },
    async getOrder(context ) {
      const { data } = await axios.get(
        `http://192.168.1.106:3000/api/orders/` 
      );
      context.commit("setOrder", data.slice(-1))
    }
  }
})
 export default store