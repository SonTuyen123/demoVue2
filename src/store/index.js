import Vue from "vue";
import Vuex from "vuex";
import demo from "./module/demo";

Vue.use(Vuex);

const storeData = {
  modules: {
    demo,
  },
};

const store = new Vuex.Store(storeData);

export default store;
