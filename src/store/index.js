import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: "城市名",
    changeName:'lj'
  },
  getters: {
    getCityFn(state) {
      return state.city;
    },
    getChangeName(state) {
      return state.changeName;
    },
  },
  mutations: {
    setCity(state, name) {
      state.city = name; //将传参设置给state的city
    },
    change1(state){
      state.changeName='lijin'
    },
    change(state,payload){
      state.changeName=payload.name
    }
  },
  actions: {
    setCityName({ commit, state }, name) {
      // 跟后台打交道
      // 调用mutaions里面的方法
      commit("setCity", name);
    }
  },
  modules: {}
});
