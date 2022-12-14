const state = {
  list: [],
  valueDataSearch: [],
};

const getters = {
  list: (state) => state.list,
  valueDataSearch: (state) => state.valueDataSearch,
};

const actions = {
  getList({ commit }) {
    try {
      let data = JSON.parse(localStorage.getItem("list"));
      commit("SET_LIST", data);
    } catch (error) {
      console.log(error);
    }
  },
  addList({ commit }, newData) {
    try {
      commit("ADD_LIST", newData);
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser({ commit }, idUser) {
    try {
      commit("DELETE_TODO", idUser);
    } catch (error) {
      console.log(error);
    }
  },
  setDataSearch({ commit }) {
    try {
      commit("SET_VALUE_SEARCH");
    } catch (error) {
      console.log(error);
    }
  },
};

const mutations = {
  SET_VALUE_SEARCH(state) {
    state.valueDataSearch = [];
  },
  SET_LIST(state, list) {
    state.list = list;
  },
  ADD_LIST(state, data) {
    state.list.unshift(data);
    console.log(data);
  },
  DELETE_TODO(state, idUser) {
    state.list = state.list.filter((list) => list.id !== idUser);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
