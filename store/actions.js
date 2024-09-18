export default {
  addProduct({ commit }, product) {
    commit("ADD_PRODUCT", product);
  },
  addweather({ commit }, weather) {
    commit("ADD_Weather", weather);
  },
};
